import type { Metadata } from "next";

export const metadata:Metadata = {
 title: 'About Title Cristobal Hiza',
 description: 'About Description Cristobal Hiza Next Js App',
};

export default function AboutPage(){
    return (
            <span className="text-4xl">About Page</span>
    )
}