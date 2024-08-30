"use client";

import { useState } from "react";
import { getSession, login } from "@/lib/auth";

export default function Login() {
    // const session = await getSession();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        try {
            login(email, password)
        } catch (err: any) {
            setError(err.message);
        }
    };

    return (
        <div className="max-w-lg mx-auto">
            <div className="mx-4 p-6 bg-white border border-gray-200 rounded-lg shadow">

                {error && <div className="text-red-500 mt-2">{error}</div>}

                <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Log in</h2>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                            <input
                                name="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                                required
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                            <input
                                name="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                                required
                            />
                        </div>
                        <button type="submit" className="w-full px-4 py-2 rounded-md font-semibold transition duration-300 ease-in-out bg-indigo-500 text-white hover:bg-indigo-600">Log in</button>
                    </form>

                </div>

            </div>
        </div>
    );
}
