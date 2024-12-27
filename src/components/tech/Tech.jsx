import React from "react";
import Github from "../../assets/github.png";
import Go from "../../assets/go.png";
import Jira from "../../assets/jira.png";
import React1 from "../../assets/React.png";
import Javascript from "../../assets/Javascript.png";
import Swagger from "../../assets/swagger.png";

const Tech = () => {
  return (
    <>
      <section className="bg-stone-600">
        <div className="container flex justify-around items-center py-4 px-2 gap-4 flex-wrap">
          <img src={Github} alt="Github logo" className="max-w-[50px] h-auto"/>
          <img src={Go} alt="Go logo" className = "max-w-[60px] h-auto"/>
          <img src={Jira} alt="Jira logo" className = "max-w-[40px] h-auto"/>
          <img src={React1} alt="React logo"className = "max-w-[50px] h-auto" />
          <img src={Javascript} alt="JS logo" className = "max-w-[50px] h-auto"/>
          <img src={Swagger} alt="swagger logo" className = "max-w-[70px] h-auto"/>
        </div>
      </section>
    </>
  );
};

export default Tech;
