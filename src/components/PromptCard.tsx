import { useState } from "react";
import Image from "next/image";

type PromptCardProps = {
  title: string;
  image: string;
  description: string;
  prompt: string;
  link: string;
  isFree: boolean;
  category: string;
};

export default function PromptCard({
  title,
  image,
  description,
  prompt,
  link,
  isFree,
  category,
}: PromptCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="w-80 h-96 perspective cursor-pointer group transition-transform hover:scale-105"
      onClick={() => setFlipped((prev) => !prev)}
    >
      <div
        className={`relative w-full h-full duration-500 transform-style preserve-3d ${
          flipped ? "rotate-y-180" : ""
        } group-hover:shadow-[0_8px_24px_0_rgba(0,255,255,0.25)] group-hover:ring-2 group-hover:ring-cyan-400`}
      >
        {/* Front */}
        <div className="absolute w-full h-full backface-hidden bg-[#232946] rounded-2xl p-4 shadow-lg hover:shadow-2xl transition flex flex-col">
          <Image
            src={image}
            alt={title}
            width={320}
            height={180}
            className="rounded-xl mb-2 h-40 w-full object-cover"
          />
          <span className="inline-block px-2 py-1 mb-2 rounded bg-cyan-700 text-xs font-semibold text-white shadow">
            {category}
          </span>
          <h2 className="text-xl font-bold text-cyan-300 mb-1">{title}</h2>
          <p className="text-sm text-gray-300 mb-1">{description}</p>
          <span className={`inline-block mt-auto px-3 py-1 rounded-full text-xs font-semibold ${
            isFree ? "bg-green-500" : "bg-yellow-500"
          } text-white`}>
            {isFree ? "Free Tool" : "Paid Tool"}
          </span>
          <span className="block text-gray-400 text-xs mt-2">(Click to flip)</span>
        </div>
        {/* Back */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-[#232946] rounded-2xl p-4 shadow-lg flex flex-col justify-center items-center">
          <div className="bg-[#282b30] rounded px-2 py-1 mb-4 text-xs text-white break-all text-center">
            {prompt}
          </div>
          <div className="flex gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigator.clipboard.writeText(prompt);
              }}
              className="bg-cyan-500 hover:bg-cyan-400 text-white py-1 px-3 rounded-lg text-xs"
            >
              Copy Prompt
            </button>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-400 text-white py-1 px-3 rounded-lg text-xs font-semibold"
              onClick={(e) => e.stopPropagation()}
            >
              Visit Tool
            </a>
          </div>
          <span className="block text-gray-400 text-xs mt-3">(Click to flip back)</span>
        </div>
      </div>
      <style jsx>{`
        .perspective {
          perspective: 1500px;
        }
        .transform-style {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
}
