import './App.css';
import PageRoutes from "./config/routes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter className="App">
      <PageRoutes/>
    </BrowserRouter>
  );
}

export default App;
