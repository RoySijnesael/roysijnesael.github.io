import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Under construction · Roy Sijnesael",
  description: "Something new is being built here.",
};

// Temporary placeholder while the site is being rebuilt.
// Restore the previous homepage from git history when ready.
export default function HomePage() {
  return (
    <section className="construction">
      <p className="construction-badge">Under construction</p>
      <h1>Something new is being built here.</h1>
      <p className="lede">
        I&apos;m tinkering with the site right now. Check back soon, or reach me
        at <a href="mailto:roy@vorteq.nl">roy@vorteq.nl</a>.
      </p>
    </section>
  );
}
