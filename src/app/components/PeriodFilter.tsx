import React from 'react';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

export interface PeriodFilterProps {
    selectedDate: Date | null;
    handleChangePeriod: (date: Date | null) => void;
}

export default function TypeFilter(props: PeriodFilterProps) {
    const { selectedDate, handleChangePeriod } = props;
    return (
        <>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="none"
                    id="date-picker-inline"
                    label="Select Period"
                    value={selectedDate}
                    onChange={handleChangePeriod}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                    autoOk={true}
                />
            </MuiPickersUtilsProvider>
        </>
    );
}