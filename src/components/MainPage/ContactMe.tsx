import { FaDownload, FaEnvelope, FaGithub, FaLinkedin, FaTelegramPlane } from "react-icons/fa";
import type { Dictionary } from "@/i18n/dictionaries";
import { PERSON } from "@/lib/site";

type Props = { data: Dictionary['contact'] };

// !w-full: globals.css sets `a { width: fit-content }`, cards must fill their grid cell
const card = "!w-full h-full bg-[#182C40] rounded-xl p-4 flex items-center gap-[12px] min-h-[72px] min-w-0 hover:bg-[#1f3a55] transition-colors";

export default function ContactMe({ data }: Props) {
  return (
    <section
      className="text-white px-[16px] py-[80px] lg:py-[120px] max-w-[1232px] mx-auto w-full flex flex-col mt-[-40vh] z-[10] relative scroll-mt-[80px]"
      id="contact"
      aria-labelledby="contact-title"
    >
      <h2 id="contact-title" className="text-[32px] sm:text-[44px] lg:text-[54px] font-bold text-center uppercase max-w-[900px] mx-auto">
        {data.title}
      </h2>
      <p className="text-[16px] lg:text-[20px] opacity-80 text-center mt-[12px]">{data.subtitle}</p>

      <div className="mx-auto mt-[20px] md:mt-[40px] lg:mt-[60px] w-full max-w-[760px]">
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-[20px] w-full">
          <li>
            <a href={`mailto:${PERSON.email}`} className={card}>
              <FaEnvelope aria-hidden="true" />
              <span className="min-w-0 break-all"><span className="sr-only">{data.email}: </span>{PERSON.email}</span>
            </a>
          </li>
          <li>
            <a href={PERSON.telegram} target="_blank" rel="noopener noreferrer" className={card}>
              <FaTelegramPlane aria-hidden="true" /> {data.telegram} {PERSON.telegramHandle}
            </a>
          </li>
          <li>
            <a href={PERSON.linkedin} target="_blank" rel="noopener noreferrer" className={card}>
              <FaLinkedin aria-hidden="true" /> {data.linkedin}
            </a>
          </li>
          <li>
            <a href={PERSON.github} target="_blank" rel="noopener noreferrer" className={card}>
              <FaGithub aria-hidden="true" /> {data.github}
            </a>
          </li>
          <li className="sm:col-span-2">
            <a href={PERSON.cv} download className={`${card} bg-[#262D3C] justify-center font-bold uppercase`}>
              <FaDownload aria-hidden="true" /> {data.downloadCv}
            </a>
          </li>
        </ul>

      </div>
    </section>
  );
}
