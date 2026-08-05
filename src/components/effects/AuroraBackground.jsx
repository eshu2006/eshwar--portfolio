export default function AuroraBackground({ children, className = '' }) {
  return (
    <div className={`relative flex flex-col items-center justify-center bg-dark-bg transition-bg duration-300 ${className}`}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -inset-[10px] opacity-50 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent blur-3xl animate-pulse-slow"></div>
      </div>
      {children}
    </div>
  )
}
