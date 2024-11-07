import Title from "@/components/Title";
import Photos from "@/components/gallery/Photos";

const Gallery = () => {
  return (
    <div className="flex w-screen flex-col items-center">
      <Title title="Gallery" />
      <Photos />
    </div>
  );
};

export default Gallery;
