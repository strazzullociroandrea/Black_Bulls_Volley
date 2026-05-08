import {MessageCircle, Mail} from 'lucide-react'

export const Footer = () => {
    return (
        <footer className="mt-10 bg-zinc-950 text-zinc-300 py-12 border-t border-zinc-800">
            <div
                className="grid grid-cols-1 md:grid-cols-4 mx-auto max-w-7xl justify-between px-6 gap-13 items-start text-left">

                <div className="flex flex-col space-y-4 ">
                    <div className="flex items-center gap-3">
                        <img src="/logo.png" alt="logo" className="h-12 w-auto brightness-110"/>
                        <span className="font-display font-extrabold text-xl tracking-tight text-white uppercase">
                            Black Bulls <span className="text-red-600">Volley</span>
                        </span>
                    </div>
                    <p className="text-zinc-400 text-sm leading-relaxed max-w-xs">
                        ASD Black Bulls Volley a Cologno Monzese (MI). Passione, grinta e crescita per atleti di ogni
                        età. Scopri le nostre squadre, i calendari gare e unisciti alla nostra realtà
                        pallavolistica. </p>
                </div>
                <div className="flex flex-col space-y-4 mt-3">
                    <h4 className="text-white font-bold uppercase tracking-wider text-sm">Link rapidi</h4>
                    <ul className="text-zinc-400 text-sm space-y-2">
                        <li><a href="./">Home</a></li>
                        <li><a href="./squadre">Squadre</a></li>
                        <li><a href="./organigramma">Organigramma</a></li>
                        <li><a href="./contatti">Contatti</a></li>
                    </ul>
                </div>
                <div className="flex flex-col space-y-4 mt-3">
                    <h4 className="text-white font-bold uppercase tracking-wider text-sm">Legale</h4>
                    <ul className="text-zinc-400 text-sm space-y-2">
                        <li><a href="./">Cookie Policy</a></li>
                        <li><a href="./privacy-policy">Privacy Policy</a></li>
                        <li><a href="./contatti">Termini e condizioni</a></li>
                    </ul>
                </div>


                <div className="flex flex-col space-y-4">
                    <h4 className="text-white font-bold uppercase tracking-wider text-sm">Contatti</h4>

                    <a
                        className="text-sm mb-2 hover:underline cursor-pointer flex items-center gap-2  text-background/60"
                        href="tel:+393517506557"
                    >
                        <MessageCircle className="w-4 h-auto"/>
                        <span>+39 351 750 6557</span>
                    </a>
                    <a
                        className="text-sm mb-2 hover:underline cursor-pointer flex items-center gap-2  text-background/60"
                        href={`mailto:cblackbullsvolley@gmail.com`}
                    >
                        <Mail className="w-4 h-auto"/>
                        <span>cblackbullsvolley@gmail.com </span>
                    </a>
                    <p className="text-sm mb-2  flex items-center gap-2  text-background/60">
                        Codice Fiscale: 91572900156
                    </p>
                </div>

            </div>

            <div className="mt-12 pt-8 border-t border-zinc-900 text-center">
                <p className="text-xs text-zinc-500">
                    © {new Date().getFullYear()} Black Bulls Volley. All rights reserved.
                </p>
                <p className="text-xs text-zinc-500">
                    Developed by <a href="https://cirostrazzullo.it" target="_blank">cirostrazzullo.it</a>
                </p>
            </div>
        </footer>
    );
};