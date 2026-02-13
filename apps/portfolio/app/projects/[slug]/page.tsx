import { Footer } from "@repo/ui/components/footer";
import { TechStack } from "@repo/ui/components/tech-stack";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { projects, ProjectType, socials } from "data";
import { SocialStack } from "@repo/ui/components/social-stack";
import { PageContainer } from "~/components/page-container";

import { PageNotFoundError } from "next/dist/shared/lib/utils";
import { ArrowLeftIcon, ArrowUpRightIcon } from "lucide-react";
import { LinkCTA } from "@repo/ui/components/cta";

type Props = {
  params: { slug: string };
};

function shuffleArray(array: ProjectType[]): ProjectType[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    // TODO: FIX
    // @ts-expect-error could be `ProjectType | undefined`
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function getProjectData(slug: string): ProjectType | undefined {
  return projects.find((p) => p.slug === slug);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectData(slug);

  return {
    metadataBase: new URL("https://timrodz.dev"),
    title: project
      ? `${project.title} - Project overview - Juan Rodríguez Morais`
      : "Juan Rodríguez Morais",
    description: project
      ? `Learn more about Juan's work with project ${
          project.title
        }, which featured technologies ${project.technologies.join(", ")}`
      : undefined,
    authors: [
      {
        name: "Juan Alejandro Rodriguez Morais",
        url: "https://www.timrodz.dev",
      },
    ],
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const project = getProjectData(slug);

  if (!project) {
    return (
      <PageContainer>
        <div className="flex flex-col items-center justify-center gap-20 text-center">
          <h2>Project not found</h2>
          <LinkCTA href="/" label="Go back to main site" icon={ArrowLeftIcon} />
          <div className="flex flex-col items-center justify-center gap-2">
            <h3>Or get in touch 👋</h3>
            <SocialStack socials={socials} />
          </div>
        </div>
      </PageContainer>
    );
  }

  const otherProjectsToShowcase = shuffleArray(
    projects.filter((p) => p.slug !== slug),
  ).slice(0, 3);

  return (
    <PageContainer>
      <section>
        <h1>{project.title}</h1>
        <hr />
        <h2>Project Overview</h2>
        <ul className="list-disc ml-6">
          <li>Project type: {project.type}</li>
          {project.releaseYear && (
            <li>
              Released in{" "}
              <span className="font-medium">{project.releaseYear}</span>
            </li>
          )}
          {project.workingYears && <li>Years: {project.workingYears}</li>}
          {project.company && (
            <li>
              Company/Client:{" "}
              <span className="font-medium">{project.company}</span>
            </li>
          )}
          {project.role && (
            <li>
              Role: <span className="font-medium">{project.role}</span>
            </li>
          )}
        </ul>
        <LinkCTA
          href={project.url}
          target="_blank"
          label="Project website / demo"
        />
      </section>
      <section>
        <h3>Summary</h3>
        <hr />
        <div className="flex flex-col gap-4 mb-4">{project.summary}</div>
        <TechStack label="Tech stack: " technologies={project.technologies} />
        <div className="mt-4 lg:mt-6 flex flex-col gap-6 justify-center items-start lg:items-center">
          <Image
            priority
            src={project.imageUrl}
            width={800 / 1.5}
            height={600 / 1.5}
            alt={project.imageAlt}
            className="w-full md:w-3/4 rounded-lg border"
          />
        </div>
      </section>
      <section>
        <h3 className="mt-20">See my other projects 👇</h3>
        <div className="mt-4 flex flex-col md:flex-row gap-10 md:gap-4">
          {otherProjectsToShowcase.map((p) => (
            <div key={p.slug} className="bg-card ring-border rounded border">
              <div>
                <Image
                  width={400}
                  height={300}
                  src={p.imageUrl}
                  alt={p.imageAlt}
                  className="rounded-t-md w-full"
                />
              </div>
              <div className="p-4">
                <h4 className="my-1">{p.title}</h4>
                <LinkCTA href={`/projects/${p.slug}`} subtle />
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="flex items-center justify-start lg:justify-center mb-4">
        <Link href="/">Back to main site</Link>
      </div>
      <Footer />
    </PageContainer>
  );
}
