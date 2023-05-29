import { useState } from "react";

const Reminders = () => {

    const [remin, setRemin] = useState();
    const [data, setDate] = useState();

    const [rem, setrem] = useState([
        {
            remind:"Buy groceries",
            dat:"2023-05-21"
        },
        {
            remind:"Pay bills",
            dat:"2023-04-1"
        },{
            remind:"Meeting with clients",
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
                <input 
                    type="text"
                    placeholder="Enter a reminder"
                    onChange={(e)=>setRemin(e.target.value)}
                    required
                />

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