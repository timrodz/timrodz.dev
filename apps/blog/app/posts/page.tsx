import { Metadata } from "next";
import { Title } from "@repo/ui/components/title";
import { ContentLinks } from "~/components/content-links";
import { getBlogPosts } from "~/utils/mdx";

export const metadata: Metadata = {
  title: "Posts",
  description: "See all the posts I've written.",
};

export default function Page() {
  const data = getBlogPosts();
  return (
    <main>
      <Title>Blog posts 🌱</Title>
      <hr />
      <ContentLinks data={data} />
    </main>
  );
}
