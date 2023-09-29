interface TextProps {
  label: string;
  value: string;
  setValue: (value: string) => void;
  labelText: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
}

const Text = ({
  label,
  value,
  setValue,
  labelText,
  placeholder,
  type,
  required,
  disabled,
  className,
}: TextProps) => {
  return (
    <div
      className={`border border-gray-200 dark:border-gray-800 flex items-center w-1/2 ${
        className || ''
      }`}
    >
      <label htmlFor={label} className="bg-gray-200 dark:bg-gray-800 p-2 w-1/3">
        {labelText}
      </label>
      <input
        className="p-2 w-2/3"
        type={type ? type : 'text'}
        id={label}
        value={value}
        placeholder={placeholder || undefined}
        disabled={disabled || undefined}
        onChange={e => setValue(e.target.value)}
        {...(required ? { required: true } : {})}
      />
    </div>
  );
};

export default Text;
