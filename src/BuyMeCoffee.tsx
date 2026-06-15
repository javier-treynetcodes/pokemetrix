import React, { useState } from 'react';
import './css/bmc.css';

const BMC_URL = 'https://www.buymeacoffee.com/treynetcodes';
const LABEL = 'Support the studio';

const BuyMeCoffee: React.FC = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={BMC_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`bmc-widget ${hovered ? 'is-hovered' : ''}`}
      aria-label={LABEL}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span className="bmc-label">{LABEL}</span>
      <i className="bi bi-arrow-right bmc-icon" aria-hidden="true"></i>
    </a>
  );
};

export default BuyMeCoffee;
