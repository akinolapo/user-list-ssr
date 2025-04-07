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
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">User List</h1>
      <ul className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {users.map((user) => (
          <li
            key={user.id}
            tabIndex={0}
            className="border rounded-xl p-4 shadow hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {/* <Image
              src={user.image}
              alt={`Avatar of ${user.name}`}
              width={100}
              height={100}
              className="rounded-full mb-3"
              priority={true}
            /> */}
            <h2 className="text-lg font-semibold">{user.name}</h2>
            <p className="text-sm text-gray-600">{user.description}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
