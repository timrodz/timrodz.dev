import { Projects } from "~/components/projects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Posts",
  description: "See all the posts I've written.",
};

export default function Page() {
  return (
    <main>
      <h1>Projects 🌿</h1>
      <hr />
      <Projects />
    </main>
  );
}
