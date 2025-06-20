import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import DiscordLikeApp from "./pages/Home";
import ChatPage from "./pages/Chat";
import ProfilePage from "./pages/Profile";

function App() {
  return (
    <Router basename="/mycomplicatedreply">
      <nav className="p-4 shadow-md flex gap-4 bg-gray-100 dark:bg-gray-800">
        <Link to="/">Home</Link>
        <Link to="/chat">Chat</Link>
        <Link to="/profile">Profile</Link>
      </nav>

      <Routes>
        <Route path="/" element={<DiscordLikeApp />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;
