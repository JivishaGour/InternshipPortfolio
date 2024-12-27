import React from "react";
import Course1 from "./Course1";
import Course2 from "./Course2";

const Courses = () => {
  return (
    <>
      <section className="py-12 md:py-24">
        <div className="container py-24">
            {/* {title} */}
      <div className="text-center relative top-[-70px] py-12  rounded-3xl">
        <p className=" text-black font-extrabold text-sm">Skills</p>
        <p className="text-black text-3xl md:text-4xl font-extrabold">
          GAINING SKILLS THAT MATTERS
        </p>
      </div>

        {/* {Courses} */}
        <Course1 />
        <Course2 />
      </div>
      </section>

    </>
  );
};

export default Courses;
