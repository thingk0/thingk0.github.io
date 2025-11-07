import SectionDivider from './SectionDivider'

export default function SectionTitle({
  title,
  subtitle,
  subtitleSize = "base",
  dividerWidth = "default",
  spacing = "default"
}) {
  const containerClass = spacing === "compact" ? "mb-12" : "mb-16"
  const titleMargin = spacing === "compact" ? "mb-6" : "mb-4"
  const dividerMargin = spacing === "compact" ? "mb-8" : ""
  const subtitleClass = subtitleSize === "xl"
    ? "text-xl text-gray-600 dark:text-gray-400"
    : "text-gray-600 dark:text-gray-400"

  return (
    <div className={`text-center ${containerClass}`}>
      <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 dark:text-white ${titleMargin}`}>
        {title}
      </h2>
      <SectionDivider width={dividerWidth} className={dividerMargin} />
      {subtitle && (
        <p className={`${subtitleClass} mt-4`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
