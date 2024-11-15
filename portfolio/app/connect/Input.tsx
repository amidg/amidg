interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  error?: boolean;
  errorMessage?: string;
}
const Input = ({
  id,
  name,
  label,
  placeholder,
  error = false,
  errorMessage = "",
  ...props
}: InputProps) => {
  return (
    <div className="mt-4 block">
      <label className="block mb-2 text-sm font-medium text-text dark:text-gray-300" htmlFor={id}>
        {label}
      </label>
      <input
        {...props}
        type="text"
        id={id}
        name={name}
        placeholder={placeholder}
        className="shadow-sm bg-[#262F45] border border-main focus:border focus:bg-[#303B58] focus:border-[#7AA0F7] text-text text-sm rounded-md focus:outline-none block w-full p-2.5"
      />
      {error && <p className="mt-2 text-sm text-pink-600">*{errorMessage}</p>}
    </div>
  );
};
export default Input;
