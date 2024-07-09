'use client'
import { type ReactNode } from 'react'

import { EmptyLayout } from '~/layouts/EmptyLayout'

export default function SuggesionsLayout({ children }: { children: ReactNode }) {
  return <EmptyLayout>{children}</EmptyLayout>
}
