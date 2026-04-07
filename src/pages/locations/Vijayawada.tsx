import LocationPage from "@/components/LocationPage";
import heroBalcony from "@/assets/hero-balcony.jpg";

const Vijayawada = () => (
  <LocationPage
    city="Vijayawada"
    state="Andhra Pradesh"
    slug="vijayawada"
    backgroundImage={heroBalcony}
    description="Premium invisible grills solutions in Vijayawada. Expert installation services for residential and commercial properties across the city's key localities."
    areas={[
      "Dwarka Nagar", "RTC X Road", "Labbipet", "Governorpet", "MG Road", "Patamata",
      "Bhavanipuram", "Vijayapuri Colony", "Moghal Nagar", "Anna Nagar", "Suryaraopet", "Kondapalli",
    ]}
  />
);

export default Vijayawada;
