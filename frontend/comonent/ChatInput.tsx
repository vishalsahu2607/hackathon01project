export default function ChatInput() {
  return (
    <div className="border-t p-4 flex">

      <input
        className="border rounded w-full p-3"
        placeholder="Ask about your codebase..."
      />

      <button className="bg-blue-600 text-white px-6 ml-3 rounded">
        Send
      </button>

    </div>
  );
}