import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { ViewProject } from "@/lib/projects";

type Props = { project: ViewProject; locale: Locale };

export default function ProjectSmallCard({ project, locale }: Props) {
  const { slug, title, stack, imgSmall } = project;
  return (
    <Link href={`/${locale}/projects/${slug}`} className="group h-full flex flex-col gap-3 relative z-[2]">
      {imgSmall && (
        <div className="relative w-full h-full rounded-lg overflow-hidden">
          <Image
            src={imgSmall}
            alt=""
            width={800}
            height={600}
            sizes="130px"
            className="rounded-md w-full h-full max-w-[130px] max-h-[170px] mx-auto object-contain"
          />
        </div>
      )}
      <h3 className="text-[20px] font-bold leading-tight group-hover:text-accent transition-colors">{title}</h3>
      <p className="text-[13px] text-muted mt-auto pt-3 border-t border-line">{stack.join(" · ")}</p>
    </Link>
  );
}
