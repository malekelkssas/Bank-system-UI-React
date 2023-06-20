const fetchData = (choise) => {
    const buttonData = [
    {
      buttonText: "Open Account",
      formFields: [
        { label: "Name", type: "text" },
        { label: "National ID", type: "text" },
        { label: "Phone Number", type: "text" },
        { label: "Date of Birth", type: "date" },
        {label:"Address", type:"textfield"}, //may case error
        {label:"Nationality", type:"text"},
        {label:"Job Title", type:"text"},
      ]
    },
    {
      buttonText: "Apply for Credit Card",
      formFields: [
        { label: "Name", type: "text" },
        { label: "Credit Card Number", type: "text" },
        { label: "National ID", type: "text" },
        { label: "Phone Number", type: "text" },
      ]
    },
    {
      buttonText: "Apply for Loan",
      formFields: [
        { label: "Name", type: "text" },
        { label: "Bank Account Number", type: "text" },
        { label: "what is the loan for", type: "text" },
        { label: "National ID", type: "text" },
        { label: "Phone Number", type: "text" },
      ]
    },
    {
      buttonText: "Transfer Money",
      formFields: [
        { label: "Bank Account Number", type: "text" },
        { label: "Amount", type: "number" },
    ]
    },
  ];

  return buttonData[choise];
}
 
export default fetchData;