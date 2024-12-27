import React from "react";
import BgImage from "../../assets/BgImage.png";
import Me from "../../assets/Me.jpeg";
import { Link } from "react-router-dom";

const bgstyle = {
  backgroundImage: `url(${BgImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const Box = () => {
  return (
    <>
      <section style={bgstyle}>
        <div className="container h-[600px] grid grid-cols-1 md:grid-cols-2">
          {/* {text section} */}
          <div className="flex flex-col justify-center gap-4 h-full">
            <h1 className="uppercase text-3xl md:text-4xl font-extrabold">
              HEYO! I AM A SOFTWARE DEVELOPMENT ENGINEER INTERN
            </h1>
            <p className="text-sm max-w-[400px]">
              This website is made to showcase the skills I am learning in the
              internship at Produktiv.ai, and the projects that I will be making
              in order to complete my training.
            </p>
            <button className="rounded-full font-bold bg-white w-32  hover:scale-110 text-stone-500 px-7 py-2">
              <Link to="/learnings" className="text-stone-500">
                Learnings
              </Link>
            </button>
          </div>
          {/* {image section} */}
          <div className="flex justify-center items-end ">
            <img
              src={Me}
              alt="This is me saying hello"
              className="max-w-[500px] h-auto relative top-[-50px]"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Box;
