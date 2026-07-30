import { FeaturedWork } from "./components/FeaturedWork";
import { HomeCta } from "./components/HomeCta";
import { Hero } from "./components/Hero";
import { PageTeasers } from "./components/PageTeasers";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedWork />
      <PageTeasers />
      <HomeCta />
    </>
  );
}
