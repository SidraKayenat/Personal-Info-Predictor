"use client";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const router = useRouter();
  const handleSubmit = (event: FormEvent) => {
    //fetched from the server component
    event.preventDefault();
    router.push(`/predictor/${inputValue}`);
  };
  return (
    <div>
      <div>
        <h1>Enter your name here: </h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter name"
            className="text-black"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
          <button type="submit">Predict data</button>
        </form>
      </div>
    </div>
  );
}
