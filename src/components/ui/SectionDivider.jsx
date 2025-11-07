export default function SectionDivider({ width = "default", className = "" }) {
  const widthClass = {
    default: "w-20",
    wide: "w-24",
    narrow: "w-16"
  }[width]

  return (
    <div className={`${widthClass} h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto ${className}`} />
  )
}
