import * as React from "react";
import { theme } from "../../assets/styles/theme";

const PhoneIcon = ({ strokeColor = theme.colors.contactIconStrokeColor }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="203"
    height="251"
    viewBox="0 0 203 251"
    fill="none"
  >
    <g clipPath="url(#clip0_213_4)">
      <path
        d="M37.7635 34.6354L71.7726 15.0002C75.599 12.7911 80.4917 14.1021 82.7008 17.9284L100.451 48.6723C102.66 52.4986 101.349 57.3914 97.5226 59.6005L60.7166 80.8505C56.8902 83.0596 55.5792 87.9524 57.7883 91.7787L113.538 188.341C115.747 192.167 120.64 193.478 124.467 191.269L161.273 170.019C165.099 167.81 169.992 169.121 172.201 172.947L190.701 204.99C192.91 208.816 191.599 213.709 187.773 215.918L156.18 234.158C150.8 237.264 144.586 238.785 138.397 238.253C79.9421 233.233 66.1844 213.253 41.8246 175.48C35.3015 165.365 30.1412 154.392 26.035 143.078C11.5273 103.105 0.527136 83.8399 28.0313 43.5133C30.5319 39.847 33.9202 36.8543 37.7635 34.6354Z"
        stroke={strokeColor}
        strokeWidth="16"
      />
    </g>
    <defs>
      <clipPath id="clip0_213_4">
        <rect width="203" height="251" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default PhoneIcon;
