import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Zap, ChevronDown } from 'lucide-react';
import { BUSINESS } from '@/data/business';
import { services } from '@/data/services';
import { serviceAreas } from '@/data/serviceAreas';
import { CallButton } from './CallButton';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setAreasOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors ${
      isActive ? 'text-electric-500' : 'text-charcoal-600 hover:text-navy-900'
    }`;

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/95 shadow-md shadow-navy-900/5 backdrop-blur-md' : 'bg-white'
        }`}
      >
        <div className="container-page flex h-20 items-center justify-between gap-4 py-3">
          <Link to="/" className="flex items-center gap-2.5" aria-label="S Branch Electric home">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-900">
              <Zap className="h-6 w-6 text-electric-400" strokeWidth={2.5} fill="currentColor" />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-display text-lg font-extrabold text-navy-900">S Branch Electric</span>
              <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-charcoal-400">
                Houston, TX
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            <NavLink to="/" className={navLinkClass} end>
              Home
            </NavLink>

            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <NavLink to="/services" className={navLinkClass}>
                <span className="inline-flex items-center gap-1">
                  Services
                  <ChevronDown className="h-3.5 w-3.5" />
                </span>
              </NavLink>
              {servicesOpen && (
                <div className="absolute left-1/2 top-full z-50 w-[520px] -translate-x-1/2 pt-3">
                  <div className="animate-slide-down rounded-xl border border-charcoal-100 bg-white p-3 shadow-xl shadow-navy-900/10">
                    <div className="grid grid-cols-2 gap-1">
                      {services.map((s) => (
                        <Link
                          key={s.path}
                          to={s.path}
                          className="rounded-lg px-3 py-2.5 text-sm text-charcoal-700 transition-colors hover:bg-navy-50 hover:text-navy-900"
                        >
                          {s.shortName}
                        </Link>
                      ))}
                    </div>
                    <Link
                      to="/services"
                      className="mt-1 block rounded-lg bg-navy-50 px-3 py-2.5 text-center text-sm font-semibold text-navy-900 transition-colors hover:bg-navy-100"
                    >
                      View All Electrical Services
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={() => setAreasOpen(true)}
              onMouseLeave={() => setAreasOpen(false)}
            >
              <NavLink to="/service-areas" className={navLinkClass}>
                <span className="inline-flex items-center gap-1">
                  Service Areas
                  <ChevronDown className="h-3.5 w-3.5" />
                </span>
              </NavLink>
              {areasOpen && (
                <div className="absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 pt-3">
                  <div className="animate-slide-down rounded-xl border border-charcoal-100 bg-white p-3 shadow-xl shadow-navy-900/10">
                    {serviceAreas.map((a) => (
                      <Link
                        key={a.path}
                        to={a.path}
                        className="block rounded-lg px-3 py-2.5 text-sm text-charcoal-700 transition-colors hover:bg-navy-50 hover:text-navy-900"
                      >
                        {a.shortName}, TX
                      </Link>
                    ))}
                    <Link
                      to="/service-areas"
                      className="mt-1 block rounded-lg bg-navy-50 px-3 py-2.5 text-center text-sm font-semibold text-navy-900 transition-colors hover:bg-navy-100"
                    >
                      View All Service Areas
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>
            <NavLink to="/reviews" className={navLinkClass}>
              Reviews
            </NavLink>
            <NavLink to="/blog" className={navLinkClass}>
              Guides &amp; Blog
            </NavLink>
            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center gap-2 rounded-lg bg-electric-400 px-5 py-2.5 text-sm font-bold text-navy-900 transition-all hover:bg-electric-300 hover:shadow-lg hover:shadow-electric-400/30 active:scale-[0.98]"
            >
              <Phone className="h-4 w-4" strokeWidth={2.5} />
              {BUSINESS.phone}
            </a>
          </div>

          <button
            className="inline-flex items-center justify-center rounded-lg p-2 text-navy-900 lg:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div className="absolute inset-0 bg-navy-950/60 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-[85%] max-w-sm overflow-y-auto bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-charcoal-100 px-5 py-4">
              <span className="font-display text-base font-bold text-navy-900">Menu</span>
              <button
                onClick={() => setMobileOpen(false)}
                className="rounded-lg p-2 text-charcoal-500 hover:bg-charcoal-50"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex flex-col px-3 py-4" aria-label="Mobile">
              <MobileLink to="/" label="Home" />
              <MobileLink to="/services" label="Electrical Services" />
              <MobileCollapse label="Services" items={services.map((s) => ({ label: s.shortName, to: s.path }))} />
              <MobileCollapse
                label="Service Areas"
                items={serviceAreas.map((a) => ({ label: `${a.shortName}, TX`, to: a.path }))}
              />
              <MobileLink to="/about" label="About" />
              <MobileLink to="/reviews" label="Reviews" />
              <MobileLink to="/blog" label="Guides & Blog" />
              <MobileLink to="/contact" label="Contact" />
              <div className="mt-4 px-2">
                <CallButton size="lg" className="w-full" />
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}

function MobileLink({ to, label }: { to: string; label: string }) {
  return (
    <NavLink
      to={to}
      end={to === '/'}
      className={({ isActive }) =>
        `rounded-lg px-3 py-3 text-base font-medium transition-colors ${
          isActive ? 'bg-navy-50 text-navy-900' : 'text-charcoal-700 hover:bg-charcoal-50'
        }`
      }
    >
      {label}
    </NavLink>
  );
}

function MobileCollapse({ label, items }: { label: string; items: { label: string; to: string }[] }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-base font-medium text-charcoal-700 hover:bg-charcoal-50"
        aria-expanded={open}
      >
        {label}
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="ml-3 border-l border-charcoal-100 pl-3">
          {items.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="block rounded-lg px-3 py-2.5 text-sm text-charcoal-600 transition-colors hover:bg-charcoal-50 hover:text-navy-900"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
