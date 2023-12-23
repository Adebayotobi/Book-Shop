import Bookshop from "../assets/shopping.jpg";

const Hero = () => {
  return (
    <div className="relative h-[60vh]">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${Bookshop})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <button className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-black text-xl text-center bg-primary p-2 rounded-md">
        START SHOPPING
      </button>
    </div>
  );
};

export default Hero;
