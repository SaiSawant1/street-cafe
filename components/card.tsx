import { ShoppingCart } from "lucide-react";
import Image from "next/image";

interface CardProps {
  src: string;
  title: string;
  orders: string;
}

export const Card = ({ src, title, orders }: CardProps) => {
  return (
    <div className="bg-white/30 p-2 rounded-lg ">
      <div className="bg-white p-4 rounded-lg ">
        <Image
          height={226}
          width={330}
          alt="img"
          className="object-cover rounded-lg "
          src={src}
        />
        <div className="flex flex-col w-full gap-4  px-4 text-3xl font-bold my-4">
          <div className="flex w-full justify-between">
            <div>{title}</div>
            <div>{orders}</div>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-4 text-lg">
              <div className="px-4 py-1 border-primary border-2 rounded-lg">
                Hot
              </div>
              <div className="px-6 py-1 border-[#FFD28F] border-2 rounded-lg">
                Cold
              </div>
            </div>
            <div className="p-3 bg-primary rounded-full text-white">
              <ShoppingCart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
