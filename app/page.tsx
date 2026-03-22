import Navbar from "@/components/Navbar";
import { Word } from "./words/page";

export interface List {
  id: number;
  title: string;
  words: Word[];
}

const page = () => {
  return (
    <>
      <Navbar />
      
    </>
  );
};

export default page;
