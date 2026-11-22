export const metadata = {
  title: "Explore All Collections — Gem&Gen",
  description: "Browse all press-on nail collections. From signature handmade designs to factory styles and bespoke custom sets.",
  alternates: {
    canonical: "https://www.nailexpress.ng/collection-hub",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Explore All Collections — Gem&Gen",
    description: "Browse all press-on nail collections. From signature handmade designs to factory styles and bespoke custom sets.",
    url: "https://www.nailexpress.ng/collection-hub",
    images: [{ url: "/images/og-preview.jpg", width: 1200, height: 630, alt: "Gem&Gen Collections" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Explore All Collections — Gem&Gen",
    description: "Browse all press-on nail collections. From signature handmade designs to factory styles and bespoke custom sets.",
    images: ["/images/og-preview.jpg"],
  },
};

export default function CollectionHubLayout({ children }) {
  return children;
}
