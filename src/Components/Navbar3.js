// Import necessary libraries and icons
import React, { useState } from 'react';
import {HiOutlineArrowLeft } from "react-icons/hi";
import {HiOutlineBars3} from "react-icons/hi2"
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import TranslateIcon from '@mui/icons-material/Translate';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
const Navbar2 = ({ scrollToAbout }) => {
    const [openMenu,setOpenMenu]= useState(false)
    
    const { t, i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState('en');
    const navigate = useNavigate(); 

  const toggleLanguage = () => {
    const languages = ['en', 'hi', 'te', 'bn','gu','ma', 'ta','kn','as']; // Add more languages as needed
    const currentIndex = languages.indexOf(currentLanguage);
    const nextIndex = (currentIndex + 1) % languages.length;
    const nextLanguage = languages[nextIndex];

    i18n.changeLanguage(nextLanguage);
    setCurrentLanguage(nextLanguage);
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
                <button className='back-button' onClick={() => navigate(-1)}>
                    <HiOutlineArrowLeft />
                </button>
            </div><h1 className='primary-navbar'>{t('Title')}</h1>
            <div className='navbar-links-container'>
            <button className='trans-button'onClick={toggleLanguage} ><TranslateIcon /></button>
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
        </nav>
    );
};

export default Navbar2;
