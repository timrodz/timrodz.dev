import { PropsWithChildren } from "react";

export function PageContainer({ children }: PropsWithChildren) {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16 space-y-10">{children}</main>
  );
}
