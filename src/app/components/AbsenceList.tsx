import React from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { RowType } from '../services/utils';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
        tableRoot: {
            width: '75%',
            'justify-content': 'center',
            'align-items': 'center'
        },
        container: {
            maxHeight: 475,
        },
    })
);

interface Column {
    id: 'name' | 'type' | 'period' | 'memberNote' | 'status' | 'admitterNote';
    label: string;
    minWidth?: number;
    align?: 'center';
}

const columns: Column[] = [
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'type', label: 'Type', minWidth: 100 },
    {
        id: 'period',
        label: 'Period',
        minWidth: 200,
        align: 'center'
    },
    {
        id: 'memberNote',
        label: 'Member Note',
        minWidth: 200,
        align: 'center'
    },
    {
        id: 'status',
        label: 'Status',
        minWidth: 170,
        align: 'center'
    },
    {
        id: 'admitterNote',
        label: 'Admitter Note',
        minWidth: 170,
        align: 'center'
    },
];

export interface AbsenceListProps {
    tableRows: RowType[]
}

export default function AbsenceListComponent(props: AbsenceListProps) {
    const classes = useStyles();
    const { tableRows } = props;

    const [page, setPage] = React.useState(0);
    const [rowsPerPage] = React.useState(10);

    const handleChangePage = (_event: unknown, newPage: number) => {
        setPage(newPage);
    };

    return (
        <Paper className={classes.tableRoot}>
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tableRows.length === 0 ? <TableRow><TableCell colSpan={columns.length}>No Records found...</TableCell></TableRow> : (
                            tableRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {value}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                component="div"
                count={tableRows.length}
                rowsPerPageOptions={[10]}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
            />
        </Paper>
    )
}