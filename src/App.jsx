import { CssBaseline } from "@mui/material";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <AppRoutes />
      <Footer />
    </>
  );
};

export default App;
