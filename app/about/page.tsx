import type { Metadata } from "next";
import { About } from "../components/About";
import { Education } from "../components/Education";
import { Experience } from "../components/Experience";
import { Skills } from "../components/Skills";
import { profile } from "../lib/data";
import { getGithubStats } from "../lib/github";

export const metadata: Metadata = {
  title: "About",
  description: `About ${profile.name} — background, skills, experience and education.`,
};

export default async function AboutPage() {
  const githubStats = await getGithubStats(profile.githubUsername);

  return (
    <>
      <About githubStats={githubStats} />
      <Skills />
      <Experience />
      <Education />
    </>
  );
}
