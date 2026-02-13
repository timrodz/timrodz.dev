import { ContentLinks } from "~/components/content-links";
import { Metadata } from "next";
import { Title } from "@repo/ui/components/title";
import { getProjects } from "~/utils/mdx";

export const metadata: Metadata = {
  title: "Posts",
  description: "See all the posts I've written.",
};

export default function Page() {
  const data = getProjects();
  return (
    <main>
      <Title>Projects 🌿</Title>
      <hr />
      <ContentLinks data={data} />
    </main>
  );
}
