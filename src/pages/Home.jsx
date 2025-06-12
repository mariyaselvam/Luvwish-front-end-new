import Nav from "../components/common/Nav";
import AboutUs from "../components/home/AboutUs";
import Banner from "../components/home/Banner";
import HowItWorks from "../components/home/HowItWorks";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Footer from "../components/common/Footer";

const Home = () => {
  return (
    <>
      <Nav />
      <Banner />
      <AboutUs />
      <WhyChooseUs />
      <HowItWorks />
      <Footer />
    </>
  );
};

export default Home;
