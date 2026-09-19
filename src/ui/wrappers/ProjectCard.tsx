import { cn } from "@/lib/utils";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { ViewProject } from "@/lib/projects";

type Props = { project: ViewProject; locale: Locale; roleLabel: string };

export default function ProjectCard({ project, locale, roleLabel }: Props) {
  const { slug, title, description, role, stack, imgBlock, status } = project;
  return (
    <Link href={`/${locale}/projects/${slug}`} className={cn("cursor-pointer space-y-3 h-full !w-full flex flex-col relative z-[2]", !imgBlock && "bg-neutral-800/70 rounded-xl p-4")}>
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="text-md text-white/80">{description}</p>
      <p className="text-sm text-zinc-400">
        {roleLabel}: {role}
        {status && <span className="ml-2 rounded-full border border-[#34c7f8]/60 text-[#34c7f8] px-2 py-0.5 text-xs">{status}</span>}
      </p>
      <ul className="flex flex-wrap gap-1 text-xs text-white mt-auto">
        {stack.map((tech) => (
          <li key={tech} className="bg-[#34c7f81A] text-[#34c7f8] px-2 py-0.5 rounded-[5px]">{tech}</li>
        ))}
      </ul>
      {imgBlock && imgBlock}
    </Link>
  );
}
