'use client';

import { FaMailBulk, FaPhone } from "react-icons/fa";

export default function ContactMe() {

  return (
    <div
      className="text-white px-[16px] py-[80px] lg:py-[120px] max-w-[1232px] mx-auto w-full flex flex-col"
      style={{ background: '' }}
    >
      <p className="text-[16px] lg:text-[20px] opacity-80 text-center font-[family-name:var(--font-jetBrains)]">{"<Let's build something cool together />"}</p>
      <h2 className="text-[38px] sm:text-[48px] lg:text-[54px] font-bold text-center uppercase">Contact me</h2>
      
      <div className="flex flex-col md:flex-row gap-[20px] mx-auto mt-[20px] md:mt-[40px] lg:mt-[60px]">
        <div className="flex flex-col gap-[20px] h-[260px] w-full max-w-[330px]">
          <div className="bg-[#182C40] rounded-xl p-4 h-full w-full flex items-center gap-[12px]">
            <FaPhone />
            +38 (050) 130-59-07
          </div>
          <div className="bg-[#262D3C] rounded-xl p-4 h-full w-full flex items-center ">
            <a href="valeriapetropavlovska@gmail.com" className="flex items-center gap-[12px]"> <FaMailBulk />valeriapetropavlovska@gmail.com</a>
          </div>

        </div>
        <div className="flex flex-col gap-[12px] w-full max-w-[330px] overflow-hidden ">
          <div className="badge-base LI-profile-badge mx-auto md:hidden" data-locale="en_US" data-size="medium" data-theme="light" data-type="HORIZONTAL" data-vanity="valleri" data-version="v1">
            <a className="badge-base__link LI-simple-link hidden" href="https://ua.linkedin.com/in/valleri?trk=profile-badge">Valeriia Petropavlovska</a>
          </div>

          <div className="badge-base LI-profile-badge hidden md:block" data-locale="en_US" data-size="large" data-theme="light" data-type="HORIZONTAL" data-vanity="valleri" data-version="v1">
            <a className="badge-base__link LI-simple-link hidden" href="https://ua.linkedin.com/in/valleri?trk=profile-badge">Valeriia Petropavlovska</a>
          </div>       
        </div>
      </div>
    </div>
  );
}



