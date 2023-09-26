import React from "react";
import KakaoLogo from "../../assets/New Kakao Logo.svg"
import { FiArrowRight } from "react-icons/fi";

const Footer = () => {
  // date for copyright
  const theDate = new Date().getFullYear();
  // end of date

  return (
    <div className="bg-black text-white pt-10">

      <footer className="footer justify-between mx-2 laptop:p-0 laptop:py-16 p-6 max-w-[90%] laptop:mx-[5.6rem] border border-white/25 border-x-transparent">

        <div className="laptop:w-[350%] w-[80%]">
          <img src={KakaoLogo} className="w-full" alt="web-logo" />
        </div>

      </footer>


      <div className="laptop:flex py-10 justify-between laptop:mx-[5.7rem]">
        {/* copyright */}
        <p className="py-2 copyright laptop:mr-[rem] laptop:ml-0 mx-8 text-[0.9rem] laptop:block tablet:block text-[#ffffff74]">
          @
          Kakao.
          All rights reserved
          <span className="text-[0.9rem]"> {theDate}</span>.
          Licensing
        </p>

        {/* end of copyright */}
      </div>

      {/* <div className="laptop:flex tablet:flex tablet:mx-6 tablet:justify-between laptop:mx-[7.1rem] laptop:py-6 mx-auto">
        <p className="py-4 copyright laptop:mr-[31rem] hidden laptop:block tablet:block text-[#ffffff74] text-center">
          <span>{theDate} </span>
          @
          Filmos.
          All rights reserved.
        </p>

        <p className="py-4 copyright laptop:mr-[31rem] laptop:hidden tablet:hidden text-[#ffffff74] text-left mx-6">
          <span>{theDate} </span>
          @
          Filmos.
          All rights reserved.
        </p>

      </div> */}

    </div>

  );
};

export default Footer;