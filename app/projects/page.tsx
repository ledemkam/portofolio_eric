import Projects from '@/components/shared/Projects'
import { getProjects } from '@/lib/projects'

export default async function ProjectsPage() {
  const projects = await getProjects()

  return (
    <section className='pb-24 pt-40'>
      <div className='container max-w-3xl'>
        <h1 className='title mb-12'>Projekten</h1>

        <Projects projects={projects} />
      </div>
    </section>
  )
}