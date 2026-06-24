export function SCLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center text-[#5D4037] ${className}`}>
      {/* S and C interlocking text */}
      <span className="text-[2.5em] absolute -translate-x-[15%] -translate-y-[10%]" style={{ fontFamily: 'var(--font-playfair), serif', lineHeight: 1 }}>S</span>
      <span className="text-[2.5em] absolute translate-x-[15%] translate-y-[10%]" style={{ fontFamily: 'var(--font-playfair), serif', lineHeight: 1 }}>C</span>
      {/* Cake icon on top */}
      <svg viewBox="0 0 24 24" width="1.2em" height="1.2em" stroke="currentColor" strokeWidth="1.5" fill="none" className="absolute -top-[15%] left-1/2 -translate-x-1/2">
        <path d="M12 2v2m-4 4h8a4 4 0 0 1 4 4v2H4v-2a4 4 0 0 1 4-4zm-6 6h16v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6z" />
        <circle cx="12" cy="5" r="1" fill="currentColor" />
      </svg>
    </div>
  );
}
