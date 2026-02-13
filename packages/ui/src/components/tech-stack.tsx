interface TechStackProps {
  technologies: string[];
  label?: string;
}

export function TechStack({ technologies, label }: TechStackProps) {
  return (
    <>
      <p className="technologies">{label}</p>
      <div className="flex gap-2 flex-wrap">
        {technologies.map((name) => (
          <div key={`technology-${name}`} className="technology">
            {name}
          </div>
        ))}
      </div>
    </>
  );
}
