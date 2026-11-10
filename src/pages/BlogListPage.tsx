import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen,
  Calendar,
  Clock,
  ArrowRight,
  Search,
  Zap,
  Tag,
  CheckCircle2,
  ShieldCheck,
} from 'lucide-react';
import { useSeo } from '@/hooks/useSeo';
import { blogPosts, BlogPost } from '@/data/blogPosts';
import { BUSINESS } from '@/data/business';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CtaSection } from '@/components/CtaSection';
import { Reveal } from '@/components/Reveal';

const CATEGORIES = [
  'All',
  'Circuit Breakers & Panels',
  'Safety & Maintenance',
  'Storm Readiness',
  'Home Rewiring',
] as const;

export function BlogListPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  useSeo({
    title: 'Houston Electrical Guides & Articles | S Branch Electric',
    description:
      'Helpful electrical troubleshooting guides, panel upgrade tips, and home safety advice written by Houston Master Electrician Gustavo Rivera.',
    path: '/blog',
  });

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory =
        selectedCategory === 'All' || post.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.primaryKeyword.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const featuredPost = blogPosts[0];

  return (
    <>
      <Breadcrumbs items={[{ label: 'Electrical Guides & Blog' }]} />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-navy-900 py-16 sm:py-20 text-white">
        <div className="container-page relative z-10 max-w-4xl">
          <span className="eyebrow text-electric-400">
            <BookOpen className="h-4 w-4" />
            Homeowner Guides &amp; Insights
          </span>
          <h1 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            Houston Electrical Guides &amp; Articles
          </h1>
          <p className="mt-4 text-lg text-charcoal-200 leading-relaxed">
            Straightforward technical guides, troubleshooting advice, and electrical safety recommendations
            written by Master Electrician Gustavo (&ldquo;Gus&rdquo;) Rivera for Spring Branch and Greater Houston homeowners.
          </p>

          {/* Search Box */}
          <div className="mt-8 max-w-xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-charcoal-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search troubleshooting, breaker tripping, surge protection..."
                className="w-full rounded-xl border border-white/10 bg-white/10 py-3.5 pl-12 pr-4 text-white placeholder-charcoal-300 backdrop-blur-md focus:border-electric-400 focus:outline-none focus:ring-2 focus:ring-electric-400/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-charcoal-50 py-16 sm:py-20">
        <div className="container-page">
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 border-b border-charcoal-200 pb-6">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-navy-900 text-white shadow-sm'
                    : 'bg-white text-charcoal-600 border border-charcoal-200 hover:bg-charcoal-100 hover:text-navy-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Featured Article (when viewing All and no search query) */}
          {selectedCategory === 'All' && searchQuery.trim() === '' && featuredPost && (
            <Reveal className="mt-10">
              <div className="overflow-hidden rounded-2xl border border-charcoal-200 bg-white shadow-md lg:grid lg:grid-cols-12">
                <div className="relative lg:col-span-6">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.imageAlt}
                    className="h-64 w-full object-cover lg:h-full"
                    loading="eager"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="rounded-full bg-electric-400 px-3 py-1 text-xs font-bold uppercase tracking-wider text-navy-950">
                      Featured Guide
                    </span>
                  </div>
                </div>
                <div className="flex flex-col justify-between p-7 lg:col-span-6 lg:p-10">
                  <div>
                    <div className="flex items-center gap-3 text-xs text-charcoal-500">
                      <span className="font-semibold text-electric-600">{featuredPost.category}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {featuredPost.readTime}
                      </span>
                    </div>
                    <h2 className="mt-3 font-display text-2xl font-bold text-navy-900 hover:text-electric-600 sm:text-3xl">
                      <Link to={`/blog/${featuredPost.slug}`}>{featuredPost.title}</Link>
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-charcoal-600">{featuredPost.excerpt}</p>
                  </div>
                  <div className="mt-6 flex items-center justify-between border-t border-charcoal-100 pt-5">
                    <span className="text-xs text-charcoal-400">By Gustavo &ldquo;Gus&rdquo; Rivera, Master Electrician</span>
                    <Link
                      to={`/blog/${featuredPost.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-navy-900 hover:text-electric-500"
                    >
                      Read Guide
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          )}

          {/* Articles Grid */}
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 40}>
                <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-charcoal-200 bg-white shadow-sm transition-all hover:border-electric-400 hover:shadow-lg">
                  <Link to={`/blog/${post.slug}`} className="relative block h-48 overflow-hidden bg-navy-950">
                    <img
                      src={post.image}
                      alt={post.imageAlt}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-3 right-3 rounded-full bg-navy-900/80 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
                      {post.category}
                    </div>
                  </Link>

                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div>
                      <div className="flex items-center gap-2 text-xs text-charcoal-400">
                        <span className="flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5" />
                          {post.readTime}
                        </span>
                        <span>•</span>
                        <span className="text-electric-600 font-medium">Target: {post.primaryKeyword}</span>
                      </div>
                      <h3 className="mt-3 font-display text-lg font-bold text-navy-900 line-clamp-2 hover:text-electric-600">
                        <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-charcoal-600 line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="mt-6 border-t border-charcoal-100 pt-4 flex items-center justify-between text-xs">
                      <Link
                        to={post.servicePath}
                        className="font-medium text-charcoal-500 hover:text-electric-600"
                      >
                        Service: {post.serviceName.split(' ')[0]} →
                      </Link>
                      <Link
                        to={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-1 font-bold text-navy-900 hover:text-electric-500"
                      >
                        Read Post
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="rounded-2xl border border-charcoal-200 bg-white py-16 text-center">
              <Search className="mx-auto h-12 w-12 text-charcoal-300" />
              <h3 className="mt-4 font-display text-lg font-bold text-navy-900">No articles matched your search</h3>
              <p className="mt-2 text-sm text-charcoal-500">
                Try searching for another keyword or select a different category above.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="mt-4 inline-flex items-center rounded-lg bg-navy-900 px-4 py-2 text-sm font-semibold text-white hover:bg-navy-800"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection
        title="Have an Electrical Question Not Covered Here?"
        subtitle="Call Gustavo directly at 832-484-0514. A quick 5-minute phone conversation gives you honest advice and quick scheduling."
        label={`Call ${BUSINESS.phone}`}
      />
    </>
  );
}

