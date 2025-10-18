import swimming from "./../../assets/swimming.png";
import classPng from "./../../assets/class.png";
import playGround from "./../../assets/playground.png";

const RightAside = () => {
  return (
    <div className="flex flex-col gap-y-3">
      <section>
        <div className="flex flex-col gap-y-3 gap-x-2">
          <button className="btn btn-outline">Login With Google</button>
          <button className="btn btn-outline">Login With GitHub</button>
        </div>
      </section>

      <section>
        <h2 className="font-semibold text-xl"> Find Us One </h2>
        <div className="flex flex-col  gap-y-3 gap-x-2">
          <button className="btn border-0  btn-outline">Facebook</button>
          <button className="btn border-0 btn-outline">Twitter</button>
          <button className="btn border-0 btn-outline">Instagram</button>
        </div>
      </section>
      <section>
        <h3 className="font-semibold text-xl">Q-ZONE</h3>
        <div className="flex flex-col  ">
          <img className="cursor-pointer" src={swimming} alt={swimming} />
          <img className="cursor-pointer" src={classPng} alt={classPng} />
          <img className="cursor-pointer" src={playGround} alt={playGround} />
        </div>
      </section>
    </div>
  );
};

export default RightAside;
