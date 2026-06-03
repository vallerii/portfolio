import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const CurrentYear = new Date().getFullYear();
  return (
    <footer className="px-[16px] py-[20px] w-full max-w-[1232px] mx-auto mb-[10vh] flex flex-col justify-between gap-[30px] lg:gap-[60px]">
      <div>
        <Link href="/projects"  className="text-[16px] lg:text-[20px] opacity-80 flex items-center gap-[8px]">
          <span className="font-[family-name:var(--font-jetBrains)] text-[12px]">{"</>"}</span> All projects
        </Link>
        {/* <a href="https://github.com/vallerii" target="_blank" className="text-[16px] lg:text-[20px] opacity-80 flex items-center gap-[8px]">
          <FaGithub /> GitHub
        </a> */}
        <br />
        <Link href="https://www.linkedin.com/in/valleri" target="_blank" className="text-[16px] lg:text-[20px] opacity-80 flex items-center gap-[8px]">
          <FaLinkedin /> LinkedIn
        </Link>
      </div>
       <div className="flex flex-col lg:flex-row gap-[20px] justify-between">
        <p className="text-[14px] lg:text-[16px] max-w-[800px] opacity-80">
          {`${CurrentYear} - Petropavlovska Valeriia`}
        </p>
        <p className="text-[14px] lg:text-[16px] max-w-[800px] opacity-80">
          Open to remote and freelance opportunities.
        </p>
      </div>
    </footer>
  );
}
export default Footer