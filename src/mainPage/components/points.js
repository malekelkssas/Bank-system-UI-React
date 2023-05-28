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

    const complete = (str) =>{
        while(str.length != 4){
            str += " ";
        }
        return str;
    }

    const handlesubmit = (e) =>{
        e.preventDefault();
        let tmp = pointsarr;
        tmp.push({points:complete(pointsInput),cachBack:"$10.00"});
        setpoints(tmp);
        setInpoints('');
        console.log("here",pointsarr);
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
            <div className="blog-list">
                <div className="blog-preview">
                        <h2>{ "points"} </h2>
                        <p  style={{paddingRight:"1000px"}}>{ "Cashback Amount" } </p>
                    </div>
            {
            pointsarr.map((item, index) =>(
                    <div className="blog-preview" key={index}>
                        <h2 style={{paddingRight:"25px"}}>{ item.points } </h2>
                        <p style={{justifyItems:"end"}}>{ item.cachBack } </p>
                    </div>
                ) )
            }
        </div>
        </ div>
     );
}
 
export default Points;
