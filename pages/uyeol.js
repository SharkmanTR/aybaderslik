import moment from 'moment';
import styles from '../components/Default/uyeol.module.css';
import Image from 'next/image';
import brkd from '../public/img/barkod.png';
import { useEffect } from "react";
import Head from 'next/head';
import cookies from 'js-cookie';


var md5 = require('md5');

export default function UyeOl() {
    const l=cookies.get("login")||"0";
    useEffect(()=>{
        if(l=="1"){
            window.location.href="/";
        }
    })
    return(
        <div className={styles.main}>
            <Head>
                <title>AYBA Derslik</title>
                <link rel="shourtcut icon" href={`/ico/Default.ico`}></link>
            </Head>
            <style jsx global>
            {`
            body{background-color: #dadada ;}
            `}
            </style>
            <div className={styles.mainright}>
                    <input id="txtemail" className={styles.input} type="email" required placeholder="E-posta adresiniz"></input>
                    <input id="txtpass" className={styles.input} type="password" required placeholder="Şifreniz"></input>
                    <input id="txtrpass" className={styles.input} type="password" required placeholder="Şifrenizi tekrar giriniz"></input>
                    <input id="txttel" className={styles.input} type="number" placeholder="Telefon numaranız"></input>
                    <select id="ddgs" className={styles.select} >
                        <option className={styles.option} value="0">Güvenlik sorunuzu seçiniz</option>
                        <option className={styles.option} value="1">İlk evcil hayvanınızın adı?</option>
                        <option className={styles.option} value="2">İlk telefonunuzu aldığınız yıl?</option>
                        <option className={styles.option} value="3">Mezun olduğunuz ilkokulun adı?</option>
                        <option className={styles.option} value="4">Çocukken en sevdiğiniz oyuncağınız?</option>
                        <option className={styles.option} value="5">Lisedeki okul numaranız?</option>
                        <option className={styles.option} value="6">En sevdiğiniz yemek?</option>
                    </select>
                    <input id="txtgc" className={styles.input} placeholder="Güvenlik sorunuzun cevabı"></input>
                    <input id="txtbarkod" className={styles.input} placeholder="Öğrenci belgenizin barkod numarası"></input>
                    <input id="txttc" className={styles.input} placeholder="TC kimlik numaranız" type="number"></input>
                    <input id="txtad" className={styles.input} placeholder="Adınız-soyadınız"></input>
                    <select id="dduni" className={styles.select}>
                        <option className={styles.option} value="0">Üniversitenizi seçiniz</option>
                        <option className={styles.option} value="aybu">Ankara Yıldırım Beyazıt Üniversitesi</option>
                        <option className={styles.option} value="adu">Aydın Adnan Menderes Üniversitesi</option>
                        <option className={styles.option} value="atilim">Atılım Üniversitesi</option>
                        <option className={styles.option} value="istanbulbilim">Demiroğlu Bilim Üniversitesi</option>
                        <option className={styles.option} value="kent">İstanbul Kent Üniversitesi</option>
                        <option className={styles.option} value="kapadokya">Kapadokya Üniversitesi</option>
                        <option className={styles.option} value="kkü">Kırıkkale Üniversitesi</option>
                        <option className={styles.option} value="lau">Lefke Avrupa Üniversitesi</option>
                        <option className={styles.option} value="sbu">Sağlık Bilimleri Üniversitesi</option>
                        <option className={styles.option} value="erbakan">Necmettin Erbakan Üniversitesi</option>
                        <option className={styles.option} value="nny">Nuh Naci Yazgan Üniversitesi</option>
                    </select>
                    <input id="txtono" className={styles.input} type="number" placeholder="Öğrenci numaranız"></input>
                    <select id="ddsinif" className={styles.select}>
                        <option className={styles.option} value="0">Sınıfınızı seçiniz</option>
                        <option className={styles.option} value="1">1. sınıf</option>
                        <option className={styles.option} value="2">2. sınıf</option>
                        <option className={styles.option} value="3">3. sınıf</option>
                        <option className={styles.option} value="4">4. sınıf</option>
                        <option className={styles.option} value="5">Mezun</option>
                        <option className={styles.option} value="6">Yüksek lisans</option>
                    </select>
                    <p className={styles.input} placeholder="27-12-1994">Doğum tarihiniz</p>
                    <input id="txtdtarihi" type="date" className={styles.input} placeholder="Doğum tarihiniz (Gün/Ay/Yıl)"></input>
                    <button className={styles.btn} onClick={kayitc}>Kayıt Ol</button>
                    <p className={styles.h2}>Kullanım şartlarını kabul ediyorum.</p>

            </div>
            <hr></hr>
            <div className={styles.mainleft}>
                <p className={styles.h1}>
                    1) Öğrenci belgesinin barkod numarasını nasıl edinebilirsin?
                </p>
                <p className={styles.h2}>E-devlet üzerinden &quot;Öğrenci Belgesi Sorgulama (Yükseköğretim Kurulu Başkanlığı)&quot; hizmetinden faydalanarak öğrenci belgenizi oluşturabilirsiniz.
Belgenizin sağ üst kısmında bulunan barkod numaranızı, kayıt formunda ilgili alana yazabilirsiniz.
Örnek barkod aşağıda gösterilmiştir.</p>
                <Image alt="" className={styles.Image} src={brkd} width={'10px'} height={'10px'}></Image>
                <p className={styles.h1}>2) TC kimlik numarana niye ihtiyaç duyuyoruz?</p>
                <p className={styles.h2}>Beslenme ve diyetetik öğrencisi olup olmadığını doğrulamak için e-devlet üzerinden &quot;Öğrenci Belgesi Doğrulama&quot; sistemini kullanmaktayız.
