import { useState } from 'react';

const Bills = () => {

    const [amountval, setAmount] = useState('');
    const [selected, setSelected] = useState('');
    const [billArr, setBill] = useState(
        [{
            Bill:'Bill1',
            Amount:"$10.00"
        },
        {
            Bill:'Bill2',
            Amount:"$10.00"
        },
        {
            Bill:'Bill3',
            Amount:"$10.00"
        }]
    );

    const handlesubmit = (e)=>{
        e.preventDefault();
        console.log("i am here");
        let tmp = billArr;
        tmp.push({Bill:selected,Amount:"$"+parseFloat(amountval)});
        setBill(tmp);
        setAmount("");
    }

    

    


    return ( 
        <div className="createPoints">
                <form  onSubmit={handlesubmit}>
                <label>Select Bill</label>
                <select id="bill-select" name="bill-select" onChange={e => setSelected(e.target.value)}>
                    <option value="bill-1">Water Bill - $100.00</option>
                    <option value="bill-2">Electricity Bill - $50.00</option>
                    <option value="bill-3">Phone Bill - $70.00</option>
                </select>

                <label>Payment Amount</label>
                <input 
                    type="number"
                    placeholder="Enter payment amount"
                    onChange={(e)=>setAmount(e.target.value)}
                    required
                />
                <button>Pay Bills</button>
            </form>
        
                <div className="main-block">
                    <div className="Remin">
                        <div className="size-block">
                                <h2 className="points-redeem-h2">{"Bill"} </h2>
                        </div>
                        <div className="size-block">
                            <p  className="points-redeem-nor">{ "Amount" } </p>
                        </div>
                    </div>
                    
                        {
                            
                         billArr.map((item, index) =>(
                            <div className="Remin" key={index}>
                                <div className="size-block">
                                    <h2 className="points-redeem-h2">{ item.Bill } </h2>
                                </div>
                                <div className="size-block">
                                    <p className="points-redeem-nor">{ item.Amount } </p>
                                </div>
                            </div>
                            ) )
            
                        }
                    
                </div>
        </div>
     );
}
 
export default Bills;