import LocationPage from "@/components/LocationPage";
import heroBalcony from "@/assets/hero-balcony.jpg";

const Ongole = () => (
  <LocationPage
    city="Ongole"
    state="Andhra Pradesh"
    slug="ongole"
    backgroundImage={heroBalcony}
    description="Professional invisible grills installation in Ongole. Serving Prakasam district with quality safety solutions for homes and commercial establishments."
    areas={[
      "Ongole City", "Gandhi Nagar", "Kakinada Lane", "Prakasam Nagar", "Poothamallee Junction", "Raja Naidu Road",
      "Chandra Mohan Nagar", "New Town", "HACA Colony", "Kakinada Junction", "Nandyal Road", "Sri Nagar",
    ]}
  />
);

export default Ongole;
