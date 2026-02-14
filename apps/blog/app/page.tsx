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
      <div className="my-6 space-y-6">
        <div>
          <Subtitle>Projects</Subtitle>
          <ContentLinks data={projects} type="projects" />
        </div>
        <div>
          <Subtitle>Blog posts</Subtitle>
          <ContentLinks data={blogPosts} type="posts" />
        </div>
      </div>
    </main>
  );
}
