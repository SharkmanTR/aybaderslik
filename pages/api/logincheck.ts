import { NextApiRequest, NextApiResponse } from "next";
import {PrismaClient} from '@prisma/client';
export default async function (req:NextApiRequest,res:NextApiResponse){
    if(req.method=="POST"){
        const prisma = new PrismaClient();
        const {uemail,upass}=req.body;
        const users = await prisma.aybaUsers.findMany({
            where:{
                email:uemail,
                sifre:upass
            }
        });
        const d = users.map(u=>u.durum);
        res.json(users);
    }
}