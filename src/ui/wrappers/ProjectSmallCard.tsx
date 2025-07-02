import Image from "next/image";

export default function ProjectSmallCard({ title, stack, img }: {
  title: string;
  stack: string[];
  img: string;
}) {
  return (
    <div className="space-y-3 h-full flex flex-col">
      <div className="relative w-full h-full rounded-lg overflow-hidden">
        <Image
          src={img}
          alt={title}
          width={800}
          height={600}
          objectFit="cover"
          className="rounded-md w-full h-full"
        />
      </div>
      <div className="font-bold text-lg">{title}</div>      
      <div className="flex flex-wrap gap-1 text-xs text-white mt-auto">
        {stack.map((tech: string, index: number) => (
          <span key={index} className="bg-[#34c7f81A] text-[#34c7f8] px-2 py-0.5 rounded-[5px]">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}