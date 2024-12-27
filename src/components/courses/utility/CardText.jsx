import React from "react";

const CardText = ({ data1 }) => {
  const { title, subtitle, description, newterms, link } = data1;
  return (
    <>
      <section className="relative top-[60px]">
        <div className="space-y-4">
          <p className="text-sm uppercase bg-white text-black font-extrabold inline-block px-3 py-3 relative top-[-50px]">
            {subtitle}
          </p>
          <p className="text-lg md:text-lg font-bold uppercase text-white relative top-[-50px]">
            {title}
          </p>
          <p className="text-white width-1 relative top-[-40px]">{description}</p>
          <div>
            <ul className="space-y-2 text-xs list-disc list-inside text-white relative top-[-50px]">
              {newterms.map((term, index) => (
                <li key={index}>{term}</li>
              ))}
            </ul>

            <button className="bg-white text-black font-extrabold px-8 py-2 rounded-full relative top-[-30px] ">
              Get material
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CardText;
