import { Link } from 'react-router-dom';
import { Phone, MapPin, Zap, Star, ExternalLink } from 'lucide-react';
import { BUSINESS } from '@/data/business';
import { services } from '@/data/services';
import { serviceAreas } from '@/data/serviceAreas';

export function Footer() {
  return (
    <footer className="bg-navy-900 text-charcoal-300">
      <div className="container-page py-14">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-2.5" aria-label="S Branch Electric home">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-electric-400">
                <Zap className="h-6 w-6 text-navy-900" strokeWidth={2.5} fill="currentColor" />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-lg font-extrabold text-white">S Branch Electric</span>
                <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-charcoal-400">
                  Houston, TX
                </span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-charcoal-400">
              Electrical installation service in Houston, Texas. Residential and commercial electrical work,
              available by phone for your electrical project needs.
            </p>
            <div className="mt-5 flex items-center gap-1.5">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-4 w-4 text-electric-400" fill="currentColor" />
              ))}
              <span className="ml-1.5 text-sm text-charcoal-400">
                {BUSINESS.rating} rating · {BUSINESS.reviewCount} Google reviews
              </span>
            </div>
            <a
              href={BUSINESS.phoneHref}
              className="mt-5 inline-flex items-center gap-2 rounded-lg bg-electric-400 px-5 py-3 text-sm font-bold text-navy-900 transition-all hover:bg-electric-300 hover:shadow-lg hover:shadow-electric-400/30"
            >
              <Phone className="h-4 w-4" strokeWidth={2.5} />
              {BUSINESS.phone}
            </a>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">Company</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link to="/" className="transition-colors hover:text-electric-400">Home</Link></li>
              <li><Link to="/about" className="transition-colors hover:text-electric-400">About Us</Link></li>
              <li><Link to="/reviews" className="transition-colors hover:text-electric-400">Reviews</Link></li>
              <li><Link to="/blog" className="transition-colors hover:text-electric-400">Electrical Guides &amp; Blog</Link></li>
              <li><Link to="/contact" className="transition-colors hover:text-electric-400">Contact</Link></li>
              <li><Link to="/services" className="transition-colors hover:text-electric-400">All Services</Link></li>
              <li><Link to="/service-areas" className="transition-colors hover:text-electric-400">Service Areas</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">Electrical Services</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {services.slice(0, 6).map((s) => (
                <li key={s.path}>
                  <Link to={s.path} className="transition-colors hover:text-electric-400">
                    {s.shortName} — Houston
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/services" className="font-semibold text-electric-400 transition-colors hover:text-electric-300">
                  View all services →
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">Service Areas</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {serviceAreas.slice(0, 6).map((a) => (
                <li key={a.path}>
                  <Link to={a.path} className="transition-colors hover:text-electric-400">
                    {a.shortName}, TX
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/service-areas" className="font-semibold text-electric-400 transition-colors hover:text-electric-300">
                  View all areas →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-2 text-sm text-charcoal-400">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-charcoal-500" />
            <span>{BUSINESS.address}</span>
          </div>
          <a
            href={BUSINESS.mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-electric-400 transition-colors hover:text-electric-300"
          >
            Open in Google Maps
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>

        <div className="mt-6 border-t border-white/10 pt-6 text-xs text-charcoal-500">
          <p>
            &copy; {new Date().getFullYear()} {BUSINESS.name}. All rights reserved. {BUSINESS.category}.
          </p>
          <p className="mt-1.5 text-charcoal-400">
            S Branch Electric is a locally owned electrical installation and repair service based at 1837 Huge Oaks St in the Spring Branch community of Houston, TX (77055). Independent local business; not affiliated with Spring Branch Electric Company in Comal County / Hill Country. Call {BUSINESS.phone} for service.
          </p>
        </div>
      </div>
    </footer>
  );
}
