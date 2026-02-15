import { TechStack } from "@repo/ui/components/tech-stack";
import { Metadata } from "next";
import Image from "next/image";

import { projects, ProjectType } from "data";
import { shuffleArray } from "@repo/ui/utils/shuffle-array";
import { ArrowLeftIcon } from "lucide-react";
import { LinkCTA } from "@repo/ui/components/link-cta";
import { Navbar } from "@repo/ui/components/navbar";

const NAV_ITEMS = [
  { name: "home", href: "/" },
  { name: "blog", href: "https://blog.timrodz.dev" },
  { name: "resume", href: "/resume-juan-rodriguez.pdf", cta: true },
];

type Props = {
  params: { slug: string };
};

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
      <>
        <Navbar navItems={NAV_ITEMS} />
        <main>
          <h2>Project not found</h2>
          <LinkCTA href="/" icon={ArrowLeftIcon}>
            Back to main site
          </LinkCTA>
        </main>
      </>
    );
  }

  const otherProjectsToShowcase = shuffleArray<ProjectType>(
    projects.filter((p) => p.slug !== slug),
  ).slice(0, 3);

  return (
    <>
      <Navbar navItems={NAV_ITEMS} />
      <main className="space-y-10">
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
          <LinkCTA href={project.url} target="_blank" className="mt-6">
            Project website / demo
          </LinkCTA>
        </section>
        <section>
          <h3>Summary</h3>
          <div className="flex flex-col gap-4 mb-4">{project.summary}</div>
          <TechStack
            label="Technology stack"
            technologies={project.technologies}
          />
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
        <LinkCTA href="/" className="mt-4" icon={ArrowLeftIcon}>
          Back to main site
        </LinkCTA>
      </main>
    </>
  );
}
