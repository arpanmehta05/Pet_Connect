export default function BowlIcon({ className = 'w-6 h-6', ...props }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M3 11h18" />
      <path d="M5 11c0 4.4 3.1 8 7 8s7-3.6 7-8" />
      <path d="M8 7c0-1 .5-2 1.5-2s1.5 1 1.5 2" />
      <path d="M13 7c0-1 .5-2 1.5-2s1.5 1 1.5 2" />
    </svg>
  );
}
