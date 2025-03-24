interface ButtonPrps {
    setInput: (string : string) => void;
}
export default function TextChangeInput({setInput}: ButtonPrps) {
    return (

        <input
        type="text"
        placeholder="Change"
        onChange={(e) => setInput(e.target.value)}
        ></input>
  
    )
    
}