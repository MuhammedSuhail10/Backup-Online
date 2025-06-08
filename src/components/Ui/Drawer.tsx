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
import colors from '@/helpers/color';
import ButtonUi from "../Ui/Button";

export default function DrawerUi() {
  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  const color = colors();

  const DrawerList = (
    <Box sx={{ width: 300, height: '100dvh', backgroundColor: color.tertiaryColor }} className="font-[600]" role="presentation" onClick={toggleDrawer(false)}>
      <List sx={{ padding: "20px", height: '10dvh'}}>
        <div style={{backgroundColor: color.primaryColor}} className="w-1/5 items-center flex justify-center p-2 rounded-full">
          <CloseIcon  className="dark:text-white " fontSize="large" />
        </div>
      </List>
      <List sx={{ padding: "20px", height: '70dvh' }}>
        <ListItem className="mt-1 " disablePadding>
          <Link href="/course" className="bg-[#ededed] text-[#000] py-[0.8em] px-[1.2em] text-lg rounded-full font-[family-name:var(--font-montserrat)] w-[100%] mt-10">
            Courses
          </Link>
        </ListItem>
        <ListItem className="mt-[-10px] " disablePadding>
          <Link href="/university" className="bg-[#ededed] text-[#000] py-[0.8em] px-[1.2em] text-lg rounded-full font-[family-name:var(--font-montserrat)] w-[100%] mt-10">
            IGNOU
          </Link>
        </ListItem>
        <ListItem className="mt-[-10px] " disablePadding>
          <Link href="/about" className="bg-[#ededed] text-[#000] py-[0.8em] px-[1.2em] text-lg rounded-full font-[family-name:var(--font-montserrat)] w-[100%] mt-10">
            About Us
          </Link>
        </ListItem>
      </List>
      <List sx={{ padding: "20px" }}>
        <ListItem className="flex justify-center  " disablePadding>
          {/* <Link href="/course" className="bg-blue-900 dark:bg-blue-400 text-[#000] py-[0.8em] px-[1.2em] text-lg rounded-lg font-[family-name:var(--font-montserrat)] w-[100%] mt-10">
            Enquire
          </Link> */}
          <ButtonUi text="Enquire" px="px-[5em]" py="py-[1em] " />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>
        <MenuIcon style={{ color: color.primaryColor }} className="dark:text-white " />
      </Button>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}