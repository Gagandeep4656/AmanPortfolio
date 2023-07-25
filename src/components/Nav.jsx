import React from 'react';
//icons
import { BiHomeAlt, BiUser, BiSolidBriefcase } from 'react-icons/bi'
import { BsClipboardDataFill, BsFillChatRightTextFill } from 'react-icons/bs'
//link
import { Link } from 'react-scroll'
const Nav = () => {
  return <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
    <div className="container mx-auto">
      {/* nav inner */}
      <div className="w-full items-center bg-black/20 h-[96px] backdrop-blur-2xl rounded-full mx-auto max-w-[30rem] lg:max-w-[35rem] px-5 flex justify-around text-2xl">
        <Link
          to='home'
          activeClass='active'
          smooth={true}
          spy={true}
          
          className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
          <BiHomeAlt />
        </Link>
        <Link
          to='about'
          activeClass='active'
          smooth={true}
          spy={true}
          className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
          <BiUser />
        </Link>
        <Link
          to='services'
          activeClass='active'
          smooth={true}
          spy={true}
          className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
          <BsClipboardDataFill />
        </Link>
        <Link
          to='work1'
          activeClass='active'
          smooth={true}
          spy={true}
          className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
          <BiSolidBriefcase />
        </Link>
        <Link
          to='contact'
          activeClass='active'
          smooth={true}
          spy={true}
          className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
          <BsFillChatRightTextFill />
        </Link>

      </div>
    </div>
  </nav>
};

export default Nav;
