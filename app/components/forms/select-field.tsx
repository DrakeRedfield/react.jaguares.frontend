import { useFormContext } from "react-hook-form";

type SelectFieldProps = {
  name: string
  label?: string
  options: { value: string; label: string }[]
}

export const SelectField = ({ name, label, options }: SelectFieldProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  const error = errors[name]?.message as string | undefined

  return (
    <div className="flex flex-col gap-1">
      {label && <label htmlFor={name} className="font-semibold text-sm text-gray-500">{label}</label>}
      <select
        id={name}
        {...register(name)}
        className={`px-2 py-1 text-stone-600 border rounded ${error ? "border-red-500" : "border-gray-300"}`}
      >
        <option value="">Seleccionar...</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  )
}
