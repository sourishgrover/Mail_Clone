import React, { useEffect, useState } from 'react'
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegQuestionCircle } from "react-icons/fa";
import { PiDotsNineBold } from "react-icons/pi";
import { IoIosSearch } from "react-icons/io";
import Avatar from 'react-avatar';
import { RxHamburgerMenu } from "react-icons/rx";
import { useDispatch, useSelector } from 'react-redux';
import { setAuthUser, setSearchText } from '../redux/appSlice';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { motion, AnimatePresence } from 'framer-motion';
import { IoMdClose } from 'react-icons/io';


const Navbar = () => {
  const [search, setSearch] = useState("");
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();
  const { authUser } = useSelector(store => store.app);

  const signOutHandler = () => {
    signOut(auth).then(() => {
      dispatch(setAuthUser(null));
    }).catch((error) => {
      console.log(error);
    });
  }
  useEffect(() => {
    dispatch(setSearchText(search));
  }, [search]);


  return (
    <div className='flex items-center justify-between px-4 md:px-8 lg:px-12 h-16'>
    <div className='flex items-center gap-6'>
      <div className='flex items-center gap-2'>
        <div className='p-2 rounded-full hover:bg-gray-100 cursor-pointer'>
          <RxHamburgerMenu size={'20px'} />
        </div>
        <img className='w-8 md:block hidden' src={"https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png"} alt="" />
        <h1 className='text-2xl md:block hidden text-gray-500 font-medium'>Mail</h1>
      </div>
    </div>
    <div className='sm:w-[50%] md:w-[60%] lg:w-[58%]'>
      <div className='flex items-center bg-[#EAF1FB] px-2 py-3 rounded-full'>
        <IoIosSearch size="24px" className='text-gray-700' />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder='Search mail'
          className='rounded-full w-full bg-transparent outline-none px-1'
        />
      </div>
    </div>
    

<div className='flex items-center gap-2'>
  {/* Icons - Hidden on Medium Screens, Visible on Large Screens */}
  <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer hidden md:hidden lg:block'>
    <FaRegQuestionCircle size={"20px"} />
  </div>
  <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer hidden md:hidden lg:block'>
    <IoSettingsOutline size={"20px"} />
  </div>
  <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer hidden md:hidden lg:block'>
    <PiDotsNineBold size={"20px"} />
  </div>

  {/* Avatar - Always Visible */}
  <div className='relative cursor-pointer'>
    <Avatar onClick={() => setToggle(!toggle)} src={authUser?.photoURL} googleId="118096717852922241760" size="40" round={true} />
  </div>

  {/* Hidden Icons - Only Visible in Toggle Menu on Medium Screens */}
  <AnimatePresence>
    {toggle && (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.1 }}
        className='absolute right-2 top-12 z-20 shadow-lg bg-white rounded-md p-2'>
        {/* Close Icon */}
        <div className='p-2 rounded-full hover:bg-gray-100 cursor-pointer absolute top-2 right-2' onClick={() => setToggle(false)}>
          <IoMdClose size={"20px"} />
        </div>
        <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
          <FaRegQuestionCircle size={"20px"} />
        </div>
        <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
          <IoSettingsOutline size={"20px"} />
        </div>
        <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
          <PiDotsNineBold size={"20px"} />
        </div>
        <p onClick={signOutHandler} className='p-2 underline'>LogOut</p>
      </motion.div>
    )}
  </AnimatePresence>
</div>




  </div>
  
  
  )
}

export default Navbar