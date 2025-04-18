interface InputProps {
    setInput: (string : string) => void;
}
export default function TextChangeInput({setInput}: InputProps) {
    return (

        <input
        type="text"
        placeholder="Change"
        onChange={(e) => setInput(e.target.value)}
        ></input>
  
    )
    
}