import LocationPage from "@/components/LocationPage";
import heroBalcony from "@/assets/hero-balcony.jpg";

const Visakhapatnam = () => (
  <LocationPage
    city="Visakhapatnam"
    state="Andhra Pradesh"
    slug="visakhapatnam"
    backgroundImage={heroBalcony}
    description="Premium invisible grills installation services across Visakhapatnam. Expert solutions for residential and commercial properties in all major areas."
    areas={[
      "Beach Road", "MVP Colony", "Gajuwaka", "Seethammadhara", "Dwaraka Nagar", "Akkayyapalem",
      "Madhurawada", "Rushikonda", "Asilmetta", "Jagadamba", "Pendurthi", "NAD Junction",
    ]}
  />
);

export default Visakhapatnam;
