import {Card, CardContent, CardTitle} from "@/components/ui/card";
import {ArrowUpRight, Dumbbell, Calendar} from "lucide-react";
import {Separator} from "@/components/ui/separator";

const teams = [

    {
        image: "/1DivM.jpeg",
        name: "1° DIVISIONE MASCHILE",
        days: "2 Allenamenti settimanali",
        match: "Gare infrasettimanali",
        calendar: "https://www.sol.milano.federvolley.it/calendarioris/1001044/2025"
    },
    {
        image: "/2DivM.jpeg",
        name: "2° DIVISIONE MASCHILE",
        days: "2 Allenamenti settimanali",
        match: "Gare nel weekend",
        calendar: "https://www.sol.milano.federvolley.it/calendarioris/1001048/2025"
    },
    {
        image: "/3DivF.jpeg",
        name: "3° DIVISIONE FEMMINILE",
        days: "2 Allenamenti settimanali",
        match: "Gare infrasettimanali",
        calendar: "https://www.sol.milano.federvolley.it/calendarioris/1001053/2025"
    },
    {
        image: "/U15M.jpeg",
        name: "UNDER 15 MASCHILE",
        days: "2 Allenamenti settimanali",
        match: "Gare nel weekend",
        calendar: "https://volley.pgsmilano.org/calendari"
    },
    {
        image: "/U15F.jpeg",
        name: "UNDER 15 FEMMINILE",
        days: "2 Allenamenti settimanali",
        match: "Gare nel weekend",
        calendar: "https://ivl.usacli.it/CalendarioView?girone_id=null&territorio_id=3&campionato_id=null&inizio_stagione=2025-09-01T00:00:00.000Z&fine_stagione=2026-08-31T00:00:00.000Z&societa_id=156&squadra_id=1334"
    },
    {
        image: "/U12.jpeg",
        name: "UNDER 12",
        days: "2 Allenamenti settimanali",
        match: "Gare nel weekend",
        calendar: "https://volley.pgsmilano.org/calendari"
    },
    {
        image: "/mista_b.jpeg",
        name: "MISTA B",
        days: "1 Allenamento settimanale",
        match: "Gara infrasettimanale",
        calendar: "https://ivl.usacli.it/CalendarioView?girone_id=null&territorio_id=3&campionato_id=null&inizio_stagione=2025-09-01T00:00:00.000Z&fine_stagione=2026-08-31T00:00:00.000Z&societa_id=156&squadra_id=598"
    }, {
        image: "/mista_s.jpeg",
        name: "MISTA S",
        days: "1 Allenamento settimanale",
        match: "Gara infrasettimanale",
        calendar: "https://ivl.usacli.it/CalendarioView?girone_id=null&territorio_id=3&campionato_id=null&inizio_stagione=2025-09-01T00:00:00.000Z&fine_stagione=2026-08-31T00:00:00.000Z&societa_id=156&squadra_id=659"
    }
]

export const Teams = () => {
    return (
        <section id="squadre" className="relative bg-white py-24 md:py-32 overflow-hidden">
            <div className="container relative z-10 mx-auto max-w-6xl px-6">
                <div className="flex flex-col lg:flex-row gap-16 mb-12">
                    <div className="lg:w-1/3">
                        <span className="text-red-600 font-bold tracking-[0.2em] uppercase text-xs">
                          Stagione corrente
                        </span>
                        <h2 className="mt-4 text-5xl md:text-6xl font-black text-slate-900 tracking-tighter">
                            LE NOSTRE<br/>
                            <span className="text-red-600">SQUADRE</span>
                        </h2>
                        <p className="mt-6 text-slate-500 leading-relaxed font-light">
                            Scopri tutte le formazioni che portano in campo i colori dei Black Bulls.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teams.map((team, i) => (
                        <Card key={i}
                              className="cursor-pointer group flex flex-col h-full overflow-hidden rounded-[2.5rem] bg-white border border-slate-200 shadow-sm transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/10 hover:-translate-y-2 hover:border-red-500/20 p-0">

                            <div
                                className="relative w-full h-64 bg-slate-100 overflow-hidden shrink-0 border-b border-slate-100">
                                {team.image !== "" ? (
                                    <img
                                        src={team.image}
                                        alt={team.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                ) : (
                                    <div
                                        className="w-full h-full bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center">
                                        <span
                                            className="text-slate-700 font-black text-4xl opacity-20 tracking-tighter uppercase select-none">
                                            Black Bulls
                                        </span>
                                    </div>
                                )}
                                <div
                                    className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"/>
                            </div>

                            <CardContent className="flex flex-col flex-1 p-8">
                                <CardTitle className="mb-6 p-0">
                                    <h3 className="text-xl font-black text-slate-900 uppercase tracking-tighter leading-tight group-hover:text-red-600 transition-colors">
                                        {team.name}
                                    </h3>
                                </CardTitle>

                                <div className="space-y-4 mb-8 flex-1">
                                    <div className="flex items-center gap-3 text-sm text-slate-600">
                                        <Dumbbell size={18} className="text-red-500 shrink-0"/>
                                        <span className="font-medium">{team.days}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-slate-600">
                                        <Calendar size={18} className="text-red-500 shrink-0"/>
                                        <span className="font-medium">{team.match}</span>
                                    </div>
                                </div>

                                <Separator className="mb-6 bg-slate-100"/>
                                <a href={team.calendar} target="_blank" rel="noopener noreferrer"
                                   className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-slate-400 group-hover:text-red-600 transition-all">
                                    Calendario gare
                                    <ArrowUpRight size={16}
                                                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"/>
                                </a>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}