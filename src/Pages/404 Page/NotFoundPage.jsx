import React from 'react'
import { Link } from "react-router-dom";
import "./styles.css"

const NotFoundPage = () => {
    return (
        <div className='w-full'>
            {/* <h1 className=" text-4xl">
                404 Page NotFound
            </h1>
            <p>
                Sorry, the page you are looking for does not exist.
            </p> */}

            <section className="page_404 min-h-screen bg-[#f8f8fd] ">
                <div className="container laptop:mx-[6rem] tablet:mx-[3rem]">
                    <div className="row">
                        <div className="col-sm-12 ">
                            <div className="col-sm-10 col-sm-offset-1  text-center">
                                <div className="four_zero_four_bg">
                                    <h1 className="text-center ">404</h1>
                                </div>

                                <div className="contant_box_404 tablet:mt-4">
                                    <h3 className="h2">
                                        Look like you're lost 🧐
                                    </h3>

                                    <p className="">
                                        The page you are looking for is not available!
                                    </p>

                                    <Link to="/" className="btn text-white bg-[#010886] mt-2 border-none hover:bg-[#010886]/75 ">Go to Home</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default NotFoundPage