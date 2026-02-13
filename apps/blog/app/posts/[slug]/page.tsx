import { notFound } from "next/navigation";
import { CustomMDX } from "~/components/mdx";
import { formatDate, getBlogPosts } from "~/utils/mdx";
import { baseUrl } from "~/app/sitemap";
import { Metadata } from "next";

export async function generateStaticParams() {
  const blogPosts = getBlogPosts();

  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug: querySlug } = await params;
  const post = getBlogPosts().find((post) => post.slug === querySlug);
  if (!post) {
    return {};
  }

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  const ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  const betterTitle = `${title} - Juan Rodríguez Morais - Blog`;

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
  const post = getBlogPosts().find((post) => post.slug === querySlug);
  if (!post) {
    notFound();
  }

  const { metadata, content } = post;

  return (
    <main>
      <h1 className="title font-bold text-3xl md:text-5xl">{metadata.title}</h1>
      <hr />
      <div className="flex justify-between items-center mt-2 mb-8">
        <p>Published on {formatDate(metadata.publishedAt)}</p>
      </div>
      <article className="prose">
        <CustomMDX source={content} />
      </article>
    </main>
  );
}
