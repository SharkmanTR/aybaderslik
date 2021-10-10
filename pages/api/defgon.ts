import {NextApiRequest, NextApiResponse} from 'next';
import {PrismaClient,Prisma} from '@prisma/client';
import moment from 'moment';
export default async function (req:NextApiRequest,res:NextApiResponse) {
    if(req.method=="POST"){
        const prisma = new PrismaClient();
        let dytdata:Prisma.AybaDefterCreateInput
        const {
            adsoyad1,
            uni1,
            ono1,
            dsut1,
            dyysut1,
            dyssut1,
            det1,
            dekm1,
            dkbak1,
            dseb1,
            dmey1,
            dyag1,
            dytoh1,
            ekcho1,
            ekpro1,
            ekyag1,
            gcho1,
            gpro1,
            gyag1,
            topkcal1,
            kcho1,
            kpro1,
            kyag1,
            ycho1,
            ypro1,
            yyag1,
            osabah1,
            oara11,
            oogle1,
            oara21,
            oaksam1,
            oara31,
            vakaadi1,
            hastaliklar1,
            ilaclar1,
            bulgular1,
            servis1,
            info1
        }=req.body;
        dytdata={
            adsoyad:adsoyad1,
            ono:ono1,
            uni:uni1,
            dsut:dsut1,
            dyysut:dyysut1,
            dyssut:dyssut1,
            det:det1,
            dekm:dekm1,
            dkbak:dkbak1,
            dseb:dseb1,
            dmey:dmey1,
            dyag:dyag1,
            dytoh:dytoh1,
            ekcho:ekcho1,
            ekpro:ekpro1,
            ekyag:ekyag1,
            gcho:gcho1,
            gpro:gpro1,
            gyag:gyag1,
            topkcal:topkcal1,
            kcho:kcho1,
            kpro:kpro1,
            kyag:kyag1,
            ycho:ycho1,
            ypro:ypro1,
            yyag:yyag1,
            osabah:osabah1,
            oara1:oara11,
            oogle:oogle1,
            oara2:oara21,
            oaksam:oaksam1,
            oara3:oara31,
            vakaadi:vakaadi1,
            hastaliklar:hastaliklar1,
            ilaclar:ilaclar1,
            bulgular:bulgular1,
            servis:servis1,
            info:info1,
            gun:moment().format('DD'),
            ay:moment().format('MM'),
            yil:moment().format('YYYY')
        }
        const dyt = await prisma.aybaDefter.create({
            data:dytdata,
        });
        res.json(dyt);
        return{
            props:{dyt}
        };
    }
    
}