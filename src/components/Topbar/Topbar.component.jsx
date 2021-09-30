import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import {Grid,styled,Paper} from "@mui/material"
import './tobar.css';


function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }
  
  ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
  };

 
  

const Topbar = (props) => {


return (
    <div className="edit">
    <CssBaseline />
    <ElevationScroll {...props}>
      <AppBar >
        <Toolbar color="white" sx={{backgroundColor: '#fff', color: 'black'}}>
        <Grid container spacing={1}>
        <Grid item xs={1} md={3}>
          <img  src="data:image/png;base64,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" alt=""></img> 
        </Grid>
        <Grid item xs={1} md={1}>
            <a>Home</a>
        </Grid>
        <Grid item xs={1} md={1}>
            <a>Key Features</a>
        </Grid>
        <Grid item xs={1} md={1}>
            <a>Pricing</a>
        </Grid> 
        <Grid item xs={1} md={1}>
            <a>Client</a>
        </Grid>
        <Grid item xs={1} md={1}>
            <a>FAQ</a>
        </Grid>
        </Grid>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
    <Toolbar />
   
  </div>
  
  )
   
};


export default Topbar;