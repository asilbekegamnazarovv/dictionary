import Navbar from "@/components/Navbar";

export interface Word {
  id: string;
  word: string;
  meaning: string;
  transcription: string;
  example: string;
}

const page = () => {
  return (
    <div>
      <Navbar />
    </div>
  );
};

export default page;
