import { useEffect, useRef } from "react";
import { Kbd } from "./ui/kbd";
import { InputGroup, InputGroupAddon, InputGroupInput } from "./ui/input-group";
import { Search } from "lucide-react";

const Shortcuts = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    try {
      const handleKeyDown = (event: any) => {
        if (
          (event.ctrlKey || event.metaKey) &&
          event.key.toLowerCase() === "k"
        ) {
          event.preventDefault();
          inputRef.current?.focus();
        }
      };
      window.addEventListener("keydown", handleKeyDown);

      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <InputGroup className="h-9 bg-transparent">
      <InputGroupInput ref={inputRef} placeholder="Search..." />
      <InputGroupAddon>
        <Search />
      </InputGroupAddon>
      <InputGroupAddon align={"inline-end"} className="hidden xl:flex">
        <Kbd>CTRL + K</Kbd>
      </InputGroupAddon>
    </InputGroup>
  );
};

export default Shortcuts;
