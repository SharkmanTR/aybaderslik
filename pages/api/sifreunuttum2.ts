import {NextApiRequest, NextApiResponse} from 'next';
import {PrismaClient, Prisma} from '@prisma/client';

export default async function (req:NextApiRequest, res:NextApiResponse){
    if(req.method=="POST"){
        const prisma=new PrismaClient();
        const {uid,utc}=await req.body;
        let userdata:Prisma.AybaUsersWhereInput;
        userdata={id:parseInt(uid),tc:utc};
        const users = await prisma.aybaUsers.findMany({
            where:userdata,
            
        });
        res.json(users);
    }
}