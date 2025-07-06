"use client";
import Navbar from '../components/Navbar'; // Adjust if your path is different
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#203a43] text-white">
        <h1 className="text-5xl font-extrabold mb-4 mt-10">Welcome to AI Village!</h1>
        <p className="text-lg mb-8 text-cyan-200">Your home for the world’s best AI prompts, trends, and tools.</p>
      </main>
    </>
  );
}
