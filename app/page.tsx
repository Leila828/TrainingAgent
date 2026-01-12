"use client";

import InteractiveAvatar from "@/components/InteractiveAvatar";
export default function App() {
  return (
    <div className="w-screen min-h-screen flex flex-col">
      <div className="w-full max-w-[900px] flex flex-col items-start justify-start gap-5 mx-auto pt-4 pb-20 px-4">
        <div className="w-full">
          <InteractiveAvatar />
        </div>
      </div>
    </div>
  );
}
