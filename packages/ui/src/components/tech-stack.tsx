import { Fragment } from "react";

export function TechStack({
  technologies,
  label,
}: {
  technologies: string[];
  label?: string;
}) {
  return (
    <p className="technologies">
      {label}
      {technologies.map((name) => (
        <Fragment key={`technology-${name}`}>
          <span>{name}</span>{" "}
        </Fragment>
      ))}
    </p>
  );
}