Doğrulamayı yapabilmek için TC kimlik numarana ihtiyaç duyuyoruz.
Merak etme TC kimlik numaran ve diğer tüm bilgilerin 3. şahıslarla paylaşılmamaktadır.</p>
                <p className={styles.h1}>3) Niçin kayıt olduğumda hesabımı inceliyorsunuz?</p>
                <p className={styles.h2}>Hesabını yalnızca ilk kez kayıt olduğunda inceliyoruz ve bu işlem en fazla 24 saat sürmektedir.
Mesleğimizin en önemli kaynaklarından birisi olan ders notlarımızın, başka meslekten olan kötü amaçlı kişilerin eline geçmemesi için bu incelemyi yapıyoruz.
Bu inceleme esnasında beslenme ve diyetetik bölümü öğrencisi olduğunu doğruladıktan sonra sistemi kullanımına açıyoruz.
Eğer beslenme ve diyetetik bölümünden değilseniz, ücretini ödemiş olsanız bile sisteme erişim sağlayamazsınız.</p>
                <p className={styles.h1}>Kullanım Şartları</p>
                <p className={styles.h2}>Sayın kullanıcı, aybaderslik.com internet sitesine hoş geldiniz.
                &quot;Kullanım Şartları&quot; siz değerli kullanıcılarımıza internet sitemizde yer alan bilgi ve hizmetlerin sağlanmasına ilişkin hükümleri düzenlemektedir.</p>
                <p className={styles.h2}>1. http://aybaderslik.com (Bundan sonra AYBA) internet sitesindeki ders dosyaları, değişim listeleri ve Diets Talks isimli dergi hariç tüm dökümanlar Deniz Arlı&quot;nın mülkiyetidir. Dökümanlar ve kullanıcı giriş bilgileri, başka şahıs ve kurumlarla paylaşılamaz veya kopyası alınamaz. Yukarıda belirtilenden bağımsız olarak size özel devamsızlık verilerinizin ve ders dosyalarınızın çıktısını alarak kişisel amaçlarla kullanabilirsiniz.</p>
                <p className={styles.h2}>2. AYBA, virüs vb. kötü amaçlı zararlı yazılımlardan arındırılmak için günümüz teknolojisinin imkanlarından faydalanmaktadır. Kullanıcılar nihai güvenliklerini sağlamaları için kendi virüs koruma sistemlerini temin etmeli ve gerekli korumayı sağlamakla yükümlüdür. Bu çerçevede kullanıcı, AYBA&quot;ya girmesi nedeniyle, kendi yazılım ve işletim sistemlerinde oluşacak tüm hata ve bunların doğrudan ve dolaylı sonuçlarından kendisinin sorumlu olduğunu kabul eder.</p>
                <p className={styles.h2}>3. AYBA, kendi takdirinde olmak üzere, sitenin içeriği dilediği zaman değiştirme, kullanıcılara sunulan herhangi bir hizmeti değiştirme haklarını saklı tutar. AYBA, kullanıcıların ödeme yapmadığı veya aboneliklerini sonlandırdıkları durumlarda kullanıcı verilerini silme ve aldıkları hizmeti sonlandırma hakkına sahiptir.</p>
                <p className={styles.h2}>4. AYBA&quot;da yer alan her türlü bilgi, resim, açıklama ve haber sadece tanıtım ve bilgi verme amaçlıdır. Kullanıcı hiçbir şekilde internet sitesinde yer alan bilgilerin hatalı olduğunu ya da bu bilgilere istinaden zarara uğradığı iddiasında bulunamaz.</p>
                <p className={styles.h2}>5. AYBA&quot;da bulunan hizmet bedelleri abonelik süresince sabittir. Abonelik yenileme işlemlerinde güncel fiyat baz alınır.</p>
                <p className={styles.h2}>6. AYBA&quot;nın sosyal medya hesapları ve iletişim bilgileri internet sitesinde yer almaktadır. Sahte hesaplar tarafından üretilen içerik ve gönderilen mesajlardan AYBA sorumlu değildir. Bu tarz hesaplarla kişisel bilgi paylaşılması durumunda kullanıcı sorumludur.</p>
                <p className={styles.h2}>7. Resmi makamlardan, kullanıcıya yönelik bir suç duyurusu ya da resmi soruşturma talebi gelmesi ve/veya kullanıcının AYBA sistemlerinin çalışmasına engel olacak ya da işleyişi değiştirecek herhangi bir elektronik sabotaj veya saldırı yaptığı tespit edilmesi halinde, AYBA, kullanıcının kimlik bilgilerini araştırma ve yasal mercilere bildirimde bulundurma hakkına sahiptir.</p>
                <p className={styles.h2}>8. Kullanıcılar, üyelik formunda yer alan kişisel bilgilerini doğru girmek zorundadır. Bu bilgilerin yanlış veya eksik girilmesi durumunda hizmetlerden tam olarak faydalanamayacaktır. Bu durumda doğacak sorunlardan kullanıcı sorumludur.</p>
                <p className={styles.h2}>9. AYBA internet sitesi barındırma haklarını gizli tutar.</p>
                <p className={styles.h2}>10. Kullanıcıların, satın aldıkları abonelikler tek kişinin kullanabileceği aboneliklerdir. Bu abonelikler başka kişiler tarafından kullanılamaz. Kullanılması durumunda meydana gelebilecek sorunlarda AYBA sorumlu değildir. Bunun tespit edilmesi durumunda kullanıcının hesabı AYBA tarafından erişime kısıtlanabilir.</p>
                <p className={styles.h2}>11. Öğrencilerin devamsızlıklarının bulunduğu sayfa resmi belge niteliği taşımamaktadır.</p>
                <p className={styles.h2}>12. Devamsızlık takibi ve yoklama sisteminin güvenliği için öğrenciler, sitenin çerezlari kullanmasına izin vermelidir. İzin vermedikleri durumda meydana gelecek olan hizmet aksamalarından kullanıcı sorumludur.</p>
                <p className={styles.h2}>13. AYBA, 27 Aralık 2021 tarihine kadar açık beta test sürecinde olacaktır. Test süreci esnasında, devamsızlık takibi, yoklama, diyet yazma ve ders dosyalarına erişim hizmetlerine erişimlerde kısa süreli aksamalar meydana gelebilir. Öğrencilerin ve öğretmenleri bu aksamalara karşı önlem almaları önerilir.</p>
                <p className={styles.h2}>14. AYBA, http://aybaderslik.com internet sitesinde, &quot;Kullanım Şartları&quot;nın herhangi bir maddesini bildirimde bulunmadan değiştirme, yenileme veya iptal etme hakkına sahiptir. Değitirilen, yenilenen veya yürürlükten kaldırılan her hüküm, &quot;Kullanım Sözleşmesi&quot;nin yayın tarihinde tüm kullanıcılar bakımından hüküm ifade etmektedir.</p>
                <p className={styles.h2}>15. AYBA&quot;ya üye olan herkes &quot;Kullanım Sözleşmesi&quot;ni kabul etmiş sayılacaktır.</p>
                <p className={styles.h2}>16. AYBA&quot;dan sadece beslenme ve diyetetik lisans ve yüksek lisans öğrencileri, diyetisyenler ve beslenme ve diyetetik bölümü bünyesinde olan öğretim görevlileri, öğretim üyeleri ve araştırma görevlileri faydalanabilir. Bu kişiler dışında abonelik almak isteyen kişilerin hesapları aktif edilmeyerek erişime kısıtlanacaktır.</p>
                <p className={styles.h2}>17. İşbu &quot;Kullanım Şartları&quot; 03.08.2021 tarihinden itibaren geçerli olup 17 maddeden oluşmaktadır.</p>
            </div>
            
        </div>
    )
    async function kayitc() {
        let email = document.getElementById("txtemail").value;
        let pass = document.getElementById("txtpass").value;
        let rpass = document.getElementById("txtrpass").value;
        let tel = document.getElementById("txttel").value;
        let gs = document.getElementById("ddgs").value;
        let gc =document.getElementById("txtgc").value;
        let barkod = document.getElementById("txtbarkod").value;
        let tc = document.getElementById("txttc").value;
        let ad = document.getElementById("txtad").value;
        let uni = document.getElementById("dduni").value;
        let ono = document.getElementById("txtono").value;
        let dtarihi=document.getElementById("txtdtarihi").value;
        let sinif = document.getElementById("ddsinif").value;
        let bitg=moment().format("DD");
        let bita=moment().format("MM");
        let bity=moment().add(1,"y").format("YYYY");
        if(email=="" || email==null){
            alert("Lütfen e-posta adresinizi giriniz.");
        }else if (pass=="" || pass==null){
            alert("Lütfen şifrenizi giriniz.");
        }else if(rpass=="" || rpass==null){
            alert("Lütfen şifrenizin tekrarını giriniz.");
        }else if(tel=="" || tel==null){
            alert("Lütfen telefon numaranızı giriniz.");
        }else if(gs=="0" || gs==null){
            alert("Lütfen güvenlik sorunuzu seçiniz.");
        }else if(gc==""||gc==null){
            alert("Lütfen güvenlik sorunuzun cevabını giriniz.");
        }else if(barkod==""||barkod==null){
            alert("Lütfen öğrenci belgenizin barkod numarasını giriniz.");
        }else if(tc==""|| tc==null){
            alert("Lütfen TC kimlik numaranızı giriniz.");
        }else if(ad==""||ad==null){
            alert("Lütfen adınızı ve soyadınızı giriniz.");
        }else if(uni=="0" || uni==null){
            alert("Lütfen üniversitenizi seçiniz.");
        }else if(ono==""||ono==null){
            alert("Lütfen öğrenci numaranızı giriniz.");
        }else if(sinif=="0"||sinif==null){
            alert("Lütfen sınıfınızı seçiniz.");
        }else if(dtarihi=""||dtarihi==null){
            alert("Lütfen doğum tarihinizi giriniz.");
        }else {
            if(pass!=rpass){
                alert("Girdiğiniz şifreleriniz uyuşmamaktadır.")
            }else{
                const gon = await fetch("./api/uyeol",{
                    method:"POST",
                    headers:{"Content-Type":"application/json"},
                    body:JSON.stringify({
                        email1:email,
                        sifre1:md5(pass),
                        adsoyad1:ad,
                        dtarihi1:document.getElementById("txtdtarihi").value,
                        tel1:tel,
                        tc1:tc,
                        barkod1:barkod,
                        ono1:ono,
                        paket1:"12",
                        bitg1:bitg,
                        bita1:bita,
                        bity1:bity,
                        uni1:uni,
                        sinif1:sinif
                    })
                });
                const res = await gon.json();
                if(res["durum"]=="x"){
                    alert("İşlem başarısız. Lütfen tekrar deneyiniz.")
                }else if (res==null){
                    alert("İşlem Başarısız. Lütfen tekrar deneyiniz.")
                }else{
                    alert("Merhaba "+res["adsoyad"]+". Bizi tercih ettiğin için teşekkür ederiz. Giriş yapmadan önce senin beslenme ve diyetetik öğrencisi olup olmadığını incelememiz gerek. Bu işlem en fazla 24 saat sürmektedir.");
                }
                
            }
        }
    }
}