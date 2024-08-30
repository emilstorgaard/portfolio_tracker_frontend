import { getSession } from "@/lib/auth";

export default async function createPortfolio() {
  const session = await getSession();
  return (
    <div className="max-w-lg mx-auto">
      <div className="mx-4 p-6 bg-white border border-gray-200 rounded-lg shadow">

        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Create Portfolio</h5>
    
      </div>
        {session ? (
          <p className="text-green-600 font-semibold">You are logged in!</p>
        ) : (
          <p className="text-red-600 font-semibold">You are logged out!</p>
        )}
    </div>
  );
}
