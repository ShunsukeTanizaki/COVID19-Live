import React from "react";
import { Button, makeStyles, Typography, Glid, Paper } from "@material-ui/core";

const useStyles = makeStyles({
    btnStyle: {
        background: "green",
        padding: "3px 50px"
    },
    typoStyle: {
        color: "blue"
    },
    paperStyle: {
        background: "orange",
        height: "50px"
    }
});

const MaterialUI: React.FC = () => {
    const classes = useStyles();
    return (
        <div>
            <Typography
                className={classes.typoStyle}
                color="secondary"
                variant="h1"
                align="right"
                gutterBottom
            >
                Hello UI
            </Typography>
            <Glid cotainer spacing={1}></Glid>
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
