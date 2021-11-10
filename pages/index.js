import Head from 'next/head';
import UstMenu from '/components/ustmenu.js';
import cookies from 'js-cookie';
import Ingilizce from '../components/ingilizce';
import { useEffect, useState } from 'react';



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
}else {
  tc="#dadada";
}
export default function Home() {
  const l = cookies.get("lg")||"0";
  const d= cookies.get("durum");
  useEffect(()=>{
    if(l=="0"){
      window.location.href='/girisyap';
    }
  })

  return(

    <div  >
    <style jsx global>
      {`
      body{background-color: ${tc} ;}
      `}
    </style>
      <Head>
        <title>AYBA Derslik</title>
        <link rel="shourtcut icon" href={`/ico/${tema}.ico`}></link>
      </Head>
      <div>
        <UstMenu
        pref={""}
        ></UstMenu>
        <div style={{width:"100%",marginTop:"60px"}}>
          {d=="2"&&
          <div>
            <p style={{color:"red",fontSize:"medium",textAlign:"center"}}>Hizmetlerimizden faydalanmaya devam edebilmek için lütfen en kısa zamanda abonelik ücretinizi ödeyiniz. Zaten ödeme yaptıysanız bu mesajı dikkate almayınız.</p>
            <p style={{color:"red",fontSize:"medium",textAlign:"center"}}>Ödemelerinizi aşağıda bulunan iban numaralarına yapabilirsiniz.</p>
            <p style={{color:"red",fontSize:"medium",textAlign:"center"}}>Ziraat Bankası</p>
            <p style={{color:"red",fontSize:"medium",textAlign:"center"}}>Deniz ARLI</p>
            <p style={{color:"red",fontSize:"medium",textAlign:"center"}}>IBAN: TR 2500 0100 0211 5044 8987 5001</p>
          </div>

          }
        </div>
        <div style={{width:'100%',height:'500px',marginTop:'50px'}}>
          <img alt="" src="/img/puzzle.png" onClick={bclick} style={{
            objectFit:'contain',
            objectPosition:'center',
            width:'100%',
            height:'100%',
            cursor:'pointer'
            
          }}></img>
        </div>
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
  function bclick() {
    window.location.href="/bulmaca"
  }

}

