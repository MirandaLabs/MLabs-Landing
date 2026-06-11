import { useEffect } from 'react';

type JsonLd = Record<string, unknown>;

type SEOProps = {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  keywords?: string;
  jsonLd?: JsonLd | JsonLd[];
};

function upsertMeta(selector: string, attribute: string, value: string) {
  const element = document.head.querySelector<HTMLMetaElement>(selector);
  if (element) {
    element.setAttribute(attribute, value);
  }
}

function upsertNamedMeta(name: string, value: string) {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute('name', name);
    document.head.appendChild(element);
  }
  element.setAttribute('content', value);
}

function upsertCanonical(href: string) {
  let element = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', 'canonical');
    document.head.appendChild(element);
  }
  element.setAttribute('href', href);
}

function setJsonLd(payload: JsonLd | JsonLd[] | undefined, marker: string) {
  document.head.querySelectorAll(`script[data-seo-jsonld="${marker}"]`).forEach((el) => el.remove());
  if (!payload) return;
  const script = document.createElement('script');
  script.setAttribute('type', 'application/ld+json');
  script.setAttribute('data-seo-jsonld', marker);
  script.textContent = JSON.stringify(payload);
  document.head.appendChild(script);
}

export function SEO({ title, description, canonical, ogImage, keywords, jsonLd }: SEOProps) {
  useEffect(() => {
    document.title = title;

    upsertMeta('meta[name="description"]', 'content', description);
    upsertMeta('meta[property="og:title"]', 'content', title);
    upsertMeta('meta[property="og:description"]', 'content', description);
    upsertMeta('meta[name="twitter:title"]', 'content', title);
    upsertMeta('meta[name="twitter:description"]', 'content', description);

    if (canonical) {
      upsertCanonical(canonical);
      upsertMeta('meta[property="og:url"]', 'content', canonical);
    }

    if (ogImage) {
      upsertMeta('meta[property="og:image"]', 'content', ogImage);
      upsertMeta('meta[name="twitter:image"]', 'content', ogImage);
    }

    if (keywords) {
      upsertNamedMeta('keywords', keywords);
    }

    setJsonLd(jsonLd, 'page');

    return () => {
      setJsonLd(undefined, 'page');
    };
  }, [canonical, description, jsonLd, keywords, ogImage, title]);

  return null;
}
