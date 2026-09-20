import { FaDownload, FaEnvelope, FaGithub, FaLinkedin, FaTelegramPlane } from "react-icons/fa";
import type { Dictionary } from "@/i18n/dictionaries";
import { PERSON } from "@/lib/site";

type Props = { data: Dictionary['contact'] };

// !w-full: globals.css sets `a { width: fit-content }`, cards must fill their grid cell
// !w-full: globals.css sets `a { width: fit-content }`
const row = "!w-full flex items-center gap-[16px] py-[22px] border-b border-line text-[20px] lg:text-[26px] font-bold tracking-[-0.01em] hover:text-accent transition-colors";

export default function ContactMe({ data }: Props) {
  return (
    <section
      className="text-white px-[16px] py-[80px] lg:py-[120px] max-w-[1232px] mx-auto w-full flex flex-col mt-[-40vh] z-[10] relative scroll-mt-[80px]"
      id="contact"
      aria-labelledby="contact-title"
    >
      <h2 id="contact-title" className="text-[10vw] lg:text-[6vw] font-bold uppercase tracking-[-0.03em] leading-[0.86] max-w-[16ch]">
        {data.title}
      </h2>
      <p className="text-[17px] lg:text-[21px] text-muted mt-[20px] max-w-[46ch]">{data.subtitle}</p>

      <div className="mt-[40px] lg:mt-[64px] w-full">
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-[64px] w-full">
          <li>
            <a href={`mailto:${PERSON.email}`} className={row}>
              <FaEnvelope aria-hidden="true" />
              <span className="min-w-0 break-all"><span className="sr-only">{data.email}: </span>{PERSON.email}</span>
            </a>
          </li>
          <li>
            <a href={PERSON.telegram} target="_blank" rel="noopener noreferrer" className={row}>
              <FaTelegramPlane aria-hidden="true" /> {data.telegram} {PERSON.telegramHandle}
            </a>
          </li>
          <li>
            <a href={PERSON.linkedin} target="_blank" rel="noopener noreferrer" className={row}>
              <FaLinkedin aria-hidden="true" /> {data.linkedin}
            </a>
          </li>
          <li>
            <a href={PERSON.github} target="_blank" rel="noopener noreferrer" className={row}>
              <FaGithub aria-hidden="true" /> {data.github}
            </a>
          </li>
          <li className="md:col-span-2">
            <a href={PERSON.cv} download className={`${row} uppercase text-accent`}>
              <FaDownload aria-hidden="true" /> {data.downloadCv}
            </a>
          </li>
        </ul>

      </div>
    </section>
  );
}
