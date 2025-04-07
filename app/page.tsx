import { Metadata } from "next";
import Image from "next/image";
import path from "path";
import fs from "fs/promises";

// SEO Metadata
export const metadata: Metadata = {
  title: "User List - StartHub Academy",
  description: "A list of users displayed using SSR in Next.js 15 with SEO and accessibility compliance.",
};

// Type for user
type User = {
  id: number;
  name: string;
  description: string;
  image: string;
};

// Server-side function to read JSON data
async function getUsers(): Promise<User[]> {
  const filePath = path.join(process.cwd(), "data", "users.json");
  const data = await fs.readFile(filePath, "utf-8");
  return JSON.parse(data);
}

export default async function Home() {
  const users = await getUsers();

  return (
    <main className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Our Users</h1>
      <ul className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {users.map((user) => (
          <li
            key={user.id}
            tabIndex={0}
            className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <div className="flex items-center space-x-6">
              <div className="flex-shrink-0">
                <Image
                  src={user.image}
                  alt={`Avatar of ${user.name}`}
                  width={100}
                  height={100}
                  className="rounded-full border-4 border-indigo-500"
                  priority={true}
                />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold text-gray-800">{user.name}</h2>
                <p className="mt-2 text-sm text-gray-600">{user.description}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
