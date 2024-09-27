import React from "react";
import {Box, Typography, Button} from '@mui/material';
import './Landing.css'


export const Landing = () => {



    return(

        <>
        
        <Box className="landing-intro">
            <Box className="landing-intro-text">

                <h4> <span className="green-text"> Focus on Growth</span>, Not Paperwork. <br></br>
                Automate your  Security & Compliance with CNCM </h4>

                <Typography className="text-subtitle"> CNCM automates document management, audits, and reporting, 
                    streamlining your security and compliance processes. 
                    Let CNCM handle the paperwork, so you can focus on growing your business. </Typography>

            </Box>

            <Box className="landing-intro-buttons">
                <Box className="nav-contact" > 
                    <Button className="btn">
                         <Typography className="contact-text"> Contact Us </Typography> 
                    </Button>
                </Box>

                <Box className="watch-demo" > 
                    <Button className="btn">
                         <Typography className="watch-demo-text"> Watch Demo </Typography> 
                         <Box className="play-circle"> </Box>
                    </Button>
                </Box>

            </Box>


        </Box>

        <Box className="example-audit">
            
        </Box>
        
        </>

    )


}

export default Landing;