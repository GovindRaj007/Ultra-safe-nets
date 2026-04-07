import LocationPage from "@/components/LocationPage";
import heroBalcony from "@/assets/hero-balcony.jpg";

const Rajahmundry = () => (
  <LocationPage
    city="Rajahmundry"
    state="Andhra Pradesh"
    slug="rajahmundry"
    backgroundImage={heroBalcony}
    description="Trusted invisible grills installation in Rajahmundry. Serving the cultural capital of Andhra Pradesh with professional safety solutions for homes and businesses."
    areas={[
      "Rajahmundry Town", "Morampudi", "Prakash Nagar", "Bommuru", "Danavaipet", "Innispeta",
      "Alcot Gardens", "Lalacheruvu", "Pushkar Ghat", "Godavari Bridge", "Kovvur Road", "Diwancheruvu",
    ]}
  />
);

export default Rajahmundry;