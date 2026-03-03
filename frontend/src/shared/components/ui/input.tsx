import * as React from "react"

import { cn } from "@/shared/utils/index"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground/60 text-foreground placeholder:text-foreground/40 h-9 w-full min-w-0 rounded-md border border-transparent bg-white/85 px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-white file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm font-mono",
        "focus:border-red/80",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      )}
      autoComplete="new-password"
      {...props}
    />
  )
}

export { Input }
