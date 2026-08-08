import { BorderBeam } from '@/components/ui/border-beam'

export function RegistrationCTA() {
  return (
    <section
      aria-labelledby="registration-cta-heading"
      className="relative mb-16 overflow-hidden rounded-2xl border border-white/[0.07] bg-[#111111] shadow-2xl"
    >
      {/* A single tight pool of warm light behind the button — not a wash.
          An earlier version layered a broad radial, a 40%-height linear
          gradient and a bright bottom rule; together they read as a muddy
          brown smear across the lower half of the card. One small, low-opacity
          source is enough to suggest embers. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-[14%] h-40 w-[min(30rem,80%)] rounded-full blur-3xl"
        style={{ background: 'rgba(255,122,24,0.14)' }}
      />

      {/* One beam, ember, travelling the border. Enough to tie back to the
          hero without lighting up the whole panel. */}
      <BorderBeam size={200} duration={11} borderWidth={1} colorFrom="#FF7A18" colorTo="#FFD9A0" />

      <div className="relative flex flex-col items-center px-6 py-14 text-center sm:px-12 sm:py-16">
        <h2
          id="registration-cta-heading"
          className="mb-4 font-display text-2xl font-bold tracking-wide leading-snug text-white sm:text-4xl"
        >
          Ready to Take the{' '}
          <span className="bg-gradient-to-b from-[#FFD9A0] via-[#FF9A3D] to-[#C2450F] bg-clip-text text-transparent">
            Stage?
          </span>
        </h2>

        <p className="mb-8 max-w-xl text-base leading-relaxed text-neutral-400 sm:text-[1.0625rem]">
          Join Speech Olympiad XIX and let your voice be heard. Preliminaries
          begin 6th September 2026.
        </p>

        {/* Registration is disabled for now — this is the placeholder state.
            When it reopens, swap for a <Link to="/register"> with the same
            classes minus the disabled styling. */}
        <button
          type="button"
          disabled
          className="relative inline-flex cursor-not-allowed items-center justify-center whitespace-nowrap rounded-full border border-[#FF7A18]/25 bg-[#FF7A18]/[0.06] px-6 py-3 text-sm font-semibold text-[#FFA53D] sm:px-7 sm:py-3.5 sm:text-base"
        >
          Registration Opening Soon
        </button>
      </div>
    </section>
  )
}
