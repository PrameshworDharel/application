import React, { useState } from 'react';
const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const accordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div class="border border-gray-300 rounded">
      <div
        class="flex items-center justify-between p-4 cursor-pointer"
        onClick={accordion}
      >
        <h3 className="text-lg font-medium">{title}</h3>
        <span>{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && <div class="p-4">{content}</div>}
    </div>
  );
};

export default Accordion;
