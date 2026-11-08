import { Link } from 'react-router-dom';
import {
  Phone,
  ArrowRight,
  MapPin,
  Star,
  ShieldCheck,
  Clock,
  Wrench,
  Zap,
  MessageCircle,
  ExternalLink,
  Quote,
  Home,
  Building2,
  Cable,
  Lightbulb,
  PlugZap,
  HelpCircle,
  Plus,
  Check,
  AlertTriangle,
  Flame,
  Volume2,
  CloudLightning,
  Sun,
  ShieldAlert,
  CheckCircle2,
  Award,
} from 'lucide-react';
import { useSeo } from '@/hooks/useSeo';
import { BUSINESS } from '@/data/business';
import { services } from '@/data/services';
import { serviceAreas } from '@/data/serviceAreas';
import { reviews } from '@/data/reviews';
import { ServiceCard } from '@/components/ServiceCard';
import { CtaSection } from '@/components/CtaSection';
import { Reveal } from '@/components/Reveal';
import { GoogleReviewsWidget } from '@/components/GoogleReviewsWidget';

export function HomePage() {
  useSeo({
    title: 'S Branch Electric | Electrical Installation Service in Houston, TX',
    description:
      'S Branch Electric is a trusted electrical installation and repair service in Houston, TX. Call 832-484-0514 for panel upgrades, wiring, lighting, EV circuits, and repairs.',
    path: '/',
  });

  return (
    <>
      <Hero />
      <TrustBar />
      <StatsBanner />
      <ServicesSection />
      <WarningSignsSection />
      <WhyChoose />
      <HoustonClimateSection />
      <ResidentialCommercialSection />
      <ProcessSection />
      <HoustonElectricalSection />
      <ReviewsPreview />
      <AreasPreview />
      <HomeFaqSection />
      <CtaSection
        title="Need Electrical Installation or Repair in Houston?"
        subtitle="Call Gustavo at S Branch Electric to discuss your electrical project, get transparent pricing, and confirm service availability."
        label={`Call ${BUSINESS.phone}`}
      />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-900 text-white">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/27928762/pexels-photo-27928762.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920"
          alt="Professional electrician working on circuit breaker panel in Houston home"
          className="h-full w-full object-cover opacity-20"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900/95 to-navy-900/80" />
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              'radial-gradient(circle at 85% 15%, rgba(250,204,21,0.2) 0%, transparent 55%)',
          }}
        />
      </div>

      <div className="container-page relative py-16 sm:py-24 lg:py-28">
        <div className="max-w-3xl">
          {/* Urgent / Availability Alert Pill */}
          <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-electric-400/40 bg-electric-400/10 px-4 py-1.5 text-xs font-semibold text-electric-300 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-electric-400 animate-pulse" />
            <span>Spring Branch & Greater Houston Local Electrician</span>
            <span className="hidden sm:inline text-white/40">•</span>
            <span className="hidden sm:inline text-charcoal-200">Direct Phone Calls — No Call Centers</span>
          </div>

          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.12] text-white sm:text-5xl lg:text-6xl">
            Trusted Electrical Installation & Repairs in{' '}
            <span className="text-electric-400">Houston, TX</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-charcoal-200">
            From breaker panel upgrades and whole-home rewiring to dedicated appliance circuits and troubleshooting,
            <strong> S Branch Electric</strong> delivers safe, code-compliant electrical work across Houston.
            Speak directly with experienced electrician <strong>Gustavo (Gus)</strong> on every job.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center justify-center gap-3 rounded-xl bg-electric-400 px-8 py-4 text-lg font-bold text-navy-950 transition-all hover:bg-electric-300 hover:shadow-xl hover:shadow-electric-400/30 active:scale-[0.98]"
            >
              <Phone className="h-5 w-5" strokeWidth={2.5} />
              Call {BUSINESS.phone}
            </a>
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/30 px-6 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-white hover:bg-white/10"
            >
              Explore All Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/10 pt-6 text-sm text-charcoal-300">
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-electric-400 shrink-0" />
              <span>{BUSINESS.address}</span>
            </span>
            <span className="inline-flex items-center gap-2">
              <Star className="h-4 w-4 text-electric-400 shrink-0" fill="currentColor" />
              <strong className="text-white">{BUSINESS.rating}.0 Rating</strong>
              <span>({BUSINESS.reviewCount} Verified Google Reviews)</span>
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock className="h-4 w-4 text-electric-400 shrink-0" />
              <span>Weekend & Urgent Call Availability</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const items = [
    { icon: ShieldCheck, title: 'Code Compliant & Safe', desc: 'Strict adherence to NEC & City of Houston codes' },
    { icon: Wrench, title: 'Residential & Commercial', desc: 'Panel upgrades, lighting, wiring & diagnostics' },
    { icon: Phone, title: 'Direct Electrician Contact', desc: 'Speak straight to Gus — no middlemen or dispatchers' },
    { icon: MapPin, title: 'Houston Based & Local', desc: 'Spring Branch, Memorial, Katy, Bellaire & beyond' },
  ];
  return (
    <section className="border-b border-charcoal-200/60 bg-white">
      <div className="container-page grid grid-cols-1 gap-6 py-8 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <div key={item.title} className="flex items-start gap-3.5">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy-50 text-navy-800">
              <item.icon className="h-6 w-6" strokeWidth={2} />
            </span>
            <div>
              <h3 className="text-sm font-bold text-navy-950">{item.title}</h3>
              <p className="mt-0.5 text-xs leading-relaxed text-charcoal-500">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function StatsBanner() {
  const stats = [
    { value: '5.0 ★', label: 'Google Rating', note: '16+ 100% 5-star customer reviews' },
    { value: '100%', label: 'Code Compliant', note: 'Permitted and safety-tested work' },
    { value: '15+', label: 'Houston Areas', note: 'Spring Branch, Katy, Memorial, etc.' },
    { value: 'Direct', label: 'Phone First', note: 'No forms, no wait, instant response' },
  ];

  return (
    <section className="bg-navy-950 py-12 text-white">
      <div className="container-page">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 80}>
              <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm">
                <div className="font-display text-3xl font-extrabold text-electric-400 sm:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-1.5 font-display text-base font-bold text-white">{stat.label}</div>
                <div className="mt-1 text-xs text-charcoal-300">{stat.note}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="bg-charcoal-50 py-20 sm:py-24">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">
            <Zap className="h-3.5 w-3.5" fill="currentColor" />
            Complete Electrical Services
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-navy-900 sm:text-4xl">
            Professional Electrical Solutions in Houston
          </h2>
          <p className="mt-4 text-base text-charcoal-600">
            Whether you need an urgent electrical repair, a full 200-amp service panel upgrade, or new wiring for a
            remodel, S Branch Electric has the skill and equipment to complete your project safely.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.path} delay={i * 60}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 rounded-xl border-2 border-navy-900 px-7 py-3.5 text-base font-bold text-navy-900 transition-all hover:bg-navy-900 hover:text-white"
          >
            Browse All Electrical Services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function WarningSignsSection() {
  const signs = [
    {
      icon: AlertTriangle,
      title: 'Frequent Circuit Breaker Tripping',
      desc: 'Breakers that trip when running the microwave, air fryer, or AC indicate dangerous circuit overloads or weak breaker contacts.',
    },
    {
      icon: Lightbulb,
      title: 'Flickering or Dimming Lights',
      desc: 'Lights dimming when large appliances start up can point to loose service panel neutrals or failing electrical connections behind walls.',
    },
    {
      icon: Flame,
      title: 'Burning Smell or Warm Outlets',
      desc: 'Discolored outlet faceplates, warm wall switches, or burning plastic odors indicate hazardous electrical arcing that demands urgent repair.',
    },
    {
      icon: Volume2,
      title: 'Buzzing or Crackling From Panel',
      desc: 'A buzzing breaker box often means loose busbar connections or a breaker that fails to trip properly under heavy electrical load.',
    },
    {
      icon: PlugZap,
      title: 'Ungrounded 2-Prong Outlets',
      desc: 'Older Houston homes with two-prong receptacles lack grounding, leaving expensive electronics and appliances vulnerable to shock and surge damage.',
    },
    {
      icon: CloudLightning,
      title: 'Storm & Surge Vulnerability',
      desc: 'Houston thunderstorms and power grid spikes can destroy appliances without dedicated whole-home surge protection at the panel.',
    },
  ];

  return (
    <section className="bg-white py-20 sm:py-24 border-y border-charcoal-100">
      <div className="container-page">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow text-amber-600">
            <ShieldAlert className="h-3.5 w-3.5" />
            Home Electrical Safety
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-navy-950 sm:text-4xl">
            6 Signs You Need an Electrician Immediately
          </h2>
          <p className="mt-4 text-base text-charcoal-600">
            Ignoring electrical warning signs can lead to component failure, appliance damage, or serious electrical fires.
            If you notice any of these symptoms in your Houston home or business, call right away.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {signs.map((sign, i) => (
            <Reveal key={sign.title} delay={i * 60}>
              <div className="card h-full p-6 border-l-4 border-l-amber-500">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                  <sign.icon className="h-6 w-6" strokeWidth={2} />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-navy-900">{sign.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-600">{sign.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 rounded-2xl bg-amber-50 p-6 border border-amber-200 text-center sm:flex sm:items-center sm:justify-between sm:text-left">
          <div>
            <h4 className="font-display text-base font-bold text-navy-950">
              Experiencing one of these electrical issues right now?
            </h4>
            <p className="text-sm text-charcoal-600">
              Call Gustavo directly at 832-484-0514. We can walk through the safety precautions and diagnose the issue quickly.
            </p>
          </div>
          <a
            href={BUSINESS.phoneHref}
            className="mt-4 inline-flex items-center gap-2 rounded-lg bg-navy-900 px-6 py-3 text-sm font-bold text-white transition-all hover:bg-navy-800 sm:mt-0 shrink-0"
          >
            <Phone className="h-4 w-4 text-electric-400" />
            Call for Diagnosis
          </a>
        </div>
      </div>
    </section>
  );
}

function WhyChoose() {
  const points = [
    {
      icon: MessageCircle,
      title: 'Direct Communication with Gus',
      body: 'No call centers, sales dispatchers, or automated bots. When you call 832-484-0514, you talk directly with the master electrician handling your work.',
    },
    {
      icon: Award,
      title: 'Punctual, Tidy & Respectful',
      body: 'Verified Houston reviews highlight our punctuality, clean work areas, and clear explanations of every electrical repair and installation.',
    },
    {
      icon: ShieldCheck,
      title: 'Code-Compliant Craftsmanship',
      body: 'All wiring, breaker installations, and panel upgrades are performed strictly according to the National Electrical Code (NEC) and Houston city codes.',
    },
    {
      icon: Clock,
      title: 'Prompt Weekend & Emergency Help',
      body: 'Electrical faults do not wait for business hours. Houston homeowners rely on S Branch Electric for responsive weekend and after-hours service.',
    },
  ];

  return (
    <section className="bg-charcoal-50 py-20 sm:py-24">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <span className="eyebrow">
              <ShieldCheck className="h-3.5 w-3.5" />
              Why S Branch Electric
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold text-navy-900 sm:text-4xl">
              An Honest Houston Electrician Who Answers The Phone
            </h2>
            <p className="mt-4 text-base text-charcoal-600 leading-relaxed">
              Based at 1837 Huge Oaks St in the heart of Spring Branch, S Branch Electric was built on honest advice,
              fair upfront pricing, and meticulous electrical craftsmanship.
            </p>
            <p className="mt-3 text-base text-charcoal-600 leading-relaxed">
              We never push unnecessary replacements. If a breaker or circuit can be repaired safely, we fix it. If an
              upgrade is required for safety, we walk you through every step so you make the best decision for your home.
            </p>

            <div className="mt-6 flex flex-col gap-3 text-sm font-medium text-navy-900">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                <span>Upfront pricing before work begins — no surprise fees</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                <span>Whole-home surge protection & grounding expertise</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                <span>Residential homes, commercial spaces & light industrial</span>
              </div>
            </div>

            <div className="mt-8 overflow-hidden rounded-2xl shadow-xl">
              <img
                src="https://images.pexels.com/photos/20500461/pexels-photo-20500461.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Electrician working on electrical wiring inside Houston property"
                loading="lazy"
                className="h-64 w-full object-cover"
              />
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {points.map((point, i) => (
              <Reveal key={point.title} delay={i * 80}>
                <div className="card h-full p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-electric-400 text-navy-950 font-bold">
                    <point.icon className="h-5 w-5" strokeWidth={2.2} />
                  </span>
                  <h3 className="mt-4 font-display text-base font-bold text-navy-900">{point.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal-600">{point.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function HoustonClimateSection() {
  const challenges = [
    {
      icon: CloudLightning,
      title: 'Severe Storms & Lightning Surges',
      desc: 'Houston experiences intense electrical storms that send voltage spikes through city lines. A whole-home surge protector at the panel protects smart appliances, HVAC systems, and computers.',
    },
    {
      icon: Sun,
      title: 'Summer Heat & HVAC Load Demands',
      desc: 'Triple-digit Houston summers force air conditioners to run continuously. Aging 100-amp panels frequently overheat under this strain; upgrading to 200 amps provides safe, reliable cooling.',
    },
    {
      icon: Cable,
      title: 'Older Spring Branch & Heights Wiring',
      desc: 'Many homes built in the 1950s-1970s still have aluminum branch wiring or ungrounded circuits. We perform dedicated rewiring and circuit grounding to modernize older homes.',
    },
    {
      icon: Home,
      title: 'Outdoor Living & Moisture Weatherproofing',
      desc: 'Patio lighting, pool pumps, outdoor kitchens, and hot tubs require weatherproof GFCI protection to withstand Houston humidity, rainstorms, and flood conditions.',
    },
  ];

  return (
    <section className="bg-navy-900 py-20 sm:py-24 text-white">
      <div className="container-page">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow text-electric-400">
            <MapPin className="h-3.5 w-3.5" />
            Houston Electrical Realities
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-white sm:text-4xl">
            Built for Houston&apos;s Climate &amp; Neighborhoods
          </h2>
          <p className="mt-4 text-base text-charcoal-300">
            Electrical work in Houston requires specialized knowledge of Gulf Coast weather patterns, high humidity,
            summer power grid stress, and historic home infrastructure.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {challenges.map((item, i) => (
            <Reveal key={item.title} delay={i * 70}>
              <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-electric-400/20 text-electric-400">
                  <item.icon className="h-5 w-5" strokeWidth={2} />
                </span>
                <h3 className="mt-4 font-display text-base font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-300">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ResidentialCommercialSection() {
  const residential = [
    '200-amp service panel upgrades & replacements',
    'Dedicated appliance circuits (dryers, ovens, EV chargers)',
    'Whole-home rewiring & aluminum wire remediation',
    'Indoor recessed lighting, ceiling fans & chandelier hanging',
    'Outdoor security, patio & landscape lighting',
    'GFCI/AFCI breaker and outlet installation for safety',
    'Whole-home surge protection against grid spikes',
  ];

  const commercial = [
    'Commercial tenant build-outs & space renovations',
    'Three-phase commercial panel installations & drops',
    'Commercial kitchen & heavy equipment hookups',
    'Overhead LED warehouse & retail lighting retrofits',
    'Emergency exit signs & egress lighting compliance',
    'Dedicated equipment circuits & subpanel distribution',
    'Commercial troubleshooting, code corrections & repairs',
  ];

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">
            <Building2 className="h-3.5 w-3.5" />
            Service Capabilities
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-navy-900 sm:text-4xl">
            Residential &amp; Commercial Expertise
          </h2>
          <p className="mt-4 text-base text-charcoal-600">
            Whether powering your family home or keeping your Houston business running safely, S Branch Electric handles
            projects of all sizes.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Residential Card */}
          <Reveal>
            <div className="h-full rounded-2xl border border-charcoal-200 bg-charcoal-50 p-8 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-electric-400">
                  <Home className="h-6 w-6" strokeWidth={2} />
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold text-navy-900">Residential Electrical</h3>
                  <p className="text-xs text-charcoal-500">For Houston Homeowners &amp; Rentals</p>
                </div>
              </div>
              <ul className="mt-6 space-y-3">
                {residential.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-charcoal-700">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-electric-500" strokeWidth={2.5} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 border-t border-charcoal-200 pt-6">
                <Link
                  to="/residential-electrical-installation-houston-tx"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-navy-900 hover:text-electric-600 transition-colors"
                >
                  Learn more about residential services
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>

          {/* Commercial Card */}
          <Reveal delay={100}>
            <div className="h-full rounded-2xl border border-charcoal-200 bg-charcoal-50 p-8 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-electric-400">
                  <Building2 className="h-6 w-6" strokeWidth={2} />
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold text-navy-900">Commercial Electrical</h3>
                  <p className="text-xs text-charcoal-500">For Houston Retail, Offices &amp; Facilities</p>
                </div>
              </div>
              <ul className="mt-6 space-y-3">
                {commercial.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-charcoal-700">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-electric-500" strokeWidth={2.5} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 border-t border-charcoal-200 pt-6">
                <Link
                  to="/commercial-electrical-installation-houston-tx"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-navy-900 hover:text-electric-600 transition-colors"
                >
                  Learn more about commercial services
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  const steps = [
    {
      num: '01',
      title: 'Call 832-484-0514',
      body: 'Call S Branch Electric directly. Describe what you are experiencing or what you need installed — no lengthy online forms.',
    },
    {
      num: '02',
      title: 'Discuss Your Project with Gus',
      body: 'Explain your symptoms, equipment specs, or renovation plans. Receive honest, practical recommendations and upfront pricing.',
    },
    {
      num: '03',
      title: 'Schedule at Your Convenience',
      body: 'Pick an appointment time that works for you. We confirm our arrival time and keep you informed every step of the way.',
    },
    {
      num: '04',
      title: 'Safe, Completed Work',
      body: 'Your installation or repair is performed strictly to code, thoroughly tested, and left clean and tidy before we leave.',
    },
  ];

  return (
    <section className="bg-charcoal-50 py-20 sm:py-24">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">
            <Phone className="h-3.5 w-3.5" />
            Simple Process
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-navy-900 sm:text-4xl">
            How Working With Us Works
          </h2>
          <p className="mt-4 text-base text-charcoal-600">
            No waiting days for an email reply. Just call, talk directly to the electrician, and get your electrical
            issues resolved.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal key={step.num} delay={i * 70}>
              <div className="relative h-full rounded-2xl border border-charcoal-200 bg-white p-6 shadow-sm">
                <span className="font-display text-4xl font-extrabold text-electric-500/30">{step.num}</span>
                <h3 className="mt-3 font-display text-lg font-bold text-navy-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-600">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function HoustonElectricalSection() {
  const features = [
    {
      icon: Home,
      title: 'Residential Electrical Upgrades',
      body: 'Complete home rewiring, dedicated appliance circuits, grounded 3-prong receptacles, GFCI bathroom & kitchen outlets, and modern panel replacements.',
    },
    {
      icon: Building2,
      title: 'Commercial Business Electrical',
      body: 'Tenant improvements, retail lighting retrofits, 3-phase machinery circuits, subpanels, and electrical safety code compliance for Houston businesses.',
    },
    {
      icon: Cable,
      title: 'Wiring & Whole-Home Rewiring',
      body: 'Upgrading aged aluminum wiring, rewiring room additions and remodeled spaces, and replacing wires damaged by Gulf Coast weather or pests.',
    },
    {
      icon: Zap,
      title: 'Panel & Breaker Replacement',
      body: 'Modernizing 100-amp panels to 200 amps, replacing worn circuit breakers, fixing buzzing busbars, and installing AFCI/GFCI protection.',
    },
    {
      icon: Lightbulb,
      title: 'Lighting & Ceiling Fan Installation',
      body: 'Recessed LED cans, fashionable pendants, exterior security floodlights, landscape pathway lighting, and fan-rated ceiling box installations.',
    },
    {
      icon: PlugZap,
      title: 'Troubleshooting & Circuit Diagnostics',
      body: 'Accurate meter diagnosis for flickering lights, dead outlets, tripped breakers, and neutral wire faults with long-term permanent fixes.',
    },
  ];

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <Reveal className="lg:col-span-4 lg:sticky lg:top-24">
            <span className="eyebrow">
              <MapPin className="h-3.5 w-3.5" />
              Houston Electrical Services
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold text-navy-900 sm:text-4xl">
              Electrical Care for Houston Homes &amp; Businesses
            </h2>
            <p className="mt-4 text-base text-charcoal-600 leading-relaxed">
              Houston&apos;s unique mix of established 1960s-1970s neighborhoods and modern construction creates diverse
              electrical challenges. From Spring Branch ranch homes to Memorial estates and commercial shops, S Branch
              Electric provides dependable solutions.
            </p>
            <p className="mt-4 text-base text-charcoal-600 leading-relaxed">
              Having a direct electrician you can call means faster answers, clearer diagnostics, and no corporate
              markup.
            </p>
            <div className="mt-7 overflow-hidden rounded-2xl shadow-xl">
              <img
                src="https://images.pexels.com/photos/32497160/pexels-photo-32497160.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Electrician examining a residential fuse box during an electrical service call in Houston"
                loading="lazy"
                className="h-56 w-full object-cover"
              />
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-8">
            {features.map((feature, i) => (
              <Reveal key={feature.title} delay={i * 60}>
                <div className="card h-full p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-50 text-navy-800 transition-colors group-hover:bg-electric-400 group-hover:text-navy-950">
                    <feature.icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <h3 className="mt-4 font-display text-base font-bold text-navy-900">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal-600">{feature.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ReviewsPreview() {
  return (
    <section className="bg-charcoal-50 py-20 sm:py-24">
      <div className="container-page max-w-5xl">
        <Reveal className="mx-auto max-w-3xl text-center mb-12">
          <span className="eyebrow">
            <Star className="h-3.5 w-3.5" fill="currentColor" />
            Verified Customer Reviews
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-navy-900 sm:text-4xl">
            Real Google Reviews for S Branch Electric
          </h2>
          <p className="mt-4 text-base text-charcoal-600">
            Read direct feedback from Spring Branch and Houston homeowners and businesses who rely on Gustavo (Gus)
            for electrical installations, panel replacements, surge protectors, and repairs.
          </p>
        </Reveal>

        <Reveal>
          <GoogleReviewsWidget initialLimit={4} showAllByDefault={false} />
        </Reveal>
      </div>
    </section>
  );
}

function AreasPreview() {
  return (
    <section className="bg-charcoal-50 py-20 sm:py-24">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">
            <MapPin className="h-3.5 w-3.5" />
            Service Areas
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-navy-900 sm:text-4xl">
            Communities Served Across Greater Houston
          </h2>
          <p className="mt-4 text-base text-charcoal-600">
            S Branch Electric is based at 1837 Huge Oaks St in Spring Branch, Houston. We proudly serve residential and
            commercial clients throughout the following Houston areas.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {serviceAreas.map((area, i) => (
            <Reveal key={area.path} delay={i * 50}>
              <Link
                to={area.path}
                className="group flex items-center justify-between rounded-xl border border-charcoal-200 bg-white p-5 shadow-sm transition-all hover:border-electric-400 hover:shadow-lg hover:shadow-navy-900/5"
              >
                <div>
                  <h3 className="font-display text-lg font-bold text-navy-900">{area.shortName}, TX</h3>
                  <p className="mt-1 text-sm text-charcoal-500">Electrical service available</p>
                </div>
                <ArrowRight className="h-5 w-5 text-charcoal-400 transition-all group-hover:translate-x-1 group-hover:text-electric-500" />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomeFaqSection() {
  const faqs = [
    {
      question: 'How do I contact S Branch Electric for a quote or service call?',
      answer:
        'Call 832-484-0514. S Branch Electric uses direct phone calls as the fastest, most effective contact method. You will speak directly with Gus to discuss your electrical project, timeline, and pricing.',
    },
    {
      question: 'Does S Branch Electric serve my neighborhood in Houston?',
      answer:
        'We are based in Spring Branch (77055) and actively serve Spring Branch, Memorial, Bellaire, Katy, Cypress, Spring, the Energy Corridor, and neighboring Houston communities. Call to confirm availability for your address.',
    },
    {
      question: 'Do you handle both residential and commercial electrical work?',
      answer:
        'Yes! S Branch Electric provides full electrical services for homeowners, rental properties, retail storefronts, offices, and light commercial spaces across Houston.',
    },
    {
      question: 'Can you help with emergency electrical issues or weekend calls?',
      answer:
        'Yes. Gustavo frequently assists Houston homeowners with weekend and urgent electrical problems, including blown fuses, dead appliance circuits, and sparking panels. Call 832-484-0514 immediately if you have an urgent situation.',
    },
    {
      question: 'When should I upgrade my electrical panel to 200 amps?',
      answer:
        'You should consider a 200-amp upgrade if your home still has a 100-amp panel, if your breakers trip frequently when high-wattage appliances run simultaneously, or if you are installing an EV charger, tankless water heater, hot tub, or new HVAC system.',
    },
    {
      question: 'Why do my kitchen or bathroom outlets keep tripping?',
      answer:
        'Kitchen and bathroom circuits are protected by GFCI (Ground Fault Circuit Interrupter) outlets. Tripping usually indicates an overloaded circuit (e.g. running an air fryer and toaster together) or moisture/ground faults in the wiring. We can test the circuit and install a dedicated line if needed.',
    },
    {
      question: 'Do you install whole-house surge protectors?',
      answer:
        'Yes! Whole-house surge protection installed directly inside your breaker panel protects all connected appliances, computers, and electronics from Houston grid surges and lightning strikes.',
    },
    {
      question: 'Do electrical installations in Houston require permits?',
      answer:
        'Major electrical installations, such as main panel upgrades and new circuit additions, often require City of Houston permits and inspections. We ensure all work complies with the National Electrical Code (NEC) and city standards.',
    },
  ];

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow">
              <HelpCircle className="h-3.5 w-3.5" />
              Frequently Asked Questions
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold text-navy-900 sm:text-4xl">
              Houston Electrical FAQs
            </h2>
            <p className="mt-4 text-base text-charcoal-600 leading-relaxed">
              Here are answers to the most common questions Houston homeowners and business owners ask about electrical
              services, safety, costs, and scheduling.
            </p>
            <div className="mt-7 rounded-2xl bg-navy-900 p-7 text-white">
              <h3 className="font-display text-lg font-bold">Have a Specific Question?</h3>
              <p className="mt-2 text-sm text-charcoal-300">
                Call Gustavo at S Branch Electric directly. A 5-minute phone call is the fastest way to get clear,
                honest advice.
              </p>
              <a
                href={BUSINESS.phoneHref}
                className="mt-5 inline-flex items-center gap-2.5 rounded-xl bg-electric-400 px-6 py-3.5 text-base font-bold text-navy-950 transition-all hover:bg-electric-300"
              >
                <Phone className="h-5 w-5" strokeWidth={2.5} />
                Call {BUSINESS.phone}
              </a>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
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
      </div>
    </section>
  );
}
