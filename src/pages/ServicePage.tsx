import { Link, useLocation, Navigate } from 'react-router-dom';
import { Phone, ArrowRight, Check, MapPin, HelpCircle, Zap, Plus } from 'lucide-react';
import { useSeo } from '@/hooks/useSeo';
import { BUSINESS } from '@/data/business';
import { services, getServiceByPath } from '@/data/services';
import { serviceAreas } from '@/data/serviceAreas';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CtaSection } from '@/components/CtaSection';
import { Reveal } from '@/components/Reveal';
import { getServiceIcon } from '@/utils/serviceIcons';

export function ServicePage() {
  const location = useLocation();
  const service = getServiceByPath(location.pathname);

  if (!service) {
    return <Navigate to="/404" replace />;
  }

  const Icon = getServiceIcon(service.icon);
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 4);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.metaDescription,
    provider: {
      '@type': 'Electrician',
      name: BUSINESS.name,
      telephone: '+18324840514',
      address: {
        '@type': 'PostalAddress',
        streetAddress: BUSINESS.street,
        addressLocality: BUSINESS.city,
        addressRegion: BUSINESS.state,
        postalCode: BUSINESS.zip,
        addressCountry: 'US',
      },
    },
    areaServed: { '@type': 'City', name: 'Houston, TX' },
  };

  useSeo({
    title: service.metaTitle,
    description: service.metaDescription,
    path: service.path,
    schema,
    ogImage: service.heroImage,
  });

  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'Electrical Services', to: '/services' },
          { label: service.name },
        ]}
      />

      <section className="relative overflow-hidden bg-navy-900">
        <div className="absolute inset-0">
          <img
            src={service.heroImage}
            alt={service.heroAlt}
            className="h-full w-full object-cover opacity-25"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/95 to-navy-900/70" />
        </div>
        <div className="container-page relative py-16 sm:py-20">
          <div className="max-w-2xl">
            <span className="eyebrow text-electric-400">
              <Icon className="h-3.5 w-3.5" />
              {service.name}
            </span>
            <h1 className="mt-4 font-display text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
              {service.h1}
            </h1>
            <p className="mt-5 text-lg text-charcoal-200">{service.tagline}</p>
            <a
              href={BUSINESS.phoneHref}
              className="mt-7 inline-flex items-center gap-2.5 rounded-lg bg-electric-400 px-7 py-4 text-base font-bold text-navy-900 transition-all hover:bg-electric-300 hover:shadow-xl hover:shadow-electric-400/30 active:scale-[0.98]"
            >
              <Phone className="h-5 w-5" strokeWidth={2.5} />
              {service.ctaLabel}
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="container-page grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Reveal>
              <h2 className="font-display text-2xl font-bold text-navy-900 sm:text-3xl">
                About {service.name} in Houston
              </h2>
              <div className="mt-5 space-y-4">
                {service.intro.map((p, i) => (
                  <p key={i} className="text-base leading-relaxed text-charcoal-700">
                    {p}
                  </p>
                ))}
              </div>
            </Reveal>

            <Reveal className="mt-12">
              <h2 className="font-display text-2xl font-bold text-navy-900 sm:text-3xl">
                What {service.name} Involves
              </h2>
              <div className="mt-5 space-y-4">
                {service.whatItIs.map((p, i) => (
                  <p key={i} className="text-base leading-relaxed text-charcoal-700">
                    {p}
                  </p>
                ))}
              </div>
            </Reveal>

            <Reveal className="mt-12">
              <h2 className="font-display text-2xl font-bold text-navy-900 sm:text-3xl">
                Common {service.name} Needs
              </h2>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                {service.commonNeeds.map((need, i) => (
                  <div key={i} className="rounded-xl border border-charcoal-100 bg-charcoal-50 p-5">
                    <h3 className="font-display text-base font-bold text-navy-900">{need.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-charcoal-600">{need.body}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal className="mt-12">
              <h2 className="font-display text-2xl font-bold text-navy-900 sm:text-3xl">
                Installation Considerations
              </h2>
              <ul className="mt-6 space-y-3">
                {service.considerations.map((c, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-electric-400 text-navy-900">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    <span className="text-sm leading-relaxed text-charcoal-700">{c}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal className="mt-12">
              <div className="rounded-2xl border border-navy-100 bg-navy-50 p-7">
                <h2 className="font-display text-xl font-bold text-navy-900">
                  Services Provided by S Branch Electric
                </h2>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {service.servicesProvided.map((s, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-sm text-charcoal-700">
                      <Check className="h-4 w-4 shrink-0 text-electric-500" strokeWidth={2.5} />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal className="mt-12">
              <h2 className="font-display text-2xl font-bold text-navy-900 sm:text-3xl">
                {service.name} FAQs
              </h2>
              <div className="mt-6 space-y-4">
                {service.faqs.map((faq, i) => (
                  <details key={i} className="group rounded-xl border border-charcoal-100 bg-white p-5 open:bg-charcoal-50">
                    <summary className="flex cursor-pointer items-center justify-between gap-4 font-display text-base font-semibold text-navy-900">
                      <span className="flex items-start gap-2.5">
                        <HelpCircle className="mt-0.5 h-5 w-5 shrink-0 text-electric-500" />
                        {faq.question}
                      </span>
                      <span className="shrink-0 text-charcoal-400 transition-transform group-open:rotate-45">
                        <Plus className="h-5 w-5" />
                      </span>
                    </summary>
                    <p className="mt-3 pl-8 text-sm leading-relaxed text-charcoal-600">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </Reveal>
          </div>

          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="rounded-2xl bg-navy-900 p-6 text-white">
                <h3 className="font-display text-lg font-bold">Call About Your Project</h3>
                <p className="mt-2 text-sm text-charcoal-300">
                  Discuss your {service.shortName.toLowerCase()} needs and confirm service availability in Houston.
                </p>
                <a
                  href={BUSINESS.phoneHref}
                  className="mt-5 flex w-full items-center justify-center gap-2.5 rounded-lg bg-electric-400 px-5 py-3.5 text-base font-bold text-navy-900 transition-all hover:bg-electric-300"
                >
                  <Phone className="h-5 w-5" strokeWidth={2.5} />
                  {BUSINESS.phone}
                </a>
                <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-charcoal-400">
                  <MapPin className="h-3.5 w-3.5" />
                  {BUSINESS.mainLocation}
                </p>
              </div>

              <div className="rounded-2xl border border-charcoal-100 bg-white p-6">
                <h3 className="font-display text-base font-bold text-navy-900">Related Services</h3>
                <ul className="mt-4 space-y-2.5">
                  {related.map((r) => (
                    <li key={r.path}>
                      <Link
                        to={r.path}
                        className="group flex items-center justify-between rounded-lg px-3 py-2.5 text-sm text-charcoal-700 transition-colors hover:bg-charcoal-50 hover:text-navy-900"
                      >
                        {r.shortName}
                        <ArrowRight className="h-4 w-4 text-charcoal-400 transition-transform group-hover:translate-x-0.5" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-charcoal-100 bg-white p-6">
                <h3 className="font-display text-base font-bold text-navy-900">Service Areas</h3>
                <ul className="mt-4 space-y-2.5">
                  {serviceAreas.slice(0, 5).map((a) => (
                    <li key={a.path}>
                      <Link
                        to={a.path}
                        className="group flex items-center justify-between rounded-lg px-3 py-2.5 text-sm text-charcoal-700 transition-colors hover:bg-charcoal-50 hover:text-navy-900"
                      >
                        {a.shortName}, TX
                        <ArrowRight className="h-4 w-4 text-charcoal-400 transition-transform group-hover:translate-x-0.5" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <ServiceProcessSection serviceName={service.name} ctaLabel={service.ctaLabel} />

      <CtaSection
        title={`Need ${service.name} in Houston?`}
        subtitle={`Call S Branch Electric at ${BUSINESS.phone} to discuss your project and confirm availability.`}
        label={`Call ${BUSINESS.phone}`}
      />
    </>
  );
}

function ServiceProcessSection({ serviceName, ctaLabel }: { serviceName: string; ctaLabel: string }) {
  const steps = [
    {
      title: 'Call and Describe Your Project',
      body: `Pick up the phone and call ${BUSINESS.phone}. Explain what you need — whether it's ${serviceName.toLowerCase()} for a home, a business, or a specific repair. The more detail you can share, the better.`,
    },
    {
      title: 'Discuss Scope and Availability',
      body: 'Talk through the scope of the work, ask questions, and confirm that service is available for your specific Houston-area location. Scheduling and project details are handled on the call.',
    },
    {
      title: 'Work Performed Safely',
      body: `${serviceName} is performed with attention to proper connections, correct sizing, and electrical safety. The goal is work that lasts and meets code requirements.`,
    },
    {
      title: 'Follow-Up If Needed',
      body: 'If you have questions after the work is done, or if additional electrical needs come up, S Branch Electric is a phone call away for Houston customers.',
    },
  ];

  return (
    <section className="bg-charcoal-50 py-20 sm:py-24">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">
            <Phone className="h-3.5 w-3.5" />
            How It Works
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-navy-900 sm:text-4xl">
            Getting {serviceName} in Houston
          </h2>
          <p className="mt-4 text-base text-charcoal-600">
            Every project starts with a phone call. No forms, no online booking — just direct conversation about
            your electrical needs.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal key={i} delay={i * 70}>
              <div className="relative h-full rounded-2xl border border-charcoal-100 bg-white p-6">
                <span className="font-display text-4xl font-extrabold text-electric-400/40">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-3 font-display text-base font-bold text-navy-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-600">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <a
            href={BUSINESS.phoneHref}
            className="inline-flex items-center justify-center gap-2.5 rounded-lg bg-electric-400 px-7 py-4 text-base font-bold text-navy-900 transition-all hover:bg-electric-300 hover:shadow-lg hover:shadow-electric-400/30 active:scale-[0.98]"
          >
            <Phone className="h-5 w-5" strokeWidth={2.5} />
            {ctaLabel}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
