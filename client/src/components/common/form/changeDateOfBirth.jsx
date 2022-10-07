import React from "react";
import TextField from "@material-ui/core/TextField";
import {makeStyles} from "@material-ui/core/styles";

const ChangeDateOfBirth = () => {
    const useStyles = makeStyles(() => ({
        container: {
            display: "flex",
            flexWrap: "wrap"
        },
        textField: {
            width: 150
        }
    }));

    const classes = useStyles();

    return (
        <>
            <form className={classes.container} noValidate>
                <TextField
                    id="date"
                    type="date"
                    defaultValue=""
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true
                    }}
                />
            </form>
        </>
    );
};

export default ChangeDateOfBirth;
