import { Link, useLocation, Navigate } from 'react-router-dom';
import { Phone, ArrowRight, MapPin, Check, HelpCircle, Zap, Plus } from 'lucide-react';
import { useSeo } from '@/hooks/useSeo';
import { BUSINESS } from '@/data/business';
import { services } from '@/data/services';
import { serviceAreas, getAreaByPath } from '@/data/serviceAreas';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CtaSection } from '@/components/CtaSection';
import { Reveal } from '@/components/Reveal';
import { getServiceIcon } from '@/utils/serviceIcons';

export function ServiceAreaPage() {
  const location = useLocation();
  const area = getAreaByPath(location.pathname);

  if (!area) {
    return <Navigate to="/404" replace />;
  }

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Electrical Services in ${area.city}`,
    description: area.metaDescription,
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
    areaServed: { '@type': 'City', name: area.city },
  };

  useSeo({
    title: area.metaTitle,
    description: area.metaDescription,
    path: area.path,
    schema,
  });

  const otherAreas = serviceAreas.filter((a) => a.slug !== area.slug).slice(0, 5);

  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'Service Areas', to: '/service-areas' },
          { label: area.shortName },
        ]}
      />

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
              <MapPin className="h-3.5 w-3.5" />
              Service Area
            </span>
            <h1 className="mt-4 font-display text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
              {area.h1}
            </h1>
            <p className="mt-5 text-lg text-charcoal-200">
              Electrical installation and repair services available in {area.city}. Call to confirm availability for
              your address.
            </p>
            <a
              href={BUSINESS.phoneHref}
              className="mt-7 inline-flex items-center gap-2.5 rounded-lg bg-electric-400 px-7 py-4 text-base font-bold text-navy-900 transition-all hover:bg-electric-300 hover:shadow-xl hover:shadow-electric-400/30 active:scale-[0.98]"
            >
              <Phone className="h-5 w-5" strokeWidth={2.5} />
              Call {BUSINESS.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="container-page grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Reveal>
              <h2 className="font-display text-2xl font-bold text-navy-900 sm:text-3xl">
                About Electrical Services in {area.shortName}
              </h2>
              <div className="mt-5 space-y-4">
                {area.intro.map((p, i) => (
                  <p key={i} className="text-base leading-relaxed text-charcoal-700">
                    {p}
                  </p>
                ))}
              </div>
            </Reveal>

            <Reveal className="mt-12">
              <h2 className="font-display text-2xl font-bold text-navy-900 sm:text-3xl">
                Local Considerations in {area.shortName}
              </h2>
              <ul className="mt-6 space-y-3">
                {area.localContext.map((c, i) => (
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
              <h2 className="font-display text-2xl font-bold text-navy-900 sm:text-3xl">
                Electrical Services Available in {area.shortName}
              </h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {services.map((s) => {
                  const Icon = getServiceIcon(s.icon);
                  return (
                    <Link
                      key={s.path}
                      to={s.path}
                      className="group flex items-center gap-3 rounded-xl border border-charcoal-100 bg-white p-4 transition-all hover:border-electric-400 hover:shadow-md"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy-50 text-navy-700 transition-colors group-hover:bg-electric-400 group-hover:text-navy-900">
                        <Icon className="h-5 w-5" strokeWidth={2} />
                      </span>
                      <div className="flex-1">
                        <h3 className="text-sm font-semibold text-navy-900">{s.name}</h3>
                        <p className="text-xs text-charcoal-500">Houston, TX</p>
                      </div>
                      <ArrowRight className="h-4 w-4 text-charcoal-400 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  );
                })}
              </div>
            </Reveal>

            <Reveal className="mt-12">
              <h2 className="font-display text-2xl font-bold text-navy-900 sm:text-3xl">
                {area.shortName} Electrical FAQs
              </h2>
              <div className="mt-6 space-y-4">
                {area.faqs.map((faq, i) => (
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
                <h3 className="font-display text-lg font-bold">Call About {area.shortName}</h3>
                <p className="mt-2 text-sm text-charcoal-300">
                  Confirm service availability for your {area.shortName} address and discuss your electrical needs.
                </p>
                <a
                  href={BUSINESS.phoneHref}
                  className="mt-5 flex w-full items-center justify-center gap-2.5 rounded-lg bg-electric-400 px-5 py-3.5 text-base font-bold text-navy-900 transition-all hover:bg-electric-300"
                >
                  <Phone className="h-5 w-5" strokeWidth={2.5} />
                  {BUSINESS.phone}
                </a>
              </div>

              <div className="rounded-2xl border border-charcoal-100 bg-white p-6">
                <h3 className="font-display text-base font-bold text-navy-900">Other Service Areas</h3>
                <ul className="mt-4 space-y-2.5">
                  {otherAreas.map((a) => (
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
                <Link
                  to="/service-areas"
                  className="mt-3 block rounded-lg bg-navy-50 px-3 py-2.5 text-center text-sm font-semibold text-navy-900 transition-colors hover:bg-navy-100"
                >
                  View All Service Areas
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <AreaCallSection areaName={area.shortName} city={area.city} />

      <CtaSection
        title={`Need an Electrician in ${area.shortName}?`}
        subtitle={`Call S Branch Electric at ${BUSINESS.phone} to discuss your electrical project and confirm service availability.`}
        label={`Call ${BUSINESS.phone}`}
      />
    </>
  );
}

function AreaCallSection({ areaName, city }: { areaName: string; city: string }) {
  const steps = [
    {
      title: 'Call with Your Address',
      body: `Call ${BUSINESS.phone} and mention your ${areaName} address. This helps confirm that service is available for your specific location within the ${city} area.`,
    },
    {
      title: 'Describe Your Electrical Need',
      body: 'Whether it is a panel upgrade, a lighting installation, a breaker repair, or a new circuit, describe what you need. The more detail you provide, the more helpful the conversation.',
    },
    {
      title: 'Confirm and Schedule',
      body: 'Confirm service availability and discuss scheduling for the work. Project details, scope, and next steps are all handled over the phone.',
    },
  ];

  return (
    <section className="bg-charcoal-50 py-20 sm:py-24">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <span className="eyebrow">
              <MapPin className="h-3.5 w-3.5" />
              Calling from {areaName}
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold text-navy-900 sm:text-4xl">
              What to Expect When You Call
            </h2>
            <p className="mt-4 text-base text-charcoal-600">
              S Branch Electric is based in the Spring Branch area of Houston. When you call from {areaName}, you are
              speaking directly with an electrical installation service that serves the greater Houston area.
            </p>

            <div className="mt-8 space-y-5">
              {steps.map((step, i) => (
                <div key={i} className="flex items-start gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy-900 font-display text-sm font-bold text-electric-400">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-base font-bold text-navy-900">{step.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-charcoal-600">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href={BUSINESS.phoneHref}
              className="mt-8 inline-flex items-center gap-2.5 rounded-lg bg-electric-400 px-7 py-4 text-base font-bold text-navy-900 transition-all hover:bg-electric-300 hover:shadow-lg hover:shadow-electric-400/30 active:scale-[0.98]"
            >
              <Phone className="h-5 w-5" strokeWidth={2.5} />
              Call {BUSINESS.phone}
            </a>
          </Reveal>

          <Reveal delay={100}>
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <img
                src="https://images.pexels.com/photos/17995530/pexels-photo-17995530.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt={`Downtown Houston skyline at dusk, showing the greater Houston area served by S Branch Electric`}
                loading="lazy"
                className="h-80 w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
