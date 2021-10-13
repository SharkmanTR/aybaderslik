import {NextApiRequest,NextApiResponse} from 'next';
import {PrismaClient, Prisma} from '@prisma/client';
import moment from 'moment';
export default async function (req:NextApiRequest, res:NextApiResponse) {
    if(req.method=="POST"){
        const prisma = new PrismaClient();
        const {xuni,xhoca}=await req.body;
        let dosdata:Prisma.AybaDiyetlerWhereInput
        dosdata={uni:xuni,
        hoca:xhoca,
        gun:moment().format('DD'),
        ay:moment().format('MM'),
        yil:moment().format('YYYY')};
        const dosya = await prisma.aybaDiyetler.findMany({
            orderBy:{id:'desc'},
            where:dosdata
        });
        res.json(dosya);
    }
    
}