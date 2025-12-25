import LocationPage from "@/components/LocationPage";
import heroPigeonNet from "@/assets/hero-pigeon-net.jpg";

const Rajahmundry = () => (
  <LocationPage
    city="Rajahmundry"
    state="Andhra Pradesh"
    slug="rajahmundry"
    backgroundImage={heroPigeonNet}
    description="Trusted invisible grills and safety nets installation in Rajahmundry. Serving the cultural capital of Andhra Pradesh with professional safety solutions for homes and businesses."
    areas={[
      "Rajahmundry Town", "Morampudi", "Prakash Nagar", "Bommuru", "Danavaipet", "Innispeta",
      "Alcot Gardens", "Lalacheruvu", "Pushkar Ghat", "Godavari Bridge", "Kovvur Road", "Diwancheruvu",
    ]}
  />
);

export default Rajahmundry;