// The one Organization node every page points at. Product pages publish this @id already.
export const ORG_ID = "https://aignitelk.com/#aignite-software-private-limited";

/** Home > page breadcrumb for a page one level below the homepage. */
export function breadcrumbs(name: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://aignitelk.com/" },
      { "@type": "ListItem", position: 2, name, item: `https://aignitelk.com${path}` },
    ],
  };
}
