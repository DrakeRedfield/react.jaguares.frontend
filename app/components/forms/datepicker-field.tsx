// components/form/DatePickerField.tsx
import { useFormContext, Controller } from "react-hook-form"
import DatePicker from "react-datepicker"
import clsx from "clsx"
import "react-datepicker/dist/react-datepicker.css";

type DatePickerFieldProps = {
  name: string
  label?: string
  placeholder?: string
  required?: boolean
}

export const DatePickerField = ({
  name,
  label,
  placeholder,
  required,
}: DatePickerFieldProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext()

  const error = errors[name]?.message as string | undefined

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={name} className="block font-semibold text-sm mb-1 text-gray-500">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <DatePicker
            id={name}
            placeholderText={placeholder}
            selected={field.value}
            onChange={(date) => field.onChange(date)}
            dateFormat="yyyy-MM-dd"
            className={clsx(
              "w-full border px-2 py-1 rounded focus:outline-none focus:ring-2",
              error
                ? "border-red-500 focus:ring-red-300"
                : "border-gray-300 focus:ring-blue-300"
            )}
          />
        )}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  )
}
