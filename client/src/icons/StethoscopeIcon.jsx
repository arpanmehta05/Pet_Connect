export default function StethoscopeIcon({ className = 'w-6 h-6', ...props }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M4 4v4a5 5 0 0010 0V4" />
      <line x1="4" y1="4" x2="4" y2="4.01" />
      <line x1="14" y1="4" x2="14" y2="4.01" />
      <circle cx="18" cy="14" r="2" />
      <path d="M18 16v2a4 4 0 01-4 4h-2a4 4 0 01-4-4v-2" />
    </svg>
  );
}
