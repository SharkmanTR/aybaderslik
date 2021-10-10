import {NextApiRequest,NextApiResponse} from 'next';
import {PrismaClient} from '@prisma/client';
export default async function (req:NextApiRequest,res:NextApiResponse) {
    const deneme = "deneme";
    res.json({durum:"deneme"});
    
}