import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const personalDetails = {
    name: "Ravindu Hasantha",
    location: "Singapore",
    tagline: "Software Engineer",
    email: "ravindu.hasantha@gmail.com",
    availability: "",
    brand:
      "",
  };

  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
