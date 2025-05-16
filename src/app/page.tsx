"use client";
import clsx from "clsx";

export default function HomePage() {
    return (
        <h1
            className={clsx(
                "text-2xl",
                "font-bold",
                "text-blue-500",
                "hover:text-blue-400",
                "hover:bg-blue-200",
                "transition",
                "duration-300"
            )}
        >
            Hello World from / page.tsx
        </h1>
    );
}
