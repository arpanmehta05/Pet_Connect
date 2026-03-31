export default function CatIcon({ className = 'w-6 h-6', ...props }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M4 9l2-6h2l1 3" />
      <path d="M20 9l-2-6h-2l-1 3" />
      <ellipse cx="12" cy="13" rx="7" ry="7" />
      <circle cx="10" cy="11" r="0.5" fill="currentColor" />
      <circle cx="14" cy="11" r="0.5" fill="currentColor" />
      <path d="M10 14c.8.8 3.2.8 4 0" />
      <line x1="10" y1="14" x2="7" y2="13" />
      <line x1="10" y1="14" x2="7" y2="15" />
      <line x1="14" y1="14" x2="17" y2="13" />
      <line x1="14" y1="14" x2="17" y2="15" />
    </svg>
  );
}
