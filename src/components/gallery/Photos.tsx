import Photo from "@/components/gallery/Photo";
import { photosInfo } from "@/data/photosInfo";
const Photos = () => {
  return (
    <div className="mb-[8%] mt-[2%] flex w-[70%] justify-between">
      {photosInfo.map((CARD, index) => (
        <div key={index}>
          <Photo text={CARD.text} link={CARD.link} image={CARD.image} />
        </div>
      ))}
    </div>
  );
};

export default Photos;
