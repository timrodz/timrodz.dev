import { Title } from "@repo/ui/components/title";

interface Option {
  name: string;
  href?: string;
}

const USES: { type: string; options: Option | Option[] }[] = [
  {
    type: "Workstations",
    options: [
      { name: "Laptop: Macbook Pro M1" },
      { name: "PC: 1TB NVME / 16 GB RAM / RTX 3060 Ti" },
    ],
  },
  {
    type: "Terminals",
    options: { name: "Wezterm" },
  },
  {
    type: "Code Editors",
    options: [{ name: "Cursor" }, { name: "Zed" }, { name: "Antigravity" }],
  },
  {
    type: "Cloud",
    options: [{ name: "Fly.io" }, { name: "AWS" }],
  },
  {
    type: "Databases",
    options: [{ name: "PostgreSQL" }, { name: "MongoDB" }, { name: "Redis" }],
  },
  {
    type: "Agents",
    options: [{ name: "Claude" }, { name: "Codex" }, { name: "Gemini" }],
  },
];

function Option({ name, href }: Option) {
  return (
    <li>
      <p className="font-mono">{name}</p>
      {href && <a href={href}>Link</a>}
    </li>
  );
}

export default function Uses() {
  return (
    <div>
      <Title>Uses 🌊</Title>
      <hr />
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {USES.map((use) => (
          <div key={use.type}>
            <h3>{use.type}</h3>
            <ul>
              {Array.isArray(use.options) ? (
                use.options.map((option) => (
                  <Option key={option.name} {...option} />
                ))
              ) : (
                <Option {...use.options} />
              )}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
