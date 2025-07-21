"use client";

import useSWR from "swr";

interface WikiSummary {
  title: string;
  extract: string;
  thumbnail?: { source: string };
  content_urls: { desktop: { page: string } };
}

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function DateBio() {
  const { data, error } = useSWR<WikiSummary>(
    "https://en.wikipedia.org/api/rest_v1/page/summary/Date_palm",
    fetcher
  );

  if (error) return <p className="text-red-600">Failed to load bio.</p>;
  if (!data) return <p>Loading date palm bio…</p>;

  return (
    <div className="max-w-3xl bg-white bg-opacity-80 p-6 rounded-2xl shadow-lg text-left">
      <h3 className="text-2xl font-semibold mb-2">{data.title}</h3>
      {data.thumbnail && (
        <img
          src={data.thumbnail.source}
          alt={data.title}
          className="w-full h-auto mb-4 rounded-lg"
        />
      )}
      <p className="leading-relaxed">{data.extract}</p>
      <a
        href={data.content_urls.desktop.page}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 underline"
      >
        Read more on Wikipedia
      </a>
    </div>
  );
}

