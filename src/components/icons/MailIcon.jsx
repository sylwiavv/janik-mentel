import * as React from 'react';
import { theme } from '../../assets/styles/theme';

const MailIcon = ({ strokeColor = theme.colors.contactIconStrokeColor }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="210" height="155" viewBox="0 0 210 155" fill="none">
    <mask id="path-2-inside-1_47_66" fill="white">
      <rect width="210" height="155" rx="8" />
    </mask>
    <rect width="210" height="155" rx="8" stroke={strokeColor} strokeWidth="32" mask="url(#path-2-inside-1_47_66)" />
    <path
      d="M10 11L100.437 94.9024C103.528 97.7699 108.313 97.7464 111.376 94.8489L200 11"
      stroke={strokeColor}
      strokeWidth="16"
    />
  </svg>
);

export default MailIcon;
