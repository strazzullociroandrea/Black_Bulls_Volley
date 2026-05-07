import {Mail, MapPin, MessageCircle, ArrowRight} from "lucide-react";
import {FacebookIcon} from "@/components/facebook-icon";
import {InstagramIcon} from "@/components/instagram-icon";
import {Card, CardContent, CardTitle} from "@/components/ui/card"

const mainContacts = [
    {
        icon: MessageCircle,
        label: "WhatsApp",
        value: "351 750 6557",
        href: "https://wa.me/393517506557",
        cta: "Chat WhatsApp",
        brandColor: "group-hover:text-green-500",
    },
    {
        icon: Mail,
        label: "Email",
        value: "cblackbullsvolley@gmail.com",
        href: "mailto:cblackbullsvolley@gmail.com",
        cta: "Scrivici un'email",
        brandColor: "group-hover:text-red-500",
    },
];

const socialLinks = [
    {
        name: "Instagram",
        icon: InstagramIcon,
        href: "https://instagram.com/blackbullsvolley",
        handle: "blackbullsvolley",
    },
    {
        name: "Facebook",
        icon: FacebookIcon,
        href: "https://www.facebook.com/BlackBullsV/",
        handle: "Black Bulls Volley",
    },
];

export const Contact = () => {
    return (
        <section id="contacts" className="relative bg-white py-8 md:py-32 overflow-hidden">

            <div className="container relative z-10 mx-auto max-w-6xl px-6">
                <div className="flex flex-col lg:flex-row gap-16">

                    <div className="lg:w-1/3">
            <span className="text-red-600 font-bold tracking-[0.2em] uppercase text-xs">
              Rimani connesso
            </span>
                        <h2 className="mt-4 text-5xl md:text-6xl font-black text-slate-900 tracking-tighter">
                            I NOSTRI <br/>
                            <span className="text-red-600">CONTATTI</span>
                        </h2>
                        <p className="mt-6 text-slate-500 leading-relaxed">
                            Vuoi unirti alla squadra o ricevere informazioni?
                            Siamo pronti a darti il benvenuto.
                        </p>

                        <Card className="mt-10 p-6 rounded-2xl bg-slate-50 border border-slate-100">
                            <CardTitle>
                                <div className="flex items-center gap-3 text-slate-900 font-bold mb-2">
                                    <MapPin className="w-5 h-5 text-red-600"/>
                                    <span>DOVE SIAMO</span>
                                </div>
                            </CardTitle>
                            <CardContent>
                                <p className="text-sm text-slate-600">
                                    <span className="font-semibold">Pala&Motion</span> <br/>
                                    Via Leonardo da Vinci 1, Cologno Monzese (MI)
                                </p>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="lg:w-2/3 grid sm:grid-cols-2 gap-4">

                        {mainContacts.map((item) => (
                            <a href={item.href} target="_blank" rel="noopener noreferrer" className="h-full">

                                <Card
                                    key={item.label}

                                    className="cursor-pointer group relative flex flex-col justify-between p-8 rounded-3xl bg-white border border-slate-200 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-red-100 hover:-translate-y-1"
                                >
                                    <CardContent>
                                        <div
                                            className={`p-4 w-fit rounded-2xl bg-slate-50 transition-colors ${item.brandColor}`}>
                                            <item.icon className="w-8 h-8"/>
                                        </div>
                                        <div className="mt-12">
                                            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{item.cta}</p>
                                            <p className="text-lg font-bold text-slate-900 truncate">{item.value}</p>
                                        </div>
                                        <ArrowRight
                                            className="absolute top-8 right-8 w-5 h-5 text-slate-300 group-hover:text-red-500 group-hover:translate-x-1 transition-all"/>

                                    </CardContent>
                                </Card>
                            </a>
                        ))}

                        <div className="sm:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                            {socialLinks.map((social) => (
                                <Card
                                    key={social.name}
                                    rel="noreferrer"
                                    className="cursor-pointer flex justify-center gap-5 p-5 rounded-2xl bg-slate-900 text-white transition-all hover:bg-red-600 group"
                                >
                                    <CardContent>
                                        <a href={social.href} target="_blank" rel="noopener noreferrer"
                                           className="flex gap-5">
                                            <div className="p-3 rounded-xl bg-white/10 group-hover:bg-white/20">
                                                <social.icon/>
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-bold uppercase tracking-widest text-red-400 group-hover:text-white/80">
                                                    {social.name}
                                                </p>
                                                <p className="font-bold tracking-tight">{social.handle}</p>
                                            </div>
                                        </a>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};