import Photo from "@/components/gallery/Photo";
import { photosInfo } from "@/data/photosInfo";
const Photos = () => {
  return (
    <div className="mb-[8%] mt-[2%] flex flex-wrap justify-center md:m-0 md:mb-[15%] md:w-[70%] md:flex-row md:justify-between">
      {photosInfo.map((CARD, index) => (
        <Photo
          key={index}
          text={CARD.text}
          link={CARD.link}
          image={CARD.image}
        />
      ))}
    </div>
  );
};

export default Photos;
