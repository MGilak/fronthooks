import "./App.css";
import routes from "./routes";
import { useRoutes } from "react-router-dom";
import CartProvider from "./context/CartProvider";

function App() {
  const router = useRoutes(routes);

  return (
    <div className="bg-gray-100">
      <CartProvider>{router}</CartProvider>
    </div>
  );
}

export default App;
