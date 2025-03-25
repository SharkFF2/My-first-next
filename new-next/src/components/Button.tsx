interface ButtonProps {
    input: string | null;
    setText: (string : string) => void;
}
export default function ButtonToChange({input, setText}: ButtonProps) {


    return (

        <button className="m-4 w-25 h-25 bg-blue-400" onClick={
            () => {
            input ?  setText(input) : setText("Fuck you AI")
            }
        } >Button</button>
    )
}
