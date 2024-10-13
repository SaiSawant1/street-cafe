import Image from "next/image";

interface CardProps {
  src: string;
  title: string;
  description: string;
}

export const Card2 = ({ src, title, description }: CardProps) => {
  return (
    <div>
      <Image height={200} width={200} alt={title} className="" src={src} />
      <div className="text-center my-8">
        <h3 className="font-bold text-2xl">{title}</h3>
        <p className="my-2 text-slate-500">{description}</p>
      </div>
    </div>
  );
};
