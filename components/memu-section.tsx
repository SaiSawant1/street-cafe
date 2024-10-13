import Image from "next/image";
import { Card } from "./card";
import { ShoppingCart } from "lucide-react";

const MemuOptions = [
  {
    src: "/sandwich.png",
    title: "sandwich",
    description: "bread with meat and vegetables",
    orders: "12 k",
  },
  {
    src: "/hot-milk.png",
    title: "Hot Milk",
    description: "Hot Milk with less sugar",
    orders: "12 k",
  },
  {
    src: "/ice-cream-coffee.png",
    title: "Coffe Ice Cream",
    description: "Coffe with ice cream vanilla",
    orders: "12 k",
  },
  {
    src: "/menu-cappucino.png",
    title: "Cappucino",
    description: "Hot Cappucino",
    orders: "12 k",
  },
  {
    src: "/moccacinno.png",
    title: "Moccacinno",
    description: "Hot Moccacinno",
    orders: "12 k",
  },
  {
    src: "/waffle-ice-cream.png",
    title: "Waffle Ice Crem",
    description: "Wafle with Ice cream",
    orders: "12 k",
  },
];

export const MemuSection = () => {
  return (
    <div className="h-fit w-full flex justify-center items-center">
      <div className="w-full px-44">
        {" "}
        <h2 className="text-3xl font-bold my-8">
          Special menu{" "}
          <span className="underline decoration-primary underline-offset-8">
            for you
          </span>
        </h2>
        <div className="h-full my-16 px-14 grid grid-cols-3 grid-rows-2 gap-28 w-full">
          {MemuOptions.map(({ title, src, orders, description }) => (
            <div className="shadow-slate-800 shadow-md  py-4 rounded-lg flex items-center justify-center flex-col">
              <Image
                height={226}
                width={330}
                alt="img"
                className="object-cover rounded-lg "
                src={src}
              />
              <div className="flex flex-col w-full gap-4  px-14 text-3xl font-bold my-4">
                <div className="flex w-full justify-between">
                  <div>{title}</div>
                  <div>{orders}</div>
                </div>
                <div className="flex justify-between gap-2 text-slate-400">
                  <div className="flex gap-4 items-center text-lg">
                    <p className="break-words">{description}</p>
                  </div>
                  <div className="p-3 bg-primary rounded-full text-white">
                    <ShoppingCart />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
