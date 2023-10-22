import { HashRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./routes/Routes";

function App() {
  return (
    <>
      <Router>
        <AnimatedRoutes />
      </Router>
    </>
  );
}

export default App;
