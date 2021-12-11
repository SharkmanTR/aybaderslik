export default function Karsilastir({bes}){
    return(
        <div>
            <select id="slc">
                {bes.map(b=>(
                    <option>{b.description}</option>
                ))}
            </select>
        </div>
    )
}
export async function getStaticProps() {
    const res = await fetch('https://api.nal.usda.gov/fdc/v1/foods/list?api_key=DEMO_KEY',{
        method:'GET',
        headers:{'Content-Type':'application/json'}
    });
    const bes = await res.json();
    console.log(bes.map(b=>b.description));
    console.log("bitti");
    return{
        props:{bes}
    }

}
