import "./styles/app.scss";
import { BrowserRouter as Router,Routes, Route} from "react-router-dom";
import Header from "./Components/Header"
import Home from "./Components/Home"
import { Toaster } from "react-hot-toast";
function App() {
  return (
<Router>
<Header/>
<Routes>
  <Route path="/" element={<Home/>}/>
</Routes>
<Toaster/>
</Router>
  );
}

export default App;
