import './App.css';
import Sidebar from "./sidebar/Sidebar"
import Chat from "./chat/Chat.js"

function App() {
  return (
    <div className="app">
      <div className="appBody">
        <Sidebar/>
        <Chat />
      </div>
    </div>
  );
}

export default App;
