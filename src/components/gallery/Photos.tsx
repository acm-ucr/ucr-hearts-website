import Photo from "@/components/gallery/Photo";
const Photos = () => {
  return (
    <div className="mb-[8%] mt-[2%] flex w-[70%] justify-between">
      <Photo
        text="Health Fairs"
        link="https://github.com/acm-ucr/ucr-hearts-website"
        image="/boards/Jack.webp"
      />
      <Photo
        text="Workshops"
        link="https://github.com/acm-ucr/ucr-hearts-website"
        image="/boards/Jack.webp"
      />
      <Photo
        text="Socials"
        link="https://github.com/acm-ucr/ucr-hearts-website"
        image="/boards/Jack.webp"
      />
    </div>
  );
};

export default Photos;
