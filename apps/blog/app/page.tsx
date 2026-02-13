import { Subtitle } from "@repo/ui/components/subtitle";
import { TitleName } from "@repo/ui/components/title";
import { WhoAmI } from "@repo/ui/components/whoami";
import { ContentLinks } from "~/components/content-links";
import { getBlogPosts, getProjects } from "~/utils/mdx";

export default function Page() {
  const blogPosts = getBlogPosts();
  const projects = getProjects();
  return (
    <main>
      <TitleName />
      <hr />
      <WhoAmI />
      <div className="my-8">
        <Subtitle>Blog posts</Subtitle>
        <ContentLinks data={blogPosts} />
        <Subtitle>Projects</Subtitle>
        <ContentLinks data={projects} />
      </div>
    </main>
  );
}
