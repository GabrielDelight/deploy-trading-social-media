import * as React from "react";
import { SVGProps } from "react";

const LineSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={150}
    height={75}
    viewBox='0 0 150 75'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M2.5 2.5H147.5'
      stroke='#264980'
      strokeWidth={5}
      strokeLinecap='round'
    />
    <path
      d='M2.5 12.5H147.5'
      stroke='#264980'
      strokeWidth={5}
      strokeLinecap='round'
    />
    <path
      d='M2.5 22.5H147.5'
      stroke='#264980'
      strokeWidth={5}
      strokeLinecap='round'
    />
    <path
      d='M2.5 32.5H147.5'
      stroke='#264980'
      strokeWidth={5}
      strokeLinecap='round'
    />
    <path
      d='M2.5 42.5H147.5'
      stroke='#264980'
      strokeWidth={5}
      strokeLinecap='round'
    />
    <path
      d='M2.5 52.5H147.5'
      stroke='#264980'
      strokeWidth={5}
      strokeLinecap='round'
    />
    <path
      d='M2.5 62.5H147.5'
      stroke='#264980'
      strokeWidth={5}
      strokeLinecap='round'
    />
    <path
      d='M2.5 72.5H147.5'
      stroke='#264980'
      strokeWidth={5}
      strokeLinecap='round'
    />
  </svg>
);

export default LineSVG;
