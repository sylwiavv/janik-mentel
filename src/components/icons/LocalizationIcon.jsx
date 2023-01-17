import * as React from 'react';
import { theme } from '../../assets/styles/theme';

const LocalizationIcon = ({ strokeColor = theme.colors.contactIconStrokeColor }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="199" height="290" viewBox="0 0 199 290" fill="none">
    <g clipPath="url(#clip0_205_13)">
      <path
        d="M23.9871 129.472C23.2472 127.849 -8.74718 56.9312 39.0793 29.1574C78.6783 6.16137 120.553 6.40071 160.327 29.1574C208.98 56.9935 175.657 129.162 175.501 129.499L175.493 129.515L106.184 275.674C104.763 278.67 100.523 278.736 99.0102 275.785L24.0383 129.575C24.0128 129.525 24.0103 129.523 23.9871 129.472Z"
        stroke={strokeColor}
        strokeWidth="24"
      />
      <circle cx="99" cy="90" r="30" stroke={strokeColor} strokeWidth="20" />
    </g>
    <defs>
      <clipPath id="clip0_205_13">
        <rect width="199" height="290" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default LocalizationIcon;

// #18394b
