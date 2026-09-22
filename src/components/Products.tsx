import productsBg from '../assets/products/products-bg.webp'
import SectionSeam from './SectionSeam'
import { ProductCard } from './products/ProductCard'
import { products } from './products/productData'

export default function Products() {
  return (
    <section
      id="products"
      aria-labelledby="products-heading"
      className="relative bg-cover bg-top"
      style={{ backgroundImage: `url(${productsBg})` }}
    >
      <SectionSeam />
      <div className="mx-auto px-5 py-8 sm:px-8">
        {/* Header */}
        <div data-reveal className="mx-auto max-w-3xl text-center">
          <p className="flex items-center justify-center gap-4 text-[12px] font-semibold tracking-[0.22em] text-nav-accent uppercase">
            <span className="h-px w-12 bg-nav-accent/50 sm:w-16" aria-hidden="true" />
            Complete coverage for a brighter tomorrow
            <span className="h-px w-12 bg-nav-accent/50 sm:w-16" aria-hidden="true" />
          </p>
          <h2
            id="products-heading"
            className="mt-2 text-4xl leading-[1.1] font-bold tracking-tight sm:text-5xl"
          >
            <span className="text-[#062e66]">Protection for Every</span>
            <br />
            <span className="bg-linear-to-t from-nav-accent to-[#12b5a4] bg-clip-text text-transparent">
              Chapter of Your Life
            </span>
          </h2>
          <p className="mx-auto mt-2 text-[#4d6076] text-[15px]">
            From your health and family to your dreams and beyond &mdash; we&rsquo;re here with
            solutions that fit your life, today and tomorrow.
          </p>
        </div>

        {/* Product cards */}
        <div
          data-reveal-group
          className="mt-5 grid grid-flow-col auto-cols-[minmax(11.5rem,1fr)] gap-x-4 gap-y-0 snap-x snap-mandatory overflow-x-auto pt-2 pb-6 lg:auto-cols-fr lg:gap-x-3 lg:overflow-visible lg:p-0 xl:gap-x-6"
        >
          {products.map((product) => (
            <ProductCard key={product.title} product={product} />
          ))}
        </div>

        {/* View-all CTA */}
        <div data-reveal className="mt-5 text-center">
          <a
            href="#products"
            className="inline-flex items-center gap-2.5 rounded-full border-[1.5px] border-nav-accent px-5 py-2 text-[12px] font-semibold text-nav-accent transition-colors duration-300 hover:border-[#03635c] hover:bg-nav-accent/10"
          >
            View All Insurance Products
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
              <path
                d="M5 12h14m-6-6 6 6-6 6"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        {/* Footer strip */}
        <p data-reveal className="mt-5 flex items-center justify-center gap-5 text-[12px] font-medium tracking-[0.32em] text-[#52697a] uppercase">
          <span className="h-px w-14 bg-[#52697a]/40" aria-hidden="true" />
          Simple. Transparent. Trusted.
          <span className="h-px w-14 bg-[#52697a]/40" aria-hidden="true" />
        </p>
      </div>
    </section>
  )
}
