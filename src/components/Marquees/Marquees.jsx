import Marquee from "react-fast-marquee";

const Marquees = () => {
  return (
    <div className="flex w-full items-center">
      <div className="">
        <button className="btn text-white btn-error">Latest </button>
      </div>
      <div className="bg-base-200 ">
        <Marquee pauseOnHover>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum,
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, !
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, !
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum,
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum,
          </p>
        </Marquee>
      </div>
    </div>
  );
};

export default Marquees;
