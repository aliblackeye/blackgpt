import ChatBox from "./_partials/ChatBox";
import Sidebar from "./_partials/Sidebar";

export default function Home() {
  return (
    <div className="home-page">
      <Sidebar />
      <ChatBox />
    </div>
  );
}
