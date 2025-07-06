<<<<<<< HEAD
export type Prompt = {
  id: number;
  title: string;
  image: string;
  description: string;
  prompt: string;
  link: string;
  isFree: boolean;
  category: string;
};

=======
// src/utils/promptsData.ts

export type Prompt = {
  id: number;
  title: string;
  image: string;
  description: string;
  prompt: string;
  link: string;
  isFree: boolean;
};

>>>>>>> 38c589af0af4fa65596ee58ee410ba61cfbcc580
export const prompts: Prompt[] = [
  {
    id: 1,
    title: "Ghibli Art Generator",
    image: "https://placehold.co/320x180?text=Ghibli+Art",
    description: "Transform your photos into Ghibli-style art.",
    prompt: "Create my portrait in Ghibli anime style, soft lighting, vibrant colors.",
    link: "https://ghibli-ai.com",
    isFree: true,
<<<<<<< HEAD
    category: "Art",
=======
>>>>>>> 38c589af0af4fa65596ee58ee410ba61cfbcc580
  },
  {
    id: 2,
    title: "Cartoonify Yourself",
    image: "https://placehold.co/320x180?text=Cartoon+Art",
    description: "Turn any selfie into a cartoon avatar.",
    prompt: "Make this selfie into a bright, funny cartoon avatar.",
    link: "https://cartoonify.ai",
    isFree: true,
<<<<<<< HEAD
    category: "Art",
=======
>>>>>>> 38c589af0af4fa65596ee58ee410ba61cfbcc580
  },
  {
    id: 3,
    title: "AI Resume Builder",
    image: "https://placehold.co/320x180?text=RESUME+Art",
    description: "Create a professional resume in seconds.",
    prompt: "Generate a clean, ATS-friendly resume for a software engineer.",
    link: "https://resumeai.com",
    isFree: false,
<<<<<<< HEAD
    category: "Productivity",
=======
>>>>>>> 38c589af0af4fa65596ee58ee410ba61cfbcc580
  },
  {
    id: 4,
    title: "Fantasy World Maker",
    image: "https://placehold.co/320x180?text=Fantasy+World",
    description: "Visualize imaginary lands or cities.",
    prompt: "Design a fantasy kingdom landscape, castle on hill, magical sky.",
    link: "https://fantasyworld.ai",
    isFree: true,
<<<<<<< HEAD
    category: "Art",
=======
>>>>>>> 38c589af0af4fa65596ee58ee410ba61cfbcc580
  },
  {
    id: 5,
    title: "Old Photo Restorer",
    image: "https://placehold.co/320x180?text=Photo+Restore",
    description: "Restore & colorize old family photos.",
    prompt: "Restore and colorize this black and white family photo.",
    link: "https://restorephotos.ai",
    isFree: true,
<<<<<<< HEAD
    category: "Photo",
=======
>>>>>>> 38c589af0af4fa65596ee58ee410ba61cfbcc580
  },
  {
    id: 6,
    title: "Song Lyrics Generator",
    image: "https://placehold.co/320x180?text=Lyrics+AI",
    description: "AI writes you new song lyrics.",
    prompt: "Write a love song in the style of Ed Sheeran.",
    link: "https://lyricsai.com",
    isFree: false,
<<<<<<< HEAD
    category: "Music",
=======
>>>>>>> 38c589af0af4fa65596ee58ee410ba61cfbcc580
  },
  {
    id: 7,
    title: "Anime Video Enhancer",
    image: "https://placehold.co/320x180?text=Anime+Video",
    description: "Make any video look like anime.",
    prompt: "Convert this video to anime style, smooth frames, vivid colors.",
    link: "https://animevideoai.com",
    isFree: false,
<<<<<<< HEAD
    category: "Video",
=======
>>>>>>> 38c589af0af4fa65596ee58ee410ba61cfbcc580
  },
  {
    id: 8,
    title: "NotebookML Study Helper",
    image: "https://placehold.co/320x180?text=NotebookML",
    description: "AI notes and study summaries for students.",
    prompt: "Summarize these notes into bullet points for easy revision.",
    link: "https://notebookml.com",
    isFree: true,
<<<<<<< HEAD
    category: "Productivity",
=======
>>>>>>> 38c589af0af4fa65596ee58ee410ba61cfbcc580
  },
  {
    id: 9,
    title: "PPT Generator",
    image: "https://placehold.co/320x180?text=PPT+Gen",
    description: "Generate full presentations from topics.",
    prompt: "Create a 10-slide PowerPoint on climate change impacts.",
    link: "https://pptgen.ai",
    isFree: true,
<<<<<<< HEAD
    category: "Productivity",
=======
>>>>>>> 38c589af0af4fa65596ee58ee410ba61cfbcc580
  },
  {
    id: 10,
    title: "Voice Changer AI",
    image: "https://placehold.co/320x180?text=Voice+AI",
    description: "Change your voice for calls or videos.",
    prompt: "Make my voice sound like a cartoon squirrel.",
    link: "https://voicechanger.ai",
    isFree: false,
<<<<<<< HEAD
    category: "Music",
=======
>>>>>>> 38c589af0af4fa65596ee58ee410ba61cfbcc580
  },
];
