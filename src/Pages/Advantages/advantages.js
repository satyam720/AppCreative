import List from '@mui/material/List';
import {Typography,ListItem,ListItemText,ListItemIcon} from "@mui/material";
import './advantage.css';


const Advantages = () => {

    return(
        <div className="container adv-cont">
        <div className="row">
            <div className="col col-lg-6 col-md-6">
                <img style={{width: '80%%',height: '100%', paddingLeft: '5%'}} src="https://react-next-landing.redq.io/_next/static/images/chooseThumb-f8255450c05e7efed4540aacc592b6f8.png" alt=""></img>
            </div>
            <div className="col col-lg-6 col-md-6 adv-content">
            
           <h2 style={{textAlign: 'left',fontWeight: 'bold',fontSize: '40px',paddingBottom: '5%'}}>Why you choose Custom app for your daily use?</h2>
            <List sx={{textAlign: 'left',p:2}}>
            <ListItem sx={{p: 2, pb: 3}}>
            <ListItemIcon>
                <h1 style={{fontSize: '60px',opacity: '0.5'}}>01</h1>
            </ListItemIcon>

            <ListItemText
                    sx={{marginLeft: '7%'}}
                    primary="Front-end Development"
                    secondary="We’re driven beyond just finishing the projects. We want to find solutions."
                  />
            </ListItem>

            <ListItem sx={{p: 2,pb: 3}}>
            <ListItemIcon>
                <h1 style={{fontSize: '60px',opacity: '0.5'}}>02</h1>
            </ListItemIcon>

            <ListItemText
                    sx={{marginLeft: '5%'}}
                    primary="Front-end Development"
                    secondary='We’re driven beyond just finishing the projects. We want to find solutions.'
                  />
            </ListItem>

            <ListItem sx={{p: 2}}>
            <ListItemIcon>
                <h1 style={{fontSize: '60px',opacity: '0.5'}}>03</h1>
            </ListItemIcon>

            <ListItemText
                    sx={{marginLeft: '5%'}}
                    primary="Front-end Development"
                    secondary='We’re driven beyond just finishing the projects. We want to find solutions.'
                  />
            </ListItem>
            </List>


               
            </div>
        </div>

        </div>)
};


export default Advantages;