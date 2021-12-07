// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from "@prisma/client";

export default async function helloAPI(req, res) {
  const prisma = new PrismaClient()

  const user = await prisma.user.findUnique({
    where:{
        email: 'john@sample.com'
    }
})
  res.status(200).json(user)
}
