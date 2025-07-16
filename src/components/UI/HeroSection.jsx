import { FaLongArrowAltRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export const HeroSection = () => {
  return (
    <main className="hero-section main">
      <div className="container grid grid-two-cols">
        <div className="hero-content">
          <h1 className="heading-xl">
            Explore Disover Understand The World
          </h1>
          <p>
            Discover the history, culture, and beauty of every nation. Sort,
            search, and filter through countries to find the details you need.
          </p>
          <NavLink to="/country"  style={{ textDecoration: "none" }}>
            <button className="exp-btn">
              Start Exploring <FaLongArrowAltRight />
            </button>
          </NavLink>
        </div>
        <div className="hero-image">
          <img
            src="/Images/World.png"
            alt="world beauty"
            className="banner-image"
          />
        </div>
      </div>
    </main>
  );
};
