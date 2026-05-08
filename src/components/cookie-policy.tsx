export function CookiePolicy() {
    return (
        <section id="cookiepolicy" className="relative overflow-hidden bg-white py-8 md:py-32">
            <div className="container relative z-10 mx-auto max-w-6xl px-6">
                <div className="flex flex-col gap-16 lg:flex-row">
                    <div className="lg:w-1/3">
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-red-600">
                            Documenti legali
                        </span>
                        <h2 className="mt-4 text-5xl font-black tracking-tighter text-slate-900 md:text-6xl">
                            COOKIE <br/>
                            <span className="text-red-600">POLICY</span>
                        </h2>
                        <p className="mt-6 leading-relaxed text-slate-500">
                            Ultimo aggiornamento: 8 maggio 2026
                        </p>
                    </div>
                </div>

                <div className="mt-10 space-y-10 text-sm font-light leading-7 text-slate-700 md:text-base">
                    <div>
                        <h2 className="mb-2 text-lg font-semibold">1. Cosa sono i cookie</h2>
                        <p>
                            I cookie sono piccoli file di testo che il sito salva sul dispositivo dell&apos;utente per garantire
                            il corretto funzionamento della navigazione e migliorare l&apos;esperienza di utilizzo.
                        </p>
                    </div>

                    <div>
                        <h2 className="mb-2 text-lg font-semibold">2. Cookie utilizzati dal sito</h2>
                        <p>
                            Questo sito utilizza cookie tecnici necessari al funzionamento delle pagine e alla gestione delle preferenze
                            dell&apos;utente. Questi cookie non richiedono il consenso preventivo perché servono a garantire servizi essenziali
                            come la navigazione, la sicurezza e il corretto caricamento dei contenuti.
                        </p>
                        <ul className="mt-3 ml-10 list-disc space-y-2">
                            <li><span className="font-bold">Cookie tecnici:</span> necessari per il funzionamento del sito.</li>
                            <li><span className="font-bold">Cookie di preferenza:</span> usati per ricordare la scelta espressa nel banner consenso.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="mb-2 text-lg font-semibold">3. Cookie di terze parti e link esterni</h2>
                        <p>
                            Il sito contiene collegamenti a servizi esterni come WhatsApp, Facebook e Instagram. Quando l&apos;utente
                            visita tali servizi, questi possono installare cookie o utilizzare tecnologie simili secondo le proprie
                            informative privacy e cookie.
                        </p>
                        <ul className="mt-3 ml-10 list-disc space-y-2">
                            <li><span className="font-bold">Meta Platforms:</span> per Facebook, Instagram e WhatsApp.</li>
                            <li><span className="font-bold">Cloudflare:</span> per l&apos;hosting e la sicurezza dell&apos;infrastruttura.</li>
                            <li><span className="font-bold">Google:</span> per i servizi di monitoraggio e analisi tecnica eventualmente utilizzati.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="mb-2 text-lg font-semibold">4. Gestione delle preferenze</h2>
                        <p>
                            Al primo accesso compare un banner che consente di scegliere tra <span className="font-bold">Acconsento</span>
                            e <span className="font-bold">Non acconsento</span>. La scelta viene salvata in locale sul dispositivo
                            dell&apos;utente e può essere modificata cancellando i dati del browser o rimuovendo le preferenze salvate.
                        </p>
                    </div>

                    <div>
                        <h2 className="mb-2 text-lg font-semibold">5. Aggiornamenti della presente informativa</h2>
                        <p>
                            Black Bulls Volley si riserva di aggiornare questa Cookie Policy in caso di modifiche tecniche,
                            organizzative o dei servizi esterni utilizzati dal sito.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}


