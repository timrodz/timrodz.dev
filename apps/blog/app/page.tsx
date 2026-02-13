import { Projects } from "~/components/projects";
import { BlogPosts } from "~/components/posts";
import { TitleName } from "@repo/ui/components/title";
import { Subtitle } from "@repo/ui/components/subtitle";

export default function Page() {
  return (
    <main>
      <TitleName />
      <hr />
      <p className="mb-4">
        {`I'm a Software Engineer with 7+ years of professional experience, primarily
          focusing on SaaS products for small to medium-sized businesses (including startups).
          I'm currently located in Auckland, New Zealand, working with The Boundary as a Senior Software Engineer.
          My preferred tech stack is TypeScript, React, Node, AWS, and Elixir + Phoenix. I also
          have experience with leading developer small teams.`}
      </p>
      <div className="my-8">
        <Subtitle>Blog posts</Subtitle>
        <BlogPosts />
        <Subtitle>Projects</Subtitle>
        <Projects />
      </div>
    </main>
  );
}
