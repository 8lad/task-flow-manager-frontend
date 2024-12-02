import React from 'react';
import clsx from 'clsx';

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className, ...props }) => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="1024.000000pt"
      height="1024.000000pt"
      viewBox="0 0 1024.000000 1024.000000"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      className={clsx(className, 'h-[45px] w-[45px] shrink-0 rounded-[50%]')}
      {...props}
    >
      <g transform="translate(0.000000,1024.000000) scale(0.100000,-0.100000)" stroke="none">
        <path
          d="M0 5120 l0 -5120 5120 0 5120 0 0 5120 0 5120 -5120 0 -5120 0 0
-5120z m7100 2304 c102 -19 170 -55 252 -132 80 -76 138 -168 167 -267 21 -70
21 -78 19 -1255 l-3 -1185 -23 -65 c-34 -92 -97 -194 -153 -244 -63 -57 -170
-112 -243 -125 -42 -8 -675 -11 -2110 -11 -2230 0 -2093 -3 -2213 56 -74 36
-173 130 -210 201 -17 32 -41 90 -54 128 l-23 70 -1 1180 -1 1180 23 83 c40
149 142 274 276 338 143 67 -21 62 2202 62 1713 1 2031 -1 2095 -14z m-4549
-3308 c72 -67 171 -127 259 -157 60 -20 91 -22 400 -29 184 -4 1145 -6 2135
-4 l1800 2 83 30 c45 17 113 51 151 77 66 43 174 153 201 204 12 23 13 21 52
-49 53 -96 228 -488 285 -640 22 -58 24 -76 20 -165 -6 -126 -25 -185 -88
-279 -79 -119 -201 -204 -349 -245 -74 -21 -78 -21 -2476 -21 -2358 0 -2402 0
-2478 20 -228 58 -383 221 -421 444 -28 165 -14 269 57 426 14 30 35 87 48
125 12 39 28 79 36 91 7 12 20 46 29 77 9 30 35 90 59 132 24 42 50 90 57 106
l12 31 34 -60 c19 -34 61 -86 94 -116z"
        />
        <path
          d="M4992 7318 c-85 -23 -96 -170 -15 -207 56 -26 107 -2 143 68 37 71
-46 161 -128 139z"
        />
        <path
          d="M3032 7015 c-54 -23 -97 -62 -126 -114 l-26 -49 2 -1084 3 -1085 30
-49 c34 -54 78 -88 134 -104 23 -6 708 -10 1981 -10 1870 0 1947 1 1985 19 50
23 74 49 119 132 l36 66 0 1045 c0 1134 2 1100 -55 1174 -14 19 -43 43 -64 53
-36 19 -88 19 -2011 19 -1650 0 -1980 -2 -2008 -13z"
        />
        <path
          d="M4377 3636 c-47 -17 -72 -39 -103 -91 -37 -64 -84 -185 -84 -218 0
-40 62 -101 118 -116 30 -9 242 -11 739 -9 777 3 726 -1 792 73 42 48 40 77
-10 192 -48 109 -88 156 -144 172 -63 17 -1258 14 -1308 -3z"
        />
      </g>
    </svg>
  );
};

export default Logo;
