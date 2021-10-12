import { NextApiRequest, NextApiResponse } from "next";
import {PrismaClient,Prisma} from '@prisma/client';
export default async function (req:NextApiRequest,res:NextApiResponse){
    if(req.method=="POST"){
        const prisma = new PrismaClient();
        const {uemail,upass}=await req.body;
        let userdata:Prisma.AybaUsersWhereInput
        userdata={email:uemail,
        sifre:upass};
        const users = await prisma.aybaUsers.findMany({
            where:userdata
            
        });
        res.json(users);
    }
}