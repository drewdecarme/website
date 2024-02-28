import type { MetaFunction } from "@remix-run/cloudflare";

export const meta: MetaFunction = () => {
  return [
    { title: "Welcome" },
    { name: "description", content: "Drew DeCarme" },
  ];
};

export default function Index() {
  return (
    <main
      style={{
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <blockquote
        style={{
          fontStyle: "italic",
          color: "#535353",
        }}
      >
        "The shoemaker always wears the worst shoes."
      </blockquote>
      <p>
        For now... checkout my&nbsp;
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/drewdecarme"
        >
          Github
        </a>
        &nbsp;for some of the latest work I've done.
      </p>
    </main>
  );
}
