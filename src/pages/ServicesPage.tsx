import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Phone, MapPin } from 'lucide-react';
import { useSeo } from '@/hooks/useSeo';
import { BUSINESS } from '@/data/business';
import { services } from '@/data/services';
import { ServiceCard } from '@/components/ServiceCard';
import { CtaSection } from '@/components/CtaSection';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Reveal } from '@/components/Reveal';

export function ServicesPage() {
  useSeo({
    title: 'Electrical Services in Houston, TX | S Branch Electric',
    description:
      'Explore the full range of electrical services offered by S Branch Electric in Houston, TX: troubleshooting, 200A panel upgrades, rewiring, lighting, and installations.',
    path: '/services',
  });

  const priorityOrder = [
    'electrical-troubleshooting',
    'electrical-panel-upgrades',
    'electrical-wiring',
    'circuit-breaker-installation',
    'outlet-installation',
    'lighting-installation',
    'electrical-panel-installation',
    'residential-electrical-installation',
    'electrical-installation',
    'commercial-electrical-installation',
  ];

  const sortedServices = [...services].sort((a, b) => {
    const indexA = priorityOrder.indexOf(a.slug);
    const indexB = priorityOrder.indexOf(b.slug);
    return (indexA === -1 ? 99 : indexA) - (indexB === -1 ? 99 : indexB);
  });

  return (
    <>
      <Breadcrumbs items={[{ label: 'Electrical Services' }]} />
      <section className="bg-white py-14 sm:py-20">
        <div className="container-page">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">
              <Zap className="h-3.5 w-3.5" fill="currentColor" />
              Service Directory
            </span>
            <h1 className="mt-4 font-display text-4xl font-extrabold text-navy-900 sm:text-5xl">
              Electrical Services in Houston, TX
            </h1>
            <p className="mt-5 text-lg text-charcoal-600">
              Explore our complete directory of residential and commercial electrical services across Houston, TX. Master electrician Gustavo Rivera handles projects with transparent pricing and strict National Electrical Code compliance.
            </p>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={BUSINESS.phoneHref}
                className="inline-flex items-center justify-center gap-2.5 rounded-lg bg-electric-400 px-7 py-3.5 text-base font-bold text-navy-900 transition-all hover:bg-electric-300 hover:shadow-lg hover:shadow-electric-400/30 active:scale-[0.98]"
              >
                <Phone className="h-5 w-5" strokeWidth={2.5} />
                Call {BUSINESS.phone}
              </a>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sortedServices.map((service, i) => (
              <Reveal key={service.path} delay={i * 40}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Have an Electrical Project in Houston?"
        subtitle="Call S Branch Electric to discuss your electrical installation or repair needs. Every project starts with a phone call."
        label={`Call ${BUSINESS.phone}`}
      />
    </>
  );
}
