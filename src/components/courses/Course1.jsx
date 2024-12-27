import React from "react";
import CardText from "./utility/CardText";
import JSimage from "../../assets/JSimage.png";


const data1 = {
  subtitle: "Javascript",
  title: "JavaScript is a high-level, interpreted programming language that conforms to the ECMAScript specification.",
  description: "I followed a YouTube series. Learnt about the basics of Javascript, how to use it in web development, and how to use it in React. I also learned about the different types of variables, functions, and loops in Javascript. New terms that I learned are mentioned below.",
  newterms: [
    "Hoisting: being able to access variables and functions before initializing them.",
    "Variables: (const and let are more strict than var)",
    "Temporal_dead_zone: a variable can be declared after it has been used.",
    "Lexical_scope: the scope of a variable is defined by its location within the source code.",
    "Higher_order_functions: functions that take functions as arguments or return functions as results.",
  ],
  link: "#",
}

const Course1 = () => {
  return (
    <>
      <section className="py-12">
        <div className=" bg-zinc-900 rounded-3xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* text-content */}
            <div className=" p-12 py-16 flex flex-col justify-center relative z-10">
            <CardText data1 = {data1} />
            </div>
            {/* image section */}
            <div className="relative">
            <img src={JSimage} alt="Javascript bg image" className="h-full object-cover " />
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 from 1% to-transparent to 20%"></div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Course1;
