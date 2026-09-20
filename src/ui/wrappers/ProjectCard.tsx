import { cn } from "@/lib/utils";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { ViewProject } from "@/lib/projects";

type Props = { project: ViewProject; locale: Locale; roleLabel: string };

export default function ProjectCard({ project, locale, roleLabel }: Props) {
  const { slug, title, description, role, stack, imgBlock, status } = project;
  return (
    <Link href={`/${locale}/projects/${slug}`} className={cn("group cursor-pointer h-full !w-full flex flex-col gap-3 relative z-[2]")}>
      <h3 className="text-[24px] lg:text-[30px] font-bold leading-tight group-hover:text-accent transition-colors">{title}</h3>
      <p className="text-[16px] text-ink/75 max-w-[46ch]">{description}</p>
      <p className="text-[13px] uppercase tracking-[0.12em] text-muted">
        {roleLabel}: {role}
        {status && <span className="ml-2 text-accent">· {status}</span>}
      </p>
      {/* Without media the stack line sits at the bottom of the cell; with media it
          must stay right under the text, otherwise a stretched cell opens a gap. */}
      <p className={cn("text-[13px] text-muted pt-3 border-t border-line", !imgBlock && "mt-auto")}>
        {stack.join(" · ")}
      </p>
      {imgBlock && <div className="mt-1">{imgBlock}</div>}
    </Link>
  );
}
