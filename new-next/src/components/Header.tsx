interface HeaderPrompt {
    text: string;

}
export default function ChangeHeader({text}: HeaderPrompt) {

    return (
        <>
        <h1 className="text-7xl">Hello!</h1>
        <p>Hello this is a text.</p>
        <div className="bg-red-500 p-4">This is a div</div>
        <p>{text} Is my new text</p>
    </>
    )
}