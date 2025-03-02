import { Paper } from "@material-ui/core";
import React from "react";

const Footer = () => {
    return (
        <Paper className="footer">
            <p 
                style={{ backgroundColor: "black" }}
            >
                Copyright &copy; <span>Rajesh</span> { new Date().getFullYear() }
            </p>
        </Paper>
    );
};

export default Footer;