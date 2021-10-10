

const Email=()=>{
    return(
        <div>
            
        </div>
    )
}
export const getServerSideProps = async(contex)=>{
    const nemail = await contex.params.xemail;

    return{
        props:{nemail}
    }
}
export function btnsifreclick(nemail){
    let xsifre = document.getElementById("txtsifre").value;
    
    window.location.href='/girisyap/'+nemail+"/"+xsifre
}
export default Email