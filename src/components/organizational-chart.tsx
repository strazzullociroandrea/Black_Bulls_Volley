import React from "react";
import {
    Card,
} from "@/components/ui/card";
import {Separator} from "@/components/ui/separator";
import {Avatar, AvatarFallback} from "@/components/ui/avatar";
import {
    ShieldCheck,
    Trophy,
    Users2,
    ClipboardCheck,
} from "lucide-react";

const organization = {
    presidenza: [
        {name: "Manuel Garrido", role: "Presidente", icon: ShieldCheck},
        {name: "Daniela Fraschini", role: "Vicepresidente", icon: ShieldCheck},
        {name: "Susan Melarato", role: "Direttore Sportivo", icon: Trophy},
    ],
    amministrazione: [
        {name: "Fabio Castaldo", role: "Tesoriere"},
        {name: "Ivan Gotti", role: "Segretario"},
        {name: "Monica Squitieri", role: "Resp. Arbitri e refertisti asd"},
    ],
    allenatori: [
        {team: "1ª Divisione", coach: "Roberto Grotto", second: "Marco Frigerio"},
        {team: "2ª Div. Maschile", coach: "Alfredo Duca"},
        {team: "3ª Divisione", coach: "Maria Chiara Anigello"},
        {team: "U15 Maschile", coach: "Daniela Fraschini", second: "Ciro Andrea Strazzullo"},
        {team: "U15 Femminile", coach: "Federica Urso"},
        {team: "U12", coach: "Annalisa Nigro", second: "Ludovico Grotti"},
    ],
    dirigenti: ["Dell’olio Antonietta", "Giorgio Domenico", "Lionetti Brunella", "Pozzo Elena"],
};

export const OrganizationalChart = () => {
    const getInitials = (name: string) => name.split(" ").map(n => n[0]).join("");

    return (
        <section id="organigramma" className="relative bg-white py-8 md:py-32 overflow-hidden">

            <div className="container relative z-10 mx-auto max-w-6xl px-6">
                <div className="flex flex-col lg:flex-row gap-16">

                    <div className="lg:w-1/3">
                        <span className="text-red-600 font-bold tracking-[0.2em] uppercase text-xs">
                          Organigramma
                        </span>
                        <h2 className="mt-4 text-5xl md:text-6xl font-black text-slate-900 tracking-tighter">
                            IL NOSTRO <br/>
                            <span className="text-red-600">TEAM</span>
                        </h2>
                    </div>
                    <div
                        className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-4 justify-center items-start">                        {
                        organization.presidenza.map(person => (
                            <Card key={person.name}
                                  className="group relative p-6 rounded-3xl bg-white border border-slate-200 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-red-100">
                                <Avatar className="h-12 w-12 mb-4 border border-slate-100">
                                    <AvatarFallback className="bg-slate-900 text-white text-xs font-bold">
                                        {getInitials(person.name)}
                                    </AvatarFallback>
                                </Avatar>
                                <p className="text-[10px] font-bold text-red-600 uppercase tracking-widest mb-1">
                                    {person.role}
                                </p>
                                <p className="text-lg font-black text-slate-900 leading-tight uppercase tracking-tighter">
                                    {person.name}
                                </p>
                            </Card>
                        ))
                    }
                    </div>

                </div>
                <div className="mt-10 flex flex-col lg:flex-row gap-16">
                    <div className="lg:w-1/3 mb-5">
                        <div className="flex items-center gap-2 mb-6">
                            <ClipboardCheck className="w-5 h-5 text-red-600"/>
                            <h3 className="font-black uppercase tracking-widest text-sm text-slate-900">Amministrazione</h3>
                        </div>
                        <div className="grid gap-3 mb-5">
                            {organization.amministrazione.map((o) => (
                                <div key={o.name} className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                                    <p className="text-sm font-black text-slate-900 uppercase tracking-tighter">{o.name}</p>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{o.role}</p>
                                </div>
                            ))}
                        </div>
                        <Separator/>
                        <div className="flex items-center gap-2 mb-6 mt-6">
                            <Users2 className="w-5 h-5 text-red-600"/>
                            <h3 className="font-black uppercase tracking-widest text-sm text-slate-900">Dirigenti</h3>
                        </div>
                        <div className="grid gap-3 mt-5">
                            {organization.dirigenti.map((name) => (
                                <div key={name} className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                                    <p className="text-sm font-black text-slate-900 uppercase tracking-tighter">{name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="lg:w-2/3 flex flex-col gap-6">
                        <div className="flex items-center gap-2">
                            <Trophy className="w-5 h-5 text-red-600 shrink-0" />
                            <h3 className="font-black uppercase tracking-widest text-sm text-slate-900">
                                Allenatori
                            </h3>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {organization.allenatori.map((team) => (
                                <Card
                                    key={team.team}
                                    className="h-40 group relative flex flex-col justify-center p-8 rounded-3xl bg-white border border-slate-200 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-red-100 hover:-translate-y-1"
                                >
                                    <div className={`space-y-1 ${team.second ? "": "mb-15"}  `}>
                                        <p className="text-[10px] font-bold text-red-600 uppercase tracking-widest">
                                            {team.team}
                                        </p>
                                        <p className="text-xl font-black text-slate-900 leading-tight uppercase tracking-tighter">
                                            {team.coach}
                                        </p>
                                    </div>

                                    {team.second && (
                                        <div className=" pt-4 border-t border-slate-50">
                                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                                Secondo Allenatore
                                            </p>
                                            <p className="text-sm font-bold text-slate-700 uppercase tracking-tighter">
                                                {team.second}
                                            </p>
                                        </div>
                                    )}
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
        ;
};