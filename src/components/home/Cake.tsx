
import React from 'react';

const Cake = ({ size = 24 }: { size?: number }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"></path>
      <path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1"></path>
      <path d="M2 21h20"></path>
      <path d="M7 8v3"></path>
      <path d="M12 8v3"></path>
      <path d="M17 8v3"></path>
      <path d="M7 4h.01"></path>
      <path d="M12 4h.01"></path>
      <path d="M17 4h.01"></path>
    </svg>
  );
};

export default Cake;
