import LocationPage from "@/components/LocationPage";
import heroBalcony from "@/assets/hero-balcony.jpg";

const Guntur = () => (
  <LocationPage
    city="Guntur"
    state="Andhra Pradesh"
    slug="guntur"
    backgroundImage={heroBalcony}
    description="Expert invisible grills installation in Guntur. Providing top-notch safety solutions for homes and businesses across all major areas of the city."
    areas={[
      "Guntur City", "Potti Sreeramulu Road", "Arundelpet", "Brodipet", "Gunadala", "Tanuku Road",
      "Pedanandipadu", "Nagaram", "GPT Colony", "Super Bazar", "Kothapet", "Chandramoulipuram",
    ]}
  />
);

export default Guntur;
