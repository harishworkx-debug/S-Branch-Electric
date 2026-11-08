import { useEffect } from 'react';

interface SeoOptions {
  title: string;
  description: string;
  path: string;
  schema?: object;
  ogImage?: string;
}

const BASE_URL = 'https://www.springbranchelectric.co';

export function useSeo({ title, description, path, schema, ogImage }: SeoOptions) {
  useEffect(() => {
    const canonical = `${BASE_URL}${path}`;
    document.title = title;

    setMeta('name', 'description', description);
    setLink('canonical', canonical);

    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', canonical);
    setMeta('property', 'og:type', 'website');
    if (ogImage) setMeta('property', 'og:image', ogImage);

    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    if (ogImage) setMeta('name', 'twitter:image', ogImage);

    let script = document.getElementById('page-schema') as HTMLScriptElement | null;
    if (schema) {
      if (!script) {
        script = document.createElement('script');
        script.id = 'page-schema';
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(schema);
    } else if (script) {
      script.remove();
    }

    window.scrollTo({ top: 0 });
  }, [title, description, path, schema, ogImage]);
}

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setLink(rel: string, href: string) {
  let el = document.head.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}
