import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { RiMenu4Line } from 'react-icons/ri';
import { SiHomeassistant } from 'react-icons/si';
import Link from 'next/link';
import { IoIosContacts, IoMdStats } from 'react-icons/io';
import MenuListComposition, { CarrerMenu, PositionedMenu2 } from './popper';

export default function PositionedMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className='top-0 right-0 fixed z-40 bg-[#252324] text-[tan] p-2 border-2 border-[tan]/80 m-1 rounded-full'>
      <RiMenu4Line className='font-bold text-2xl'
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      />
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <article
        style={{
            color: '#252324'
        }}>
        <MenuItem><Link href={"/"}><SiHomeassistant className="text-xl"/></Link></MenuItem>
        <MenuItem><PositionedMenu2 /></MenuItem>
        <MenuItem><MenuListComposition /></MenuItem>
        <MenuItem><Link href={"/contact#contact-us"} className="flex items-center">C<IoIosContacts />ntact</Link></MenuItem>
        <MenuItem><CarrerMenu /></MenuItem>
        </article>
      </Menu>
    </div>
  );
}