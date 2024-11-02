"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Form: React.FC = () => {
  const router = useRouter();
  const [username, setUsername] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleGenerate = () => {
    if (username) {
      router.push(`/${username}`);
    }
  };

  return (
    <div className="flex gap-4">
      <Input
        placeholder="Enter your GitHub username and click on generate"
        value={username}
        onChange={handleChange}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            handleGenerate();
          }
        }}
      />
      <Button variant="secondary" onClick={handleGenerate}>
        Generate
      </Button>
    </div>
  );
};

export default Form;
