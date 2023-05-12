import "./Banner.scss";
import bannerimg from "../../../assets/bgbanner.jpg";
import room1 from "../../../assets/Room1.jpeg";
import img from "../../../assets/img22.jpeg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
const Banner = () => {
  return (
    <div className="mt-2">
      <Carousel
        showThumbs={false}
        autoPlay={true}
        interval={2500}
        infiniteLoop={true}
      >
        <div>
          <img className="h-[550px] w-80" src={room1} alt="" />
        </div>
        <div>
          <img className="h-[550px]" src={img} alt="" />
        </div>
      </Carousel>

      <div className="text-center pt-16">
        <h1 className="text-3xl font-bold">Room Rental</h1>
        <p className="text-xl mt-2">Find best rooms for you.</p>
      </div>
    </div>
  );
};

export default Banner;
