// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from "../db";

export default async function helloAPI(req, res) {
  

  const user = await prisma.user.findMany()

  console.log('backend')
  res.status(200).json(user)
}
