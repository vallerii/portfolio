"use client";

import { useId, useState } from "react";

type QuestionItemProps = {
  item: {
    question: string;
    answer: string;
  };
};

const QuestionItem: React.FC<QuestionItemProps> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const answerId = useId();

  return (
    <div className="flex py-[12px] items-center border-b border-[#747474] gap-2 hover:scale-105 transition-all duration-300">
      <div className="flex flex-col justify-center w-full">
        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls={answerId}
          onClick={() => setIsOpen(!isOpen)}
          className="flex cursor-pointer text-left text-[16px] lg:text-[20px] font-[500] uppercase"
        >
          <span aria-hidden="true" className={`transition-transform duration-300 ${isOpen ? "rotate-90" : "rotate-0"}`}>
            {">"}
          </span>
          <span>&nbsp; {item.question}</span>
        </button>
        <p
          id={answerId}
          className={`pt-[8px] text-[#A8A9B4] text-[16px] font-[400] pl-[24px] transition-all duration-500 overflow-hidden ${isOpen ? "max-h-400 opacity-100" : "max-h-0 opacity-0"}`}
        >
          {item.answer}
        </p>
      </div>
    </div>
  );
};

export default QuestionItem;
