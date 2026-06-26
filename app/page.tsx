"use client";
import { BASE_API_PATH } from "@/constants";
import { useEffect } from "react";

export default function Home() {
  // TODO: test code to be removed
  useEffect(() => {
    fetch(BASE_API_PATH + "/test")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div className="h-screen flex-1 flex justify-center items-center bg-gray-200">
      <h1 className="text-gray-900">Main Page</h1>
    </div>
  );
}
