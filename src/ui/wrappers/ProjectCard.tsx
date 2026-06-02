import { Project } from "@/ui/data/projects";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function ProjectCard({ slug, title, description, role, stack, imgBlock }: Project) {
  return (
    <Link href={`/projects/${slug}`} className={cn("cursor-pointer space-y-3 h-full !w-full flex flex-col relative z-[2]", !imgBlock && "bg-neutral-800/70 rounded-xl p-4", )}>
      <div className="font-bold text-lg">{title}</div>
      <div className="text-md  text-white/80">{description}</div>
      <div className="text-sm text-zinc-400">Роль: {role}</div>
      <div className="flex flex-wrap gap-1 text-xs text-white mt-auto">
        {stack.map((tech: string, index: number) => (
          <span key={index} className="bg-[#34c7f81A] text-[#34c7f8] px-2 py-0.5 rounded-[5px]">
            {tech}
          </span>
        ))}
      </div>
      {imgBlock && imgBlock}
    </Link>
  );
}