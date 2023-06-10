import Navbar from "./components/navbar/Navbar";
import DynamicText from "./components/DynamicText/Dynamic";
import Clothing from "./components/Clothing/Clothing";
import Features from "./components/Features/Features";
import Carousel from "./components/Caroulsel/Caroulsel";

function App() {

  const carouselItems = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];


  return (
    <>
      <div>
        <Navbar/>
        <DynamicText/>
        <Clothing/>
        <Features/>
        <Carousel items={carouselItems}/>
      </div>
    </>
  );
}

export default App;
