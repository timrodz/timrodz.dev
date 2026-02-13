import { PropsWithChildren } from "react";

export function LayoutContainer({ children }: PropsWithChildren) {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 space-y-10">{children}</div>
  );
}
