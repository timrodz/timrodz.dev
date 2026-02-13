import { PolaroidPhoto } from "./polaroid";
import { TechStack } from "./tech-stack";

export function About() {
  return (
    <div className="space-y-6">
      <div className="space-y-6">
        <p>
          {`Born in Chitré, Panamá 🇵🇦 in 1995, I’m somewhat of a cross between
          millennials and Gen Z’ers. That means I understand some of today’s
          memes. Since I was young, computers have been a part of my life, and
          I’m grateful I work with them daily—A dream scenario!`}
        </p>
        <p>
          {`Software engineering aside, you can find me outdoors, working out
          (gym/cycling), playing games (Age Of Empires IV, Forza Horizon 5,
          Magic: The Gathering), planning the next travel destination, or
          thinking about what to learn next. I’m currently learning Portuguese,
          music theory, and content creation.`}
        </p>
        <p>
          {`When it comes to tools and technologies, I believe they’re there to
          help you solve problems, nothing else. I also don’t have strong
          opinions about developer decisions when choosing a tech stack.
          Everything has a purpose; if it helps you solve a problem, that’s what
          matters.`}
        </p>
      </div>
      <div>
        <p>I love working with these technologies:</p>
        <TechStack
          technologies={[
            "TypeScript",
            "Python",
            "Elixir",
            "React",
            "Next.js",
            "Nest.js",
            "PostgreSQL",
          ]}
        />
      </div>
      <div>
        <p>
          {`P.S. I'm definitely not a robot 🤖 To prove it, here are some pictures
        of me over the past few years!`}
        </p>
        <div id="polaroid-gallery" className="polaroid-gallery">
          <PolaroidPhoto
            source="/pictures/mexico.webp"
            alt="Picture of me in a Café in México City, México"
            description="México City 2023"
            className="-rotate-2"
          />
          <PolaroidPhoto
            source="/pictures/queenstown.webp"
            alt="Picture of me with a mountain bike in Queenstown, New Zealand"
            description="Queenstown, NZ 2021"
            className="rotate-1"
          />
          <PolaroidPhoto
            source="/pictures/yosemite.webp"
            alt="Picture of me around Yosemite, California"
            description="California 2019"
            className="rotate-2"
          />
        </div>
      </div>
    </div>
  );
}
