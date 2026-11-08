import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import type { ServicePage } from '@/data/services';
import { BUSINESS } from '@/data/business';
import { getServiceIcon } from '@/utils/serviceIcons';

interface ServiceCardProps {
  service: ServicePage;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = getServiceIcon(service.icon);

  return (
    <article className="card group flex flex-col overflow-hidden">
      <Link to={service.path} className="block overflow-hidden" aria-label={`${service.name} in Houston, TX`}>
        <img
          src={service.cardImage}
          alt={service.cardAlt}
          loading="lazy"
          className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy-50 text-navy-700 transition-colors group-hover:bg-electric-400 group-hover:text-navy-900">
            <Icon className="h-5 w-5" strokeWidth={2} />
          </span>
          <h3 className="font-display text-lg font-bold text-navy-900">{service.name}</h3>
        </div>
        <p className="text-sm leading-relaxed text-charcoal-600">{service.tagline}</p>
        <div className="mt-5 flex flex-col gap-2.5 pt-1">
          <Link
            to={service.path}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-700 transition-colors hover:text-electric-500"
          >
            {service.name} in Houston
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <a
            href={BUSINESS.phoneHref}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-electric-600 transition-colors hover:text-electric-500"
          >
            <Phone className="h-3.5 w-3.5" strokeWidth={2.5} />
            {service.ctaLabel}
          </a>
        </div>
      </div>
    </article>
  );
}
