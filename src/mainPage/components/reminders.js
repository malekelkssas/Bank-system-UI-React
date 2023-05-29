import { useState } from "react";

const Reminders = () => {

    const [remin, setRemin] = useState("Water Bill");
    const [data, setDate] = useState();

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
        setDate('');
        setRemin('');
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
                    onChange={(e)=>setDate(e.target.value)}
                    required
                />
                <button>Pay Bills</button>
            </form>
        
                <div className="blog-list">
                        {
                            
                         rem.map((item, index) =>(
                            <div className="Remin" key={index}>
                                <h2 style={{paddingRight:"25px"}}>{ item.remind } </h2>
                                <p style={{justifyItems:"end",marginRight:"50px"}}>{ item.dat } </p>
                        </div>
                            ) )
            
                        }
                </div>
        </div>
     );
}
 
export default Reminders;