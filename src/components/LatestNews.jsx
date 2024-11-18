import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
  return (
    <div className="flex justify-center items-center gap-x-3 bg-base-200 p-2">
      <p className="bg-[#D72050] text-white px-3 py-1">Latest</p>
      <Marquee speed={100} pauseOnHover={true} className="space-x-10">
        <Link to="/news">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          illum consequuntur unde nobis quis ipsa!
        </Link>
        <Link to="/news">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          illum consequuntur unde nobis quis ipsa!
        </Link>
        <Link to="/news">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          illum consequuntur unde nobis quis ipsa!
        </Link>
      </Marquee>
    </div>
  );
};

export default LatestNews;
