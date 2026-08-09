'use client';
import { useEffect, useState } from 'react';

export default function GitHubStars({ repo }: { repo: string }) {
  const [stars, setStars] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch(`https://api.github.com/repos/${repo}`)
      .then((r) => r.json())
      .then((data) => {
        if (!cancelled && data.stargazers_count != null) {
          setStars(data.stargazers_count);
        }
      })
      .catch(() => {});
    return () => { cancelled = true; };
  }, [repo]);

  if (stars === null) return null;

  return (
    <span className="inline-flex items-center gap-1 text-xs text-yellow-400 font-medium">
      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
      {stars}
      <span className="text-gray-500">on GitHub</span>
    </span>
  );
}