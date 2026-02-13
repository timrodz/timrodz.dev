import { baseUrl } from "~/app/sitemap";
import { getProjects } from "~/utils/mdx";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CustomMDX } from "~/components/mdx";
import { TechStack } from "@repo/ui/components/tech-stack";
import { Metadata } from "next";

export async function generateStaticParams() {
  const projects = getProjects();

  return projects.map((post) => ({
    slug: post.slug,
  }));
}

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug: querySlug } = await params;
  const post = getProjects().find((post) => post.slug === querySlug);
  if (!post) {
    return {};
  }

  const {
    title,
    publishedAt: publishedTime,
    type,
    summary,
    imageUrl,
    technologies,
  } = post.metadata;
  const ogImage = imageUrl
    ? imageUrl
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  const betterTitle = `${title} - Juan Rodríguez Morais - Blog`;
  const description =
    summary ?? `${type} ${technologies && `/ Tech stack: ${technologies}`}`;

  return {
    title: betterTitle,
    description,
    openGraph: {
      title: betterTitle,
      description,
      type: "article",
      publishedTime,
      url: `${baseUrl}/posts/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function Blog({ params }: Props) {
  const { slug: querySlug } = await params;
  const project = getProjects().find((project) => project.slug === querySlug);

  if (!project) {
    notFound();
  }

  const { metadata, content } = project;

  const technologies =
    metadata.technologies?.split(",").map((s) => s.trim()) ?? [];

  return (
    <main>
      <h1 className="title font-bold text-3xl md:text-5xl">{metadata.title}</h1>
      <hr />
      <div className="fmt-2 mb-8 flex flex-col gap-4 text-neutral-600 dark:text-neutral-300">
        <p className="text-xl font-medium">Overview</p>
        <ul className="list-disc ml-6">
          <li>
            Project type: <span className="font-medium">{metadata.type}</span>
          </li>
          {metadata.releaseYear && (
            <li>
              Released in{" "}
              <span className="font-medium">{metadata.releaseYear}</span>
            </li>
          )}
          {metadata.workingYears && (
            <li>
              Worked years:{" "}
              <span className="font-medium">{metadata.workingYears}</span>
            </li>
          )}
          {metadata.clientName && (
            <li>
              Company/Client:{" "}
              <span className="font-medium">{metadata.clientName}</span>
            </li>
          )}
          {metadata.role && (
            <li>
              Role: <span className="font-medium">{metadata.role}</span>
            </li>
          )}
        </ul>
        {technologies && (
          <div>
            <p className="mb-2 text-xl font-medium">Technology stack</p>
            <TechStack technologies={technologies} />
          </div>
        )}

        {metadata.imageUrl && (
          <Image
            src={`${metadata.imageUrl}`}
            width={600}
            height={0}
            alt={metadata.imageAlt}
            className="rounded-lg shadow-xl"
            priority
          />
        )}
      </div>
      <article className="prose">
        <CustomMDX source={content} />
      </article>
      {metadata.url && (
        <Link
          rel="noopener noreferrer"
          target="_blank"
          href={metadata.url}
          className="cta inline-flex items-center gap-2 mt-6"
        >
          {/*<Arrow />*/}
          Click here to see the project in action
        </Link>
      )}
    </main>
  );
}
