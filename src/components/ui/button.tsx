"use client"
import { type ButtonHTMLAttributes, forwardRef } from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const Button = forwardRef(
  ({ className, ...props }: ButtonProps, ref: React.Ref<HTMLButtonElement>) => {
    return (
      <button
        className={cn(
          "rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button" 