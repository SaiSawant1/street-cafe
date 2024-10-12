import { ShoppingCart, Star } from "lucide-react";
import Image from "next/image";

export const HeroContent = () => {
  return (
    <div className="w-full flex justify-between h-full">
      <div>
        <h1 className="font-bold text-secondary text-6xl mt-20">
          Enjoy your <span className="text-primary">coffe</span>
          <br />
          before your activity
        </h1>
        <p className="py-10 text-gray-600 text-2xl font-semibold leading-loose">
          Boost your productivity and build your <br /> mood with a glass of
          coffee in the morning{" "}
        </p>
        <div className="flex items-center gap-5 font-bold">
          <div className="py-3 px-16 flex items-center text-white rounded-full gap-3 bg-secondary">
            Order now{" "}
            <ShoppingCart className="bg-primary rounded-full text-white h-10 w-10 p-2" />
          </div>{" "}
          <div className="text-primary">More Menu</div>
        </div>
      </div>
      <div className="h-full my-7 relative">
        <div className=" absolute rounded-full bg-white/35 z-10 flex top-20 -left-40">
          <div className="text-secondary px-14 rounded-full m-3 py-3 flex bg-white font-semibold text-2xl">
            Cappucino
          </div>
        </div>
        <div className=" absolute rounded-full bg-white/35 z-10 flex -left-10 bottom-60">
          <div className="text-secondary px-14 rounded-full m-3 py-3 flex bg-white font-semibold text-2xl">
            18k
          </div>
        </div>
        <div className=" absolute rounded-full bg-white/35 z-10 flex -right-10 top-50">
          <div className="text-secondary px-14 rounded-full m-3 py-3 flex bg-white font-semibold text-2xl">
            4.8
            <Star className="text-yellow-600" />
          </div>
        </div>
        <div className="h-96 relative overflow-hidden flex justify-center items-center w-96 rounded-[100%] bg-secondary">
          <Image
            alt="bg-cup_logo"
            width={800}
            height={800}
            src={"/logo_bg.svg"}
            className="bg-fill text-white absolute"
          />
          <Image
            alt="bg-cup"
            width={300}
            height={300}
            src={"/bg_coffe_cup.png"}
            className="bg-fill"
          />
        </div>
      </div>
    </div>
  );
};
