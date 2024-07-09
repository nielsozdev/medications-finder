'use server'

import { cookies } from 'next/headers'

import { type ThemeMode } from '~/context/SettingsProvider/types'

// eslint-disable-next-line @typescript-eslint/require-await
export async function setTheme(data: ThemeMode) {
  if (!data) {
    cookies().delete('themeMode')

    return
  }

  return cookies().set('themeMode', data, { secure: true }).toString()
}
