import { Link } from 'react-router-dom'
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
        className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-[14%] h-40 w-[min(30rem,80%)] rounded-full bg-ember/15 blur-3xl"
      />

      {/* One beam, ember, travelling the border. Enough to tie back to the
          hero without lighting up the whole panel. */}
      <BorderBeam size={200} duration={11} borderWidth={1} />

      <div className="relative flex flex-col items-center px-6 py-14 text-center sm:px-12 sm:py-16">
        <h2
          id="registration-cta-heading"
          className="heading-section mb-4 text-white sm:text-4xl"
        >
          Ready to Take the{' '}
          <span className="bg-linear-to-b from-ember-light via-ember-mid to-ember-deep bg-clip-text text-transparent">
            Stage?
          </span>
        </h2>

        <p className="mb-8 max-w-xl text-base leading-relaxed text-neutral-400 sm:text-[1.0625rem]">
          Registrations are open. Preliminaries begin 6th September 2026 — take
          your place on the stage.
        </p>

        <Link
          to="/register"
          className="btn-ember rounded-full px-6 py-3 text-sm sm:px-7 sm:py-3.5 sm:text-base"
        >
          Register Now
        </Link>
      </div>
    </section>
  )
}
