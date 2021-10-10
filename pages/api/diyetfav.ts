import { NextApiRequest,NextApiResponse } from "next";
import {PrismaClient} from '@prisma/client'
export default async function (req:NextApiRequest, res:NextApiResponse) {
    if(req.method='POST'){
        const prisma = new PrismaClient();
        const {uid,uinfo}=req.body;
        var xid=parseInt(uid);
        const fav = await prisma.aybaDiyetler.update({
            where:{
                id:xid
            },
            data:{
                fav:'1',
                info:uinfo
            }
        });
        res.status(200).json({durum:"updated"});
        return{
            props:{
                fav
            }
        }
        
    }

}