import {NextApiRequest, NextApiResponse} from 'next';
import {PrismaClient, Prisma} from '@prisma/client';
export default async function (req:NextApiRequest,res:NextApiResponse) {
    if(req.method=='POST'){
        const prisma = new PrismaClient();
        const {xuni}= await req.body;
        let dosdata:Prisma.AybaDersDosyalariWhereInput;
        dosdata={uni:xuni};
        const def = await prisma.aybaDersDosyalari.findMany({
            orderBy:{ders:'asc'},
            where:dosdata
        })
        res.json(def);
    };
    
}