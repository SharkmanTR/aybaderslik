import { NextApiRequest, NextApiResponse } from "next";
import {PrismaClient, Prisma} from '@prisma/client';

export default async function (req:NextApiRequest,res:NextApiResponse) {
    if(req.method=="POST"){
        const prisma= new PrismaClient();
        const {uid,usifre}=req.body;
        const up = await prisma.aybaUsers.update({
            where:{
                id:parseInt(uid)
            },
            data:{
                sifre:usifre
            }
        });
        res.json(up);
    }
    
}