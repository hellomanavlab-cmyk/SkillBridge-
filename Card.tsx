import { ReactNode } from "react";

export default function Card({
  children,
  className = "",
  hover = false,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div
      className={`rounded-xl border border-border bg-white p-6 ${
        hover ? "transition-shadow duration-150 hover:shadow-raised" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
