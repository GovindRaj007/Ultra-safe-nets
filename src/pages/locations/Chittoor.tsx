import LocationPage from "@/components/LocationPage";
import heroSafetyNet from "@/assets/hero-safety-net.jpg";

const Chittoor = () => (
  <LocationPage
    city="Chittoor"
    state="Andhra Pradesh"
    slug="chittoor"
    backgroundImage={heroSafetyNet}
    description="Expert invisible grills and safety nets installation services in Chittoor. Protecting homes and families with premium quality stainless steel grills and safety solutions."
    areas={[
      "Chittoor Town", "Tirupati Road", "Kuppam Road", "Bangarupalem", "Puttur", "Nagari",
      "Palamaner", "Madanapalle", "Punganur", "Vayalpadu", "Piler", "Srikalahasti",
    ]}
  />
);

export default Chittoor;