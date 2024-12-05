import Intro from "@/components/shared/Intro";
import NewsletterForm from "@/components/form/NewsletterForm";
import RecentPosts from "@/components/shared/RecentPosts";
import RecentProjects from "@/components/shared/RecentProjects";


export default function Home() {
  return (
    <section  className="py-24">
      <div className="container max-w-3xl">
        <Intro />
        <RecentPosts/>
        <RecentProjects/>
        <NewsletterForm/>
      </div>
    </section>
  )
}