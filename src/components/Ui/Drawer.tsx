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
import Social from "../Ui/Social";
import ImageDisplay from "@/helpers/ImageDisplay";

import Divider from '@mui/material/Divider';

export default function DrawerUi() {
  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  const color = colors();

  const DrawerList = (
    <Box sx={{ width: 300, height: '100dvh', backgroundColor: color.tertiaryColor }} className="font-[600]" role="presentation" onClick={toggleDrawer(false)}>
      <List sx={{ height: '10dvh', marginBottom: '1em',  }}>
        <div className=" items-center flex justify-between bg-white px-[1em] mb-1 ">
          <ImageDisplay src='/Icons.png' className='w-[8em] object-contain ' alt='Background Image 1' />
          <div style={{ backgroundColor: color.primaryColor }} className="items-center flex justify-center p-2 rounded-full">
            <CloseIcon className="dark:text-white " fontSize="medium" />
          </div>
        </div>
      </List>
      <List sx={{ padding: "20px", height: '75dvh', display: 'flex', flexDirection: 'column', gap: '2em' }}>
        <ListItem className="mt-1 " disablePadding>
          <Link href="/" className="bg-[#ededed] text-[#000] py-[0.8em] px-[1.2em] text-lg rounded-full font-[family-name:var(--font-montserrat)] w-[100%]">
            Home
          </Link>
        </ListItem>
        <ListItem className="mt-1 " disablePadding>
          <Link href="/course" className="bg-[#ededed] text-[#000] py-[0.8em] px-[1.2em] text-lg rounded-full font-[family-name:var(--font-montserrat)] w-[100%]">
            Courses
          </Link>
        </ListItem>
        <ListItem className=" " disablePadding>
          <Link href="/university" className="bg-[#ededed] text-[#000] py-[0.8em] px-[1.2em] text-lg rounded-full font-[family-name:var(--font-montserrat)] w-[100%]">
            About IGNOU
          </Link>
        </ListItem>
        <ListItem className=" " disablePadding>
          <Link href="/about" className="bg-[#ededed] text-[#000] py-[0.8em] px-[1.2em] text-lg rounded-full font-[family-name:var(--font-montserrat)] w-[100%]">
            About Us
          </Link>
        </ListItem>
      </List>
      <Divider variant="middle"  />
      <List sx={{ padding: "20px", height: '12dvh', width: 300 }}>
        <ListItem className="flex h-[100%] justify-between items-center gap-[1em] text-white " disablePadding>
          <Social />
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