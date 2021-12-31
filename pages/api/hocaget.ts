import {NextApiRequest, NextApiResponse} from 'next';
import {PrismaClient, Prisma} from '@prisma/client';
export default async function (req:NextApiRequest, res:NextApiResponse) {
    if(req.method=="POST"){
        const prisma = new PrismaClient();
        const {xuni}= await req.body;
        let hocdata:Prisma.AybaUsersWhereInput;
        hocdata={uni:xuni, hoca:"1"};
        const hocalar = await prisma.aybaUsers.findMany({
            where:hocdata
        });
        res.json(hocalar);
    }
    
}