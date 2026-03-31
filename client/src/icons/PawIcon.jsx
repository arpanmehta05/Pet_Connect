export default function PawIcon({ className = 'w-6 h-6', ...props }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <ellipse cx="7.5" cy="7" rx="2.5" ry="3" />
      <ellipse cx="16.5" cy="7" rx="2.5" ry="3" />
      <ellipse cx="4" cy="13" rx="2" ry="2.5" />
      <ellipse cx="20" cy="13" rx="2" ry="2.5" />
      <path d="M12 22c-4 0-7-3.5-7-6 0-2 1.5-3.5 3.5-4.5 1-.5 2.2-.5 3.5-.5s2.5 0 3.5.5c2 1 3.5 2.5 3.5 4.5 0 2.5-3 6-7 6z" />
    </svg>
  );
}
