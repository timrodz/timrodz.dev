import { PropsWithChildren } from "react";

export function Title({ children }: PropsWithChildren) {
  return <h1 className="font-mono">{children}</h1>;
}

export function TitleName() {
  return <h1 className="font-mono">{`Juan Rodríguez Morais`}</h1>;
}
