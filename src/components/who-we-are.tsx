import {Card} from "@/components/ui/card"
import React from "react";

export const WhoWeAre = () => {
    return (
        <section id="chi-siamo" className="relative bg-white py-8 md:py-32 overflow-hidden">

            <div className="container relative z-10 mx-auto max-w-6xl px-6">
                <div className="flex flex-col lg:flex-row gap-16">

                    <div className="lg:w-1/2">
                        <span className="text-red-600 font-bold tracking-[0.2em] uppercase text-xs">
                          Chi siamo
                        </span>
                        <h2 className="mt-4 text-5xl md:text-6xl font-black text-slate-900 tracking-tighter">
                            BLACK BULLS <br/>
                            <span className="text-red-600">  VOLLEY</span>
                        </h2>
                        <div className="mt-10 space-y-8   hidden sm:block">
                            <Card
                                className="rounded-3xl   border-red-500/15 bg-linear-to-br from-red-50 to-white p-8 ">
                                <p className="text-sm font-semibold uppercase tracking-[0.28em] mb-2 text-red-500">
                                    Mission</p>
                                <h3 className="mb-4 text-2xl font-semibold text-slate-900">Crescere attraverso lo sport</h3>
                                <p className="leading-7 text-sm font-light text-slate-700 md:text-base">
                                    La nostra mission è far crescere atleti e persone attraverso lo sport, creando un
                                    ambiente serio,
                                    inclusivo e competitivo dove impegno, rispetto e lavoro di squadra siano al centro del
                                    nostro percorso
                                    formativo.
                                </p>
                            </Card>
                            <Card
                                className="rounded-3xl border-slate-200 bg-slate-50 p-8 ">
                                <p className="text-sm font-semibold uppercase tracking-[0.28em] mb-2 text-red-500">Vision</p>
                                <h3 className="mb-4 text-2xl font-semibold text-slate-900">Un riferimento per il
                                    territorio</h3>
                                <p className=" leading-7 text-sm font-light text-slate-700 md:text-base">
                                    La nostra visione è di diventare un’associazione di riferimento nella pallavolo
                                    giovanile e agonistica
                                    sul territorio in cui operiamo.
                                </p>
                            </Card>
                        </div>
                    </div>
                    <div className="lg:w-1/2">
                        <Card
                            className="rounded-3xl  h-full  bg-white p-8   md:p-10">

                            <div className="space-y-5  leading-8 text-sm font-light text-slate-700 md:text-base">
                                <p>
                                    Black Bulls Volley è <span className="font-bold">un’associazione sportiva di pallavolo a Cologno Monzese</span>,
                                    attiva nel
                                    <span className="font-bold"> settore
                                giovanile</span> e nella partecipazione a <span className="font-bold">campionati di pallavolo</span> a
                                    livello regionale,
                                    provinciale e
                                    giovanile.
                                </p>

                                <p>
                                    Il progetto nasce dalla passione per la pallavolo e dalla volontà di creare un ambiente
                                    strutturato,
                                    formativo e competitivo, dove atleti e staff lavorano ogni giorno per crescere dentro e
                                    fuori dal
                                    campo.
                                </p>

                                <p>
                                    L’attività è di tipo <span className="font-bold">agonistico giovanile</span>, con
                                    un’attenzione particolare allo sviluppo
                                    tecnico, alla
                                    crescita personale e al percorso sportivo degli atleti.
                                </p>

                                <p className="text-slate-900">
                                    Club Black Bulls Volley è una realtà riconosciuta sul territorio di Cologno Monzese.
                                </p>
                            </div>
                        </Card>
                        <div className="mt-10 space-y-8 block sm:hidden">
                            <Card
                                className="rounded-3xl   border-red-500/15 bg-linear-to-br from-red-50 to-white p-8 ">
                                <p className="text-sm font-semibold uppercase tracking-[0.28em] mb-2 text-red-500">
                                    Mission</p>
                                <h3 className="mb-4 text-2xl font-semibold text-slate-900">Crescere attraverso lo sport</h3>
                                <p className="leading-7 text-sm font-light text-slate-700 md:text-base">
                                    La nostra mission è far crescere atleti e persone attraverso lo sport, creando un
                                    ambiente serio,
                                    inclusivo e competitivo dove impegno, rispetto e lavoro di squadra siano al centro del
                                    nostro percorso
                                    formativo.
                                </p>
                            </Card>
                            <Card
                                className="rounded-3xl border-slate-200 bg-slate-50 p-8 ">
                                <p className="text-sm font-semibold uppercase tracking-[0.28em] mb-2 text-red-500">Vision</p>
                                <h3 className="mb-4 text-2xl font-semibold text-slate-900">Un riferimento per il
                                    territorio</h3>
                                <p className=" leading-7 text-sm font-light text-slate-700 md:text-base">
                                    La nostra visione è di diventare un’associazione di riferimento nella pallavolo
                                    giovanile e agonistica
                                    sul territorio in cui operiamo.
                                </p>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </section>

)
} 