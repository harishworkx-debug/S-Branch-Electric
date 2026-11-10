import { useParams, Link, Navigate } from 'react-router-dom';
import {
  Calendar,
  Clock,
  ArrowRight,
  Phone,
  HelpCircle,
  Plus,
  ShieldCheck,
  Check,
  Award,
  ChevronLeft,
  Wrench,
  FileText,
  UserCheck,
} from 'lucide-react';
import { useSeo } from '@/hooks/useSeo';
import { getBlogPostBySlug, blogPosts } from '@/data/blogPosts';
import { projectCaseStudies } from '@/data/caseStudies';
import { BUSINESS } from '@/data/business';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CtaSection } from '@/components/CtaSection';
import { Reveal } from '@/components/Reveal';

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  if (!post) {
    return <Navigate to="/404" replace />;
  }

  const caseStudy = post.caseStudyId
    ? projectCaseStudies.find((c) => c.id === post.caseStudyId)
    : undefined;

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.metaDescription,
        image: post.image,
        datePublished: post.publishedDate,
        author: {
          '@type': 'Person',
          name: 'Gustavo Rivera',
          jobTitle: 'Texas Master Electrician',
          worksFor: {
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
        },
        publisher: {
          '@type': 'Organization',
          name: BUSINESS.name,
          url: 'https://www.springbranchelectric.co/',
        },
      },
      ...(post.faqs && post.faqs.length > 0
        ? [
            {
              '@type': 'FAQPage',
              mainEntity: post.faqs.map((faq) => ({
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
    title: `${post.title} | S Branch Electric`,
    description: post.metaDescription,
    path: `/blog/${post.slug}`,
    schema,
    ogImage: post.image,
  });

  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'Electrical Guides', to: '/blog' },
          { label: post.title },
        ]}
      />

      <article className="bg-white py-12 sm:py-16">
        <div className="container-page max-w-4xl">
          {/* Article Header */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3 text-xs text-charcoal-500">
              <span className="rounded-full bg-electric-400/20 px-3 py-1 font-bold text-navy-950">
                {post.category}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                {post.readTime}
              </span>
              <span>•</span>
              <span>Published {post.publishedDate}</span>
            </div>

            <h1 className="font-display text-3xl font-extrabold text-navy-900 sm:text-4xl lg:text-5xl leading-tight">
              {post.title}
            </h1>

            {/* Author Byline */}
            <div className="flex items-center gap-3 border-y border-charcoal-100 py-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-navy-900 font-bold text-electric-400">
                GR
              </div>
              <div>
                <p className="text-sm font-bold text-navy-900">
                  Gustavo (&ldquo;Gus&rdquo;) Rivera
                </p>
                <p className="text-xs text-charcoal-500">
                  Texas Master Electrician · 15+ Years Houston Experience
                </p>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mt-8 overflow-hidden rounded-2xl border border-charcoal-200 shadow-md">
            <img
              src={post.image}
              alt={post.imageAlt}
              className="h-80 w-full object-cover sm:h-96"
            />
          </div>

          {/* Key Takeaways Box */}
          <div className="mt-8 rounded-2xl border border-electric-400/30 bg-electric-400/10 p-6 sm:p-7">
            <div className="flex items-center gap-2 font-display text-base font-bold text-navy-950">
              <Award className="h-5 w-5 text-electric-600" />
              <span>Key Takeaway for Homeowners</span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-charcoal-800">
              {post.excerpt}
            </p>
          </div>

          {/* Content Body Sections */}
          <div className="mt-10 space-y-10">
            {post.sections.map((section, idx) => (
              <div key={idx} className="space-y-4">
                <h2 className="font-display text-2xl font-bold text-navy-900 sm:text-3xl">
                  {section.heading}
                </h2>
                {section.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="text-base leading-relaxed text-charcoal-700">
                    {p}
                  </p>
                ))}
                {section.bulletPoints && section.bulletPoints.length > 0 && (
                  <ul className="mt-4 space-y-3 rounded-xl bg-charcoal-50 p-5 border border-charcoal-200">
                    {section.bulletPoints.map((point, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5 text-sm text-charcoal-800">
                        <Check className="mt-1 h-4 w-4 shrink-0 text-electric-500" strokeWidth={3} />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Real Completed Project Story (Case Study) */}
          {caseStudy && (
            <div className="mt-12 rounded-2xl border border-navy-200 bg-navy-50/50 p-7 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-navy-900">
                <FileText className="h-4 w-4 text-electric-500" />
                <span>Real Houston Project Case Study</span>
              </div>
              <h3 className="mt-2 font-display text-xl font-bold text-navy-900">
                {caseStudy.title}
              </h3>
              <p className="mt-1 text-xs text-charcoal-500">
                Location: {caseStudy.neighborhood} · Client: {caseStudy.clientName}
              </p>

              <div className="mt-4 grid gap-4 sm:grid-cols-2 text-sm text-charcoal-700">
                <div className="rounded-xl bg-white p-4 border border-charcoal-200">
                  <p className="font-bold text-navy-900">Problem Encountered:</p>
                  <p className="mt-1 text-xs leading-relaxed text-charcoal-600">{caseStudy.problem}</p>
                </div>
                <div className="rounded-xl bg-white p-4 border border-charcoal-200">
                  <p className="font-bold text-navy-900">Master Electrician Diagnosis:</p>
                  <p className="mt-1 text-xs leading-relaxed text-charcoal-600">{caseStudy.diagnosis}</p>
                </div>
              </div>

              <blockquote className="mt-4 border-l-4 border-electric-400 pl-4 text-xs italic text-charcoal-700">
                &ldquo;{caseStudy.clientQuote}&rdquo;
              </blockquote>

              <div className="mt-4 flex items-center justify-between text-xs">
                <Link
                  to={caseStudy.servicePath}
                  className="font-bold text-navy-900 hover:text-electric-600"
                >
                  View Related Service: {caseStudy.serviceName} →
                </Link>
              </div>
            </div>
          )}

          {/* Related Service Link Callout */}
          <div className="mt-10 rounded-2xl bg-navy-900 p-8 text-white shadow-xl">
            <span className="eyebrow text-electric-400">Professional Electrician Support</span>
            <h3 className="mt-2 font-display text-xl font-bold">
              Need Professional Help with {post.serviceName}?
            </h3>
            <p className="mt-2 text-sm text-charcoal-300 leading-relaxed">
              S Branch Electric provides prompt, code-compliant electrical service throughout Spring Branch,
              Memorial, Bellaire, Katy, and Greater Houston. Speak directly with Gustavo.
            </p>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href={BUSINESS.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-electric-400 px-6 py-3.5 text-base font-bold text-navy-950 transition-all hover:bg-electric-300"
              >
                <Phone className="h-5 w-5" strokeWidth={2.5} />
                Call {BUSINESS.phone}
              </a>
              <Link
                to={post.servicePath}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-6 py-3.5 text-base font-semibold text-white transition-all hover:bg-white/10"
              >
                Learn More About {post.serviceName}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* FAQs Section */}
          {post.faqs && post.faqs.length > 0 && (
            <div className="mt-12 space-y-4">
              <h2 className="font-display text-2xl font-bold text-navy-900">
                Frequently Asked Questions
              </h2>
              {post.faqs.map((faq, i) => (
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
                  <p className="mt-3 pl-8 text-sm leading-relaxed text-charcoal-600">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          )}

          {/* Related Articles */}
          <div className="mt-16 border-t border-charcoal-200 pt-12">
            <h2 className="font-display text-2xl font-bold text-navy-900">
              More Electrical Guides
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-3">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  to={`/blog/${related.slug}`}
                  className="group rounded-xl border border-charcoal-200 bg-white p-4 shadow-sm transition-all hover:border-electric-400 hover:shadow-md"
                >
                  <h3 className="font-display text-sm font-bold text-navy-900 group-hover:text-electric-600 line-clamp-2">
                    {related.title}
                  </h3>
                  <p className="mt-2 text-xs text-charcoal-500 line-clamp-2">{related.excerpt}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-navy-900 group-hover:text-electric-500">
                    Read Guide →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>

      {/* Final CTA */}
      <CtaSection
        title="Schedule Your Electrical Service in Houston"
        subtitle="Call Gustavo at S Branch Electric (1837 Huge Oaks St) to discuss your project, confirm pricing, and schedule prompt service."
        label={`Call ${BUSINESS.phone}`}
      />
    </>
  );
}

