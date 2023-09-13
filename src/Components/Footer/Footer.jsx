import React from "react";
// import WhiteLogo from "../../assets/5ffffadf6ee51c8077d3388b_logo-white.svg"
import { FiArrowRight } from "react-icons/fi";

const Footer = () => {
  // date for copyright
  const theDate = new Date().getFullYear();
  // end of date

  return (
    <div className="bg-[black] text-white ">
      <footer
        className="footer laptop:p-10 p-6 max-w-[90%] laptop:mx-[5.5rem] mx-0">
        <div className="laptop:-mr-[9rem] laptop:-ml-10 w-full py-12">
          <h1 className="laptop:text-[5rem] text-[2rem] leading-[3rem] laptop:leading-[6rem] laptop:pb-6 pb-3 font-black">
            Got a project? <br />
            Let's talk.
          </h1>

        </div>
      </footer>


      <footer className="footer mx-2 laptop:p-10 laptop:py-16 p-6 max-w-[90%] laptop:mx-[5.6rem] border border-white/25 border-x-transparent">

        <div className="laptop:-mr-[9rem] laptop:-ml-10">
          {/* <img src={WhiteLogo} className="" alt="web-logo" /> */}
          <p className="mt-2 text-[1rem] font-normal leading-[1.6rem] laptop:mt-5">
            Showcase your portfolio. Perfect for
            Video Production and Creative
            <br className="hidden laptop:flex" />
            Studios.

          </p>

        </div>

        <div className="footer">
          <div className="laptop:ml-[2.5rem] mb-8">
            <span className="text-[0.85rem] text-white/50 font-medium laptop:mb-4">ADDRESS</span>
            <a className="link link-hover font-normal leading-[1.6rem] tablet:w-[70%] laptop:w-auto">Dummy Street 12</a>
            <a className="link link-hover font-normal leading-[1.6rem]">80636 City</a>
            <a className="link link-hover font-normal leading-[1.6rem]">Country</a>
          </div>
          <div className="laptop:ml-[2.5rem]">
            <span className="text-[0.85rem] text-white/50 font-medium laptop:mb-4">CONTACT</span>
            <a href="mailto:sayhi@template.com" className="link link-hover font-normal leading-[1.6rem]">sayhi@template.com</a>
            <a href="tel:+49 152 3475 67" className="link link-hover font-normal leading-[1.6rem]">+49 152 3475 67</a>
          </div>
        </div>

      </footer>


      <footer className="footer laptop:p-10 p-6 max-w-[90%] laptop:mx-[5.7rem] mx-0">
        <div className="laptop:-mr-[9rem] laptop:-ml-10">

          <div className="tablet:hidde laptop:min-w-[26rem] tablet:min-w-[19rem] laptop:block">
            <span className="text-[0.85rem] text-white/50 font-medium laptop:mb-4">
              SUBSCRIBE TO NEWSLETTER
            </span>
            <div className="flex-col w-[18rem] laptop:mt-12 tablet:w-[14rem] laptop:w-[18rem]">
              <div className="relative w-full border justify-between border-x-transparent border-t-transparent border-white/25">
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  // size="56.5"
                  className="py-3 px-0 bg-black text-white/75 min-w-[rem] input rounded-none "
                />

                <button className="btn hover:bg-transparent hover:translate-x-4 absolute -top-0 right-4 rounded-none bg-transparent text-white border-none">
                  <FiArrowRight size="1.5rem" />
                </button>
              </div>
            </div>
          </div>

        </div>

        <div className="footer">
          <div className="laptop:ml-[rem] mb-8 laptop:mb-0 tablet:mb-0">
            <span className="text-[0.85rem] text-white/50 font-medium laptop:mb-4">DEMOS</span>
            <a className="link link-hover font-normal leading-[1.6rem]">Home v.1</a>
            <a className="link link-hover font-normal leading-[1.6rem]">Home v.2</a>
            <a className="link link-hover font-normal leading-[1.6rem]">Home v.3</a>
            <a className="link link-hover font-normal leading-[1.6rem]">Contact</a>
            <a className="link link-hover font-normal leading-[1.6rem]">Privacy Policy</a>
          </div>
          <div>
            <span className="text-[0.85rem] text-white/50 font-medium laptop:mb-4">UTILITY</span>
            <a className="link link-hover font-normal leading-[1.6rem]">Style Guide</a>
            <a className="link link-hover font-normal leading-[1.6rem]">Instructions</a>
            <a className="link link-hover font-normal leading-[1.6rem]">Licenses</a>
            <a className="link link-hover font-normal">Changelog</a>
          </div>
        </div>

      </footer>



      {/* <img src={FooterLine} className="w-[80%] laptop:mx-[8rem]" alt="footer-line" /> */}

      <div className="laptop:flex py-10 justify-between laptop:mx-[5.7rem]">
        {/* copyright */}
        <p className="py-2 copyright laptop:mr-[rem] laptop:ml-0 mx-8 text-[1rem] laptop:block tablet:block text-[#ffffff74]">
          @
          Kakao.
          All rights reserved
          <span className="text-[0.85rem]"> {theDate}</span>.
          Licensing
        </p>

        <span className="py-2 copyright laptop:mr-8 mx-7 text-[1rem] laptop:block tablet:block text-white/50">
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