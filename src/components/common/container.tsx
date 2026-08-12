import type { ComponentProps } from 'react'

import { cn } from '@/lib/utils'

type ContainerProps = ComponentProps<'div'>

export function Container({ className, ...props }: ContainerProps) {
  return (
    <div
      data-slot='container'
      className={cn('mx-auto w-full max-w-[89.5rem] px-[6.25rem] xsm:px-[1rem]', className)}
      {...props}
    />
  )
}
