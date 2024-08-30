'use server'
import { jwtVerify } from "jose";
import { cookies } from 'next/headers'
import { redirect } from "next/navigation";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const secretKey = "YourSuperLongAndSecureSecretKeyHere12345";
const key = new TextEncoder().encode(secretKey);

export async function login(email: string, password: string) {
    const res = await fetch(`${apiUrl}/Auth/Login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email,
            password,
        }),
    });

    if (!res.ok) {
        throw new Error("Failed to log in");
    }

    const data = await res.json();

    if (data.token) {
        cookies().set({
            name: 'jwt',
            value: data.token,
            maxAge: 60 * 60 * 1000,
            httpOnly: true,
            path: '/',
          })
    }

    redirect("/");
}

export async function logout() {
    cookies().delete('jwt')
}
  
export async function decrypt(input: string): Promise<any> {
    await new Promise(resolve => setTimeout(resolve, 1000));
    const { payload } = await jwtVerify(input, key, {
      algorithms: ["HS256"],
    });
    return payload;
}

export async function getSession() {
    const session = cookies().get("jwt")?.value;
    if (!session) return null;
    return await decrypt(session);
}