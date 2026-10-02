import React, { useEffect, useState, useRef } from 'react';
import { Home, Building2, Calendar, ShieldCheck, ExternalLink, CheckCircle } from 'lucide-react';
import { TRUST_BADGES, COMPANY_DETAILS } from '../lib/data';

interface StatProps {
  label: string;
  value: number;
  suffix: string;
  subtext: string;
  iconName: string;
  verificationLink?: string;
  verificationLabel?: string;
}

const StatCounter: React.FC<StatProps> = ({
  label,
  value,
  suffix,
  subtext,
  iconName,
  verificationLink,
  verificationLabel
}) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 1200; // 1.2s smooth count
          const stepTime = 20;
          const steps = duration / stepTime;
          const increment = value / steps;

          const timer = setInterval(() => {
            start += increment;
            if (start >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, stepTime);
        }
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [value, hasAnimated]);

  const renderIcon = () => {
    switch (iconName) {
      case 'Home':
        return <Home className="w-6 h-6 text-stone-900" />;
      case 'Building2':
        return <Building2 className="w-6 h-6 text-stone-900" />;
      case 'Calendar':
        return <Calendar className="w-6 h-6 text-stone-900" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-emerald-800" />;
      default:
        return <CheckCircle className="w-6 h-6 text-stone-900" />;
    }
  };

  return (
    <div
      ref={elementRef}
      className="p-5 sm:p-6 bg-white rounded-xl border border-stone-200/90 shadow-xs hover:border-stone-400 hover:shadow-sm transition-all flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="p-2.5 bg-stone-100 rounded-lg">
            {renderIcon()}
          </div>
          {verificationLink && (
            <a
              href={verificationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 hover:text-emerald-800 hover:underline"
              title="Verify on Karnataka Government Official Portal"
            >
              <span>{verificationLabel || 'Verify'}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>

        <div className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight font-sans tabular-nums mb-1">
          {count}
          <span className="text-amber-800 font-bold">{suffix}</span>
        </div>

        <div className="text-sm font-bold text-stone-900 mb-1">
          {label}
        </div>
      </div>

      <div className="text-xs text-stone-600 font-medium pt-2 border-t border-stone-100">
        {subtext}
      </div>
    </div>
  );
};

export const TrustBadges: React.FC = () => {
  return (
    <section className="py-10 sm:py-12 bg-stone-100/60 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with quiet authority */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 pb-2 border-b border-stone-200/70 gap-2">
          <div>
            <span className="text-xs font-bold tracking-wider uppercase text-amber-900">
              Proof Over Promises
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              15 Years of Solid Ground in Bangalore
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-600 max-w-md">
            We don't operate out of temporary site sheds. Our physical registered office has been on 100 Feet Road, Indiranagar since 2011.
          </p>
        </div>

        {/* 4 Trust Badges Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {TRUST_BADGES.map((badge) => (
            <StatCounter
              key={badge.id}
              label={badge.label}
              value={badge.value}
              suffix={badge.suffix}
              subtext={badge.subtext}
              iconName={badge.iconName}
              verificationLink={badge.verificationLink}
              verificationLabel={badge.verificationLabel}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
