import LocationPage from "@/components/LocationPage";
import heroCloseup from "@/assets/hero-closeup.jpg";

const Warangal = () => (
  <LocationPage
    city="Warangal"
    state="Telangana"
    slug="warangal"
    backgroundImage={heroCloseup}
    description="Professional invisible grills and safety nets installation in Warangal. Expert team providing comprehensive safety solutions for homes and businesses throughout the city."
    areas={[
      "Hanamkonda", "Kazipet", "Warangal Fort", "Subedari", "Mulugu Road", "Hunter Road",
      "Balasamudram", "Desaipet", "Ramnagar", "Waddepally", "Pochamma Maidan", "Nakkalagutta",
    ]}
  />
);

export default Warangal;