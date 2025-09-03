'use client';

import { FaDownload, FaPhone } from "react-icons/fa";

export default function ContactMe() {

  return (
    <div
      className="text-white px-[16px] py-[80px] lg:py-[120px] max-w-[1232px] mx-auto w-full flex flex-col"
      style={{ background: '' }}
      id="contact"
    >
      <p className="text-[16px] lg:text-[20px] opacity-80 text-center font-[family-name:var(--font-jetBrains)]">{"<Let's build something cool together />"}</p>
      <h2 className="text-[38px] sm:text-[48px] lg:text-[54px] font-bold text-center uppercase">Contact me</h2>
      
      <div className="flex flex-col md:flex-row gap-[20px] mx-auto mt-[20px] md:mt-[40px] lg:mt-[60px]">
        <div className="flex flex-col gap-[20px] h-[260px] w-full max-w-[330px]">
          {/* Телефон + WhatsApp */}
          <a
            href="https://wa.me/380501305907"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-full"
          >
            <div className="bg-[#182C40] rounded-xl p-4 h-full w-full flex items-center justify-center gap-[12px]">
              <FaPhone />
              <span>+38 (050) 130-59-07</span>
          
            </div>
          </a>

          {/* Кнопка скачать CV */}
          <div className="bg-[#262D3C] rounded-xl p-4 h-full w-full flex items-center justify-center">
            <a
              href="/cv.pdf"
              download
              className="flex items-center gap-[12px] text-white hover:text-gray-300"
            >
              <FaDownload /> Download CV
            </a>
          </div>
        </div>

        {/* LinkedIn */}
        <div className="flex flex-col gap-[12px] w-full max-w-[330px] overflow-hidden">
          <div
            className="badge-base LI-profile-badge mx-auto md:hidden"
            data-locale="en_US"
            data-size="medium"
            data-theme="light"
            data-type="HORIZONTAL"
            data-vanity="valleri"
            data-version="v1"
          >
            <a
              className="badge-base__link LI-simple-link hidden"
              href="https://ua.linkedin.com/in/valleri?trk=profile-badge"
            >
              Valeriia Petropavlovska
            </a>
          </div>

          <div
            className="badge-base LI-profile-badge hidden md:block"
            data-locale="en_US"
            data-size="large"
            data-theme="light"
            data-type="HORIZONTAL"
            data-vanity="valleri"
            data-version="v1"
          >
            <a
              className="badge-base__link LI-simple-link hidden"
              href="https://ua.linkedin.com/in/valleri?trk=profile-badge"
            >
              Valeriia Petropavlovska
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}



