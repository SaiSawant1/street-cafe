import { Card } from "./card";
import { Card2 } from "./card2";

const CardValues = [
  {
    src: "/caramel.png",
    title: "Vanilla Latte",
    orders: "21 K",
  },
  {
    src: "/espresso.png",
    title: "Espresso",
    orders: "12 K",
  },
  {
    src: "/hazelnut_latte.png",
    title: "Hazelnut Latte",
    orders: "23 K",
  },
];

const Card2Value = [
  {
    src: "/coffe_order.svg",
    title: "Choose your coffee",
    description: "there are 20+ coffes for you",
  },
  {
    src: "/food-truck.svg",
    title: "We delivery it to you",
    description: "Choose delivery service",
  },
  {
    src: "/coffee-cup.svg",
    title: "Enjoy your coffee",
    description: "Choose delivery service",
  },
];

export const PopularNow = () => {
  return (
    <div className="h-full w-full px-60 relative flex">
      <div className="bg-[#F9D9AA] flex  -top-40  gap-10 absolute justify-evenly items-center py-10 inset-x-40 rounded-3xl">
        {CardValues.map(({ src, orders, title }) => (
          <Card src={src} title={title} orders={orders} />
        ))}
      </div>
      <div className="w-full mt-96 flex flex-col">
        <h2 className="text-4xl my-7 font-bold">
          How to use delivery{" "}
          <span className="underline decoration-primary underline-offset-8">
            services
          </span>
        </h2>
        <div className="w-full flex justify-between py-12">
          {Card2Value.map(({ src, title, description }) => (
            <Card2 src={src} description={description} title={title} />
          ))}
        </div>
      </div>
    </div>
  );
};
