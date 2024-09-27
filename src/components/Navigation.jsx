import React from "react";
import {Box, Typography, Button} from '@mui/material';
import './Navigation.css'

export const Navigation = () => {



    return(

    <> 
        
        <Box className="nav-bar"> 
            
            <Box className="nav-title">
                <Box className="nav-logo">

                    <Box className="vector"> 


                    </Box>

                </Box>

                <Box className="nav-company">
                <Typography className="name"> CNCM </Typography>

                </Box>
                 
            </Box>

            <Box className="nav-menu"> 
                <Button className="products"> Why Choose Us </Button>
                <Button  className="solutions"> Our Solutions </Button>
                <Button  className="frameworks"> Frameworks </Button>
                <Button  className="testimonials"> Testimonials </Button>
                <Button  className="blogs"> Blogs </Button>
                <Button  className="faqs"> FAQs </Button>
            
            </Box>

            <Box className="nav-contact"> 
                <Button className="btn"> <Typography className="contact-text"> Contact Us </Typography> </Button>
            </Box>
        </Box>

    </>

    )


}

export default Navigation;