import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <section>
      <p className="eyebrow">404</p>
      <h1>Page not found</h1>
      <p className="lede">
        Sorry, that page doesn&apos;t exist.{" "}
        <Link href="/">Back to the homepage</Link>.
      </p>
    </section>
  );
}
