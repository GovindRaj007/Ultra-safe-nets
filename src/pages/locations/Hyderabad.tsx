import LocationPage from "@/components/LocationPage";
import heroBuilding from "@/assets/hero-building.jpg";

const Hyderabad = () => (
  <LocationPage
    city="Hyderabad"
    state="Telangana"
    slug="hyderabad"
    backgroundImage={heroBuilding}
    description="Premium invisible grills and safety nets installation across Hyderabad. From Madhapur to Gachibowli, Jubilee Hills to Kondapur - we serve all areas with professional installation and warranty."
    areas={[
      "Madhapur", "Gachibowli", "Jubilee Hills", "Banjara Hills", "Kondapur", "Kukatpally",
      "Miyapur", "HITEC City", "Begumpet", "Secunderabad", "LB Nagar", "Dilsukhnagar",
      "Ameerpet", "SR Nagar", "Manikonda", "Narsingi",
    ]}
  />
);

export default Hyderabad;