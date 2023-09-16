import React from "react";
import KakaoLogo from "../../assets/New Kakao Logo.svg"
import { FiArrowRight } from "react-icons/fi";

const Footer = () => {
  // date for copyright
  const theDate = new Date().getFullYear();
  // end of date

  return (
    <div className="bg-[black] text-white ">
      <footer className="footer laptop:p-10 laptop:pt-20 p-6 max-w-[90%] laptop:mx-[5.7rem] mx-0">
        <div className="laptop:-mr-[9rem] laptop:-ml-10">

          <div className="tablet:hidde laptop:min-w-[26rem] tablet:min-w-[19rem] laptop:block">
            <span className="text-white font-medium laptop:mb-4">
              <p className="text-[0.9rem]">
                /VIDEO CREATORS
              </p>
            </span>

          </div>

        </div>

        <div className="footer uppercase text-white/50">
          <div className="laptop:ml-[6rem] mb-8 laptop:mb-0 tablet:mb-0">
            <span className="text-[0.9rem] text-white font-medium laptop:mb-4">/NAVIGATION</span>
            <a className="link link-hover font-normal text-[0.875rem] leading-[1.6rem]">Home v.1</a>
            <a className="link link-hover font-normal text-[0.875rem] leading-[1.6rem]">Home v.2</a>
            <a className="link link-hover font-normal text-[0.875rem] leading-[1.6rem]">Home v.3</a>
            <a className="link link-hover font-normal text-[0.875rem] leading-[1.6rem]">Contact</a>
            <a className="link link-hover font-normal text-[0.875rem] leading-[1.6rem]">Privacy Policy</a>
          </div>
          <div>
            <span className="text-[0.9rem] text-white font-medium laptop:mb-4">/OUR WORKS</span>
            <a className="link link-hover font-normal text-[0.875rem] leading-[1.6rem]">Style Guide</a>
            <a className="link link-hover font-normal text-[0.875rem] leading-[1.6rem]">Instructions</a>
            <a className="link link-hover font-normal text-[0.875rem] leading-[1.6rem]">Licenses</a>
            <a className="link link-hover font-normal text-[0.875rem]">Changelog</a>
          </div>
          <div>
            <span className="text-[0.9rem] text-white font-medium laptop:mb-4">/SOCIALS</span>
            <a className="link link-hover font-normal text-[0.875rem] leading-[1.6rem]">Style Guide</a>
            <a className="link link-hover font-normal text-[0.875rem] leading-[1.6rem]">Instructions</a>
            <a className="link link-hover font-normal text-[0.875rem] leading-[1.6rem]">Licenses</a>
            <a className="link link-hover font-normal text-[0.875rem]">Changelog</a>
          </div>
        </div>

      </footer>


      <footer className="footer justify-between mx-2 laptop:p-0 laptop:py-16 p-6 max-w-[90%] laptop:mx-[5.6rem] border border-white/25 border-x-transparent">

        <div className="w-[350%]">
          <img src={KakaoLogo} className="w-full" alt="web-logo" />
        </div>

        <div className="footer">
          <div className="relative w-ful mr-[13rem] border justify-between border-x-transparent border-t-transparent border-white/25">
            <p className="mt-2 text-[1rem] text-white/50 font-normal leading-[1.6rem] laptop:mt-5">
              Get in touch with our team. Contact Us and let's create <br />
              something extraordinary.
            </p>
            <input
              type="email"
              placeholder="Email Address"
              required
              // size="56.5"
              className="py-3 px-0 bg-black text-white/75 min-w-[rem] input rounded-none "
            />

            <button className="btn hover:bg-transparen px-2  bg-white text-black hover:translate-x-4 absolute top-20 right-4 rounded-full border-none">
              <FiArrowRight size="1.2rem" />
            </button>
          </div>
        </div>

      </footer>


      {/* <img src={FooterLine} className="w-[80%] laptop:mx-[8rem]" alt="footer-line" /> */}

      <div className="laptop:flex py-10 justify-between laptop:mx-[5.7rem]">
        {/* copyright */}
        <p className="py-2 copyright laptop:mr-[rem] laptop:ml-0 mx-8 text-[0.9rem] laptop:block tablet:block text-[#ffffff74]">
          @
          Kakao.
          All rights reserved
          <span className="text-[0.9rem]"> {theDate}</span>.
          Licensing
        </p>

        <span className="py-2 copyright laptop:mr-8 mx-7 text-[0.9rem] laptop:block tablet:block text-white/50">
          <a className="link link-hover text-white hover:text-white/50">
            Template
          </a>
          &nbsp;
          by
          &nbsp;
          <a className="link link-hover text-white hover:text-white/50">
            wCopilot
          </a>
          &nbsp;
          Powered by
          Webflow
        </span>
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