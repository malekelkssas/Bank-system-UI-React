import { useState } from "react";

const Reminders = () => {

    const [remin, setRemin] = useState("Water Bill");
    const [data, setDate] = useState("mm/dd/yyyy");
    const [rem, setrem] = useState([
        {
            remind:"gas bills",
            dat:"2023-05-21"
        },
        {
            remind:"water bills",
            dat:"2023-04-1"
        },{
            remind:"electricity",
            dat:"2020-10-1"
        },
    ])

    const handlesubmit = (e)=>{
        e.preventDefault();
        let tmp = rem;
        tmp.push({remind:remin,dat:data});
        setrem(tmp);
        setDate("mm/dd/yyyy");
    }

    return ( 
        <div className="createPoints">
                <form  onSubmit={handlesubmit}>
                <label>Reminder</label>
                <select id="bill-select" name="bill-select" onChange={e => setRemin(e.target.value)}>
                    <option value="Water Bill">Water Bill</option>
                    <option value="Electricity Bill">Electricity Bill</option>
                    <option value="Phone Bill">Phone Bill</option>
                    <option value="gas Bill">gas Bill</option>
                </select>
                

                <label>Date</label>
                <input 
                    type="date"
                    placeholder="Enter payment amount"
                    value={data}
                    onChange={(e)=>setDate(e.target.value)}
                    required
                />
                <button>Pay Bills</button>
            </form>
        
                <div className="main-block">
                        {
                            
                         rem.map((item, index) =>(
                            <div className="Remin" key={index}>
                                <div className="size-block">
                                    <h2 className="points-redeem-h2">{ item.remind } </h2>
                                </div>
                                <div className="size-block">
                                <h1 className="points-redeem-nor">{ item.dat } </h1>
                                </div>
                        </div>
                            ) )
            
                        }
                </div>
        </div>
     );
}
 
export default Reminders;