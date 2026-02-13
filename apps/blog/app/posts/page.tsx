import { BlogPosts } from "~/components/posts";
import { Metadata } from "next";
import { Title } from "@repo/ui/components/title";

export const metadata: Metadata = {
  title: "Posts",
  description: "See all the posts I've written.",
};

export default function Page() {
  return (
    <main>
      <Title>Blog posts 🌱</Title>
      <hr />
      <BlogPosts />
    </main>
  );
}
