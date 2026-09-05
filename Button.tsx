import { ReactNode } from "react";
import { Link } from "react-router-dom";

type Variant = "primary" | "secondary" | "ghost";

interface ButtonProps {
  children: ReactNode;
  variant?: Variant;
  to?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-teal text-white hover:bg-[#129c8c] shadow-card",
  secondary:
    "bg-white text-navy border border-border hover:border-navy/30 hover:bg-navy/[0.02]",
  ghost: "text-navy hover:text-teal",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-[15px] font-semibold transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-teal";

export default function Button({
  children,
  variant = "primary",
  to,
  href,
  onClick,
  className = "",
  type = "button",
}: ButtonProps) {
  const classes = `${base} ${variantClasses[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
