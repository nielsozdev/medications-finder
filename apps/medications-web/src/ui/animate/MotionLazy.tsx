'use client'

import dynamic from 'next/dynamic'

import { LazyMotion, m } from 'framer-motion'

// eslint-disable-next-line import/extensions
const loadFeatures = async () => await import('./features.js').then((res) => res.default)

interface Props {
  children: React.ReactNode
}

function MotionLazy({ children }: Props) {
  return (
    <LazyMotion strict features={loadFeatures}>
      <m.div style={{ height: '100%' }}> {children} </m.div>
    </LazyMotion>
  )
}

export default dynamic(async () => await Promise.resolve(MotionLazy), { ssr: false })
