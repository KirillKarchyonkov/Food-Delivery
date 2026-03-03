import { NO_INDEX_PAGE } from '@/shared/constants/seo.constans'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'PageTitle',
  ...NO_INDEX_PAGE
}

export default function Page() {
  return <div></div>
}
