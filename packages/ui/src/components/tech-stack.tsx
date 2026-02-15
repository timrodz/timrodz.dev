interface TechStackProps {
  technologies: string[];
  label?: string;
}

export function TechStack({ technologies, label }: TechStackProps) {
  return (
    <div className="space-y-2">
      <p className="technologies">{label}</p>
      <div className="flex gap-2 flex-wrap">
        {technologies.map((name) => (
          <div
            key={`technology-${name}`}
            className="text-accent-foreground text-sm font-mono font-medium bg-accent ring-1 ring-border rounded px-2.5 leading-8 block text-center"
          >
            {name}
          </div>
        ))}
      </div>
    </div>
  );
}
