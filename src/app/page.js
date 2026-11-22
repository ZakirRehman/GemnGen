import HeroSection from "@/components/home/HeroSection";
import CategoryShowcase from "@/components/home/CategoryShowcase";
import Features from "@/components/home/Features";
import VideoSection from "@/components/home/VideoSection";
import Testimonials from "@/components/home/Testimonials";
import ShopTheLook from "@/components/home/ShopTheLook";
import FindYourFitQuiz from "@/components/product/FindYourFitQuiz";
import HowToMeasure from "@/components/home/HowToMeasure";
import GiftBoxBanner from "@/components/home/GiftBoxBanner";
import FAQSection from "@/components/home/FAQSection";
import FooterHero from "@/components/home/FooterHero";
import { getProducts } from "@/lib/api";

export const metadata = {
  title: "Gem&Gen — Premium Press-On Nails",
  description: "Shop premium press-on nails from Gem&Gen, from handmade artistry to factory precision. Reusable salon-grade sets, instant application & fast delivery.",
  openGraph: {
    title: "Gem&Gen — Premium Press-On Nails",
    description: "Shop premium press-on nails from Gem&Gen, from handmade artistry to factory precision. Reusable salon-grade sets, instant application & fast delivery.",
    images: [
      {
        url: "/images/og-preview.jpg",
        width: 1200,
        height: 630,
        alt: "Gem&Gen — Premium Press-On Nails",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gem&Gen — Premium Press-On Nails",
    description: "Shop premium press-on nails from Gem&Gen, from handmade artistry to factory precision. Reusable salon-grade sets, instant application & fast delivery.",
    images: ["/images/og-preview.jpg"],
  },
};

export default async function Home() {
  const allProducts = await getProducts();

  return (
    <div>
      <HeroSection />
      <CategoryShowcase />
      <Features />
      <VideoSection />
      <Testimonials />
      <ShopTheLook />
      <FindYourFitQuiz allProducts={allProducts} hideBanner={false} />
      <HowToMeasure />
      <GiftBoxBanner />
      <FAQSection />
      <FooterHero />
    </div>
  );
}
