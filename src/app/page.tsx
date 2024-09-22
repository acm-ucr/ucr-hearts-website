import Landing from "@/components/home/Landing";
import Join from "@/components/home/Join";
import Reviews from "@/components/home/Reviews";

const Home = () => {
  return (
    <div className="flex w-screen flex-col items-center">
      <Landing />
      <Join />
      <Reviews />
    </div>
  );
};

export default Home;
