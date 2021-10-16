import { NextApiRequest,NextApiResponse } from "next";
import {PrismaClient,Prisma} from '@prisma/client';

export default async function (req:NextApiRequest,res:NextApiResponse) {
    if(req.method=="POST"){
        const prisma = new PrismaClient();
        const {uid,uemail,usifre}=req.body;
        let userdata:Prisma.AybaUsersWhereInput;
        userdata={email:uemail,
        sifre:usifre,
        id:parseInt(uid)
        }
        const user = await prisma.aybaUsers.findMany({
            where:userdata
        })
        res.json(user);
        
    }
}