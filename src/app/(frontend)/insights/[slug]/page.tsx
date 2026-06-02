import { redirect } from 'next/navigation'

type Args = {
  params: Promise<{ slug: string }>
}

export default async function LegacyInsightRedirect({ params }: Args) {
  const { slug } = await params
  redirect(`/insights/articles/${slug}`)
}
