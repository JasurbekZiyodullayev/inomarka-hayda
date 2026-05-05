import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "danger";
  size?: "sm" | "md";
}

const variantClass = {
  primary: "bg-indigo-600 text-white hover:bg-indigo-500 shadow-sm",
  ghost: "bg-white text-[#64748b] border border-[#e2e8f0] hover:border-indigo-300 hover:text-indigo-600",
  danger: "bg-white text-red-500 border border-[#e2e8f0] hover:border-red-300 hover:text-red-600",
};

const sizeClass = {
  sm: "px-3 py-1.5 text-xs rounded-lg",
  md: "px-4 py-2.5 text-sm rounded-xl",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", className = "", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`inline-flex items-center gap-1.5 font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed ${variantClass[variant]} ${sizeClass[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
