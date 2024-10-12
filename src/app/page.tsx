import Landing from "@/components/home/Landing";
import Join from "@/components/home/Join";
import Reviews from "@/components/home/Reviews";
import Demo from "@/components/Demo";

const Home = () => {
  return (
    <div className="flex w-screen flex-col items-center">
      <Demo />
      <Landing />
      <Join />
      <Reviews />
    </div>
  );
};

export default Home;
