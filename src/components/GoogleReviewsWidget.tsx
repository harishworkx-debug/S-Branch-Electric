import { useState, useMemo } from 'react';
import { Star, ExternalLink, ThumbsUp, Share2, MessageSquare, Check, Sparkles } from 'lucide-react';
import { reviews, googleTopics, type Review } from '@/data/reviews';
import { BUSINESS } from '@/data/business';

interface GoogleReviewsWidgetProps {
  initialLimit?: number;
  showAllByDefault?: boolean;
}

export function GoogleReviewsWidget({ initialLimit = 4, showAllByDefault = false }: GoogleReviewsWidgetProps) {
  const [selectedTopic, setSelectedTopic] = useState('all');
  const [expanded, setExpanded] = useState(showAllByDefault);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [likedReviews, setLikedReviews] = useState<Record<string, boolean>>({});

  const filteredReviews = useMemo(() => {
    if (selectedTopic === 'all') return reviews;
    return reviews.filter((r) => r.tags.includes(selectedTopic));
  }, [selectedTopic]);

  const visibleReviews = expanded ? filteredReviews : filteredReviews.slice(0, initialLimit);

  const handleShare = (review: Review) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(`"${review.quote}" - ${review.author} (Review for S Branch Electric)`);
      setCopiedId(review.id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  const toggleLike = (id: string) => {
    setLikedReviews((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="rounded-3xl border border-charcoal-200 bg-white p-6 shadow-xl shadow-navy-950/5 sm:p-8 lg:p-10">
      {/* Google Header Scorecard */}
      <div className="flex flex-col gap-6 border-b border-charcoal-100 pb-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          {/* Google "G" Badge */}
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white shadow-md border border-charcoal-100 p-2">
            <svg viewBox="0 0 24 24" className="h-9 w-9" aria-hidden="true">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                fill="#EA4335"
              />
            </svg>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <span className="font-display text-3xl font-extrabold text-navy-950 sm:text-4xl">
                {BUSINESS.rating}
              </span>
              <div className="flex items-center gap-0.5">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-5 w-5 text-amber-400" fill="currentColor" />
                ))}
              </div>
            </div>
            <p className="mt-0.5 text-sm font-semibold text-charcoal-600">
              {BUSINESS.reviewCount} reviews on Google · 100% 5-Star Rating
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href={BUSINESS.mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-navy-900 px-5 py-3 text-sm font-bold text-white transition-all hover:bg-navy-800 shadow-sm"
          >
            <Sparkles className="h-4 w-4 text-electric-400" />
            Write a review
            <ExternalLink className="h-3.5 w-3.5 text-charcoal-400" />
          </a>
        </div>
      </div>

      {/* Sort / Topic Filter Chips (Google Topics) */}
      <div className="py-6 border-b border-charcoal-100">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-charcoal-500">
            Sort by Google review topics:
          </span>
          {selectedTopic !== 'all' && (
            <button
              onClick={() => setSelectedTopic('all')}
              className="text-xs font-semibold text-electric-600 hover:text-electric-700 underline"
            >
              Reset to All ({reviews.length})
            </button>
          )}
        </div>

        <div className="flex flex-wrap gap-2">
          {googleTopics.map((topic) => {
            const isSelected = selectedTopic === topic.key;
            return (
              <button
                key={topic.key}
                onClick={() => {
                  setSelectedTopic(topic.key);
                  setExpanded(true);
                }}
                className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium transition-all ${
                  isSelected
                    ? 'bg-navy-900 text-electric-400 shadow-md ring-2 ring-navy-900'
                    : 'bg-charcoal-50 border border-charcoal-200 text-charcoal-700 hover:border-charcoal-400 hover:bg-white'
                }`}
              >
                <span>{topic.label}</span>
                <span
                  className={`rounded-full px-1.5 py-0.5 text-[10px] font-bold ${
                    isSelected ? 'bg-navy-800 text-electric-400' : 'bg-charcoal-200 text-charcoal-600'
                  }`}
                >
                  {topic.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Reviews Cards List */}
      <div className="mt-8 space-y-6">
        {visibleReviews.map((review) => {
          const initials = review.author
            .split(' ')
            .map((n) => n[0])
            .join('')
            .slice(0, 2);

          const isLiked = !!likedReviews[review.id];

          return (
            <article
              key={review.id}
              className="rounded-2xl border border-charcoal-200 bg-white p-6 transition-all hover:border-charcoal-300 hover:shadow-md sm:p-7"
            >
              {/* Reviewer Header */}
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy-900 font-display text-base font-bold text-electric-400 shadow-sm">
                    {initials}
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-navy-950">{review.author}</h3>
                    {review.reviewerMeta && (
                      <p className="text-xs font-medium text-charcoal-500">{review.reviewerMeta}</p>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:flex-col sm:items-end">
                  <div className="flex items-center gap-0.5">
                    {[0, 1, 2, 3, 4].map((s) => (
                      <Star key={s} className="h-4 w-4 text-amber-400" fill="currentColor" />
                    ))}
                  </div>
                  <span className="text-xs text-charcoal-400">{review.date}</span>
                </div>
              </div>

              {/* Review Content */}
              <div className="mt-4 text-sm leading-relaxed text-charcoal-800 whitespace-pre-line font-normal">
                {review.quote}
              </div>

              {/* Assessment, Price & Services Chips */}
              {(review.priceAssessment || review.services || review.positiveTraits) && (
                <div className="mt-4 flex flex-wrap gap-2 pt-3 border-t border-charcoal-100 text-xs">
                  {review.priceAssessment && (
                    <div className="inline-flex items-center gap-1 rounded-lg bg-emerald-50 px-2.5 py-1 font-semibold text-emerald-800 border border-emerald-200">
                      <span>Price assessment:</span>
                      <strong>{review.priceAssessment}</strong>
                      {review.priceRange && <span className="text-emerald-700 font-normal">({review.priceRange})</span>}
                    </div>
                  )}
                  {review.services && (
                    <div className="inline-flex items-center gap-1 rounded-lg bg-navy-50 px-2.5 py-1 font-medium text-navy-900 border border-navy-100">
                      <span>Services:</span>
                      <strong>{review.services}</strong>
                    </div>
                  )}
                  {review.positiveTraits && review.positiveTraits.length > 0 && (
                    <div className="inline-flex items-center gap-1 rounded-lg bg-amber-50 px-2.5 py-1 font-medium text-amber-900 border border-amber-200">
                      <span>Positive:</span>
                      <strong>{review.positiveTraits.join(', ')}</strong>
                    </div>
                  )}
                </div>
              )}

              {/* Interactive Like & Share Bar */}
              <div className="mt-4 flex items-center gap-4 text-xs font-medium text-charcoal-500">
                <button
                  onClick={() => toggleLike(review.id)}
                  className={`inline-flex items-center gap-1.5 transition-colors ${
                    isLiked ? 'text-navy-900 font-bold' : 'hover:text-navy-900'
                  }`}
                >
                  <ThumbsUp className={`h-3.5 w-3.5 ${isLiked ? 'fill-navy-900' : ''}`} />
                  <span>{isLiked ? 'Liked' : 'Like'}</span>
                </button>

                <button
                  onClick={() => handleShare(review)}
                  className="inline-flex items-center gap-1.5 hover:text-navy-900 transition-colors"
                >
                  {copiedId === review.id ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-600" />
                      <span className="text-emerald-600 font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="h-3.5 w-3.5" />
                      <span>Share</span>
                    </>
                  )}
                </button>
              </div>

              {/* Owner Response */}
              {review.ownerResponse && (
                <div className="mt-4 rounded-xl bg-charcoal-50 p-4 border-l-4 border-electric-400 text-xs">
                  <div className="flex items-center justify-between text-navy-900 font-bold">
                    <span className="flex items-center gap-1.5">
                      <MessageSquare className="h-3.5 w-3.5 text-electric-500" />
                      Response from the owner
                    </span>
                    {review.ownerResponseDate && (
                      <span className="font-normal text-charcoal-400">{review.ownerResponseDate}</span>
                    )}
                  </div>
                  <p className="mt-1 text-charcoal-700 italic">{review.ownerResponse}</p>
                </div>
              )}
            </article>
          );
        })}
      </div>

      {/* Show More / Show Less Toggle */}
      {!showAllByDefault && filteredReviews.length > initialLimit && (
        <div className="mt-8 text-center pt-4 border-t border-charcoal-100">
          <button
            onClick={() => setExpanded(!expanded)}
            className="inline-flex items-center gap-2 rounded-xl bg-navy-900 px-7 py-3.5 text-sm font-bold text-white transition-all hover:bg-navy-800 shadow-md"
          >
            {expanded
              ? `Show Fewer Reviews`
              : `Show All ${filteredReviews.length} Google Reviews`}
          </button>
        </div>
      )}
    </div>
  );
}

