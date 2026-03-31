export default function HeartHandIcon({ className = 'w-6 h-6', ...props }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M12 7.5c-.7-2.2-3-3.5-5-2.8S4 8 4.7 10.2c.5 1.6 3.3 4.3 7.3 7.3 4-3 6.8-5.7 7.3-7.3.7-2.2-.3-4.5-2.3-5.2s-4.3.6-5 2.8z" />
      <path d="M18 16l-2 1-2-1" />
      <path d="M16 17v4" />
      <path d="M20 20h-8" />
    </svg>
  );
}
