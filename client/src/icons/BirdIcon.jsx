export default function BirdIcon({ className = 'w-6 h-6', ...props }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="12" cy="8" r="4" />
      <path d="M16 8c2-1 5-.5 5 1" />
      <circle cx="13" cy="7" r="0.5" fill="currentColor" />
      <path d="M8 12c-2 2-3 5-2 8h4" />
      <path d="M16 12c2 2 3 5 2 8h-4" />
      <path d="M10 20h4" />
    </svg>
  );
}
