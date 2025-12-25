import LocationPage from "@/components/LocationPage";
import heroBalcony from "@/assets/hero-balcony.jpg";

const Vizag = () => (
  <LocationPage
    city="Visakhapatnam"
    state="Andhra Pradesh"
    slug="vizag"
    backgroundImage={heroBalcony}
    description="Trusted invisible grills and safety nets installation services in Visakhapatnam (Vizag). Serving residential and commercial properties across the city with premium quality products."
    areas={[
      "Beach Road", "MVP Colony", "Gajuwaka", "Seethammadhara", "Dwaraka Nagar", "Akkayyapalem",
      "Madhurawada", "Rushikonda", "Asilmetta", "Jagadamba", "Pendurthi", "NAD Junction",
    ]}
  />
);

export default Vizag;