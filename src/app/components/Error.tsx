import React from 'react';
import { Warning } from '@material-ui/icons';

export default function Error() {
    return (
        <div className="error">
            <Warning color="error" /> An Error occurred while loading Absences list.
        </div>
    );
}