import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "A bit about Roy Sijnesael.",
};

export default function AboutPage() {
  return (
    <article>
      <p className="eyebrow">About</p>
      <h1>Hi, I&apos;m Roy Sijnesael.</h1>
      <p className="lede">
        I&apos;m a software developer who enjoys building things, from small
        tools to full applications, and writing down what I learn in the
        process.
      </p>

      <section>
        <h2>This site</h2>
        <p>
          It&apos;s built with{" "}
          <a href="https://nextjs.org/">Next.js</a> and exported as a static
          site, then deployed to{" "}
          <a href="https://pages.github.com/">GitHub Pages</a> with GitHub
          Actions.
        </p>
      </section>

      <section>
        <h2>Get in touch</h2>
        <p>
          The easiest way to reach me is by email at{" "}
          <a href="mailto:roy@vorteq.nl">roy@vorteq.nl</a>, or find me on{" "}
          <a href="https://github.com/RoySijnesael">GitHub</a>.
        </p>
      </section>
    </article>
  );
}
