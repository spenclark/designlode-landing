import { useId } from "react";

export default function LogoMark({ size = 28, className = "", title = "Designlode" }) {
  const id = useId();
  const gradId = `veinGold-${id}`;
  const glowId = `veinGlow-${id}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      className={className}
    >
      {title ? <title>{title}</title> : null}
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f7e6b5" />
          <stop offset="45%" stopColor="#e6c46b" />
          <stop offset="100%" stopColor="#c08f2f" />
        </linearGradient>
        <filter id={glowId} x="-10%" y="-10%" width="120%" height="120%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="1.05" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <path
        d="M12 50 C18 42 24 32 28 24 C32 18 40 16 48 18
           C54 20 52 28 46 32 C38 36 34 44 28 50
           C22 56 14 54 14 46"
        fill="none"
        stroke={`url(#${gradId})`}
        strokeWidth="5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter={`url(#${glowId})`}
      />
      <path
        d="M14 48 C20 40 26 30 32 26 C38 22 46 22 50 20"
        fill="none"
        stroke="#fff7d6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.9"
      />
    </svg>
  );
}

