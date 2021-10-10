import {NextApiRequest,NextApiResponse} from 'next';
import {PrismaClient,Prisma} from '@prisma/client';

export default async function uyeol (req:NextApiRequest, res:NextApiResponse) {

    if(req.method=="POST"){
        const prisma = new PrismaClient();
        let userdata : Prisma.AybaUsersCreateInput
        const {
            email1,
            sifre1,
            adsoyad1,
            dtarihi1,
            tel1,
            tc1,
            barkod1,
            ono1,
            paket1,
            bitg1,
            bita1,
            bity1,
            uni1,
            sinif1,
        }=req.body;
        userdata={
            email:email1,
            sifre:sifre1,
            adsoyad:adsoyad1,
            dtarihi:dtarihi1,
            tel:tel1,
            tc:tc1,
            barkod:barkod1,
            ono:ono1,
            tema:"Default",
            paket:paket1,
            bitg:bitg1,
            bita:bita1,
            bity:bity1,
            uni:uni1,
            sinif:sinif1,
            dyt:"1",
            ehesap:"1",
            durum:"0",
            hoca:"0"
        }
        try {
            const user=await prisma.aybaUsers.create({
                data:userdata,
                
            });
            res.json(user);
        } catch (error) {
            res.json({durum:"x"})
        }
    }else{
        res.json({durum:"x"});
    }
}