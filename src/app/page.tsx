import Landing from "@/components/home/Landing";
import Join from "@/components/home/Join";
import Reviews from "@/components/home/Reviews";
import ReviewTitle from "@/components/home/ReviewTitle";
const Home = () => {
  return (
    <div className="flex w-screen flex-col items-center">
      <Landing />
      <Join />
      <ReviewTitle />
      <Reviews />
    </div>
  );
};

export default Home;
