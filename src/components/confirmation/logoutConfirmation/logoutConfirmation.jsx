import React, { useState } from 'react';
import { Button, Modal, Space } from 'antd';
import { useNavigate } from 'react-router-dom';
import { RiLogoutCircleRLine } from 'react-icons/ri';
import { useStateContext } from '../../../context/ContextProvider';

const LougoutConfirmation = ({ isSidebarOpen }) => {

  const { setUser, user } = useStateContext();
  const [open, setOpen] = useState(false);
 const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null); 
    localStorage.removeItem('USER');
    localStorage.removeItem('ADMIN');
    // setUserData({
    //   token: '',
    //   user: null,
    // });
    // localStorage.setItem('auth-token', '');
    navigate('/login');
  };

  return (
    <>
      <div
        className={`absolute bottom-5 flex   rounded-xl py-5 pl-4 h-7  cursor-pointer dark:bg-blue-950 bg-[#22d3ee] dark:text-gray-300 text-gray-500 text-sm items-center gap-x-4 w-full `}
        onClick={() => setOpen(true)}
      >
        <RiLogoutCircleRLine />
        <span className={`${!isSidebarOpen && 'hidden'} origin-left duration-400`}>
          Logout
        </span>
      </div>
      <Modal
        title="Sign out Confirmation"
        centered
        open={open}
        onOk={() => {
          handleLogout();
          setOpen(false);
        }}
        onCancel={() => setOpen(false)}
        width={300}
        okButtonProps={{ className: 'text-white bg-main-blue shadow' }}
      >
        <p>vous êtes sûr de vous déconnecter de votre compte</p>
      </Modal>
    </>
  );
};

export default LougoutConfirmation;
