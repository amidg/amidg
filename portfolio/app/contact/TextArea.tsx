interface TextAreaProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  type?: string;
  error?: boolean;
  errorMessage?: string;
}
const TextArea = ({
  id,
  name,
  label,
  placeholder,
  error,
  errorMessage,
  ...props
}: TextAreaProps) => {
  return (
    <div className="mt-4 block">
      <label className="block mb-2 text-sm font-medium text-text" htmlFor={id}>
        {label}
      </label>
      <textarea
        {...props}
        id={id}
        name={name}
        rows={5}
        placeholder={placeholder}
        className="block p-2.5 w-full text-sm text-text bg-[#262F45] rounded-md border border-main focus:border focus:border-[#7AA0F7] focus:outline-none focus:bg-[#303B58]"
      ></textarea>
      {error && <p className="mt-2 text-sm text-pink-600">*{errorMessage}</p>}
    </div>
  );
};
export default TextArea;
