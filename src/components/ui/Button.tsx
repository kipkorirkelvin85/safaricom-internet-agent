import type { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "dark" | "ghost";
  className?: string;
};

const variants = {
  primary: "bg-[#00a651] text-white hover:bg-[#087a38]",
  secondary: "border border-[#d8e2dc] bg-white text-[#111122] hover:border-[#00a651] hover:text-[#087a38]",
  dark: "bg-[#111122] text-white hover:bg-[#25253b]",
  ghost: "text-[#087a38] hover:bg-[#eaf8f0]",
};

export function Button({ variant = "primary", className = "", ...props }: Props) {
  return <button className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-5 text-sm font-bold transition duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#00a651]/25 disabled:cursor-not-allowed disabled:opacity-60 ${variants[variant]} ${className}`} {...props} />;
}
