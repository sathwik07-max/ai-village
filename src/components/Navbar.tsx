import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-[#1a1a2e] shadow-md">
      <div className="flex items-center space-x-3">
        <Image src="/logo.png" alt="AI Village Logo" width={40} height={40} className="rounded-full" />
        <span className="text-2xl font-bold text-white tracking-wide">AI Village</span>
      </div>
      <div className="space-x-4">
        <a href="/" className="text-gray-300 hover:text-white transition">Home</a>
        <a href="/profile" className="text-gray-300 hover:text-white transition">Profile</a>
        <a href="/admin" className="text-gray-300 hover:text-white transition">Admin</a>
        <a href="/login" className="text-cyan-400 hover:text-white transition font-semibold">Login</a>
      </div>
    </nav>
  );
}
