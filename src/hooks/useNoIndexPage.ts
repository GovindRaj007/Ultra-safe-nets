import { useEffect } from "react";

/**
 * index.html ships hardcoded `robots`/`googlebot` = "index, follow" tags plus a
 * canonical pointing at the homepage. react-helmet-async only manages the tags
 * it rendered itself (they carry `data-rh`), so those static tags survive on
 * every route and would sit alongside a Helmet "noindex" directive.
 *
 * Google resolves conflicting robots directives by taking the most restrictive
 * one, so noindex would still win — but leaving both in the DOM is ambiguous
 * and easy to misread in Search Console / crawler tools. This hook removes the
 * static tags for the lifetime of an ads-only route and puts them back on
 * unmount, so the rest of the site keeps its normal SEO markup.
 */
const STATIC_SEO_SELECTORS = [
  'meta[name="robots"]',
  'meta[name="googlebot"]',
  'link[rel="canonical"]',
  'link[rel="alternate"][hreflang]',
];

export const useNoIndexPage = () => {
  useEffect(() => {
    const removed: Element[] = [];

    STATIC_SEO_SELECTORS.forEach((selector) => {
      document.head.querySelectorAll(`${selector}:not([data-rh])`).forEach((el) => {
        removed.push(el);
        el.remove();
      });
    });

    return () => {
      // Order is irrelevant for meta/link tags, so a plain re-append is enough.
      removed.forEach((el) => document.head.appendChild(el));
    };
  }, []);
};

export default useNoIndexPage;
