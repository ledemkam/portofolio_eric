'use client'

import { z } from 'zod'
import Link from 'next/link'
import { toast } from 'sonner'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { NewsletterFormSchema } from '@/lib/validations'

type Inputs = z.infer<typeof NewsletterFormSchema>

export default function NewsletterForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<Inputs>({
    resolver: zodResolver(NewsletterFormSchema),
    defaultValues: {
      email: ''
    }
  })

  const processForm: SubmitHandler<Inputs> = async data => {

    
  try {
    const response = await fetch('/api/sendSemail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: data.email })
    })

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    await response.json()
    toast.success('Anmeldung erfolgreich!')
    reset()
  } catch {
    toast.error('Fehlermeldung! Bitte versuht es erneut.')
  }
}


  return (
    <section>
      <Card className='rounded-lg border-0 dark:border'>
        <CardContent className='flex flex-col gap-8 pt-6 md:flex-row md:justify-between md:pt-8'>
          <div>
            <h2 className='text-2xl font-bold'>Zum Newsletter anmelden</h2>
            <p className='text-muted-foreground'>
            Erhalten Sie Updates zu meiner Arbeit und meinen Projekten.            </p>
          </div>

          <form
            onSubmit={handleSubmit(processForm)}
            className='flex flex-col items-start gap-3'
          >
            <div className='w-full'>
              <Input
                type='email'
                id='email'
                autoComplete='email'
                placeholder='Ihr Email Adresse'
                className='w-full'
                {...register('email')}
              />

              {errors.email?.message && (
                <p className='ml-1 mt-2 text-sm text-rose-400'>
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className='w-full'>
              <Button
                type='submit'
                disabled={isSubmitting}
                className='w-full disabled:opacity-50'
              >
                {isSubmitting ? 'Submitting...' : 'Anmelden'}
              </Button>
            </div>

            <div>
              <p className='text-xs text-muted-foreground'>
              Wir kümmern uns um Ihre Daten. Lesen Sie unsere{' '}
                <Link href='/privacy' className='font-bold'>
                  privacy&nbsp;policy.
                </Link>
              </p>
            </div>
          </form>
        </CardContent>
      </Card>
    </section>
  )
}