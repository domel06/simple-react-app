import { Route, Routes } from "react-router-dom";
import AllMeetupPage from "./pages/Allmeetup";
import FavoritePage from "./pages/Favorite";
import NewMeetupPage from "./pages/NewMeetup";
import Layout from "./components/layout/layout";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<AllMeetupPage />} />
          <Route path="/meet-up" element={<NewMeetupPage />} />
          <Route path="/favorites" element={<FavoritePage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
