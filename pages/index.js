import Head from 'next/head';
import UstMenu from '/components/ustmenu.js';
import cookies from 'js-cookie';
import GirisYap from '../pages/girisyap';
import Ingilizce from '../components/ingilizce';
import Image from 'next/image';
import { useState } from 'react';



var tema = cookies.get("tema"||"Default");
let tc;
if(tema=="Default"){
    tc="#dadada";
}else if (tema=="DefaultDark"){
    tc="#1a1a1a";
}else if (tema=="SlateBlue"){
    tc="lightsteelblue";
}else if(tema=="DarkSlateBlue"){
  tc="darkslateblue"
}else if (tema=="Wisteria"){
  tc="#f6eafa";
}else if (tema=="DarkWisteria"){
  tc="#551868 ";
}else if (tema=="Nar"){
  tc="#FFBABA";
}else if (tema=="DarkNar"){
  tc="#8b0000";
}else if (tema=="Night"){
  tc="#1a1a1a";
}else if (tema=="Day"){
  tc="#EDF6F5";
}
export default function Home() {
  const l = cookies.get('login'||"0");
  const d= cookies.get("durum");


  return(

    <div  >
    <style jsx global>
      {`
      body{background-color: ${tc} ;}
      `}
    </style>
      <Head>
        <title>AYBA Derslik</title>
      </Head>
      <div>
        <UstMenu
        pref={""}
        ></UstMenu>
        <div style={{width:'100%',height:'500px',marginTop:'50px'}}>
          <img alt="" src="/dergi/1.png" style={{
            objectFit:'contain',
            objectPosition:'center',
            width:'100%',
            height:'100%',
            cursor:'pointer'
            
          }} onClick={dergic}></img>
        </div>

        <Ingilizce ></Ingilizce>
      </div>
      
    </div>
    
  )
  function dergic() {
    window.location.href="/DietsTalks";
  }

}

