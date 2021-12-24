import {NextApiRequest, NextApiResponse} from 'next';
import {PrismaClient, Prisma} from '@prisma/client';
export default async function (req:NextApiRequest, res:NextApiResponse) {
    if(req.method=="POST"){
        const prisma = new PrismaClient();
        const {xuni,xono}= await req.body;
        let dosdata:Prisma.AybaDefterWhereInput;
        dosdata={uni:xuni,ono:xono};
        const def = await prisma.aybaDefter.findMany({
            orderBy:{id:'desc'},
            where:dosdata
        });
        res.json(def);
    }
}