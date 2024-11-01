const Title: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="mb-[3%] mt-[6%]">
      <p className="relative mx-auto font-title text-[4vw] font-light text-hearts-light-brown">
        {title}
      </p>
      <p className="relative mx-auto -mt-[0.5vw] w-[9vw] border-b-[0.3vw] border-hearts-light-brown"></p>
    </div>
  );
};

export default Title;
// Title already in different pages
