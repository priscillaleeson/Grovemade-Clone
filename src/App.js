import "./styles.scss";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import ContentBlock from "./Components/ContentBlock";
import TwoUpProductGrid from "./Components/2up-Product";
import GreyContentBox from "./Components/GreyContentBox";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner
        title="The New Desk Shelf System"
        subtitle="Now Available in Three Sizes"
        linktowebpage="https://grovemade.com/desk-shelf-system/"
        backgroundimageurl="https://grovemade.imgix.net/https%3A%2F%2Fsiteleaf.grovemade.com%2Fuploads%2FcoverB-desk-shelf-C1.jpg?auto=format&ixlib=python-1.1.2&w=2250&s=61c8d7331d3e2582f73a5536c6d835ae"
      />
      <ContentBlock
        title="Design Inspires"
        description="Build your dream workspace, so you can get your best work done."
        name="Get Started"
        link="https://grovemade.com/shop/"
      />
      <TwoUpProductGrid
        imageone="https://grovemade.imgix.net/https%3A%2F%2Fsiteleaf.grovemade.com%2Fuploads%2Fgrovemade-leather-desk-pad-black-mediumplus-galB-A1.jpg?auto=format&ixlib=python-1.1.2&w=1800&s=994844150fd2f29aac546880e68ea05a"
        imagetwo="https://grovemade.imgix.net/https%3A%2F%2Fsiteleaf.grovemade.com%2Fuploads%2Fgrovemade-desk-shelf-solid-walnut-small-galB-C2.jpg?auto=format&ixlib=python-1.1.2&w=1500&s=9fbce2a39a0002b0a1a11462fe631c84"
        linktowebpageone="https://grovemade.com/desk-pad-collection/"
        linktowebpagetwo="https://grovemade.com/laptop-stands/"
      />
      <Banner
        title="Home Office Inspiration"
        subtitle="Working from home can be a challenge—see some creative solutions to get it just right."
        linktowebpage="https://grovemade.com/journal/home-office-inspiration/"
        backgroundimageurl="https://grovemade.imgix.net/https%3A%2F%2Fsiteleaf.grovemade.com%2Fuploads%2FbannerB-desk-collection-A1.jpg?auto=format&ixlib=python-1.1.2&w=2250&s=1419e824d542bc1236c3287a7d1f88c7"
      />
      <ContentBlock
        title="Make Work Meaningful"
        description="We're here because we believe that your work deserves the best. A team that loves working together is the magic that makes it all happen."
        name="Read More About Our Story"
        link="https://grovemade.com/about"
      />
      <GreyContentBox />
      <Footer />
    </div>
  );
}
