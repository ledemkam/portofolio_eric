import Intro from "@/components/Intro";
import RecentPosts from "@/components/RecentPosts";
import ProjectsPage from "./projects/page";

export default function Home() {
  return (
    <section  className="py-24">
      <div className="container max-w-3xl">
        <Intro />
        <RecentPosts/>
        <ProjectsPage/>
      </div>
    </section>
  )
}