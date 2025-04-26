import clsx from "clsx";
import { useFormContext } from "react-hook-form";

type InputFieldProps = {
  name: string
  label?: string
  type?: string
  placeholder?: string,
  className?: string
}

export const InputField = ({ name, label, type = "text", placeholder, className = '' }: InputFieldProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  const error = errors[name]?.message as string | undefined

  return (
    <div className={clsx("flex flex-col gap-1", className)}>
      {label && <label htmlFor={name} className="font-semibold text-sm text-gray-500">{label}</label>}
      <input
        id={name}
        {...register(name)}
        type={type}
        placeholder={placeholder}
        className={`px-2 py-1 border text-stone-600 rounded ${error ? "border-red-500" : "border-gray-300"} focus:outline-none focus:ring-2 focus:border-(--blue-tkd) focus:ring-(--blue-tkd) transition duration-200`}
      />
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  )
}
