// File: robots.ts

import { MetadataRoute } from 'next';

type Robots = {
  rules:
    | {
        userAgent?: string | string[];
        allow?: string | string[];
        disallow?: string | string[];
        crawlDelay?: number;
      }
    | Array<{
        userAgent: string | string[];
        allow?: string | string[];
        disallow?: string | string[];
        crawlDelay?: number;
      }>;
  sitemap?: string | string[];
  host?: string;
};

export default function robots(): MetadataRoute.Robots {
  const robotsConfig: Robots = {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/src/',
      },
    ],
    sitemap: 'https://smgoi.com/sitemap.xml',
  };

  return robotsConfig;
}