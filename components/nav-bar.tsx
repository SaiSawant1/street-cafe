import { Search, ShoppingCart } from "lucide-react";
import Image from "next/image";

export const NavBar = () => {
  return (
    <div className="w-full fixed flex justify-between px-44 my-11 h-14">
      <Image
        src="/logo_coffe.svg"
        alt="logo"
        width={200} // Adjust width as needed
        height={36} // Adjust height as needed
        className="bg-fill"
      />
      <div className="flex gap-5">
        <div className="h-full mx-56">
          <ul className="h-full gap-14 flex justify-center items-center">
            <li className="text-primary font-semibold">About us</li>
            <li>Our Product</li>
            <li>Delivery</li>
          </ul>
        </div>
        <div className="bg-white flex  justify-center items-center rounded-3xl p-4 gap-5">
          <Search />
          <p className="text-slate-400 mr-20">Cappuccino </p>
        </div>
        <div className="flex justify-center items-center">
          <ShoppingCart />
        </div>
      </div>
    </div>
  );
};
