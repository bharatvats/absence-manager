import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { AbsenceType } from '../types/absencesType';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
            marginBottom: 0,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
    }),
);

export interface TypeFilterProps {
    filterByType: string;
    handleChangeType: (event: React.ChangeEvent<{ value: unknown }>) => void;
}

export default function TypeFilter(props: TypeFilterProps) {
    const classes = useStyles();
    const { filterByType, handleChangeType } = props;
    return (
        <FormControl className={classes.formControl}>
            <Select
                labelId="type-filter"
                id="type-filter"
                value={filterByType}
                displayEmpty
                onChange={handleChangeType}
            >
                <MenuItem value="">Select Type</MenuItem>
                <MenuItem value={AbsenceType.sickness}>{AbsenceType.sickness}</MenuItem>
                <MenuItem value={AbsenceType.vacation}>{AbsenceType.vacation}</MenuItem>
            </Select>
        </FormControl>
    );
}