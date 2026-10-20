import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Roy Sijnesael",
  description: "Notes, projects and things I'm working on.",
};

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <p className="eyebrow">Software developer</p>
        <h1>Hi, I&apos;m Roy.</h1>
        <p className="lede">
          I build software and tinker with side projects. This is my little
          corner of the internet, where I collect notes, projects and things I
          learn along the way.
        </p>
      </section>

      <section aria-labelledby="whats-here">
        <h2 id="whats-here">What&apos;s here</h2>
        <ul className="link-list">
          <li>
            <Link href="/about/" className="link-card">
              <span>
                <span className="link-card-title">About me</span>
                <span className="link-card-description">A bit of background</span>
              </span>
              <span className="link-card-arrow" aria-hidden="true">
                →
              </span>
            </Link>
          </li>
          <li>
            <a
              href="https://github.com/RoySijnesael?tab=repositories"
              className="link-card"
            >
              <span>
                <span className="link-card-title">Projects</span>
                <span className="link-card-description">
                  What I&apos;m building on GitHub
                </span>
              </span>
              <span className="link-card-arrow" aria-hidden="true">
                →
              </span>
            </a>
          </li>
          <li>
            <a href="mailto:roy@vorteq.nl" className="link-card">
              <span>
                <span className="link-card-title">Get in touch</span>
                <span className="link-card-description">
                  Email is the best way to reach me
                </span>
              </span>
              <span className="link-card-arrow" aria-hidden="true">
                →
              </span>
            </a>
          </li>
        </ul>
      </section>
    </>
  );
}
