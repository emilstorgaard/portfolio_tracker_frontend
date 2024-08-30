import { getSession } from "@/lib/auth";

export default async function Home() {
  const session = await getSession();
  return (
    <div className="max-w-lg mx-auto">
      <div className="mx-4 p-6 bg-white border border-gray-200 rounded-lg shadow">

        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Portfolio Tracker</h5>

        <p className="mb-3 font-normal text-gray-700">Welcome to Portfolio Tracker,
          we provide you with a powerful and intuitive platform to monitor your
          investment portfolios. Whether you're a seasoned investor or just getting
          started, our tool offers everything you need to keep a close eye on your
          assets.
        </p>
    
      </div>
        {session ? (
          <p className="text-green-600 font-semibold">You are logged in!</p>
        ) : (
          <p className="text-red-600 font-semibold">You are logged out!</p>
        )}
    </div>
  );
}
