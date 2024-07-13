import { Iconify } from '~/ui/Iconify'

export function Footer() {
  return (
    <div className='my-8 text-center'>

      <div className='flex flex-col items-center justify-center container mx-auto'>
        <span className='text-xs'>Desarrollado por</span>
        <a
          className=' flex items-center justify-center  gap-2 '
          href="https://www.linkedin.com/in/nielsOliveraZurita"
          rel="noreferrer"
          target="_blank"
        >
          <Iconify icon="logos:linkedin-icon" />
          <span className="font-semibold">Niels Olivera Zurita</span>
        </a>
      </div>
    </div>
  )
}
