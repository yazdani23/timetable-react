

function Input({type,placeholder,value}) {
    // const [inputValue,setInputValue]= useState("")

    const inputHolder = (e)=>{
        checkTypeOfInput(e.target.value,type);
        // setInputValue(e.target.value)
        value(e.target.value) ;
    }

   const checkTypeOfInput=(value,type)=>{
    //    if(type === "email") validateEmail(value)
    //    else if(type === "email") validatePassword(value)
    //    else if(type === "email") validateSecurityNR(value)
    //    else if(type === "email") validateName(value)
   };


    return(
        <div className="form-group fone mt-2">
             <input type={type} placeholder={placeholder} className="form-control" onChange={inputHolder}/>
        </div>
    )
    
}

export default Input;