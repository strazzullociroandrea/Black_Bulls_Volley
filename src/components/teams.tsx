import {Card, CardContent, CardTitle} from "@/components/ui/card";
import {ArrowUpRight, Trophy, Dumbbell, Calendar} from "lucide-react"
import {Separator} from "@/components/ui/separator";


const teams = [
    {
        image: "",
        name: "1° DIVISIONE MASCHILE",
        days: "2 Allenamenti settimanali",
        math: "Gare infrasettimanali",
        calendar: "https://www.sol.milano.federvolley.it/calendarioris/1001044/2025"
    },
    {
        image: "",
        name: "2° DIVISIONE MASCHILE",
        days: "2 Allenamenti settimanali",
        math: "Gare nel weekend",
        calendar: "https://www.sol.milano.federvolley.it/calendarioris/1001048/2025"
    },
    {
        image: "",
        name: "3° DIVISIONE FEMMINILE",
        days: "2 Allenamenti settimanali",
        math: "Gare infrasettimanali",
        calendar: "https://www.sol.milano.federvolley.it/calendarioris/1001053/2025"
    },
    {
        image: "",
        name: "UNDER 15 MASCHILE",
        days: "2 Allenamenti settimanali",
        math: "Gare nel weekend",
        calendar: "https://volley.pgsmilano.org/calendari"
    },
    {
        image: "",
        name: "UNDER 15 FEMMINILE",
        days: "2 Allenamenti settimanali",
        math: "Gare nel weekend",
        calendar: "https://ivl.usacli.it/CalendarioView?girone_id=null&territorio_id=3&campionato_id=null&inizio_stagione=2025-09-01T00:00:00.000Z&fine_stagione=2026-08-31T00:00:00.000Z&societa_id=156&squadra_id=1334"
    },
    {
        image: "",
        name: "UNDER 12",
        days: "2 Allenamenti settimanali",
        math: "Gare nel weekend",
        calendar: "https://volley.pgsmilano.org/calendari"
    }
]

export const Teams = () => {
    return (
        <section id="squadre" className="relative bg-white py-8 md:py-32 overflow-hidden">

            <div className="container relative z-10 mx-auto max-w-6xl px-6">
                <div className="flex flex-col lg:flex-row gap-16">

                    <div className="lg:w-1/3">
                        <span className="text-red-600 font-bold tracking-[0.2em] uppercase text-xs">
                          Stagione corrente
                        </span>
                        <h2 className="mt-4 text-5xl md:text-6xl font-black text-slate-900 tracking-tighter">
                            LE NOSTRE<br/>
                            <span className="text-red-600">SQUADRE</span>
                        </h2>
                        <p className="mt-6 text-slate-500 leading-relaxed">
                            Scopri tutte le squadre Black Bulls Volley.
                        </p>

                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-10">
                    {
                        teams.map((team, i) => (
                            <Card key={i}
                                  className="h-110 group rounded-4xl p-4 cursor-pointer bg-white border border-slate-200 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-red-100">
                                <div className="relative w-full h-52 flex items-center">
                                    {team.image !== "" ? (
                                        <img
                                            src={team.image}
                                            alt={team.name}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                    ) : (
                                        <div className="p-8 w-full h-full">
                                            <div className="p-4 w-fit rounded-2xl bg-white text-red-800 shadow-sm transition-colors group-hover:text-red-600 group-hover:bg-red-50">
                                                <Trophy className="w-8 h-8" />
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <CardTitle>
                                    <h3 className="ml-4 mt-15 text-xl font-bold text-slate-900 mb-2">{team.name}</h3>
                                </CardTitle>
                                <CardContent>
                                    <div className="space-y-3 mb-7">
                                        <div className="flex items-center gap-3 text-sm text-slate-600">
                                            <Dumbbell size={16} className="text-red-500 shrink-0"/>
                                            <span>{team.days}</span>
                                        </div>
                                        <div className="  flex items-center gap-3 text-sm text-slate-600">
                                            <Calendar size={16} className="text-red-500 shrink-0"/>
                                            <span>{team.days}</span>
                                        </div>
                                    </div>
                                    <Separator/>
                                    <a href={team.calendar} target="_blank" rel="noopener noreferrer"
                                       className="w-full h-auto mb-2 justify-center  inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-red-600 transition-colors pt-6 border-t border-slate-50">
                                        Calendario gare <ArrowUpRight size={16}
                                                                      className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"/>
                                    </a>

                                </CardContent>
                            </Card>
                        ))
                    }
                </div>
            </div>


        </section>
    )
}