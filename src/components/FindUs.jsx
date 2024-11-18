import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-semibold mb-3">Find Us</h2>
      <div className="join flex join-vertical *:bg-base-100 *:justify-start">
        <button className="btn join-item">
          <FaFacebook></FaFacebook> Facebook
        </button>
        <button className="btn join-item">
          <FaTwitter></FaTwitter> Twitter
        </button>
        <button className="btn join-item">
          <FaInstagram></FaInstagram> Instagram
        </button>
      </div>
    </div>
  );
};

export default FindUs;
