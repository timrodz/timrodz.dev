import { BlogPosts } from "~/components/posts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Posts",
  description: "See all the posts I've written.",
};

export default function Page() {
  return (
    <main>
      <h1>Blog posts 🌱</h1>
      <hr />
      <BlogPosts />
    </main>
  );
}
