import React from "react";
import { Button, makeStyles, Typography, Grid, Paper } from "@material-ui/core";

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
            <Grid cotainer spacing={1}>
                <Grid item xs={12}>
                    <Paper className={classes.paperStyle}></Paper>
                </Grid>
            </Grid>
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
