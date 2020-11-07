import React from "react";
import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    btnStyle: {
        background: "green",
        padding: "3px 50px"
    }
});

const MaterialUI: React.FC = () => {
    return (
        <div>
            <Button variant="contained" color="primary">
                test Button
            </Button>
        </div>
    );
};

export default MaterialUI;
