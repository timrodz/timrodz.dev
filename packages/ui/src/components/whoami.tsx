export function WhoAmI() {
  return (
    <div>
      <p>
        {`Hi! I'm a product engineer based in Auckland, New Zealand. I like owning work end-to-end within my engineering realm. Currently working at `}
        <a
          href="https://www.the-boundary.com/"
          target="_blank"
          className="text-secondary"
          rel="noreferrer"
        >
          The Boundary
        </a>
        {` as a Senior Full-Stack Engineer. Get in touch: `}
        <a
          href="mailto:juan@timrodz.dev"
          target="_blank"
          className="text-secondary"
          rel="noreferrer"
        >
          juan@timrodz.dev
        </a>
        .
      </p>
    </div>
  );
}
