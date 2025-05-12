import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "../pages/Home";
import Layout from "../ui/Layout";
import Cobins from "../pages/Cobins";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Booking from "../pages/Booking";
import Users from "../pages/Users";
import Setting from "../featcher/setting/Setting";
import { Toaster } from "react-hot-toast";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
function App() {
  const queryqlient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryqlient}>
        <Toaster position="top-center" />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="Home" element={<Home />} />
              <Route path="cobins" element={<Cobins />} />
              <Route path="Bookings" element={<Booking />} />
              <Route path="Users" element={<Users />} />
              <Route path="Setting" element={<Setting />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
}

export default App;
