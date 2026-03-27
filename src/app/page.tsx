import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Pricing from "@/components/pricing";
import HowItWorks from "@/components/how-it-works";
import AppShowcase from "@/components/app-showcase";
import Testimonials from "@/components/testimonials";
import FAQ from "@/components/faq";
import FinalCTA from "@/components/final-cta";
import Footer from "@/components/footer";
import UrgencyBanner from "@/components/urgency-banner";
import SocialProof from "@/components/social-proof";
import WhatsAppFloat from "@/components/whatsapp-float";
import VideoSection from "@/components/video-section";
import TransformationGallery from "@/components/transformation-gallery";
import Credentials from "@/components/credentials";
import ComparisonTable from "@/components/comparison-table";
import InstagramFeed from "@/components/instagram-feed";
import BlogTips from "@/components/blog-tips";
import LocationMap from "@/components/location-map";
import LoadingScreen from "@/components/loading-screen";
import CursorEffect from "@/components/cursor-effect";
import { WaveDivider, DiagonalDivider } from "@/components/section-divider";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <CursorEffect />
      <WhatsAppFloat />

      <main>
        <UrgencyBanner />
        <Navbar />
        <Hero />
        <SocialProof />

        <WaveDivider />
        <Services />
        <DiagonalDivider />

        <VideoSection />

        <WaveDivider />
        <Pricing />
        <ComparisonTable />
        <DiagonalDivider />

        <HowItWorks />

        <WaveDivider />
        <TransformationGallery />
        <DiagonalDivider />

        <AppShowcase />
        <Credentials />

        <WaveDivider />
        <Testimonials />
        <DiagonalDivider />

        <InstagramFeed />
        <FAQ />
        <BlogTips />

        <WaveDivider />
        <LocationMap />
        <DiagonalDivider />

        <FinalCTA />
        <Footer />
      </main>
    </>
  );
}
