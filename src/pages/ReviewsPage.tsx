import { Star, Sparkles, ExternalLink } from 'lucide-react';
import { useSeo } from '@/hooks/useSeo';
import { BUSINESS } from '@/data/business';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CtaSection } from '@/components/CtaSection';
import { Reveal } from '@/components/Reveal';
import { GoogleReviewsWidget } from '@/components/GoogleReviewsWidget';

export function ReviewsPage() {
  useSeo({
    title: '5.0 Star Reviews (17 Reviews) | S Branch Electric — Houston, TX',
    description:
      'Read 17 verified 5.0-star Google reviews for S Branch Electric and electrician Gustavo (Gus) in Houston, TX. Call 832-484-0514.',
    path: '/reviews',
  });

  return (
    <>
      <Breadcrumbs items={[{ label: 'Reviews' }]} />

      {/* Hero Header */}
      <section className="relative overflow-hidden bg-navy-900 text-white">
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              'radial-gradient(circle at 80% 20%, rgba(250,204,21,0.2) 0%, transparent 55%)',
          }}
        />
        <div className="container-page relative py-16 sm:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow text-electric-400">
              <Star className="h-3.5 w-3.5" fill="currentColor" />
              Verified Google Reviews
            </span>
            <h1 className="mt-4 font-display text-4xl font-extrabold text-white sm:text-5xl">
              17 Verified 5.0-Star Reviews
            </h1>
            <p className="mt-4 text-lg text-charcoal-200">
              Read all genuine Google reviews from Spring Branch, Memorial, Katy, and Greater Houston homeowners
              and business owners who trust <strong>Gustavo (Gus)</strong> and S Branch Electric.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Google Reviews Section */}
      <section className="bg-charcoal-50 py-16 sm:py-20">
        <div className="container-page max-w-5xl">
          <Reveal>
            <GoogleReviewsWidget showAllByDefault={true} />
          </Reveal>
        </div>
      </section>

      <CtaSection
        title="Need an Electrician in Houston, TX?"
        subtitle={`Experience the 5-star service our customers rave about. Call Gustavo at ${BUSINESS.phone} today.`}
        label={`Call ${BUSINESS.phone}`}
      />
    </>
  );
}
