import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { ViewProject } from "@/lib/projects";

type Props = { project: ViewProject; locale: Locale };

export default function ProjectSmallCard({ project, locale }: Props) {
  const { slug, title, stack, imgSmall } = project;
  return (
    <Link href={`/${locale}/projects/${slug}`} className="space-y-3 h-full flex flex-col relative z-[2]">
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
      <h3 className="font-bold text-lg">{title}</h3>
      <ul className="flex flex-wrap gap-1 text-xs text-white mt-auto">
        {stack.map((tech) => (
          <li key={tech} className="bg-[#34c7f81A] text-[#34c7f8] px-2 py-0.5 rounded-[5px]">{tech}</li>
        ))}
      </ul>
    </Link>
  );
}
