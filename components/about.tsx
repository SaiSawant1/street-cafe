import Image from "next/image";

export const AboutUs = () => {
  return (
    <div className="w-full my-20">
      <div className="bg-[#F6EBDA] relative flex w-full justify-end items-center py-14 px-80">
        <Image
          alt="about"
          height={500}
          className="absolute -top-20 left-80"
          width={300}
          src={"/about_us.png"}
        />
        <div className="mr-48">
          <h2 className="text-3xl my-9 text-secondary font-bold">
            About{" "}
            <span className="underline decoration-primary underline-offset-8">
              Us
            </span>
          </h2>
          <h3 className="text-2xl my-4 text-secondary font-semibold">
            We provide quality coffee,
            <br /> and ready to deliver.
          </h3>
          <div className="text-slate-600 my-2 text-lg">
            We are a company that makes and distributes
            <br /> delicious drinks. our main product is made with a <br />{" "}
            secret recipe and available in stores worldwide.
          </div>
          <button className="bg-secondary text-primary font-bold py-3 px-6 rounded-full my-4">
            Get your coffee
          </button>
        </div>
      </div>
    </div>
  );
};
