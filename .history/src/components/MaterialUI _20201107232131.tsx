import React from "react";
import { Button, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
    btnStyle: {
        background: "green",
        padding: "3px 50px"
    }
});

const MaterialUI: React.FC = () => {
    const classes = useStyles();
    return (
        <div>
            <Typography
                color="secondary"
                variant="h1"
                align="right"
                gutterBottom
            >
                Hello UI
            </Typography>
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
