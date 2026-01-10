// SVG Icon components for elegant replacements of emojis

interface IconProps {
  size?: string | number;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const LizardIcon = ({ size = 24, color = '#4ade80', className, style }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} style={style}>
    <path d="M20 9c-1.5-1-4-1-6.5-1s-5 0-6.5 1C5.5 10 4 11 3 11.5c-.5.3-.5.8-.2 1.2l1.7 2.3c.3.4.8.5 1.2.3L8 14l1 2c.2.4.7.6 1.1.5l2.4-.6c.4-.1.7-.5.7-.9V13h2v2c0 .4.3.8.7.9l2.4.6c.4.1.9-.1 1.1-.5l1-2 2.3 1.3c.4.2.9.1 1.2-.3l1.7-2.3c.3-.4.3-.9-.2-1.2-1-.5-2.5-1.5-4-2.5z" fill={color} opacity="0.9"/>
    <circle cx="9" cy="9" r="1.5" fill={color}/>
    <circle cx="15" cy="9" r="1.5" fill={color}/>
    <path d="M12 6c-2 0-4 .5-5.5 1.5-.3.2-.5.5-.5.8s.2.7.5.8C8 9.8 10 10 12 10s4-.2 5.5-.9c.3-.1.5-.5.5-.8s-.2-.6-.5-.8C16 6.5 14 6 12 6z" fill={color} opacity="0.7"/>
  </svg>
);

export const SoundIcon = ({ size = 24, color = '#4ade80', className, style }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} style={style}>
    <path d="M3 9v6h4l5 5V4L7 9H3z" fill={color}/>
    <path d="M14 8.23v7.54c1.48-.73 2.5-2.25 2.5-4.02 0-1.77-1.02-3.29-2.5-4.02zM16.5 12c0 1.38-.62 2.61-1.6 3.45v2.01c1.77-.85 3-2.65 3-4.76 0-2.11-1.23-3.91-3-4.76v2.01c.98.84 1.6 2.07 1.6 3.45z" fill={color} opacity="0.7"/>
  </svg>
);

export const PauseIcon = ({ size = 24, color = '#0D2818', className, style }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} style={style}>
    <rect x="6" y="4" width="4" height="16" rx="1" fill={color}/>
    <rect x="14" y="4" width="4" height="16" rx="1" fill={color}/>
  </svg>
);

export const ResetIcon = ({ size = 24, color = '#4ade80', className, style }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} style={style}>
    <path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z" fill={color}/>
  </svg>
);

export const GlobeIcon = ({ size = 24, color = '#4ade80', className, style }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} style={style}>
    <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2" fill="none"/>
    <path d="M2 12h20M12 2c-2.5 3-2.5 9 0 20M12 2c2.5 3 2.5 9 0 20" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <ellipse cx="12" cy="12" rx="5" ry="10" stroke={color} strokeWidth="2" fill="none"/>
  </svg>
);

export const SparklesIcon = ({ size = 24, color = '#4ade80', className, style }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} style={style}>
    <path d="M12 1l2.5 7.5L22 11l-7.5 2.5L12 21l-2.5-7.5L2 11l7.5-2.5z" fill={color}/>
    <path d="M7 3l1 3 3 1-3 1-1 3-1-3-3-1 3-1z" fill={color} opacity="0.6"/>
    <path d="M17 17l1 3 3 1-3 1-1 3-1-3-3-1 3-1z" fill={color} opacity="0.6"/>
  </svg>
);

export const LightBulbIcon = ({ size = 24, color = '#4ade80', className, style }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} style={style}>
    <path d="M9 21h6M12 3a6 6 0 0 0-6 6c0 2.5 1.5 4.5 3 5.5V17a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-2.5c1.5-1 3-3 3-5.5a6 6 0 0 0-6-6z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <path d="M12 3v3M6.34 6.34l2.12 2.12M3 12h3M18.66 6.34l-2.12 2.12M21 12h-3" stroke={color} strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
  </svg>
);

export const LeafIcon = ({ size = 24, color = '#4ade80', className, style }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} style={style}>
    <path d="M17 8C8 10 5.9 16.17 3.82 21.34l-.71-.71C2.32 19.84 2 19 2 18c0-3.5 1.5-6.5 4-8.5C8.5 7 11.5 5.5 15 5c1-.13 2-.13 3 0-.5 2-1.5 4-3 6z" fill={color}/>
    <path d="M15 5c-1.5 2-2 4-2 6s.5 4 2 6c1.5-2 2-4 2-6s-.5-4-2-6z" fill={color} opacity="0.6"/>
  </svg>
);

