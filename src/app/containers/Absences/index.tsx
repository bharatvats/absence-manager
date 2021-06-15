import React, { useCallback, useEffect } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { getMemberList, setIsLoading } from '../../store/actions/absenceAction';
import { Absence } from '../../types/absencesType';
import { format } from 'date-fns';
import { createRow, RowType } from '../../services/utils';
import TypeFilter from '../../components/TypeFilter';
import PeriodFilter from '../../components/PeriodFilter';
import HeaderComponent from '../../components/Header';
import ErrorComponent from '../../components/Error';
import LoadingComponent from '../../components/Loading';
import AbsenceListComponent from '../../components/AbsenceList';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        main: {
            display: 'flex',
            'justify-content': 'center',
            'align-items': 'center'
        },
        root: {
            flexGrow: 1,
            width: '100%',
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        }
    })
);

const useGridStyles = makeStyles({
    root: {
        padding: '12px 30px !important',
    }
})

export default function AbsenceEmployee() {
    const classes = useStyles();
    const gridClasses = useGridStyles();
    const dispatch = useDispatch();
    const {
        absenceList,
        isError,
        isLoading,
        membersMap: memberList
    } = useSelector((state: RootState) => state.absenceReducer);

    function createRows(absenceList: Absence[]): RowType[] {
        return absenceList.map((absenceEmployee: Absence) => createRow(absenceEmployee, memberList.get(absenceEmployee.userId)));
    }

    useEffect(() => {
        dispatch(setIsLoading(true));
        dispatch(getMemberList());
    }, [dispatch]);

    const [filterByType, setFilterByType] = React.useState('');
    const [localAbsencesList, setLocalAbsencesList] = React.useState<RowType[]>([]);
    const [tableRows, setTableRows] = React.useState<RowType[]>(localAbsencesList.slice());
    const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);

    useEffect(() => {
        setLocalAbsencesList(createRows(absenceList));
    }, [absenceList]);

    useEffect(() => {
        filterAbsences(filterByType, selectedDate);
    }, [localAbsencesList]);

    const filterAbsences = (selectedType: string, selectedDate: Date | null) => {
        setTableRows(localAbsencesList.filter(row => {
            if (selectedType && selectedDate) {
                return row.type === selectedType && selectedDate.getTime() >= row.startDate && selectedDate.getTime() <= row.endDate;
            } else if (selectedType) {
                return row.type === selectedType;
            } else if (selectedDate) {
                return selectedDate.getTime() >= row.startDate && selectedDate.getTime() <= row.endDate;
            }
            return true;
        }));
    }

    const handleChangeType = useCallback((event: React.ChangeEvent<{ value: unknown }>) => {
        const selectedType = event.target.value as string;
        setFilterByType(selectedType);
        filterAbsences(selectedType, selectedDate);
    }, [selectedDate, filterByType, localAbsencesList]);

    const handleChangePeriod = useCallback((date: Date | null) => {
        if (date && date.toString() !== 'Invalid Date') {
            const newDate = new Date(format(date, 'yyyy-MM-dd'));
            setSelectedDate(newDate);
            filterAbsences(filterByType, newDate);
        } else if (!date) {
            filterAbsences(filterByType, null);
            setSelectedDate(null);
        }

    }, [selectedDate, filterByType, localAbsencesList]);

    if (isError) {
        return <ErrorComponent />
    }

    if (isLoading) {
        return <LoadingComponent />
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <HeaderComponent />
                    </Paper>
                </Grid>
                <Grid classes={{ root: gridClasses.root }} item xs={12} container alignItems="center" justify="center">
                    <Grid item xs={3} >
                        <Typography variant="h5">
                            Absence Employees
                        </Typography>
                    </Grid>
                    <Grid item xs={3} >
                        <TypeFilter
                            filterByType={filterByType}
                            handleChangeType={handleChangeType}
                        />
                    </Grid>
                    <Grid item xs={3} >
                        <PeriodFilter
                            selectedDate={selectedDate}
                            handleChangePeriod={handleChangePeriod}
                        />
                    </Grid>
                </Grid>
                <Grid item xs={12} container alignItems="center" justify="center">
                    <AbsenceListComponent tableRows={tableRows} />
                </Grid>
            </Grid>
        </div>
    );
}
