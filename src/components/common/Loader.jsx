export default function Loader({ className = '' }) {
  return (
    <div className={`flex items-center justify-center min-h-[300px] w-full ${className}`}>
      <div className="relative flex items-center justify-center">
        {/* Outer pulse */}
        <div className="absolute h-16 w-16 rounded-full border-2 border-accent/20 animate-ping"></div>
        {/* Inner spinner */}
        <div className="h-12 w-12 rounded-full border-t-2 border-r-2 border-accent animate-spin"></div>
      </div>
    </div>
  )
}
