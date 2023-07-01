import { useEffect, useState } from "react";
const Points = () => {

    const [pointsInput,setInpoints] = useState('');
    const [pointsarr, setpoints] = useState(null);
    const [isPending, setisPending] = useState(true);
    const [submit, setsubmit] = useState(false);
    useEffect(()=>{
        setisPending(true);
        setTimeout(() => {
            fetch("http://localhost:8000/point").
        then(res =>{ return res.json()})
        .then(data =>{ 
            setisPending(false);
            setpoints(data);});
        }, 1000);
    },[submit]);

    

    const handlesubmit = (e) =>{
        e.preventDefault();
        setisPending(true);
        const po = {"points": pointsInput, "cachBack":"$10.00" };
        fetch("http://localhost:8000/point",{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(po)
        }).then(()=>
            {
                setpoints(null);
                setisPending(false);
                setsubmit(!submit);
                console.log('finish');}
        );
        setInpoints('');

        };
    return ( 
        <div className="createPoints">
            <form  onSubmit={handlesubmit}>
                <label> Points</label>
                <input 
                    type="number"
                    required
                    value={pointsInput}
                    placeholder="Enter points to redeem"
                    onChange={e => setInpoints(e.target.value)}
                />
                <button>Redeem Points</button>
            </form>
            {isPending && <div style={{width:"100%",marginTop:"5%",fontSize:"20px"}}>Loading...</div>}
            {pointsarr && <div className="points">
                <div className="points-redeem">
                        <div className="size-block">
                            <h2 className="points-redeem-h2">{ "points"} </h2>
                        </div>
                        <div className="size-block">
                            <h2 className="points-redeem-nor">{ "Cashback Amount" } </h2>
                        </div>
                </div>
            {
            pointsarr.map((item, index) =>(
                    <div className="points-redeem" key={index}>
                        <div className="size-block">
                        <h2 className="points-redeem-h2">{ item.points } </h2>
                        </div>
                        <div className="size-block">
                        <h2 className="points-redeem-nor">{ item.cachBack } </h2>
                        </div>
                    </div>
                ) )
            }
            </div>}
        </ div>
     );
}
 
export default Points;
