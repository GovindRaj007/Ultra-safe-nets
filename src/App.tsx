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
const InvisibleGrills = lazy(() => import("./pages/services/InvisibleGrills"));
const SafetyNets = lazy(() => import("./pages/services/SafetyNets"));
const CeilingClothHanger = lazy(() => import("./pages/services/CeilingClothHanger"));
const PigeonNets = lazy(() => import("./pages/services/PigeonNets"));
const Hyderabad = lazy(() => import("./pages/locations/Hyderabad"));
const Vizag = lazy(() => import("./pages/locations/Vizag"));
const Warangal = lazy(() => import("./pages/locations/Warangal"));
const Chittoor = lazy(() => import("./pages/locations/Chittoor"));
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
              <Route path="/services/invisible-grills" element={<InvisibleGrills />} />
              <Route path="/services/safety-nets" element={<SafetyNets />} />
              <Route path="/services/ceiling-cloth-hanger" element={<CeilingClothHanger />} />
              <Route path="/services/pigeon-nets" element={<PigeonNets />} />
              <Route path="/locations/hyderabad" element={<Hyderabad />} />
              <Route path="/locations/vizag" element={<Vizag />} />
              <Route path="/locations/warangal" element={<Warangal />} />
              <Route path="/locations/chittoor" element={<Chittoor />} />
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