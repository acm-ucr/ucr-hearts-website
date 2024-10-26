import Button from "@/components/Button";
import demoInfo from "@/data/demoinfo";

const Demo = () => {
  return (
    <div className="w-page flex flex-col items-center py-10">
      <div className="relative grid min-h-80 w-[90vw] grid-flow-col grid-rows-2 gap-10 bg-hearts-brown p-5">
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
