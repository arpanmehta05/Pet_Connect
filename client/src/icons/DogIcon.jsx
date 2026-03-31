export default function DogIcon({ className = 'w-6 h-6', ...props }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M11 5l-1-3H7l-1 3" />
      <path d="M18 5l-1-3h-3l-1 3" />
      <path d="M6 5a6 6 0 006 6 6 6 0 006-6" />
      <path d="M6 5c-2 0-3 1.5-3 3v4c0 2.5 1.5 4 3.5 4H8" />
      <path d="M18 5c2 0 3 1.5 3 3v4c0 2.5-1.5 4-3.5 4H16" />
      <circle cx="10" cy="8" r="0.5" fill="currentColor" />
      <circle cx="14" cy="8" r="0.5" fill="currentColor" />
      <path d="M9 16v4M15 16v4" />
      <path d="M8 20h8" />
    </svg>
  );
}
