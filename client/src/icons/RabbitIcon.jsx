export default function RabbitIcon({ className = 'w-6 h-6', ...props }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M8 3c0 0-1.5 4-1 6" />
      <path d="M16 3c0 0 1.5 4 1 6" />
      <ellipse cx="12" cy="14" rx="6" ry="6" />
      <circle cx="10" cy="12" r="0.5" fill="currentColor" />
      <circle cx="14" cy="12" r="0.5" fill="currentColor" />
      <path d="M11 15c.4.4 1.6.4 2 0" />
      <ellipse cx="12" cy="20" rx="2" ry="1" />
    </svg>
  );
}
