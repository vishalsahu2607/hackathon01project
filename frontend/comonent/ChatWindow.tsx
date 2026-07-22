import ChatInput from "./ChatInput";

export default function ChatWindow() {
  return (
    <div className="flex-1 flex flex-col">

      <div className="flex-1 overflow-auto p-6">

        <div className="bg-gray-100 rounded p-4">
          <b>You:</b>
          Explain authentication flow.
        </div>

        <div className="bg-white rounded shadow p-4 mt-4">
          <b>AI:</b>

          Authentication starts at Login API,
          validates JWT,
          stores session in Redis,
          then returns access token.

        </div>

      </div>

      <ChatInput />

    </div>
  );
}