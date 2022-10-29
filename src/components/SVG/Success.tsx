import * as React from "react";
import { SVGProps } from "react";

const SuccessSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={50}
    height={50}
    viewBox='0 0 110 99'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M107.566 45.144V49.515C107.553 70.555 92.2329 89.081 69.9039 95.047C47.5749 101.013 23.5719 92.997 10.9039 75.347C-1.76415 57.697 -0.085146 34.614 15.0399 18.62C30.1649 2.62598 55.1329 -2.47102 76.3939 6.09198'
      stroke='#1E9823'
      strokeWidth={3}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M107.567 11.5079L55 59.0639L39.23 44.8079'
      stroke='#1E9823'
      strokeWidth={3}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export default SuccessSVG;
