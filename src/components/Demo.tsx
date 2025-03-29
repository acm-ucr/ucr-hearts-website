"use client";
import useView from "./useView";
import Button from "@/components/Button";
import demoInfo from "@/data/demoinfo";

const Demo = () => {
  const [inView, ref] = useView();
  return (
    <div ref={ref} className="w-page flex flex-col items-center py-10">
      <div
        className={`relative grid min-h-80 w-[90vw] grid-cols-4 gap-[5%] bg-hearts-brown p-5${inView && "animate-fade-down animate-duration-[1500ms]"}`}
      >
        {demoInfo.map((info, index) => (
          <div key={index} className="">
            <Button link={info.link} text={info.text} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Demo;
