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
    <div className="flex py-[18px] items-center border-b border-line gap-2 transition-colors duration-300 hover:border-accent">
      <div className="flex flex-col justify-center w-full">
        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls={answerId}
          onClick={() => setIsOpen(!isOpen)}
          className="flex cursor-pointer text-left text-[20px] lg:text-[26px] font-bold uppercase tracking-[-0.01em]"
        >
          <span aria-hidden="true" className={`transition-transform duration-300 ${isOpen ? "rotate-90" : "rotate-0"}`}>
            {">"}
          </span>
          <span>&nbsp; {item.question}</span>
        </button>
        <p
          id={answerId}
          className={`pt-[10px] text-muted text-[16px] lg:text-[17px] font-[400] pl-[28px] leading-[1.55] transition-all duration-500 overflow-hidden ${isOpen ? "max-h-400 opacity-100" : "max-h-0 opacity-0"}`}
        >
          {item.answer}
        </p>
      </div>
    </div>
  );
};

export default QuestionItem;
