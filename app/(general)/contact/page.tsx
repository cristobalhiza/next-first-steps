import type { Metadata } from "next";

export const metadata:Metadata = {
 title: 'Contact Page',
 description: 'Página de Contacto',
};

export default function ContactPage(){
    return (
        <>
            <span className="text-5xl">Contact Us</span>
        </>
    )
}