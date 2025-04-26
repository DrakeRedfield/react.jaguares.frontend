import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate, useParams } from "react-router";
import Card from "~/components/card";
import { DatePickerField } from "~/components/forms/datepicker-field";
import { InputField } from "~/components/forms/input-field";
import { SelectField } from "~/components/forms/select-field";
import { useEffect, useMemo } from "react";

const schema = z.object({
  name: z.string().min(3, "El nombre debe tener al menos 3 caracteres"),
  lastName: z.string().min(3, "El apellido debe tener al menos 3 caracteres"),
  grade: z.string().nonempty("Debe seleccionar un grado"),
  doujang: z.string().nonempty("Debe seleccionar un dojang"),
  birthdate: z.date({
    required_error: "La fecha es requerida",
    invalid_type_error: "Fecha inválida",
  }),
  registrationDate: z.date({
    required_error: "La fecha es requerida",
    invalid_type_error: "Fecha inválida",
  })
});
type FormValues = z.infer<typeof schema>;

const grades = [
  { value: "1", label: "10 Kup" },
  { value: "2", label: "9 Kup" },
  { value: "3", label: "8 Kup" },
]

const dojangs = [
  { value: "1", label: "Lomas Verdes" },
]

const Student = () => {
  const navigate = useNavigate();
  const { studentId } = useParams<{ studentId: string }>();
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      lastName: "",
      grade: "",
      doujang: "",
    },
  });

  const student = useMemo(() => {
    return studentId
      ? { id: 1, name: "Juan", lastName: "Pérez 1", grade: '1', doujang: '1', birthdate: '2000/05/09', registrationDate: '2015/05/09' }
      : null;
  }, [studentId]);

  useEffect(() => {
    if (student) {
      form.reset({
        name: student.name,
        lastName: student.lastName,
        grade: student.grade,
        doujang: student.doujang,
        birthdate: student.birthdate ? new Date(student.birthdate) : undefined,
        registrationDate: student.registrationDate ? new Date(student.registrationDate) : undefined
      });
    }
  }, [student, form]);

  const onSubmit = form.handleSubmit((data) => {
    console.log("Formulario enviado", data)
  })

  return (
    <div className="p-(--container-padding)">
      <Card size="xl" className="mx-auto">
        <Card.Title>
          <div className="grid gap-2 grid-cols-[auto_1fr]">
            <button className="text-stone-500 px-2 py-1 rounded w-fit cursor-pointer hover:bg-stone-200" onClick={() => navigate(-1)}><AiOutlineArrowLeft /></button>
            <span className="text-stone-600">{studentId? 'Editar':'Agregar'} Estudiante</span>
          </div>
        </Card.Title>
        <Card.Body className="w-full grid gap-4 grid-cols-1">
          <FormProvider {...form}>
            <form onSubmit={onSubmit} className="grid gap-6 lg:grid-cols-2">
              <InputField name="name" label="Nombre" placeholder="Ingrese un nombre..." />
              <InputField name="lastName" label="Apellido" placeholder="Ingrese un apellido..." />
              <SelectField name="grade" label="Grado" options={grades} />
              <SelectField name="doujang" label="Escuela" options={dojangs} />
              <DatePickerField name="birthdate" label="Fecha de nacimiento" required />
              <DatePickerField name="registrationDate" label="Fecha de ingreso" required />
              <div></div>
              <button type="submit" className="bg-(--blue-tkd) text-white px-2 py-1 rounded">
                {studentId ? 'Editar' : 'Registrar'}
              </button>
            </form>
          </FormProvider>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Student;