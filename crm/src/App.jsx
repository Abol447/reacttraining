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
import BookingDetals from "../featcher/booking/BookingDetals";
import CheckedIn from "../featcher/CheckedState/CheckedIn";
import LogIn from "../pages/LogIn";
import Auth from "../pages/auth";
import Profile from "../featcher/users/Profile";
function App() {
  const queryqlient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryqlient}>
        <Toaster position="top-center" />
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Auth>
                  <Layout />
                </Auth>
              }
            >
              <Route path="Home" element={<Home />} />
              <Route path="cobins" element={<Cobins />} />
              <Route path="Bookings" element={<Booking />} />
              <Route path="Bookings/:BookingId" element={<BookingDetals />} />
              <Route path="CheckedIn/:BookingId" element={<CheckedIn />} />
              <Route path="Users" element={<Users />} />
              <Route path="Setting" element={<Setting />} />
              <Route path="profile" element={<Profile />} />
            </Route>

            <Route path="login" element={<LogIn />} />
          </Routes>
        </BrowserRouter>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
}

export default App;
