import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import { HelmetProvider } from "react-helmet-async";

// Lazy load pages for code splitting
const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const InvisibleGrills = lazy(() => import("./pages/services/InvisibleGrills"));
const InvisibleGrillsBalcony = lazy(() => import("./pages/services/InvisibleGrillsBalcony"));
const InvisibleGrillsWindows = lazy(() => import("./pages/services/InvisibleGrillsWindows"));
const CeilingClothHanger = lazy(() => import("./pages/services/CeilingClothHanger"));
const Visakhapatnam = lazy(() => import("./pages/locations/Visakhapatnam"));
const Vijayawada = lazy(() => import("./pages/locations/Vijayawada"));
const Guntur = lazy(() => import("./pages/locations/Guntur"));
const Tirupati = lazy(() => import("./pages/locations/Tirupati"));
const Ongole = lazy(() => import("./pages/locations/Ongole"));
const Rajahmundry = lazy(() => import("./pages/locations/Rajahmundry"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-navy">
    <div className="w-12 h-12 border-4 border-sky border-t-transparent rounded-full animate-spin" />
  </div>
);

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/services/invisible-grills" element={<InvisibleGrills />} />
              <Route path="/services/invisible-grills-balcony" element={<InvisibleGrillsBalcony />} />
              <Route path="/services/invisible-grills-windows" element={<InvisibleGrillsWindows />} />
              <Route path="/services/ceiling-cloth-hanger" element={<CeilingClothHanger />} />
              <Route path="/locations/visakhapatnam" element={<Visakhapatnam />} />
              <Route path="/locations/vijayawada" element={<Vijayawada />} />
              <Route path="/locations/guntur" element={<Guntur />} />
              <Route path="/locations/tirupati" element={<Tirupati />} />
              <Route path="/locations/ongole" element={<Ongole />} />
              <Route path="/locations/rajahmundry" element={<Rajahmundry />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;