const Form = () => {
    return ( 
        <div className="neon-border">
      <form className="create" onSubmit={() =>{}}>
                <label> User name</label>
                <input 
                    type="text"
                    required
                />
                <label> Password</label>
                <input 
                type="password"
                    required
                >
                </input>
                <button> Log in</button>
            </form>
    </div>
     );
}
 
export default Form;