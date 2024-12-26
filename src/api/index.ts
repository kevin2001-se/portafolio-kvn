import axios, { isAxiosError } from "axios"

export type SendEmailProps = {
    name: string;
    email: string;
    asunto: string;
    mensaje: string;
}

export const postSendEmailContacto = async (formData: SendEmailProps) => {
    try {
        
        const url = `${import.meta.env.VITE_API_URL}/sendEmail`;
        const { data } = await axios.post(url, formData);
        return data;

    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}