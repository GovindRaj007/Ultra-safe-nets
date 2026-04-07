import LocationPage from "@/components/LocationPage";
import heroBalcony from "@/assets/hero-balcony.jpg";

const Tirupati = () => (
  <LocationPage
    city="Tirupati"
    state="Andhra Pradesh"
    slug="tirupati"
    backgroundImage={heroBalcony}
    description="Premium invisible grills services in Tirupati. Trusted installation solutions for temple city residents and businesses seeking modern safety systems."
    areas={[
      "Tirupati City", "Nindra Center", "Karakambadi Road", "UP Road", "ALP Center", "Renigunta",
      "One Town", "Two Town", "Nagamallaiah Street", "Chintadrip Street", "Subramanyapuram", "Chandragiri",
    ]}
  />
);

export default Tirupati;
