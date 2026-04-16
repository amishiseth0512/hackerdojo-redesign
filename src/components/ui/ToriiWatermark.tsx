/** Faint torii / gate watermark used in the hero. */
export function ToriiWatermark() {
  return (
    <div
      className="pointer-events-none absolute inset-0 flex justify-center overflow-hidden pt-2 opacity-[0.055] md:pt-6"
      aria-hidden
    >
      <svg
        viewBox="0 0 400 320"
        className="w-[min(94vw,880px)] translate-y-4 text-neutral-400"
        fill="currentColor"
      >
        <path d="M40 120h320v24H40zm32-40h48v40h-48zm240 0h48v40h-48zm-104-32h32v72h-32zM56 200h288v16H56zm24 32h48v48h-48zm192 0h48v48h-48zm-120 0h32v48h-32z" />
      </svg>
    </div>
  )
}
