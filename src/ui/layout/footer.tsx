import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedin, FaTelegramPlane } from "react-icons/fa";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { PERSON } from "@/lib/site";

type Props = { locale: Locale; dict: Dictionary };

const link = "text-[16px] lg:text-[20px] opacity-80 flex items-center gap-[8px] hover:opacity-100";

const Footer = ({ locale, dict }: Props) => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="px-[16px] py-[20px] w-full max-w-[1232px] mx-auto mb-[10vh] flex flex-col justify-between gap-[30px] lg:gap-[60px]">
      <ul className="flex flex-col gap-[12px]">
        <li>
          <Link href={`/${locale}/projects`} className={link}>
            <span aria-hidden="true" className="font-[family-name:var(--font-jetBrains)] text-[12px]">{"</>"}</span>
            {dict.footer.allProjects}
          </Link>
        </li>
        <li><a href={`mailto:${PERSON.email}`} className={link}><FaEnvelope aria-hidden="true" /> {PERSON.email}</a></li>
        <li><a href={PERSON.telegram} target="_blank" rel="noopener noreferrer" className={link}><FaTelegramPlane aria-hidden="true" /> Telegram</a></li>
        <li><a href={PERSON.linkedin} target="_blank" rel="noopener noreferrer" className={link}><FaLinkedin aria-hidden="true" /> LinkedIn</a></li>
        <li><a href={PERSON.github} target="_blank" rel="noopener noreferrer" className={link}><FaGithub aria-hidden="true" /> GitHub</a></li>
      </ul>
      <div className="flex flex-col lg:flex-row gap-[20px] justify-between">
        <p className="text-[14px] lg:text-[16px] max-w-[800px] opacity-80">© {currentYear} {dict.footer.rights}</p>
        <p className="text-[14px] lg:text-[16px] max-w-[800px] opacity-80">{dict.footer.availability}</p>
      </div>
    </footer>
  );
};
export default Footer;
