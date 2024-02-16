import { ImageResponse } from '@vercel/og'
import { NextApiHandler } from 'next'

export const config = {
  runtime: 'edge'
}

const handler: NextApiHandler = async () => {
  try {
    return new ImageResponse(<div>My First OG Image</div>, {
      width: 1200,
      height: 630
    })
  } catch {
    return new Response('Failed to generate the image', {
      status: 500
    })
  }
}

export default handler
