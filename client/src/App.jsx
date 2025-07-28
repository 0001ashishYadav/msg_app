import ChatHeader from "./components/ChatHeader";
import MessageArea from "./components/MessageArea";
import MessageInput from "./components/MessageInput";

function App() {
  return (
    <div className="flex flex-col h-screen max-w-4xl mx-auto bg-white">
      <ChatHeader />

      <MessageArea />

      <MessageInput />
    </div>
  );
}

export default App;
