import { Phone, MapPin, Star, ExternalLink, Zap, Clock, Navigation } from 'lucide-react';
import { useSeo } from '@/hooks/useSeo';
import { BUSINESS } from '@/data/business';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Reveal } from '@/components/Reveal';

export function ContactPage() {
  useSeo({
    title: 'Contact Electrician in Houston, TX | S Branch Electric',
    description:
      'Contact S Branch Electric in Houston, TX at 832-484-0514. Based at 1837 Huge Oaks St in Spring Branch (77055). Call master electrician Gus Rivera for estimates and service.',
    path: '/contact',
  });

  return (
    <>
      <Breadcrumbs items={[{ label: 'Contact' }]} />

      <section className="relative overflow-hidden bg-navy-900">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              'radial-gradient(circle at 80% 20%, rgba(250,204,21,0.15) 0%, transparent 50%)',
          }}
        />
        <div className="container-page relative py-16 sm:py-20">
          <div className="max-w-2xl">
            <span className="eyebrow text-electric-400">
              <Phone className="h-3.5 w-3.5" />
              Contact Information
            </span>
            <h1 className="mt-4 font-display text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
              Contact Electrician in Houston, TX
            </h1>
            <p className="mt-5 text-lg text-charcoal-200">
              Call {BUSINESS.phone} to discuss your electrical installation or repair needs. S Branch Electric is
              based in Houston, TX and serves the surrounding area.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="container-page">
          <div className="grid gap-8 lg:grid-cols-2">
            <Reveal>
              <div className="rounded-2xl bg-navy-900 p-8 text-white">
                <h2 className="font-display text-2xl font-bold">Call to Get Started</h2>
                <p className="mt-3 text-sm text-charcoal-300">
                  S Branch Electric is reachable by phone. Call to discuss your project, confirm service availability,
                  and get your electrical work scheduled.
                </p>

                <div className="mt-7 space-y-6">
                  <div>
                    <span className="eyebrow text-electric-400">
                      <Phone className="h-3.5 w-3.5" />
                      Phone
                    </span>
                    <a
                      href={BUSINESS.phoneHref}
                      className="mt-2 flex items-center gap-3 text-2xl font-bold text-white transition-colors hover:text-electric-400"
                    >
                      <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-electric-400 text-navy-900">
                        <Phone className="h-6 w-6" strokeWidth={2.5} />
                      </span>
                      {BUSINESS.phone}
                    </a>
                  </div>

                  <div>
                    <span className="eyebrow text-electric-400">
                      <MapPin className="h-3.5 w-3.5" />
                      Address
                    </span>
                    <p className="mt-2 text-base text-charcoal-200">{BUSINESS.address}</p>
                    <a
                      href={BUSINESS.mapsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-electric-400 transition-colors hover:text-electric-300"
                    >
                      Get Directions
                      <Navigation className="h-4 w-4" />
                    </a>
                  </div>

                  <div>
                    <span className="eyebrow text-electric-400">
                      <Star className="h-3.5 w-3.5" fill="currentColor" />
                      Reviews
                    </span>
                    <p className="mt-2 text-base text-charcoal-200">
                      {BUSINESS.rating} / 5.0 · {BUSINESS.reviewCount} Google reviews
                    </p>
                    <a
                      href={BUSINESS.mapsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-electric-400 transition-colors hover:text-electric-300"
                    >
                      Read Reviews on Google
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>

                  <div>
                    <span className="eyebrow text-electric-400">
                      <Zap className="h-3.5 w-3.5" fill="currentColor" />
                      Services
                    </span>
                    <p className="mt-2 text-base text-charcoal-200">
                      Electrical installation, panel work, wiring, lighting, breakers, outlets, troubleshooting, and
                      repairs for residential and commercial customers.
                    </p>
                  </div>
                </div>

                <a
                  href={BUSINESS.phoneHref}
                  className="mt-8 flex w-full items-center justify-center gap-2.5 rounded-lg bg-electric-400 px-6 py-4 text-lg font-bold text-navy-900 transition-all hover:bg-electric-300 hover:shadow-xl hover:shadow-electric-400/30 active:scale-[0.98]"
                >
                  <Phone className="h-5 w-5" strokeWidth={2.5} />
                  Call Now · {BUSINESS.phone}
                </a>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-charcoal-100 shadow-lg">
                <div className="flex items-center justify-between bg-navy-50 px-5 py-4">
                  <h2 className="font-display text-base font-bold text-navy-900">Find S Branch Electric</h2>
                  <a
                    href={BUSINESS.mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-700 transition-colors hover:text-electric-500"
                  >
                    Open in Google Maps
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
                <div className="relative flex-1">
                  <iframe
                    src={BUSINESS.mapEmbed}
                    className="h-full min-h-[400px] w-full"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title="S Branch Electric location map"
                  />
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal className="mt-10">
            <div className="flex items-center gap-3 rounded-xl bg-charcoal-50 px-6 py-5 text-sm text-charcoal-600">
              <Clock className="h-5 w-5 shrink-0 text-electric-500" />
              <p>
                S Branch Electric has responded to after-hours and weekend calls for Houston homeowners. Call{' '}
                <a href={BUSINESS.phoneHref} className="font-semibold text-navy-900 underline hover:text-electric-500">
                  {BUSINESS.phone}
                </a>{' '}
                to discuss your situation and confirm availability.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
