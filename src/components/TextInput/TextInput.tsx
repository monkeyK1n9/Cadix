
type InputProps = {
    name: string,
    inputHeading?: string,
    type?: string,
    value: string,
    onChange: (e: any) => void,
    placeholder?: string,
    isObligatory?: boolean,
    isError?: boolean,
    errorMessage?: string,
}

export default function TextInput(
    {
        name,
        inputHeading = "", 
        type = "text",
        value, 
        onChange, 
        placeholder, 
        isObligatory = false, 
        isError = false, 
        errorMessage, 
    }: InputProps) {
    
  return (
    <div
        className="flex flex-col flex-grow bg-white w-full"
    >
        <div
            className="flex"
        >
            <p className="font-title text-secondary">
                {inputHeading}
            </p>
            {isObligatory && <p className="text-error mb-0"><sup>*</sup></p>}
        </div>
        <input
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="border-2 rounded-lg border-info p-2 bg-none my-0 text-black2"
            type={type}
        />
        {isObligatory && isError && <p className="text-error mb-0" style={{fontSize: 12, textAlign: 'left', width: 300}}>{errorMessage}</p>}
    </div>
  )
}