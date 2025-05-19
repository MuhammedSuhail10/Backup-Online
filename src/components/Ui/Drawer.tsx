'use client'

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ListItem from '@mui/material/ListItem';
import Link from 'next/link';

export default function DrawerUi() {
  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 300, height: '100dvh' }} className="dark:bg-[#171717] font-[600] bg-[#ededed]" role="presentation" onClick={toggleDrawer(false)}>
      <List sx={{ padding: "20px", height: '1dvh' }}>
        <CloseIcon className="dark:text-white text-[#171717] " fontSize="large" />
      </List>
      <List sx={{ padding: "20px", height: '75dvh' }}>
        <ListItem className="mt-1 " disablePadding>
          <Link href="/course" className="bg-[#171717] dark:bg-[#ededed] text-[#fff] dark:text-[#000] py-[0.8em] px-[1.2em] text-lg rounded-full font-[family-name:var(--font-montserrat)] w-[100%] mt-10">
            Courses
          </Link>
        </ListItem>
        <ListItem className="mt-[-10px] " disablePadding>
          <Link href="/course" className="bg-[#171717] dark:bg-[#ededed] text-[#fff] dark:text-[#000] py-[0.8em] px-[1.2em] text-lg rounded-full font-[family-name:var(--font-montserrat)] w-[100%] mt-10">
            Universities
          </Link>
        </ListItem>
        <ListItem className="mt-[-10px] " disablePadding>
          <Link href="/course" className="bg-[#171717] dark:bg-[#ededed] text-[#fff] dark:text-[#000] py-[0.8em] px-[1.2em] text-lg rounded-full font-[family-name:var(--font-montserrat)] w-[100%] mt-10">
            About Us
          </Link>
        </ListItem>
      </List>
      <List sx={{ padding: "20px" }}>
        <ListItem className="" disablePadding>
          <Link href="/course" className="bg-[#171717] dark:bg-[#ededed] text-[#fff] dark:text-[#000] py-[0.8em] px-[1.2em] text-lg rounded-full font-[family-name:var(--font-montserrat)] w-[100%] mt-10">
            Enquire
          </Link>
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