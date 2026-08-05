import useMousePosition from '../../hooks/useMousePosition'

export default function CursorGlow() {
  const { x, y } = useMousePosition()

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition duration-300"
      style={{
        background: `radial-gradient(600px at ${x}px ${y}px, rgba(192, 132, 252, 0.08), transparent 80%)`,
      }}
    />
  )
}
