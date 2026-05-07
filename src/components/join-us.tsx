import {Button} from "@/components/ui/button"
import {MessageCircle} from "lucide-react";
import React from "react";
import {Card} from "@/components/ui/card"

export const JoinUs = () => {
    return (
        <section id="chi-siamo" className="relative bg-white py-8 md:py-5 overflow-hidden">

            <div className="container relative z-10 mx-auto max-w-6xl px-6">
                <div className="flex flex-col lg:flex-row gap-16">

                    <div className="lg:w-1/2">
                        <span className="text-red-600 font-bold tracking-[0.2em] uppercase text-xs">
                            Unisciti a noi
                        </span>
                        <h2 className="mt-4 text-5xl md:text-6xl font-black text-slate-900 tracking-tighter">
                            ENTRA IN<br/>
                            <span className="text-red-600">  BBV</span>
                        </h2>
                        <p className="mt-6 text-slate-500 leading-relaxed">
                            Vuoi far parte dei Black Bulls? Scrivici per fissare un allenamento di prova!
                        </p>
                    </div>
                    <div className="lg:w-1/2">
                        <Card className="h-full">

                        </Card>
                    </div>
                </div>

            </div>
        </section>
    )
}