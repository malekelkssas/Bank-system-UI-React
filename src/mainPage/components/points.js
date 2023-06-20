import { useState } from "react";
const Points = () => {

    const [pointsInput,setInpoints] = useState('');

    const [pointsarr, setpoints] = useState(
        [{
            points:'1000',
            cachBack:"$10.00"
        },
        {
            points:'2000',
            cachBack:"$10.00"
        },
        {
            points:'3000',
            cachBack:"$10.00"
        }]
    );

    

    const handlesubmit = (e) =>{
        e.preventDefault();
        let tmp = pointsarr;
        tmp.push({points:pointsInput,cachBack:"$10.00"});
        setpoints(tmp);
        setInpoints('');
        };
    return ( 
        <div className="createPoints">
            <form  onSubmit={handlesubmit}>
                <label> Points</label>
                <input 
                    type="number"
                    required
                    placeholder="Enter points to redeem"
                    onChange={e => setInpoints(e.target.value)}
                />
                <button>Redeem Points</button>
            </form>

            <div className="points">
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
            </div>
        </ div>
     );
}
 
export default Points;