export const PalmTreeIcon = ({ size = 24, color = '#4ade80', className, style }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} style={style}>
    <path d="M12 22V8M12 8c-2 0-4-1-5-3 1.5.5 3 1 5 1s3.5-.5 5-1c-1 2-3 3-5 3zM12 8c0-2 1-4 3-5-.5 1.5-1 3-1 5s.5 3.5 1 5c-2-1-3-3-3-5zM12 8c0-2-1-4-3-5 .5 1.5 1 3 1 5s-.5 3.5-1 5c2-1 3-3 3-5z" fill={color}/>
    <ellipse cx="12" cy="21" rx="3" ry="1" fill={color} opacity="0.6"/>
  </svg>
);

export const DrinkIcon = ({ size = 24, color = '#4ade80', className, style }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} style={style}>
    <path d="M8 2h8l2 4H6l2-4zM6 6h12l-1 14a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2L6 6z" fill={color}/>
    <circle cx="12" cy="10" r="1.5" fill="white" opacity="0.5"/>
    <circle cx="10" cy="14" r="1" fill="white" opacity="0.5"/>
    <circle cx="14" cy="13" r="1" fill="white" opacity="0.5"/>
    <path d="M8 6h8" stroke={color} strokeWidth="2" strokeLinecap="round" opacity="0.7"/>
  </svg>
);

export const TurtleIcon = ({ size = 24, color = '#4ade80', className, style }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} style={style}>
    <ellipse cx="12" cy="12" rx="8" ry="5" fill={color}/>
    <circle cx="12" cy="12" r="3" fill={color} opacity="0.7"/>
    <circle cx="8" cy="10" r="1.5" fill={color} opacity="0.7"/>
    <circle cx="16" cy="10" r="1.5" fill={color} opacity="0.7"/>
    <circle cx="12" cy="16" r="1.5" fill={color} opacity="0.7"/>
    <circle cx="7" cy="7" r="1" fill={color}/>
    <circle cx="17" cy="7" r="1" fill={color}/>
    <path d="M3 12c0 0 1-2 3-2M21 12c0 0-1-2-3-2M5 15c0 0 1 2 2 2M19 15c0 0-1 2-2 2" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const ParrotIcon = ({ size = 24, color = '#4ade80', className, style }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} style={style}>
    <circle cx="12" cy="8" r="5" fill={color}/>
    <circle cx="10" cy="7" r="1.5" fill="white"/>
    <circle cx="10" cy="7" r="0.7" fill="#0D2818"/>
    <path d="M8 6c-1-1-2-1-3-1v2c1 0 2 0 3-1z" fill={color} opacity="0.8"/>
    <path d="M12 13c-2 2-3 5-3 7h2c0-1.5.5-3 1.5-4.5.5-.8 1-1.5 1.5-2M12 13c2 2 3 5 3 7h-2c0-1.5-.5-3-1.5-4.5-.5-.8-1-1.5-1.5-2" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <path d="M14 11c1 0 2-.5 3-1.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.7"/>
  </svg>
);

export const SnakeIcon = ({ size = 24, color = '#4ade80', className, style }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} style={style}>
    <path d="M20 8c0-2.2-1.8-4-4-4s-4 1.8-4 4c0 1.5.8 2.8 2 3.5C12.8 12.2 12 13.5 12 15c0 1.5.8 2.8 2 3.5C12.8 19.2 12 20.5 12 22h2c0-1.1.9-2 2-2s2-.9 2-2-.9-2-2-2-2-.9-2-2 .9-2 2-2 2-.9 2-2z" fill={color}/>
    <circle cx="17" cy="7" r="1" fill="white"/>
    <path d="M19 7c0-.5-.5-1-1-1" stroke={color} strokeWidth="1" strokeLinecap="round" opacity="0.7"/>
  </svg>
);

export const CrocodileIcon = ({ size = 24, color = '#4ade80', className, style }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} style={style}>
    <path d="M3 14h18v3c0 1.66-1.34 3-3 3H6c-1.66 0-3-1.34-3-3v-3z" fill={color}/>
    <path d="M21 14V11c0-2.21-1.79-4-4-4H7c-2.21 0-4 1.79-4 4v3" fill={color} opacity="0.8"/>
    <circle cx="8" cy="10" r="1.5" fill="white"/>
    <circle cx="16" cy="10" r="1.5" fill="white"/>
    <path d="M3 14h2l1 2H3zM21 14h-2l-1 2h3zM9 16h1.5M13.5 16h1.5" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const DinoIcon = ({ size = 24, color = '#4ade80', className, style }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} style={style}>
    <path d="M4 18h3v3H4zM10 18h3v3h-3zM16 7c0-2.76-2.24-5-5-5S6 4.24 6 7v4h12V9c0-1.1-.9-2-2-2z" fill={color}/>
    <path d="M6 11v7h12v-7H6z" fill={color} opacity="0.8"/>
    <circle cx="9" cy="8" r="1" fill="white"/>
    <path d="M14 7l2-2 1 1-1.5 1.5z" fill={color} opacity="0.6"/>
  </svg>
);

export const HeartIcon = ({ size = 24, color = '#4ade80', className, style }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} style={style}>
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill={color}/>
  </svg>
);
