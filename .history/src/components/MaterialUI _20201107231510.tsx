import React from "react";
import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    btnStyle: {
        background: "green",
        padding: "300px 50px"
    }
});

const MaterialUI: React.FC = () => {
    const classes = useStyles();
    return (
        <div>
            <Button
                className={classes.btnStyle}
                variant="contained"
                color="primary"
            >
                test Button
            </Button>
        </div>
    );
};

export default MaterialUI;
