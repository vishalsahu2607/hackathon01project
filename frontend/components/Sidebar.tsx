export default function Sidebar() {
  return (
    <div className="w-72 bg-gray-900 text-white p-4">
      <h1 className="text-xl font-bold mb-6">
        Engineering Hub
      </h1>

      <button className="w-full bg-blue-600 rounded p-2">
        Upload Project
      </button>

      <button className="w-full mt-3 bg-green-600 rounded p-2">
        Upload Documents
      </button>

      <div className="mt-8">
        <h2 className="font-semibold">Projects</h2>

        <ul className="mt-2 space-y-2">
          <li>Payment Service</li>
          <li>User Management</li>
          <li>Authentication</li>
        </ul>
      </div>
    </div>
  );
}