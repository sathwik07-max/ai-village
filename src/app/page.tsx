"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import { prompts } from "../utils/promptsData";
import PromptCard from "../components/PromptCard";
import Image from "next/image";

export default function Home() {
  const [search, setSearch] = useState("");
  const filteredPrompts = prompts.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase()) ||
    item.description.toLowerCase().includes(search.toLowerCase()) ||
    (item.category && item.category.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-start min-h-screen bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#203a43] text-white relative overflow-x-hidden">
        {/* Robotic Hero Section */}
        <section className="flex flex-col items-center pt-14 pb-6 animate-fade-in">
          <Image src="/logo.png" alt="Robot Mascot" width={64} height={64} className="mx-auto mb-3 animate-bounce" />
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-3 neon-glow">
            Welcome to <span className="text-cyan-400">AI Village</span>
          </h1>
          <p className="text-lg sm:text-xl text-cyan-200 mb-8 text-center max-w-xl neon-text">
            Your home for the world’s best AI prompts, trends, and tools.<br />
            Enter a futuristic village where robots and humans explore AI together!
          </p>
        </section>

        {/* How it works/About Section */}
        <section className="bg-[#192841cc] rounded-2xl shadow-xl px-6 py-6 mb-10 w-[95vw] max-w-2xl text-center border border-cyan-700">
          <h2 className="text-2xl font-bold text-cyan-300 mb-3 neon-glow">How AI Village Works</h2>
          <ol className="list-decimal text-cyan-100 text-lg text-left mx-auto max-w-xl space-y-1 pl-5">
            <li>✨ Browse or search for the coolest AI trends and tools.</li>
            <li>⚡ Click any card to reveal ready-to-use prompts & links.</li>
            <li>🤖 Try them out, create, share, and become an AI Villager!</li>
            <li>👑 Want more? Sign up for an account to save favorites and get updates!</li>
          </ol>
        </section>

        {/* Search Bar */}
        <input
          className="mb-8 p-3 rounded-lg border border-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-black w-[90vw] max-w-md shadow-xl"
          placeholder="🔍 Search AI tools, art, productivity, music…"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />

        {/* Prompt Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pb-20 animate-float">
          {filteredPrompts.length > 0 ? (
            filteredPrompts.map(item => (
              <PromptCard key={item.id} {...item} />
            ))
          ) : (
            <div className="col-span-full text-center text-lg text-cyan-300 animate-pulse">
              🤖 No AI tools found! Try searching another keyword.
            </div>
          )}
        </div>

        {/* Floating robot effect */}
        <div className="fixed bottom-8 right-8 z-10 pointer-events-none animate-robot-float">
          <span className="text-[60px] drop-shadow-[0_2px_10px_rgba(0,255,255,0.8)]">🤖</span>
        </div>

        {/* Animations and neon glow */}
        <style jsx global>{`
          @keyframes float {
            0% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0); }
          }
          @keyframes robot-float {
            0% { transform: translateY(0) rotate(-4deg); }
            50% { transform: translateY(-14px) rotate(4deg); }
            100% { transform: translateY(0) rotate(-4deg); }
          }
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
          .animate-robot-float {
            animation: robot-float 3s ease-in-out infinite;
          }
          .animate-fade-in {
            animation: fadeIn 1.2s cubic-bezier(0.55, 0, 0.1, 1);
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px);}
            to { opacity: 1; transform: none;}
          }
          .neon-glow {
            text-shadow: 0 0 10px #00fff7, 0 0 20px #00fff7, 0 0 40px #00fff7;
          }
          .neon-text {
            text-shadow: 0 0 4px #38bdf8, 0 0 12px #38bdf8;
          }
        `}</style>
      </main>
    </>
  );
}
