import {PrismaClient} from '@prisma/client'
import cookie from 'js-cookie'
import LoginG from '../../../components/logincomp/login1.js'
import LoginY from '../../../components/logincomp/login2.js'
import LoginR from '../../../components/logincomp/login3.js'


const Sifre=({users})=>{
    cookie.set("adsoyad",users.map(user=>(user.adsoyad)||""),{expires:24*90});
    cookie.set("sinif",users.map(user=>(user.sinif)||""),{expires:24*90});
    cookie.set("id",users.map(user=>(user.id)||""),{expires:24*90});
    cookie.set("ono",users.map(user=>(user.ono)||""),{expires:24*90});
    cookie.set("tema",users.map(user=>(user.tema)||"Default"),{expires:24*90});
    const x = users.map(user=>(user.durum));
    if(users.map(user=>(user.durum))=="1"){
        cookie.set("login","1",{expires:24*90})
    }else{
        cookie.set ("login","0",{expires:24*90});
    }
    cookie.set("durum",users.map(user=>(user.durum)),{expires:24*90});
    cookie.set("uni",users.map(user=>(user.uni)),{expires:24*90});
    const r =cookie.get('login'||"0");
    return(
        <div >
            
            {x=="1" && r=="1" &&
            <LoginG></LoginG>
            }
            {x=="0" && r=="1" &&
            <LoginY></LoginY>
            }{x=="0" &&
            <LoginR></LoginR>
            }
        </div>
    )
}

export const getServerSideProps = async(contex)=>{
    const nsifre = await contex.params.xsifre;
    const nemail=await contex.params.xemail
    const prisma = new PrismaClient();
    const res = await prisma.aybaUsers.findMany({
        where:{
            email:"denizxman@hotmail.com",
            sifre:"81dc9bdb52d04dc20036dbd8313ed055"
        }
    });
    const users = await res;
    return{
        props:{users}
    }
}



export default Sifre