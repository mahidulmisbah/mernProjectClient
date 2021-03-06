import React from "react";
import { Container,AppBar,Typography,Grow,Grid } from "@material-ui/core";
import Form from "./component/form/form"
import Posts from "./component/posts/posts"
import useStyle from "./style"

import myfb from "./images/myfb.png"
const App = ()=>
{
    const classes = useStyle();
    return(
        <Container maxidth = "lg" >
            <AppBar className = {classes.appBar} position = "static" color="inherit">
                <Typography className = {classes.heading} varient = "h2" align = "center">MY FB</Typography>
                <img className = {classes.image} src={myfb} alt="myfb" height = "60"/>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify = "space-between" alignItems = "stretch" spacing = {3} >
                        <Grid item xs = {12} sm = {7} > <Posts/> </Grid>
                        <Grid item xs = {12} sm = {4} > <Form/> </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
};
export default App;