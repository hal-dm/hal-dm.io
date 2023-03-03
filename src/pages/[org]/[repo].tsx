import { useRouter } from 'next/router'

export default function RepoPage() {
  const router = useRouter()
  const org = router.query.org as string
  const repo = router.query.repo as string

  return (
    <>
      <h1>{org}/{repo}</h1>
    </>
  )
}