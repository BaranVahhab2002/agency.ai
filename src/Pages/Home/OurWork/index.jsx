import React from "react";
import Title from "../Services/Title";
import assets from "../../../assets/assets";

export default function OurWork() {
  const workData = [
    {
      title: "Mobile App marketing",
      description:
        "We turn bold ideas into powerfil digital solutions that connect , engage ...",
      image: assets.work_mobile_app,
    },
    {
      title: "Dashboard management",
      description: "We help you execute your plan and deliver results.",
      image: assets.work_dashboard_management,
    },
    {
      title: "Fittness App marketing",
      description:
        "We help you create a marketing strategy that drives results.",
      image: assets.work_fitness_app,
    },
  ];
  return (
    <div
      id="ourWork"
      className="flex flex-col items-center gap-7
    px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <Title
        title="Our latest work"
        desc="From strategy tp execution,
        we craft digital solutions that move your business forward"
      />
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-col-4 gap-6 w-full max-w-5xl ">
        {workData.map((work, index) => (
          <div
            key={index}
            className="hover:scale-102 duration-500
                transition-all cursor-pointer"
          >
            <img src={work.image} alt="" className="w-full rounded-xl" />
            <h3 className="mt-3 mb-2 text-lg font-semibold">{work.title}</h3>
            <p className="text-sm opacity-60 w-5/6">{work.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
