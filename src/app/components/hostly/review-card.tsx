import { Star } from 'lucide-react';

interface Review {
  id: string;
  author: string;
  avatar: string;
  rating: number;
  date: string;
  comment: string;
}

interface ReviewCardProps {
  review: Review;
}

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="pb-6 border-b border-[#E2E8F0] last:border-0 last:pb-0">
      <div className="flex items-start gap-4">
        {/* Avatar */}
        <div className="w-12 h-12 rounded-full bg-[#E2E8F0] flex items-center justify-center flex-shrink-0 overflow-hidden">
          <span className="text-lg font-semibold text-[#64748B]">
            {review.author.charAt(0)}
          </span>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-4 mb-2">
            <div>
              <h4 className="font-semibold text-[#0F172A]">{review.author}</h4>
              <p className="text-sm text-[#64748B]">{review.date}</p>
            </div>
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }, (_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < review.rating
                      ? 'fill-[#FCD34D] text-[#FCD34D]'
                      : 'text-[#E2E8F0]'
                  }`}
                />
              ))}
            </div>
          </div>
          <p className="text-sm text-[#0F172A] leading-relaxed">
            {review.comment}
          </p>
        </div>
      </div>
    </div>
  );
}
