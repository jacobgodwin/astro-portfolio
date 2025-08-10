import type { VercelRequest, VercelResponse } from '@vercel/node'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const deployHook = process.env.DEPLOY_HOOK_URL

  if (!deployHook) {
    res.status(500).json({ error: 'DEPLOY_HOOK_URL is not set' })
    return
  }

  try {
    const response = await fetch(deployHook, { method: 'POST' })

    if (!response.ok) {
      res.status(500).json({ error: 'Failed to trigger rebuild' })
      return
    }

    res.status(200).json({ message: 'Weekly rebuild triggered' })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    res.status(500).json({ error: message })
  }
}
