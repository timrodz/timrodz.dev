import { ProjectMetadata, Metadata, BlogPostMetadata } from "~/utils/mdx";
import Link from "next/link";

interface ProjectsProps {
  data: Metadata<ProjectMetadata | BlogPostMetadata>[];
}

export function ContentLinks({ data }: ProjectsProps) {
  const sortedData = data.sort((a, b) => {
    if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
      return -1;
    }
    return 1;
  });

  return (
    <div className="mb-4 space-y-3">
      {sortedData.map(
        ({ slug, metadata: { publishedAt, title, ...metadata } }) => (
          <Link key={slug} className="blog-link" href={`/projects/${slug}`}>
            <div className="w-full flex flex-col sm:flex-row flex-wrap space-x-4">
              <p className="blog-link-date">{publishedAt}</p>
              <p className="blog-link-title">{title}</p>
              {"type" in metadata && (
                <p className="blog-link-subtitle">{metadata.type}</p>
              )}
            </div>
          </Link>
        ),
      )}
    </div>
  );
}
