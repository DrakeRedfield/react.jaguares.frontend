import { useMutation } from "@apollo/client";
import { useState, type FormEvent } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { LOGIN_USER } from "~/graphql/mutations/auth";

export default function Login() {
  const [loginUser, { data, loading, error }] = useMutation(LOGIN_USER);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage('')
    const form: any = e.target;
    const formData = new FormData(form);
    const { email, password } = Object.fromEntries(formData.entries());
    if(email && password) {
      loginUser({ variables: { email, password } })
        .then((resp) => {
          console.log({resp})
        })
        .catch((err) => {
          if (err?.message.includes('Invalid credentials')) {
            setErrorMessage('Correo o contraseña erroneo.');
          } else {
            setErrorMessage('Error: Contacte con un administrador.')
          }
        })
    }
  }

  return <>
    <main className="min-h-screen grid place-content-center bg-(--background-site)">
      <div className="p-10 text-white w-[20rem] md:w-[25rem]">
        <form onSubmit={handleSubmit}>
          <AiOutlineUser className="w-[4rem] h-auto m-auto" />
          <p className="text-[2rem] font-bold text-center">Bienvenido</p>
          <div className="mt-8">
            <div className="relative">
              <input type="text" name="email" id="email" className="block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-(--blue-site) peer" placeholder=" " />
              <label htmlFor="email" className="absolute text-sm text-white duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-(--background-site) px-2 peer-focus:px-2 peer-focus:text-(--blue-site) peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                Usuario
              </label>
            </div>
          </div>
          <div className="mt-5">
            <div className="relative">
              <input type="password" name="password" id="password" className="block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-(--blue-site) peer" placeholder=" " />
              <label htmlFor="password" className="absolute text-sm text-white duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-(--background-site) px-2 peer-focus:px-2 peer-focus:text-(--blue-site) peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                Contraseña
              </label>
            </div>
          </div>
          <div className="mt-8 align-self-center w-full text-center">
            <button disabled={loading} type="submit" className="cursor-pointer hover:bg-(--blue-site) px-5 py-2 rounded-sm duration-300">{
              loading ? 'Cargando...' : 'Iniciar Sesión'
              }</button>
          </div>
          {errorMessage && <div className="bg-red-400 px-4 py-2 mt-4">{errorMessage}</div>}
        </form>
      </div>
    </main>
  </>
}