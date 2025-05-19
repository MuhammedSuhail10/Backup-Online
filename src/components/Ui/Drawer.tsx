'use client'

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ListItem from '@mui/material/ListItem';

export default function DrawerUi() {
  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 300, height: '100dvh' }} className="dark:bg-[#171717] font-[600] bg-[#ededed]" role="presentation" onClick={toggleDrawer(false)}>
        <List sx={{padding: "20px", height: '1dvh'}}>
            <CloseIcon className="dark:text-white text-[#171717] " fontSize="large" />
        </List>
        <List sx={{padding: "20px", height: '75dvh'}}>
            <ListItem className="mt-1 " disablePadding>
                <div className="bg-[#171717] dark:bg-[#ededed] text-[#fff] dark:text-[#000] py-[0.8em] px-[1.2em] text-lg rounded-full font-[family-name:var(--font-montserrat)] w-[100%] mt-10">
                    <a href="">Courses</a>
                </div>
            </ListItem>
            <ListItem className="mt-[-10px] " disablePadding>
                <div className="bg-[#171717] dark:bg-[#ededed] text-[#fff] dark:text-[#000] py-[0.8em] px-[1.2em] text-lg rounded-full font-[family-name:var(--font-montserrat)] w-[100%] mt-10">
                    <a href="">Universities</a>
                </div>
            </ListItem>
            <ListItem className="mt-[-10px] " disablePadding>
                <div className="bg-[#171717] dark:bg-[#ededed] text-[#fff] dark:text-[#000] py-[0.8em] px-[1.2em] text-lg rounded-full font-[family-name:var(--font-montserrat)] w-[100%] mt-10">
                    <a href="">About Us</a>
                </div>
            </ListItem>
        </List>
        <List sx={{padding: "20px"}}>
            <ListItem className="" disablePadding>
                <div className="bg-[#003566] dark:bg-[#5fa8d3] text-[#fff] dark:text-[#000] text-center py-[0.8em] text-lg rounded-lg font-[family-name:var(--font-montserrat)] font-[600] w-[100%] mt-10">
                    <a href="" className="">Enquire</a>
                </div>
            </ListItem>
        </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>
        <MenuIcon className="dark:text-white text-[#171717] " />
      </Button>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}