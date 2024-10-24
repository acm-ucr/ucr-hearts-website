const Title: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div>
      <p className="relative mx-auto font-title text-[5vw] text-hearts-brown">
        {title}
      </p>
      <p className="relative mx-auto -mt-[1vw] w-[9vw] border-b-[0.3vw] border-hearts-brown"></p>
    </div>
  );
};

export default Title;
// Title already in different pages
