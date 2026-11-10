import { Link, useLocation, Navigate } from 'react-router-dom';
import {
  Phone,
  ArrowRight,
  MapPin,
  Check,
  HelpCircle,
  Zap,
  Plus,
  Home,
  ShieldCheck,
  Star,
  Quote,
  Clock,
  CheckCircle2,
  Wrench,
  Navigation,
} from 'lucide-react';
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

  const otherAreas = serviceAreas.filter((a) => a.slug !== area.slug).slice(0, 6);

  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'Service Areas', to: '/service-areas' },
          { label: area.shortName },
        ]}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-navy-900 text-white">
        <div className="absolute inset-0">
          <img
            src={area.heroImage}
            alt={`Electrician working in ${area.city}`}
            className="h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900/95 to-navy-900/80" />
        </div>
        <div className="container-page relative py-16 sm:py-20 lg:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-electric-400/30 bg-electric-400/10 px-4 py-1.5 text-xs font-semibold text-electric-300">
              <MapPin className="h-3.5 w-3.5 text-electric-400" />
              <span>Dedicated {area.shortName} Electrical Contractor</span>
            </div>
            <h1 className="mt-5 font-display text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
              {area.h1}
            </h1>
            <p className="mt-4 text-lg text-charcoal-200 leading-relaxed">{area.tagline}</p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href={BUSINESS.phoneHref}
                className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-electric-400 px-7 py-4 text-base font-bold text-navy-950 transition-all hover:bg-electric-300 hover:shadow-xl hover:shadow-electric-400/30 active:scale-[0.98]"
              >
                <Phone className="h-5 w-5" strokeWidth={2.5} />
                Call {BUSINESS.phone}
              </a>
              <span className="text-xs text-charcoal-300 sm:border-l sm:border-white/20 sm:pl-4">
                Direct phone calls to Gustavo (Gus) · Same-day &amp; urgent service available
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-page grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-12">
            {/* About Section */}
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

            {/* Neighborhoods & Zip Codes Served */}
            <Reveal className="rounded-2xl border border-charcoal-200 bg-charcoal-50 p-6 sm:p-7">
              <div className="flex items-center gap-2.5">
                <MapPin className="h-5 w-5 text-electric-600" />
                <h3 className="font-display text-lg font-bold text-navy-900">
                  Neighborhoods &amp; Zip Codes Served in {area.shortName}
                </h3>
              </div>
              <div className="mt-4">
                <p className="text-xs font-bold uppercase tracking-wider text-charcoal-500 mb-2">
                  Zip Codes Covered:
                </p>
                <div className="flex flex-wrap gap-2">
                  {area.zipCodes.map((zip) => (
                    <span
                      key={zip}
                      className="rounded-lg border border-charcoal-200 bg-white px-3 py-1 text-xs font-semibold text-navy-900"
                    >
                      {zip}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-5">
                <p className="text-xs font-bold uppercase tracking-wider text-charcoal-500 mb-2">
                  Key Communities &amp; Subdivisions:
                </p>
                <div className="flex flex-wrap gap-2">
                  {area.neighborhoods.map((n) => (
                    <span
                      key={n}
                      className="rounded-lg bg-navy-50 px-3 py-1 text-xs font-medium text-navy-800 border border-navy-100"
                    >
                      {n}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Travel & Service Logistics */}
            {area.travelLogistics && (
              <Reveal className="rounded-2xl border border-electric-300 bg-electric-50/40 p-6 sm:p-7">
                <div className="flex items-center gap-2.5">
                  <Navigation className="h-5 w-5 text-electric-600" />
                  <h3 className="font-display text-lg font-bold text-navy-900">
                    Travel &amp; Service Logistics for {area.shortName}
                  </h3>
                </div>
                <div className="mt-5 grid gap-4 sm:grid-cols-2 text-sm">
                  <div className="rounded-xl border border-charcoal-200 bg-white p-4 shadow-sm">
                    <span className="text-xs font-bold uppercase tracking-wider text-charcoal-400">Dispatch Location</span>
                    <p className="mt-1 font-semibold text-navy-900">{area.travelLogistics.dispatchOrigin}</p>
                  </div>
                  <div className="rounded-xl border border-charcoal-200 bg-white p-4 shadow-sm">
                    <span className="text-xs font-bold uppercase tracking-wider text-charcoal-400">Average Response Time</span>
                    <p className="mt-1 font-semibold text-navy-900">{area.travelLogistics.typicalResponseTime}</p>
                  </div>
                  <div className="rounded-xl border border-charcoal-200 bg-white p-4 shadow-sm">
                    <span className="text-xs font-bold uppercase tracking-wider text-charcoal-400">Primary Highway Route</span>
                    <p className="mt-1 font-semibold text-navy-900">{area.travelLogistics.routeDetails}</p>
                  </div>
                  <div className="rounded-xl border border-charcoal-200 bg-white p-4 shadow-sm">
                    <span className="text-xs font-bold uppercase tracking-wider text-charcoal-400">Booking &amp; Availability</span>
                    <p className="mt-1 font-semibold text-navy-900">{area.travelLogistics.serviceAvailability}</p>
                  </div>
                </div>
              </Reveal>
            )}

            {/* Housing & Electrical Profile Matrix */}
            <Reveal>
              <h2 className="font-display text-2xl font-bold text-navy-900 sm:text-3xl">
                {area.shortName} Housing &amp; Electrical Profile
              </h2>
              <p className="mt-2 text-sm text-charcoal-600">
                Understanding the typical age, panel infrastructure, and common issues found in {area.shortName} homes:
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-charcoal-200 bg-white p-5 shadow-sm">
                  <span className="text-xs font-bold uppercase tracking-wider text-charcoal-400">Housing Era</span>
                  <h4 className="mt-1 font-display text-base font-bold text-navy-900">Typical Age Range</h4>
                  <p className="mt-2 text-sm text-charcoal-700 leading-relaxed">
                    {area.housingElectricalProfile.ageRange}
                  </p>
                </div>

                <div className="rounded-xl border border-charcoal-200 bg-white p-5 shadow-sm">
                  <span className="text-xs font-bold uppercase tracking-wider text-charcoal-400">Panel Types</span>
                  <h4 className="mt-1 font-display text-base font-bold text-navy-900">Common Breaker Boxes</h4>
                  <p className="mt-2 text-sm text-charcoal-700 leading-relaxed">
                    {area.housingElectricalProfile.commonPanels}
                  </p>
                </div>

                <div className="rounded-xl border border-amber-200 bg-amber-50/50 p-5 shadow-sm">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Safety Concerns</span>
                  <h4 className="mt-1 font-display text-base font-bold text-navy-900">Primary Local Challenges</h4>
                  <p className="mt-2 text-sm text-charcoal-700 leading-relaxed">
                    {area.housingElectricalProfile.keyChallenges}
                  </p>
                </div>

                <div className="rounded-xl border border-emerald-200 bg-emerald-50/50 p-5 shadow-sm">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">Recommended Fixes</span>
                  <h4 className="mt-1 font-display text-base font-bold text-navy-900">Recommended Upgrades</h4>
                  <p className="mt-2 text-sm text-charcoal-700 leading-relaxed">
                    {area.housingElectricalProfile.recommendedUpgrades}
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Popular Local Services */}
            <Reveal>
              <h2 className="font-display text-2xl font-bold text-navy-900 sm:text-3xl">
                Most Requested Electrical Services in {area.shortName}
              </h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {area.popularServices.map((service, i) => (
                  <div key={i} className="rounded-xl border border-charcoal-200 bg-charcoal-50 p-5">
                    <div className="flex items-center gap-2">
                      <Zap className="h-4 w-4 text-electric-600 shrink-0" fill="currentColor" />
                      <h4 className="font-display text-base font-bold text-navy-900">{service.name}</h4>
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-charcoal-600">{service.reason}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Local Considerations */}
            <Reveal>
              <h2 className="font-display text-2xl font-bold text-navy-900 sm:text-3xl">
                Local Considerations in {area.shortName}
              </h2>
              <div className="mt-6 space-y-4">
                {area.localContext.map((c, i) => (
                  <div key={i} className="flex items-start gap-3.5 rounded-xl border border-charcoal-100 bg-white p-5 shadow-sm">
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-navy-50 text-navy-800">
                      <Check className="h-4 w-4 text-electric-600" strokeWidth={3} />
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-navy-950">{c.title}</h4>
                      <p className="mt-1 text-sm text-charcoal-600 leading-relaxed">{c.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Real Completed Jobs in this Area */}
            {area.realCompletedJobs && area.realCompletedJobs.length > 0 && (
              <Reveal>
                <div className="flex items-center gap-2.5">
                  <Wrench className="h-5 w-5 text-electric-600" />
                  <h2 className="font-display text-2xl font-bold text-navy-900 sm:text-3xl">
                    Real Completed Electrical Jobs in {area.shortName}
                  </h2>
                </div>
                <p className="mt-2 text-sm text-charcoal-600">
                  Verified electrical repair and installation projects completed by master electrician Gustavo Rivera in {area.shortName}:
                </p>
                <div className="mt-6 space-y-4">
                  {area.realCompletedJobs.map((job, idx) => (
                    <div key={idx} className="rounded-xl border border-charcoal-200 bg-white p-5 shadow-sm">
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-charcoal-100 pb-3">
                        <h4 className="font-display text-base font-bold text-navy-900">{job.title}</h4>
                        <span className="rounded-md bg-navy-50 px-2.5 py-1 text-xs font-semibold text-navy-800 border border-navy-100">
                          {job.neighborhood}
                        </span>
                      </div>
                      <div className="mt-3 grid gap-3 text-sm sm:grid-cols-2">
                        <div className="rounded-lg bg-charcoal-50 p-3">
                          <strong className="text-xs font-bold uppercase tracking-wider text-charcoal-500 block mb-1">
                            Project Scope:
                          </strong>
                          <p className="text-charcoal-700 leading-relaxed">{job.scope}</p>
                        </div>
                        <div className="rounded-lg bg-emerald-50/60 p-3 border border-emerald-100">
                          <strong className="text-xs font-bold uppercase tracking-wider text-emerald-700 block mb-1">
                            Verified Outcome:
                          </strong>
                          <p className="text-charcoal-800 leading-relaxed">{job.outcome}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            )}

            {/* Local Client Review (if available) */}
            {area.localReview && (
              <Reveal className="rounded-2xl border border-navy-800 bg-navy-900 p-7 text-white">
                <div className="flex items-center justify-between">
                  <span className="eyebrow text-electric-400">Verified Local Review</span>
                  <div className="flex items-center gap-0.5">
                    {[0, 1, 2, 3, 4].map((s) => (
                      <Star key={s} className="h-4 w-4 text-electric-400" fill="currentColor" />
                    ))}
                  </div>
                </div>
                <blockquote className="mt-4 text-sm leading-relaxed text-charcoal-200 italic">
                  &ldquo;{area.localReview.quote}&rdquo;
                </blockquote>
                <div className="mt-4 border-t border-white/10 pt-4 flex items-center justify-between text-xs">
                  <span className="font-bold text-white">{area.localReview.author}</span>
                  <span className="text-charcoal-400">{area.localReview.meta}</span>
                </div>
              </Reveal>
            )}

            {/* Available Services Grid */}
            <Reveal>
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
                      className="group flex items-center gap-3 rounded-xl border border-charcoal-200 bg-white p-4 transition-all hover:border-electric-400 hover:shadow-md"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy-50 text-navy-700 transition-colors group-hover:bg-electric-400 group-hover:text-navy-900">
                        <Icon className="h-5 w-5" strokeWidth={2} />
                      </span>
                      <div className="flex-1">
                        <h3 className="text-sm font-semibold text-navy-900">{s.name}</h3>
                        <p className="text-xs text-charcoal-500">{area.shortName}, TX</p>
                      </div>
                      <ArrowRight className="h-4 w-4 text-charcoal-400 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  );
                })}
              </div>
            </Reveal>

            {/* FAQs Accordion */}
            <Reveal>
              <h2 className="font-display text-2xl font-bold text-navy-900 sm:text-3xl">
                {area.shortName} Electrical FAQs
              </h2>
              <div className="mt-6 space-y-4">
                {area.faqs.map((faq, i) => (
                  <details
                    key={i}
                    className="group rounded-xl border border-charcoal-200 bg-white p-5 open:bg-charcoal-50 transition-colors"
                  >
                    <summary className="flex cursor-pointer items-center justify-between gap-4 font-display text-base font-semibold text-navy-900 list-none">
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

          {/* Sticky Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="rounded-2xl bg-navy-900 p-6 text-white shadow-xl">
                <span className="eyebrow text-electric-400">Direct Contractor</span>
                <h3 className="mt-2 font-display text-xl font-bold text-white">
                  Need Work in {area.shortName}?
                </h3>
                <p className="mt-2 text-sm text-charcoal-300 leading-relaxed">
                  Call Gustavo directly to describe your project, confirm scheduling, and get upfront pricing.
                </p>
                <a
                  href={BUSINESS.phoneHref}
                  className="mt-5 flex w-full items-center justify-center gap-2.5 rounded-xl bg-electric-400 px-5 py-3.5 text-base font-bold text-navy-950 transition-all hover:bg-electric-300"
                >
                  <Phone className="h-5 w-5" strokeWidth={2.5} />
                  Call {BUSINESS.phone}
                </a>
                <div className="mt-4 flex items-center justify-center gap-2 text-xs text-charcoal-400">
                  <Clock className="h-3.5 w-3.5 text-electric-400" />
                  <span>Prompt response across {area.shortName}</span>
                </div>
              </div>

              <div className="rounded-2xl border border-charcoal-200 bg-white p-6 shadow-sm">
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
                  className="mt-4 block rounded-xl bg-navy-50 px-3 py-2.5 text-center text-sm font-semibold text-navy-900 transition-colors hover:bg-navy-100"
                >
                  View All Service Areas
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Process / Call Section */}
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
      body: `Call ${BUSINESS.phone} and mention your ${areaName} neighborhood or address. This helps confirm immediate service availability.`,
    },
    {
      title: 'Describe Your Electrical Project',
      body: 'Whether it is a breaker replacement, a 200A panel upgrade, an EV charger, or flickering lights, talk directly through the symptoms with Gus.',
    },
    {
      title: 'Upfront Quote & Scheduling',
      body: 'Get clear, honest pricing guidance and schedule an appointment time that works conveniently with your day.',
    },
  ];

  return (
    <section className="bg-charcoal-50 py-20 sm:py-24 border-t border-charcoal-200">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <span className="eyebrow">
              <MapPin className="h-3.5 w-3.5" />
              Calling from {areaName}
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold text-navy-900 sm:text-4xl">
              How S Branch Electric Handles {areaName} Calls
            </h2>
            <p className="mt-4 text-base text-charcoal-600 leading-relaxed">
              Every job begins with a direct phone conversation. There are no dispatch intermediaries or waiting days for
              an email response.
            </p>
            <div className="mt-6 flex flex-col gap-3 text-sm text-charcoal-700">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                <span>Strict compliance with National Electrical Code (NEC)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                <span>Tidy, respectful work inside your {areaName} home</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                <span>Transparent pricing before work begins</span>
              </div>
            </div>
          </Reveal>

          <div className="space-y-4">
            {steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 80}>
                <div className="rounded-2xl border border-charcoal-200 bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-electric-400 font-display text-sm font-bold text-navy-950">
                      0{i + 1}
                    </span>
                    <h3 className="font-display text-base font-bold text-navy-900">{step.title}</h3>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal-600 pl-11">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
