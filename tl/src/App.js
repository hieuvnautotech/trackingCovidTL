
import './App.css';
import CountrySelector from "./components/CountrySelector" 
import Highlight from "./components/Highlight"
import  Summary from "./components/Summary"
function App() {
  return (
    <>
      <CountrySelector></CountrySelector>
      <Highlight></Highlight>
      <Summary></Summary>
    </>
  );
}

export default App;
