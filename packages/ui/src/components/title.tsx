import { PropsWithChildren } from "react";

export function Title({ children }: PropsWithChildren) {
  return <h1>{children}</h1>;
}

export function TitleName() {
  return <h1>{`Juan Rodríguez Morais`}</h1>;
}
