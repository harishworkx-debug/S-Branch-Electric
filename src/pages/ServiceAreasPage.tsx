import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Phone } from 'lucide-react';
import { useSeo } from '@/hooks/useSeo';
import { BUSINESS } from '@/data/business';
import { serviceAreas } from '@/data/serviceAreas';
import { CtaSection } from '@/components/CtaSection';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Reveal } from '@/components/Reveal';

export function ServiceAreasPage() {
  useSeo({
    title: 'Electrician Service Areas in Houston, TX | S Branch Electric',
    description:
      'Find a licensed electrician near you in Greater Houston: Spring Branch (77055), Memorial, Bellaire, Katy, Cypress, and Spring, TX. Call 832-484-0514.',
    path: '/service-areas',
  });

  return (
    <>
      <Breadcrumbs items={[{ label: 'Service Areas' }]} />
      <section className="bg-white py-14 sm:py-20">
        <div className="container-page">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">
              <MapPin className="h-3.5 w-3.5" />
              Service Areas
            </span>
            <h1 className="mt-4 font-display text-4xl font-extrabold text-navy-900 sm:text-5xl">
              Electrician Service Areas in Houston, TX
            </h1>
            <p className="mt-5 text-lg text-charcoal-600">
              S Branch Electric is based at 1837 Huge Oaks St in Spring Branch (77055) and serves homeowners and businesses across Greater Houston. Explore our service coverage, local response times, and specialized capabilities by neighborhood below.
            </p>
            <div className="mt-7">
              <a
                href={BUSINESS.phoneHref}
                className="inline-flex items-center justify-center gap-2.5 rounded-lg bg-electric-400 px-7 py-3.5 text-base font-bold text-navy-900 transition-all hover:bg-electric-300 hover:shadow-lg hover:shadow-electric-400/30 active:scale-[0.98]"
              >
                <Phone className="h-5 w-5" strokeWidth={2.5} />
                Call {BUSINESS.phone}
              </a>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {serviceAreas.map((area, i) => (
              <Reveal key={area.path} delay={i * 40}>
                <Link
                  to={area.path}
                  className="group flex flex-col justify-between h-full rounded-2xl border border-charcoal-100 bg-white p-6 shadow-sm transition-all hover:border-electric-400 hover:shadow-xl hover:shadow-navy-900/5 hover:-translate-y-1"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy-50 text-navy-700 transition-colors group-hover:bg-electric-400 group-hover:text-navy-900">
                        <MapPin className="h-6 w-6" strokeWidth={2} />
                      </span>
                      <span className="text-xs font-semibold text-charcoal-400">
                        {area.travelLogistics.typicalResponseTime}
                      </span>
                    </div>
                    <h2 className="mt-4 font-display text-xl font-bold text-navy-900">{area.city}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-charcoal-600">
                      {area.tagline}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {area.zipCodes.slice(0, 3).map((z) => (
                        <span key={z} className="rounded bg-charcoal-100 px-2 py-0.5 text-[11px] font-medium text-charcoal-700">
                          {z}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-700 transition-colors group-hover:text-electric-500">
                    Explore {area.shortName} Electrical Coverage
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Not Sure If You're in the Service Area?"
        subtitle="Call S Branch Electric with your address and we can confirm whether service is available for your location."
        label={`Call ${BUSINESS.phone}`}
      />
    </>
  );
}
