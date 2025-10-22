
import { useFormik } from "formik";
import * as Yup from "yup";
import { useAuth } from "./useAuth";

const authSchema = Yup.object({
    email: Yup.string().email("E-mail inválido").required("Campo obrigatório"),
    password: Yup.string().min(6, "Mínimo de 6 caracteres").required("Campo obrigatório"),
})

const useAuthForm = () => {
    const { loginUser } = useAuth()
    return useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: authSchema,
        onSubmit: values => {
            loginUser(values)
        }
    })
}

export { useAuthForm };