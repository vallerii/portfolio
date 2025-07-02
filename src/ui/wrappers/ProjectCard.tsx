import { JSX } from "react";

export default function ProjectCard({ title, description, role, stack, img }: {
  title: string;
  description: string;
  role: string;
  stack: string[];
  img: JSX.Element;
}) {
  return (
    <div className="space-y-3 h-full flex flex-col relative">
      <div className="font-bold text-lg">{title}</div>
      <div className="text-sm text-zinc-400">{description}</div>
      <div className="text-xs text-zinc-500">Роль: {role}</div>
      <div className="flex flex-wrap gap-1 text-xs text-white mt-auto">
        {stack.map((tech: string, index: number) => (
          <span key={index} className="bg-[#34c7f81A] text-[#34c7f8] px-2 py-0.5 rounded-[5px]">
            {tech}
          </span>
        ))}
      </div>
      {img}
    </div>
  );
}