import "./App.css";
import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header";
import { Nav } from "./Components/Nav";

function App() {
  return (
    <div className='App'>
      <Nav />
      <Header />
      <Footer />
    </div>
  );
}

export default App;
