import { useFormContext } from "react-hook-form";

type TextareaFieldProps = {
  name: string
  label?: string
  placeholder?: string
}

export const TextareaField = ({ name, label, placeholder }: TextareaFieldProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  const error = errors[name]?.message as string | undefined

  return (
    <div className="flex flex-col gap-1">
      {label && <label htmlFor={name} className="font-semibold text-sm">{label}</label>}
      <textarea
        id={name}
        {...register(name)}
        placeholder={placeholder}
        className={`p-2 border rounded text-stone-600 font-bold ${error ? "border-red-500" : "border-gray-300"}`}
      />
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  )
}
