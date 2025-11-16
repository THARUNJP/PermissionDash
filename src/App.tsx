import { useEffect, useState } from "react";
import { colorMap, STATUS } from "./lib/constant";
import { getAccessPrompt, getPermission } from "./lib/helper";
import type { PermissionType } from "./lib/interface";

export default function App() {

  const [permissions,setPermissions] = useState<PermissionType[]>(STATUS);

  useEffect(() => {
    getIntialPermission();
  }, []);

  async function getIntialPermission() {
    try {
      const intialData = await Promise.all(
        STATUS.map(async (e) => {
          e.status = await getPermission(e.name as PermissionName);
          return e;
        })
      );

      setPermissions(intialData)
      console.log(intialData);
    } catch (err) {
      console.log(err, "?");
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      {/* Header */}
      <header className="w-full max-w-5xl mb-6 text-center">
        <h1 className="text-3xl font-bold text-red-800">
          Permission Dashboard
        </h1>
        <p className="text-gray-600 mt-1">
          Monitor and test browser permissions in real-time.
        </p>
       <button
  onClick={() => window.location.reload()}
  className="mt-4 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition cursor-pointer"
>
  Refresh Permissions
</button>
      </header>

      {/* Permissions Grid */}
      <main className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
        {/* Example Permission Cards */}

        {permissions?.map((perm) => (
          <div
            key={perm.name}
            className="bg-white shadow-md rounded-xl p-5 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                {perm.label}
              </h2>
              <p className="mt-2 text-gray-600">{perm.status} {perm.status ? colorMap[perm.status]:null }</p>
            </div>
            <button id="mic-test" onClick={async()=>await getAccessPrompt(perm.name)} className="mt-4 w-full py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition">
              Test Permission
            </button>
          </div>
        ))}
      </main>

      {/* Console Log Panel */}
      <section className="mt-8 w-full max-w-5xl bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm">
        <h3 className="text-lg font-semibold mb-2">Console Log</h3>
        <div className="h-32 overflow-y-auto space-y-1">
          <p>[12:05:23] Camera → Denied</p>
          <p>[12:05:27] Microphone → Granted</p>
          <p>[12:06:03] Location → Prompt</p>
        </div>
      </section>
    </div>
  );
}
