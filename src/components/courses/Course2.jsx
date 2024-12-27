import React from "react";
import CardText from "./utility/CardText";
import GOimage from "../../assets/GOimage.png";

const data1 = {
  subtitle: "GOlang",
  title:
    "Golang is a statically typed, compiled, general-purpose programming language developed by Google.",
  description:
    "I followed a YouTube series and some documentations. Learnt about Go, how to use it in backend. Learnt about goroutines, channels, and how to use them. I also learned about the different types of variables, functions, and loops in Go. Unique features of Go are mentioned below.",
  newterms: [
    "Concurrency: Go has built-in support for concurrent programming.",
    "Garbage Collection: Go includes automatic memory management with garbage collection.",
    "Interfaces: Go uses interfaces to define behavior.",
    "Fast Compilation: Go is known for its fast compilation times, which enhances developer productivity.",
    "Cross-platform: Go supports cross-compilation.",
  ],
  link: "#",
};

const Course2 = () => {
  return (
    <>
      <section className="py-12">
        <div className=" bg-zinc-900 rounded-3xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* image section */}
            <div className="relative">
              <img
                src={GOimage}
                alt="Javascript bg image"
                className="h-full object-cover "
              />
              <div className="absolute inset-0 bg-gradient-to-l from-zinc-900 from 1% to-transparent to 20%"></div>
            </div>
            {/* text-content */}
            <div className=" p-12 py-16 flex flex-col justify-center relative z-10">
              <CardText data1={data1} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Course2;
