import { cx } from "@repo/ui/utils/classNames";
import {
  Mona_Sans as SansFont,
  Domine as SerifFont,
  Source_Code_Pro as MonoFont,
} from "next/font/google";

const sans = SansFont({
  variable: "--font-sans",
  subsets: ["latin"],
});

const serif = SerifFont({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400"],
});

const mono = MonoFont({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const fontClassNames = () =>
  cx(sans.variable, serif.variable, mono.variable);
