import Navbar from "./components/navbar/Navbar";
import DynamicText from "./components/DynamicText/Dynamic";
import Clothing from "./components/Clothing/Clothing";
import Features from "./components/Features/Features";
import Change from "./components/Caroulsel/Caroulsel";
import Save from "./components/Save/Save";

function App() {




  return (
    <>
      <div>
        <Navbar/>
        <DynamicText/>
        <Clothing/>
        <Features/>
        <Change/>
        <Save/>
      </div>
    </>
  );
}

export default App;
