import React, { useState, useEffect } from 'react';
import { NavLink, Link } from "react-router-dom";
import { NavbarData } from "./NavbarData.jsx"
import KakaoLogo from "../../assets/New Kakao Logo.svg"
import { PiArrowUpRightBold } from "react-icons/pi";
import MultiLevelSidebar from "../../Components/SideBar/SideBar"
// https://www.material-tailwind.com/docs/react/sidebar
// https://www.material-tailwind.com/docs/react/guide/vite

const Navbar = () => {
  const [showNav, setshowNav] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      //  className="bg-  "
      className={`${isScrolled
        ? 'bg-opacity-90 backdrop-blur-lg'
        : 'bg-transparent'
        } 
        navbar uppercase border-none fixed py-4 top-4 rounded-full -mt-1 transition-all duration-300 left-0 right-0 z-[100]`}>

      <div className="navbar-start laptop:ml-[5rem] mx-4">
        <Link to="/"
          className="leading-[1.5rem] text-black py-3 font-black text-[1.5rem]">
          <img className="w-[60%] laptop:w-[75%]" src={KakaoLogo} alt="web Logo" />
        </Link>
      </div>

      {/* displays on wide screen */}
      <div className="navbar-center hidden laptop:flex laptop:mr-[10rem]">
        <ul className="menu-horizontal tracking-widest text-white">
          {NavbarData.map((item, index) => {
            // Check if there is content in the dropdown
            const hasContent = item.content.length > 0;

            return (
              <li key={index} className="">
                {/* Use anchor tags with href attributes */}
                <a
                  href={`#${item.path}`} // Set the href to the corresponding section ID
                  className='flex min-w-max rounded-none font-almostsemibold mx-3 py-3 px-3'
                >
                  <div className="dropdown dropdown-hover">
                    <label tabIndex={0} className={item.className}>
                      {item.title}
                    </label>

                    {hasContent && (
                      <ul
                        tabIndex={0}
                        className={`dropdown-content z-[1] menu 
                  p-2 my-8 shadow bg-black border border-white rounded-box w-52 
                  ${item.content.length === 24 ? 'grid grid-cols-3 gap-2 w-[32rem]' : ''}`}
                      >
                        {item.content.map((contentItem, contentIndex) => (
                          <li key={contentIndex}>
                            <a className={item.dropdownclass}>
                              <span className="block text-[0.75rem]">
                                {/* Wrap content in a block-level element */}
                                {contentItem}
                              </span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </div>


      <div className="navbar-end">
        <div className="">
          {/* dropdown */}
          {/* hamburger menu */}
          <label onClick={() => setshowNav(!showNav)}
            tabIndex={0} className="btn btn-ghost laptop:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
              viewBox="0 0 24 24" className="h-5 w-5" fill='white'>
              <path
                d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"></path>
            </svg>
          </label>
          {/* end of hamburger menu */}

          {/* mobile navbar */}
          {showNav && <ul tabIndex={0} className="absolute w-max h-max p-12 -ml-[20.7rem] mt-2 border border-t-2 z-[10] bg-black">
            {/* dropdown-content */}
            {NavbarData.map((item, index) => {
              return (
                <li key={index} className="">
                  {/* "flex min-w-max p-4" */}
                  <NavLink to={item.path} className={({ isActive }) =>
                    isActive ? 'flex min-w-max ' : 'flex rounded-none min-w-max'
                  }>
                    <span className="p-4 my-8  text-white bg-transparent hover:bg-transparent mx-1 btn">
                      {item.title}
                    </span>
                  </NavLink>
                </li>
              );
            })}
          </ul>}
          {/* end of mobile navbar */}
        </div>
      </div>



    </div>

  );
};

export default Navbar;

// {showNav && <ul tabIndex={0} className="absolute flex w-full p-12 -ml-[18.7rem] mt-2 border border-t-2 z-[10] bg-black">
//             {/* dropdown-content */}
//             {NavbarData.map((item, index) => {
//               return (
//                 <li key={index} className="">
//                   {/* "flex min-w-max p-4" */}
//                   <NavLink to={item.path} className={({ isActive }) =>
//                     isActive ? 'flex min-w-max ' : 'flex rounded-none min-w-max'
//                   }>
//                     <span className="p-4 text-white bg-transparent hover:bg-transparent mx-1 btn">
//                       {item.title}
//                     </span>
//                   </NavLink>
//                 </li>
//               );
//             })}
//           </ul>}