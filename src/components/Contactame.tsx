import { useMutation } from "react-query"
import { postSendEmailContacto, SendEmailProps } from "../api"
import { useForm } from "react-hook-form";
import ErrorMessage from "./ui/ErrorMessage";
import toast from "react-hot-toast";

export default function Contactame({sectionRef}: {sectionRef: React.MutableRefObject<null>}) {

  const initialValues: SendEmailProps = {
    name: "",
    email: "",
    asunto: "",
    mensaje: ""
  }

  const { register, formState: { errors } , handleSubmit, reset } = useForm({ defaultValues: initialValues })

  const { mutate } = useMutation({
    mutationFn: postSendEmailContacto,
    onError: (error: Error) => {
      toast.error(error.message, {
        duration: 3000
      })
    }, 
    onSuccess: (data) => {
      toast.success(data, {
        duration: 3000
      })
    }
  });

  const handleContacto = (data: SendEmailProps) => {
    mutate(data),
    reset();
  }

  return (
    <div ref={sectionRef} className="md:px-4 z-30 lg:px-20 py-10">
      <h1 className="text-center text-[40px] text-primary mb-8">CONTACTAME</h1>
      <form className="max-md:mx-4 md:w-[80%] m-auto text-center" onSubmit={handleSubmit(handleContacto)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <input type="text" placeholder="Nombres y Apellidos" className="mb-2 w-full border-2 border-primary rounded-lg p-4 placeholder:text-primary outline-primary" 
              { ...register("name", {
                required: 'Nombres y Apellidos requeridos'
              }) }
            />
            {
              errors.name && (
                <ErrorMessage>{errors.name.message}</ErrorMessage>
              )
            }
          </div>
          <div>
            <input type="email" placeholder="Correo Electrónico" className="mb-2 w-full border-2 border-primary rounded-lg p-4 placeholder:text-primary outline-primary" 
            { ...register("email", {
              required: 'Email requerido',
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "E-mail no válido",
              }
            }) }
            />
            {
              errors.email && (
                <ErrorMessage>{errors.email.message}</ErrorMessage>
              )
            }
          </div>
          <div className="md:col-span-2">
            <input type="text" placeholder="Asunto" className="mb-2 w-full border-2 border-primary rounded-lg p-4 placeholder:text-primary outline-primary" 
            { ...register("asunto", {
              required: 'Asunto requerido'
            }) }
            />
            {
              errors.asunto && (
                <ErrorMessage>{errors.asunto.message}</ErrorMessage>
              )
            }
          </div>
          <div className="md:col-span-2">
            <textarea placeholder="Mensaje" className="w-full border-2 border-primary rounded-lg p-4 h-32 placeholder:text-primary outline-primary"
            { ...register("mensaje", {
              required: 'Mensaje requerido'
            }) }
            ></textarea>
            {
              errors.mensaje && (
                <ErrorMessage>{errors.mensaje.message}</ErrorMessage>
              )
            }
          </div>
        </div>
        <button type="submit" className="bg-primary text-white p-4 px-6 rounded-lg mt-5 hover:bg-primary-active transition-all">Enviar Mensaje</button>
      </form>
    </div>
  )
}
