import React, { useState } from 'react'
import {HiOutlineBars3} from "react-icons/hi2"
import Box from "@mui/material/Box"
import Drawer from "@mui/material/Drawer"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import TranslateIcon from '@mui/icons-material/Translate';
import { useTranslation } from 'react-i18next';
import logo3 from '../Assets/logo3.jpg';
import { Link } from 'react-router-dom'
import PopupComponent from './Popup'
import Tooltip from '@mui/material/Tooltip';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';



const Navbar = ({scrollToAbout}) => {
    const [showPopup, setShowPopup] = useState(false);
    const [openAlert, setOpenAlert] = useState(false);

    const handleCloseAlert = () => {
        setOpenAlert(false);
    };
    const togglePopup = () => {
      setShowPopup(!showPopup);
    };
    const [openMenu,setOpenMenu]= useState(false)
    
    const { t, i18n } = useTranslation();

    const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
    setOpenAlert(true);

};
    
    const menuOptions = [
        {
            text:"Home",
            //icon : </>
        },
        {
            text:"About",
            //icon : </>
        },
        {
            text:"Contact Us",
            //icon : </>
        },
        {
            text:"Services",
            //icon : </>
        } 

    ]
  return (
    <nav>
        <div className='nav-logo-container'>
           <Link to='/'> <img src = {logo3} alt=''/></Link>
        </div>
        <div className='navbar-links-container'>
            <Link to='/'>{t('Navbar.Home')}</Link>
            <Link onClick={scrollToAbout}>{t('Navbar.About')}</Link>
            <Link to='/contact'>{t('Navbar.Contact')}</Link>
            <Link to='/WebBot'>{t('Navbar.Know')}</Link>
            <Tooltip title="Change Language"><button className='trans-button'onClick={togglePopup} ><TranslateIcon /></button></Tooltip>
            {showPopup && <PopupComponent onClose={handleLanguageChange} />}
        </div>
        <div className='navbar-menu-container'>
            <HiOutlineBars3 onClick={() => setOpenMenu(true)}/>
        </div>
        <Drawer open={openMenu} onClose={()=> setOpenMenu(false)}anchor='right'>
            <Box sx={{width:250}}
            role = "presentation"
            onClick={()=>setOpenMenu(false)}
            onKeyDown={()=>setOpenMenu(false)}>
                <List>
                    {menuOptions.map((item) =>(
                    <ListItem key={item.text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text}/>
                        </ListItemButton> 
                    </ListItem>))}
                </List>
            </Box>
        </Drawer>
        <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleCloseAlert}>
                <Alert onClose={handleCloseAlert} severity="success">
                    Language Changed!
                </Alert>
        </Snackbar> 
    </nav>
  )
}

export default Navbar