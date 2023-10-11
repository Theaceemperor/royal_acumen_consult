import React from 'react';
import Menu from '@mui/material/Menu';
import Link from 'next/link';
import { FaServicestack } from 'react-icons/fa6';

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
          <li className='hover:bg-[rgb(37,35,36)] hover:text-[tan] hover:underline hover:p-1 rounded-md'><Link href={"#service"}>General contracts</Link></li>
          <li className='hover:bg-[#252324] hover:text-[tan] hover:underline hover:p-1 rounded-md'><Link href={"#service"}>Sales</Link></li>
          <li className='hover:bg-[#252324] hover:text-[tan] hover:underline hover:p-1 rounded-md'><Link href={"#cta"} className="flex items-center">Book here</Link></li>
        </ul>
        </blockquote>
      </Menu>
    </div>
  );
}