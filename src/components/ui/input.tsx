import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type = "text", ...props }, ref) => {
    return (
      <div className="relative w-full">
        <input
          type={type}
          className={cn(
            "flex h-[30px] w-[210px] border-2 border-orange-400 rounded-full bg-black px-10 py-1 text-base shadow-sm transition-colors text-white placeholder:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            className
          )}
          ref={ref}
          {...props}
        />
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">

        </div>
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
