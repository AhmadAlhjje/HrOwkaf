import React from 'react';

const SyrianFlag: React.FC = () => {
  return (
    <svg viewBox="0 0 900 600" className="w-full h-full">
      {/* Red stripe */}
      <rect width="900" height="200" fill="#CE1126" />

      {/* White stripe */}
      <rect y="200" width="900" height="200" fill="#FFFFFF" />

      {/* Black stripe */}
      <rect y="400" width="900" height="200" fill="#000000" />

      {/* Green stars */}
      <g fill="#007A3D">
        {/* First star */}
        <path
          d="M 225 250 L 244 306 L 304 306 L 256 342 L 275 398 L 225 362 L 175 398 L 194 342 L 146 306 L 206 306 Z"
        />

        {/* Second star */}
        <path
          d="M 450 250 L 469 306 L 529 306 L 481 342 L 500 398 L 450 362 L 400 398 L 419 342 L 371 306 L 431 306 Z"
        />

        {/* Third star */}
        <path
          d="M 675 250 L 694 306 L 754 306 L 706 342 L 725 398 L 675 362 L 625 398 L 644 342 L 596 306 L 656 306 Z"
        />
      </g>
    </svg>
  );
};

export default SyrianFlag;
