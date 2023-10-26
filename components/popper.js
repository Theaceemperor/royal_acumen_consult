import React from 'react';
import Menu from '@mui/material/Menu';
import Link from 'next/link';
import { FaServicestack } from 'react-icons/fa6';
import Image from 'next/image';
import { MdWaterDrop } from 'react-icons/md';

export function PositionedMenu2() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className='z-50'>
      <button className='flex gap-1 items-center'
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >About <MdWaterDrop /></button>
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
        <blockquote
        style={{
            color: '#252324', paddingLeft: '3px', paddingRight: '3px'
        }}>
        <ul className='p-2 flex flex-col gap-2'>
          <li className='hover:bg-[#252324] hover:text-[tan] hover:underline hover:p-1 rounded-md'><Link href={"/about#about"} scroll={false}>About us</Link></li>
          <li className='hover:bg-[rgb(37,35,36)] hover:text-[tan] hover:underline hover:p-1 rounded-md'><Link href={"/about#mission"} scroll={false}>Mission</Link></li>
          <li className='hover:bg-[#252324] hover:text-[tan] hover:underline hover:p-1 rounded-md'><Link href={"/about#vision"} scroll={false}>Vision</Link></li>
        </ul>
        </blockquote>
      </Menu>
    </div>
  );
}

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
    <div className='z-50'>
      <button className='flex gap-1 items-center'
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >Services <FaServicestack /></button>
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
        <blockquote
        style={{
            color: '#252324', paddingLeft: '3px', paddingRight: '3px'
        }}>
        <ul className='p-2 flex flex-col gap-2'>
          <li className='hover:bg-[rgb(37,35,36)] hover:text-[tan] hover:underline hover:p-1 rounded-md'><Link href={"/#general-contracts"} scroll={false}>General contracts</Link></li>
          <li className='hover:bg-[#252324] hover:text-[tan] hover:underline hover:p-1 rounded-md'><Link href={"/#sales"} scroll={false}>Sales</Link></li>
          <li className='hover:bg-[#252324] hover:text-[tan] hover:underline hover:p-1 rounded-md'><Link href={"#cta"} className="flex items-center">Book here</Link></li>
        </ul>
        </blockquote>
      </Menu>
    </div>
  );
}

export function ServicePopper() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className='z-10'>
      <button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className='underline underline-offset-2'
      >explore our products</button>
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
        <blockquote
        className='flex flex-col sm:grid sm:grid-cols-2 gap-3 p-2'>
          <span className='text-center text-[#252324]'>
            <Image 
            src={'/images/fitness-watch.png'}
            alt='product image'
            width={474}
            height={533}
            className='w-44 h-auto rounded-md'
            />
            Fitness trackers
          </span>
          
          <span className='text-center text-[#252324]'>
            <Image 
            src={'/images/lint-roller.jpg'}
            alt='product image'
            width={1200}
            height={1200}
            className='w-44 h-auto rounded-md'
            />
            Lint rollers
          </span>
        </blockquote>
      </Menu>
    </div>
  );
}