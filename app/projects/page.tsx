import Projects from '@/components/shared/Projects'
import { getProjects } from '@/lib/projects'
import Link from 'next/link'

export default async function ProjectsPage() {
  const projects = await getProjects()

  return (
    <section className='pb-24 pt-40'>
      <div className='container max-w-3xl'>
        <h1 className='title mb-12'>Projekten</h1>
        <Projects projects={projects} />
         <p className='mt-6 text-right'> weitere Projekten <Link href="https://github.com/ledemkam">hier anschauen</Link></p>
      </div>
    </section>
  )
}