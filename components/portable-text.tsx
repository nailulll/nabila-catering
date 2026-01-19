'use client'

import Image from 'next/image'
import { PortableText as PortableTextReact, PortableTextComponents } from '@portabletext/react'
import { getOptimizedImageUrl } from '@/lib/sanity'
import { SanityImage } from '@/lib/types'

const components: PortableTextComponents = {
  types: {
    image: ({ value }: { value: SanityImage & { caption?: string } }) => {
      if (!value?.asset) {
        return null
      }
      return (
        <figure className="my-8">
          <div className="relative w-full h-96 rounded-lg overflow-hidden">
            <Image
              src={getOptimizedImageUrl(value, 1200, 800)}
              alt={value.alt || 'Article image'}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1200px"
            />
          </div>
          {value.caption && (
            <figcaption className="mt-2 text-center text-sm text-gray-600 italic">
              {value.caption}
            </figcaption>
          )}
        </figure>
      )
    },
  },
  block: {
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold text-gray-900 mt-8 mb-4">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-semibold text-gray-900 mt-8 mb-4">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-semibold text-gray-900 mt-6 mb-3">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl font-semibold text-gray-900 mt-6 mb-3">{children}</h4>
    ),
    normal: ({ children }) => (
      <p className="text-gray-700 leading-relaxed mb-4">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-[#F95454] pl-4 italic text-gray-700 my-6">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside space-y-2 mb-4 text-gray-700">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="ml-4">{children}</li>,
    number: ({ children }) => <li className="ml-4">{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ children, value }) => {
      const href = value?.href || '#'
      return (
        <a
          href={href}
          className="text-[#F95454] hover:underline"
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        >
          {children}
        </a>
      )
    },
  },
}

interface PortableTextProps {
  value: any
}

export default function PortableText({ value }: PortableTextProps) {
  return <PortableTextReact value={value} components={components} />
}
