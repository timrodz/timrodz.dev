import { PropsWithChildren } from "react";

export function Subtitle({ children }: PropsWithChildren) {
  return <h2 className="font-mono">{children}</h2>;
}
