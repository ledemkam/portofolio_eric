import MDXContent from "@/components/shared/mdx-content"
import { getPostById } from "@/lib/posts"
import { formatDate } from "@/lib/utils"
import { ArrowLeftIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"


type PostIdProps = {
    params: Readonly<{
      slug: string
    }>
  }
  
  export default async function PostId({ params }: Readonly<PostIdProps>) {
    const { slug } = params
    const post = await getPostById(slug)
  
    if (!post) {
      notFound()
    }
      const { metadata, content } = post
      const { title, image, author, publishedAt } = metadata
  return (
    <section className='pb-24 pt-32'>
      <div className='container max-w-3xl'>
        <Link
          href='/posts'
          className='mb-8 inline-flex items-center gap-2 text-sm font-light text-muted-foreground transition-colors hover:text-foreground'
        >
          <ArrowLeftIcon className='h-5 w-5' />
          <span>Zurück to posts</span>
        </Link>

        {image && (
          <div className='relative mb-6 h-96 w-full overflow-hidden rounded-lg'>
            <Image
              src={image}
              alt={title ?? ''}
              className='object-cover'
              fill
            />
          </div>
        )}

        <header>
          <h1 className='title'>{title}</h1>
          <p className='mt-3 text-xs text-muted-foreground'>
            {author} / {formatDate(publishedAt ?? '')}
          </p>
        </header>

        <main className='prose mt-16 dark:prose-invert'>
          <MDXContent source={content} />
        </main>

        <footer className='mt-16'>
        </footer>
      </div>
    </section>
  )
}