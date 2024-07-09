import DOMPurify from 'dompurify'

export const sanitize = (html: string) => {
  return DOMPurify.sanitize(html, { ALLOWED_TAGS: ['mark'] })
}
