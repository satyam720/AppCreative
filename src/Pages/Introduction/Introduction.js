import './intro.css';
import {Button } from '@mui/material';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import Topbar from '../../components/Topbar/Topbar.component.jsx';
const Intro = () => {


    return(
        <>
        
        <div className="container-fluid intro-edit">
        <div className="row">
        
            <div className= "col-lg-6 content-edit">
                <h1 style={{fontSize: '60px',lineHeight: '1.5', fontWeight: 'bold'}}>Your trusted mobile<br /> app to make days<br/> beautiful 😘</h1>
                <p>There will be a day–in our lifetime–when we get to celebrate<br /> every person on the planet having access.</p>
                <div className="row but-edit nopadding">
                    <div className="col-lg-6">
                    <Button size={'large'} variant="contained" color={'secondary'}> <span style={{fontSize: '14px'}}>14-days free trail</span> </Button>

                    </div>
                    <div className="col-lg-6 ">
                    <Button size={'large'} color={'secondary'}><span style={{fontWeight: 'bold'}}><PlayCircleIcon />How it works</span></Button>

                    </div>
                </div>
            </div>
            <div className= "col-lg-6">
                <img className="img2" src="https://react-next-landing.redq.io/_next/static/images/bannerImg-951206a8cf10d2dc883002af5f6e15ff.png" alt=""></img>
            </div>
        </div>

        </div>
        </>)
};


export default Intro;