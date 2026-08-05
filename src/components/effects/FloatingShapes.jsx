export default function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-[30%] right-[10%] w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }}></div>
    </div>
  )
}
