"use client";

import { useState } from "react";
import { FaArrowDown } from "react-icons/fa";


type QuestionItem = {
  item: {
    question: string;
    answer: string;
  };
};

const QuestionItem: React.FC<QuestionItem> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="flex cursor-pointer py-[12px] items-center justify-baseline border-b border-[#747474]"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex flex-col justify-center w-full">
        <div className=" flex text-[16px] lg:text-[20px] font-[500] uppercase">
          <div className="min-w-auto w-max">
           • <span>&nbsp; </span>
          </div>
          
          <p >  {item.question}</p>

        </div>
        <div
          className={`answer pt-[8px] text-[#A8A9B4] text-[16px] font-[400] pl-[24px] transition-all duration-500 overflow-hidden ${isOpen ? "max-h-400 opacity-100" : "max-h-0 opacity-0"}`}
          dangerouslySetInnerHTML={{__html: item.answer|| ''}}
        />
         
      </div>
      <div
        className={`transition-transform duration-300 ${isOpen ? "rotate-90" : "rotate-0"}`}
      >
        <FaArrowDown width={20} height={20} />
      </div>
    </div>
  );
};

export default QuestionItem;
