import { PropsWithChildren } from "react";

export function LayoutContainer({ children }: PropsWithChildren) {
  return (
    <div className="max-w-full md:max-w-2xl lg:max-w-4xl mx-auto px-6 py-16 space-y-10">
      {children}
    </div>
  );
}
