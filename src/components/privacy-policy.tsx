export const PrivacyPolicy = () => {
    return (
        <section id="privacypolicy" className="relative overflow-hidden bg-white py-8 md:py-32">
            <div className="container relative z-10 mx-auto max-w-6xl px-6">
                <div className="flex flex-col gap-16 lg:flex-row">
                    <div className="lg:w-1/3">
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-red-600">
                            Documenti legali
                        </span>
                        <h2 className="mt-4 text-5xl font-black tracking-tighter text-slate-900 md:text-6xl">
                            PRIVACY <br/>
                            <span className="text-red-600">POLICY</span>
                        </h2>
                        <p className="mt-6 leading-relaxed text-slate-500">
                            Ultimo aggiornamento: 8 maggio 2026
                        </p>
                    </div>
                </div>

                <div className="mt-10 space-y-10 text-sm font-light leading-7 text-slate-700 md:text-base">
                    <div>
                        <h2 className="mb-2 text-lg font-semibold">1. Titolare del trattamento</h2>
                        <p>
                            Il titolare del trattamento dei dati personali è <span className="font-bold">ASD Black Bulls Volley</span>,
                            con sede operativa a Cologno Monzese (MI).
                        </p>
                        <div className="mt-3 space-y-3">
                            <p>
                                <span className="font-semibold">Contatti del titolare:</span>
                                <br/>
                                Email: <a className="text-accent hover:underline" href="mailto:cblackbullsvolley@gmail.com">cblackbullsvolley@gmail.com</a>
                                <br/>
                                Telefono/WhatsApp: <a className="text-accent hover:underline" href="tel:+393517506557">+39 351 750 6557</a>
                                <br/>
                                Codice fiscale: 91572900156
                            </p>
                            <p>
                                <span className="font-semibold">Rappresentante del titolare:</span> il legale rappresentante pro tempore di ASD Black Bulls Volley.
                                <br/>
                                Contatti del rappresentante: <a className="text-accent hover:underline" href="mailto:cblackbullsvolley@gmail.com">cblackbullsvolley@gmail.com</a>
                            </p>
                            <p>
                                <span className="font-semibold">DPO:</span> non designato al momento.
                                <br/>
                                Contatti DPO: non applicabile.
                            </p>
                        </div>
                        <p className="mt-3">
                            Per esercitare i diritti privacy o ricevere chiarimenti, puoi scrivere all&apos;indirizzo email sopra indicato.
                        </p>
                    </div>

                    <div>
                        <h2 className="mb-2 text-lg font-semibold">2. Ambito di applicazione</h2>
                        <p>
                            La presente informativa si applica al sito web di Black Bulls Volley e ai trattamenti
                            effettuati tramite i canali di contatto pubblicati sul sito (email, WhatsApp e link social).
                        </p>
                    </div>

                    <div>
                        <h2 className="mb-2 text-lg font-semibold">3. Tipologie di dati trattati</h2>
                        <ul className="ml-10 list-disc space-y-2">
                            <li>
                                <span className="font-bold">Dati forniti volontariamente:</span> nome, cognome, recapiti e contenuto
                                dei messaggi inviati via email o WhatsApp.
                            </li>
                            <li>
                                <span className="font-bold">Dati tecnici di navigazione:</span> informazioni generate durante la visita
                                del sito (ad esempio IP, user agent, data/ora, URL richiesti, dati tecnici di sicurezza).
                            </li>
                            <li>
                                <span className="font-bold">Dati da piattaforme terze:</span> dati trattati in autonomia da social network
                                o servizi esterni quando l&apos;utente li utilizza tramite link presenti sul sito.
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="mb-2 text-lg font-semibold">4. Finalità e base giuridica</h2>
                        <ul className="ml-10 list-disc space-y-2">
                            <li>
                                <span className="font-bold">Gestione richieste di contatto:</span> rispondere a domande su squadre,
                                allenamenti, iscrizioni e attività (base giuridica: richiesta dell&apos;interessato).
                            </li>
                            <li>
                                <span className="font-bold">Gestione organizzativa e amministrativa:</span> comunicazioni relative alla vita associativa
                                e adempimenti collegati (base giuridica: necessità organizzative e obblighi applicabili).
                            </li>
                            <li>
                                <span className="font-bold">Sicurezza del sito e prevenzione abusi:</span> monitoraggio tecnico e protezione dell&apos;infrastruttura
                                (base giuridica: legittimo interesse del titolare).
                            </li>
                            <li>
                                <span className="font-bold">Analisi aggregate delle performance del sito:</span> utilizzo di Google Search Console per dati
                                statistici non identificativi.
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="mb-2 text-lg font-semibold">5. Natura del conferimento dei dati</h2>
                        <p>
                            Il conferimento dei dati per contattarci è facoltativo, ma il mancato conferimento può impedire la gestione
                            della richiesta. I dati tecnici necessari alla navigazione sono raccolti automaticamente dai sistemi.
                        </p>
                    </div>

                    <div>
                        <h2 className="mb-2 text-lg font-semibold">6. Modalità del trattamento</h2>
                        <p>
                            I dati sono trattati con strumenti digitali e organizzativi idonei a garantirne riservatezza, integrità e disponibilità,
                            nel rispetto dei principi di liceità, minimizzazione e limitazione della conservazione previsti dalla normativa privacy vigente.
                        </p>
                    </div>

                    <div>
                        <h2 className="mb-2 text-lg font-semibold">7. Destinatari e responsabili esterni</h2>
                        <p>I dati possono essere trattati da soggetti terzi che operano come autonomi titolari o responsabili del trattamento, oppure che raccolgono dati tramite widget, link e integrazioni presenti sul sito, tra cui:</p>
                        <ul className="ml-10 list-disc space-y-2">
                            <li><span className="font-bold">Cloudflare Pages:</span> hosting e sicurezza infrastrutturale del sito.</li>
                            <li><span className="font-bold">Google Search Console:</span> analisi tecnica e monitoraggio indicizzazione/performance.</li>
                            <li><span className="font-bold">Meta Platforms (Facebook, Instagram, WhatsApp):</span> gestione delle interazioni sui servizi social e di messaggistica.</li>
                            <li><span className="font-bold">Provider email:</span> gestione operativa della posta elettronica.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="mb-2 text-lg font-semibold">8. Trasferimenti verso Paesi extra SEE</h2>
                        <p>
                            Alcuni fornitori possono trattare dati su server situati fuori dallo Spazio Economico Europeo (es. Stati Uniti).
                            In tali casi, il trasferimento avviene nel rispetto della normativa privacy applicabile e tramite strumenti di garanzia
                            previsti dai fornitori dei servizi.
                        </p>
                    </div>

                    <div>
                        <h2 className="mb-2 text-lg font-semibold">9. Tempi di conservazione</h2>
                        <ul className="ml-10 list-disc space-y-2">
                            <li>Dati di contatto: per il tempo necessario a gestire la richiesta e, se necessario, per adempimenti successivi collegati.</li>
                            <li>Dati amministrativi: per i termini previsti da obblighi normativi o associativi applicabili.</li>
                            <li>Dati tecnici di sicurezza: per il periodo strettamente necessario al monitoraggio e alla protezione del sito.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="mb-2 text-lg font-semibold">10. Diritti degli interessati</h2>
                        <p>Puoi esercitare in ogni momento i seguenti diritti:</p>
                        <ul className="ml-10 list-disc space-y-2">
                            <li>accesso ai dati personali;</li>
                            <li>rettifica dei dati inesatti o integrazione dei dati incompleti;</li>
                            <li>cancellazione dei dati, nei casi previsti;</li>
                            <li>limitazione del trattamento;</li>
                            <li>opposizione al trattamento basato su legittimo interesse;</li>
                            <li>portabilità dei dati, ove applicabile;</li>
                            <li>revoca del consenso, quando il trattamento si fonda sul consenso.</li>
                        </ul>
                        <p className="mt-3">
                            Per esercitare i tuoi diritti: <a className="text-accent hover:underline" href="mailto:cblackbullsvolley@gmail.com">cblackbullsvolley@gmail.com</a>.
                        </p>
                    </div>

                    <div>
                        <h2 className="mb-2 text-lg font-semibold">11. Reclamo all&apos;autorità di controllo</h2>
                        <p>
                            Se ritieni che il trattamento violi la normativa privacy, hai diritto di proporre reclamo al Garante per la Protezione
                            dei Dati Personali (www.garanteprivacy.it), fatti salvi gli altri rimedi amministrativi e giurisdizionali previsti.
                        </p>
                    </div>

                    <div>
                        <h2 className="mb-2 text-lg font-semibold">12. Minori</h2>
                        <p>
                            I contenuti del sito sono informativi. Eventuali dati di minori vengono trattati solo con l&apos;autorizzazione dei genitori
                            o di chi ne fa le veci
                        </p>
                    </div>

                    <div>
                        <h2 className="mb-2 text-lg font-semibold">13. Cookie e tecnologie simili</h2>
                        <p>
                            Il sito utilizza cookie tecnici necessari al funzionamento. Cliccando su link esterni (es. WhatsApp, Facebook, Instagram),
                            il trattamento successivo avviene sulle piattaforme terze secondo le rispettive informative privacy e cookie.
                        </p>
                    </div>

                    <div>
                        <h2 className="mb-2 text-lg font-semibold">14. Aggiornamenti della presente informativa</h2>
                        <p>
                            Black Bulls Volley si riserva di aggiornare periodicamente questa informativa per adeguarla a evoluzioni normative,
                            organizzative o tecniche. Le modifiche saranno pubblicate su questa pagina con indicazione della data di aggiornamento.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
