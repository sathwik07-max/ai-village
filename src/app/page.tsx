"use client";
import Navbar from "../components/Navbar";

import { prompts } from "../utils/promptsData";
import PromptCard from "../components/PromptCard";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#203a43] text-white">
        <h1 className="text-5xl font-extrabold mb-4 mt-10">Welcome to AI Village!</h1>
        <p className="text-lg mb-8 text-cyan-200">
          Your home for the world’s best AI prompts, trends, and tools.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {prompts.map((item) => (
            <PromptCard key={item.id} {...item} />
          ))}
        </div>
      </main>
    </>
  );
}
