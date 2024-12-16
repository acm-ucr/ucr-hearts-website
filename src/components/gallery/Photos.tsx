"use client";
import useView from "../useView";
import Photo from "@/components/gallery/Photo";
import { photosInfo } from "@/data/photosInfo";
const Photos = () => {
  const [inView, ref] = useView();
  return (
    <div
      ref={ref}
      className="mb-[8%] mt-[2%] flex flex-wrap justify-center md:m-0 md:mb-[15%] md:w-[70%] md:flex-row md:justify-between"
    >
      {photosInfo.map((CARD, index) => (
        <div className={`${inView && CARD.animation}`}>
          <Photo
            key={index}
            text={CARD.text}
            link={CARD.link}
            image={CARD.image}
          />
        </div>
      ))}
    </div>
  );
};

export default Photos;
