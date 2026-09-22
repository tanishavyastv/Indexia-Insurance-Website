import processBg from '../assets/process/process-bg.webp'
import SectionSeam from './SectionSeam'
import { Connector } from './how-it-works/Connector'
import { steps } from './how-it-works/stepsData'
import { useStepSequence } from './how-it-works/useStepSequence'

export default function HowItWorks() {
  const stepsRef = useStepSequence<HTMLUListElement>()
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="relative bg-cover bg-center"
      style={{ backgroundImage: `url(${processBg})` }}
    >
      <SectionSeam />
      <div className="mx-auto max-w-360 px-5 py-8 pb-16 sm:px-8">
        {/* Header */}
        <div data-reveal className="mx-auto max-w-4xl text-center">
          <p className="flex items-center justify-center gap-3 text-[12px] font-semibold tracking-[0.22em] text-[#1c96ac] uppercase">
            <span className="hidden h-px w-20 bg-[#1c96ac]/50 sm:block" aria-hidden="true" />
            <span className="hidden h-1.5 w-1.5 rounded-full bg-[#1c96ac] sm:block" aria-hidden="true" />
            Simple steps, complete protection
            <span className="h-1.5 w-1.5 rounded-full bg-[#1c96ac]" aria-hidden="true" />
            <span className="h-px w-20 bg-[#1c96ac]/50" aria-hidden="true" />
          </p>
          <h2
            id="how-it-works-heading"
            className="mt-2 text-5xl leading-[1.1] font-bold tracking-tight text-[#062e66]"
          >
            How It Works
          </h2>
          <p className="mt-2 text-[15px] text-[#7386a1]">Get insured in just a few simple steps.</p>
        </div>

        {/* Steps */}
        <ol
          ref={stepsRef}
          data-reveal-group
          className="hiw-steps mt-6 grid grid-cols-1 gap-y-8 sm:grid-cols-2 sm:gap-x-4 xl:grid-cols-4 xl:gap-x-0"
        >
          {steps.map((step, i) => (
            <li key={step.num} data-reveal className="relative flex flex-col items-center text-center">
              {/* Connector to the next step (drawn between halos) */}
              {i < steps.length - 1 && <Connector dash={step.dash} arrow={step.arrow} delayMs={i * 1400} />}
              {/* Icon halo */}
              <div
                className={`hiw-halo relative grid h-28 w-28 shrink-0 place-items-center rounded-full border-2 bg-white/60 ${step.ring}`}
              >
                <img src={step.icon} alt={step.alt} loading="lazy" className="h-15 w-15 object-contain" />
              </div>
              {/* Copy */}
              <div className="mt-4 max-w-52">
                <span className={`inline-flex items-center rounded-full px-3 py-1 text-[12px] font-bold ${step.chip}`}>
                  {step.num}
                </span>
                <h3 className="mt-2.5 text-[18px] font-bold text-[#082562]">{step.title}</h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-[#657b97]">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
