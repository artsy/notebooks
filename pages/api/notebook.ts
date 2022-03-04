// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<String>
) {
  const response = await fetch('https://api.observablehq.com/@anandaroop/hello-world.js?v=3')
  const body = await response.text()

  res.setHeader('Cache-Control', 'no-cache')
  res.status(200).send(body)
}
