import { Link, useLocation, Navigate } from 'react-router-dom';
import {
  Phone,
  ArrowRight,
  Check,
  MapPin,
  HelpCircle,
  Zap,
  Plus,
  AlertTriangle,
  ShieldCheck,
  Star,
  Quote,
  Clock,
  BookOpen,
  Award,
  FileText,
  UserCheck,
} from 'lucide-react';
import { useSeo } from '@/hooks/useSeo';
import { BUSINESS } from '@/data/business';
import { services, getServiceByPath } from '@/data/services';
import { serviceAreas } from '@/data/serviceAreas';
import { projectCaseStudies } from '@/data/caseStudies';
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
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 5);
  const relevantCaseStudy = projectCaseStudies.find(
    (c) => c.serviceSlug === service.slug || c.servicePath === service.path
  );

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
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
      },
      ...(service.faqs && service.faqs.length > 0
        ? [
            {
              '@type': 'FAQPage',
              mainEntity: service.faqs.map((faq) => ({
                '@type': 'Question',
                name: faq.question,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: faq.answer,
                },
              })),
            },
          ]
        : []),
    ],
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

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-navy-900 text-white">
        <div className="absolute inset-0">
          <img
            src={service.heroImage}
            alt={service.heroAlt}
            className="h-full w-full object-cover opacity-20"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900/95 to-navy-900/80" />
        </div>
        <div className="container-page relative py-16 sm:py-20 lg:py-24">
          <div className="max-w-3xl">
            <span className="eyebrow text-electric-400">
              <Icon className="h-4 w-4" />
              Houston Electrical Service
            </span>
            <h1 className="mt-4 font-display text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
              {service.h1}
            </h1>
            <p className="mt-5 text-lg text-charcoal-200 leading-relaxed">{service.tagline}</p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href={BUSINESS.phoneHref}
                className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-electric-400 px-7 py-4 text-base font-bold text-navy-950 transition-all hover:bg-electric-300 hover:shadow-xl hover:shadow-electric-400/30 active:scale-[0.98]"
              >
                <Phone className="h-5 w-5" strokeWidth={2.5} />
                {service.ctaLabel}
              </a>
              <span className="text-xs text-charcoal-300 sm:border-l sm:border-white/20 sm:pl-4">
                Speak directly with Gustavo (Gus) · Free phone consultation
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-page grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-12">
            {/* 1. Professional Service Overview */}
            <Reveal>
              <h2 className="font-display text-2xl font-bold text-navy-900 sm:text-3xl">
                Professional {service.name} Services in Houston
              </h2>
              <div className="mt-5 space-y-4">
                {service.intro.map((p, i) => (
                  <p key={i} className="text-base leading-relaxed text-charcoal-700">
                    {p}
                  </p>
                ))}
              </div>
              <div className="mt-6 space-y-4 border-l-2 border-electric-400 pl-5 text-sm text-charcoal-600">
                {service.whatItIs.map((p, i) => (
                  <p key={i} className="leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </Reveal>

            {/* 2. Signs You May Need Service */}
            {service.warningSigns && service.warningSigns.length > 0 && (
              <Reveal>
                <div className="rounded-2xl border border-amber-200 bg-amber-50/70 p-6 sm:p-7">
                  <div className="flex items-center gap-2.5">
                    <AlertTriangle className="h-5 w-5 text-amber-600" />
                    <h2 className="font-display text-xl font-bold text-navy-950">
                      Signs You May Need {service.shortName}
                    </h2>
                  </div>
                  <p className="mt-2 text-sm text-charcoal-700">
                    Common customer problems, symptoms, and electrical warnings indicating your home or business requires inspection:
                  </p>
                  <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                    {service.warningSigns.map((sign, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-charcoal-800">
                        <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-amber-500" />
                        <span>{sign}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )}

            {/* 3. What Our Electrical Service Includes */}
            <Reveal>
              <h2 className="font-display text-2xl font-bold text-navy-900 sm:text-3xl">
                What Our {service.shortName} Service Includes
              </h2>
              <p className="mt-2 text-sm text-charcoal-600">
                The actual technical work, installations, and repairs S Branch Electric performs for Houston properties:
              </p>

              {/* Service checklist */}
              <div className="mt-5 rounded-2xl border border-navy-100 bg-navy-50/60 p-6 sm:p-7">
                <ul className="grid gap-3 sm:grid-cols-2">
                  {service.servicesProvided.map((s, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-sm text-charcoal-800">
                      <Check className="h-4 w-4 shrink-0 text-electric-500" strokeWidth={2.5} />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Common needs cards */}
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {service.commonNeeds.map((need, i) => (
                  <div key={i} className="rounded-xl border border-charcoal-200 bg-white p-5 shadow-sm">
                    <h3 className="font-display text-base font-bold text-navy-900">{need.title}</h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-charcoal-600">{need.body}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* 4. Our Electrical Service Process */}
            {service.processSteps && service.processSteps.length > 0 && (
              <Reveal>
                <h2 className="font-display text-2xl font-bold text-navy-900 sm:text-3xl">
                  Our Electrical Service Process
                </h2>
                <p className="mt-2 text-sm text-charcoal-600">
                  Every project follows our thorough, transparent protocol from initial inspection to final municipal release:
                </p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {service.processSteps.map((step, i) => (
                    <div key={i} className="rounded-xl border border-charcoal-200 bg-charcoal-50 p-5">
                      <span className="font-display text-2xl font-extrabold text-electric-500/40">
                        0{i + 1}
                      </span>
                      <h3 className="mt-2 font-display text-base font-bold text-navy-900">{step.title}</h3>
                      <p className="mt-1.5 text-xs leading-relaxed text-charcoal-600">{step.body}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            )}

            {/* 5. Real Project Case Study (when available) */}
            {relevantCaseStudy && (
              <Reveal>
                <div className="rounded-2xl border border-navy-200 bg-navy-50/60 p-7 shadow-sm">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-navy-900">
                    <FileText className="h-4 w-4 text-electric-500" />
                    <span>Real Houston Project Case Study</span>
                  </div>
                  <h3 className="mt-2 font-display text-xl font-bold text-navy-900">
                    {relevantCaseStudy.title}
                  </h3>
                  <p className="mt-1 text-xs text-charcoal-500">
                    Location: {relevantCaseStudy.neighborhood} · Client: {relevantCaseStudy.clientName}
                  </p>

                  <div className="mt-4 grid gap-4 sm:grid-cols-2 text-xs text-charcoal-700">
                    <div className="rounded-xl bg-white p-4 border border-charcoal-200">
                      <p className="font-bold text-navy-900">Problem Experienced:</p>
                      <p className="mt-1 leading-relaxed text-charcoal-600">{relevantCaseStudy.problem}</p>
                    </div>
                    <div className="rounded-xl bg-white p-4 border border-charcoal-200">
                      <p className="font-bold text-navy-900">Master Electrician Diagnosis:</p>
                      <p className="mt-1 leading-relaxed text-charcoal-600">{relevantCaseStudy.diagnosis}</p>
                    </div>
                  </div>

                  <div className="mt-4 rounded-xl bg-white p-4 border border-charcoal-200">
                    <p className="text-xs font-bold text-navy-900">Work Performed:</p>
                    <ul className="mt-2 space-y-1.5 text-xs text-charcoal-600">
                      {relevantCaseStudy.workPerformed.map((item, wIdx) => (
                        <li key={wIdx} className="flex items-start gap-2">
                          <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-electric-500" strokeWidth={3} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <blockquote className="mt-4 border-l-4 border-electric-400 pl-4 text-xs italic text-charcoal-700">
                    &ldquo;{relevantCaseStudy.clientQuote}&rdquo;
                  </blockquote>
                </div>
              </Reveal>
            )}

            {/* Code Compliance Note Box */}
            {service.necCodeNote && (
              <Reveal className="rounded-2xl border border-navy-800 bg-navy-950 p-6 text-white sm:p-7">
                <div className="flex items-center gap-2.5 text-electric-400">
                  <ShieldCheck className="h-5 w-5" />
                  <span className="font-display text-sm font-bold uppercase tracking-wider">
                    Safety &amp; National Electrical Code Standards
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-charcoal-200">{service.necCodeNote}</p>
              </Reveal>
            )}

            {/* 6. Why Choose S Branch Electric? */}
            <Reveal>
              <h2 className="font-display text-2xl font-bold text-navy-900 sm:text-3xl">
                Why Choose S Branch Electric?
              </h2>
              <p className="mt-2 text-sm text-charcoal-600">
                When you hire S Branch Electric, you work directly with Master Electrician Gustavo (&ldquo;Gus&rdquo;) Rivera:
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-charcoal-200 bg-white p-5 shadow-sm">
                  <div className="flex items-center gap-2 text-navy-900 font-bold text-sm">
                    <Award className="h-5 w-5 text-electric-500" />
                    <span>Texas Master Electrician</span>
                  </div>
                  <p className="mt-2 text-xs text-charcoal-600 leading-relaxed">
                    15+ years of hands-on Houston electrical experience. Licensed, insured, and thoroughly versed in City of Houston and NEC codes.
                  </p>
                </div>

                <div className="rounded-xl border border-charcoal-200 bg-white p-5 shadow-sm">
                  <div className="flex items-center gap-2 text-navy-900 font-bold text-sm">
                    <Phone className="h-5 w-5 text-electric-500" />
                    <span>Direct Phone Communication</span>
                  </div>
                  <p className="mt-2 text-xs text-charcoal-600 leading-relaxed">
                    No middlemen or automated call centers. You speak directly with Gus for transparent advice and immediate scheduling.
                  </p>
                </div>

                <div className="rounded-xl border border-charcoal-200 bg-white p-5 shadow-sm">
                  <div className="flex items-center gap-2 text-navy-900 font-bold text-sm">
                    <Star className="h-5 w-5 text-amber-500" fill="currentColor" />
                    <span>Verified 5.0 Google Rating</span>
                  </div>
                  <p className="mt-2 text-xs text-charcoal-600 leading-relaxed">
                    17 verified 5-star Google reviews from real clients in Spring Branch, Memorial, Katy, and Greater Houston.
                  </p>
                </div>

                <div className="rounded-xl border border-charcoal-200 bg-white p-5 shadow-sm">
                  <div className="flex items-center gap-2 text-navy-900 font-bold text-sm">
                    <MapPin className="h-5 w-5 text-electric-500" />
                    <span>Local Spring Branch Base</span>
                  </div>
                  <p className="mt-2 text-xs text-charcoal-600 leading-relaxed">
                    Centrally dispatched from 1837 Huge Oaks St in 77055 for fast arrival across I-10, Beltway 8, and Loop 610.
                  </p>
                </div>
              </div>

              {/* Related Real Customer Review Card */}
              {service.relatedReview && (
                <div className="mt-6 rounded-2xl border border-charcoal-200 bg-charcoal-50/70 p-6 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="eyebrow text-electric-600">Verified Client Feedback</span>
                    <div className="flex items-center gap-0.5">
                      {[0, 1, 2, 3, 4].map((s) => (
                        <Star key={s} className="h-4 w-4 text-amber-400" fill="currentColor" />
                      ))}
                    </div>
                  </div>
                  <blockquote className="mt-3 text-sm leading-relaxed text-charcoal-700 italic">
                    &ldquo;{service.relatedReview.quote}&rdquo;
                  </blockquote>
                  <div className="mt-3 border-t border-charcoal-200 pt-3 flex items-center justify-between text-xs">
                    <span className="font-bold text-navy-900">{service.relatedReview.author}</span>
                    <span className="text-charcoal-500">{service.relatedReview.meta}</span>
                  </div>
                </div>
              )}
            </Reveal>

            {/* 7. Areas We Serve */}
            <Reveal>
              <h2 className="font-display text-2xl font-bold text-navy-900 sm:text-3xl">
                Areas We Serve in Greater Houston
              </h2>
              <p className="mt-2 text-sm text-charcoal-600">
                S Branch Electric provides {service.shortName.toLowerCase()} across these confirmed service locations:
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {serviceAreas.map((area) => (
                  <Link
                    key={area.path}
                    to={area.path}
                    className="group flex items-center justify-between rounded-xl border border-charcoal-200 bg-white p-4 transition-all hover:border-electric-400 hover:shadow-sm"
                  >
                    <div>
                      <p className="text-sm font-bold text-navy-900 group-hover:text-electric-600">
                        {area.shortName}, TX
                      </p>
                      <p className="text-xs text-charcoal-500">{area.responseTime}</p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-charcoal-400 transition-transform group-hover:translate-x-1 group-hover:text-electric-500" />
                  </Link>
                ))}
              </div>
            </Reveal>

            {/* 8. Frequently Asked Questions */}
            <Reveal>
              <h2 className="font-display text-2xl font-bold text-navy-900 sm:text-3xl">
                Frequently Asked Questions About {service.shortName}
              </h2>
              <div className="mt-6 space-y-4">
                {service.faqs.map((faq, i) => (
                  <details
                    key={i}
                    className="group rounded-xl border border-charcoal-200 bg-white p-5 shadow-sm open:bg-charcoal-50 transition-colors"
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
                <h3 className="mt-2 font-display text-xl font-bold text-white">Call About Your Project</h3>
                <p className="mt-2 text-sm text-charcoal-300 leading-relaxed">
                  Discuss your {service.shortName.toLowerCase()} requirements directly with Gustavo and confirm service availability.
                </p>
                <a
                  href={BUSINESS.phoneHref}
                  className="mt-5 flex w-full items-center justify-center gap-2.5 rounded-xl bg-electric-400 px-5 py-3.5 text-base font-bold text-navy-950 transition-all hover:bg-electric-300"
                >
                  <Phone className="h-5 w-5" strokeWidth={2.5} />
                  {BUSINESS.phone}
                </a>
                <div className="mt-4 flex items-center justify-center gap-2 text-xs text-charcoal-400">
                  <MapPin className="h-3.5 w-3.5 text-electric-400" />
                  <span>Serving Spring Branch &amp; Greater Houston</span>
                </div>
              </div>

              {/* Related Services */}
              <div className="rounded-2xl border border-charcoal-200 bg-white p-6 shadow-sm">
                <h3 className="font-display text-base font-bold text-navy-900">Other Electrical Services</h3>
                <ul className="mt-4 space-y-2.5">
                  {related.map((r) => (
                    <li key={r.path}>
                      <Link
                        to={r.path}
                        className="group flex items-center justify-between rounded-lg px-3 py-2 text-sm text-charcoal-700 transition-colors hover:bg-charcoal-50 hover:text-navy-900"
                      >
                        {r.shortName}
                        <ArrowRight className="h-4 w-4 text-charcoal-400 transition-transform group-hover:translate-x-0.5" />
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/services"
                  className="mt-4 block rounded-xl bg-navy-50 px-3 py-2.5 text-center text-sm font-semibold text-navy-900 transition-colors hover:bg-navy-100"
                >
                  View All Services
                </Link>
              </div>

              {/* Service Areas */}
              <div className="rounded-2xl border border-charcoal-200 bg-white p-6 shadow-sm">
                <h3 className="font-display text-base font-bold text-navy-900">Communities Served</h3>
                <ul className="mt-4 space-y-2.5">
                  {serviceAreas.slice(0, 5).map((a) => (
                    <li key={a.path}>
                      <Link
                        to={a.path}
                        className="group flex items-center justify-between rounded-lg px-3 py-2 text-sm text-charcoal-700 transition-colors hover:bg-charcoal-50 hover:text-navy-900"
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

      {/* Final Call CTA Section */}
      <CtaSection
        title={`Schedule Your ${service.name} in Houston`}
        subtitle={`Call Gustavo at S Branch Electric at ${BUSINESS.phone} to discuss your project, get honest pricing, and confirm prompt service availability.`}
        label={`Call ${BUSINESS.phone}`}
      />
    </>
  );
}
