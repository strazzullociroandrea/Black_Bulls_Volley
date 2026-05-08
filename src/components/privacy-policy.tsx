export const PrivacyPolicy = () => {
    return (
        <section id="privacypolicy" className="relative bg-white py-8 md:py-32 overflow-hidden">


            <div className="container relative z-10 mx-auto max-w-6xl px-6">
                <div className="flex flex-col lg:flex-row gap-16">

                    <div className="lg:w-1/3">
            <span className="text-red-600 font-bold tracking-[0.2em] uppercase text-xs">
             Documenti legali
            </span>
                        <h2 className="mt-4 text-5xl md:text-6xl font-black text-slate-900 tracking-tighter">
                            PRIVACY <br/>
                            <span className="text-red-600">POLICY</span>
                        </h2>
                        <p className="mt-6 text-slate-500 leading-relaxed">
                            Ultimo aggiornamento: 8 Maggio 2026
                        </p>
                    </div>
                </div>

                <div className="mt-10 leading-7 space-y-10 text-sm font-light text-slate-700 md:text-base">
                    <div>
                        <h2 className="text-lg font-semibold mb-2">1. Titolare del trattamento</h2>
                        <p>
                            Il titolare del trattamento dei dati è Black Bulls Volley, con sede a
                            Cologno Monzese (MI).
                        </p>
                        <p>
                            Email: <a className="text-accent hover:underline"
                                      href="mailto:cblackbullsvolley@gmail.com">cblackbullsvolley@gmail.com</a>.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold mb-2">2. Dati raccolti</h2>
                        <p>
                            Il Sito è principalmente informativo e non prevede la creazione di account. Tuttavia,
                            possono essere raccolti i seguenti dati:
                        </p>
                        <ul className="list-disc ml-10 ">
                            <li>
                                <span className="font-bold">Dati forniti volontariamente:</span> Qualora decidessi di
                                contattarci tramite i link WhatsApp o l'indirizzo email indicati, raccoglieremo il tuo
                                numero di telefono, il tuo nome (se disponibile) o il tuo indirizzo email e qualsiasi
                                altra informazione fornita nella comunicazione.
                            </li>
                            <li>
                                <span className="font-bold">Dati di Navigazione:</span> Il Sito è ospitato sulla
                                piattaforma Cloudflare Pages. Durante la navigazione possono essere raccolti dati
                                tecnici (come indirizzi IP, tipo di browser, orari di accesso) per finalità statistiche
                                aggregate e per garantire la sicurezza del Sito.
                            </li>
                        </ul>

                    </div>

                    <div>
                        <h2 className="text-lg font-semibold mb-2">3. Finalità del trattamento</h2>
                        <p>
                            I dati vengono raccolti per:
                        </p>
                        <ul className="list-disc ml-10 ">
                            <li>
                                Rispondere a richieste di informazioni su corsi, iscrizioni o attività della squadra.
                            </li>
                            <li>
                                Gestire le comunicazioni con i tesserati o potenziali tali.
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-lg font-semibold mb-2">4. Base Giuridica del Trattamento</h2>
                        <p>
                            Il trattamento dei dati avviene sulla base del consenso dell'interessato nel momento in cui
                            ci scrive
                            via whatsapp o email.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-lg font-semibold mb-2">5. Analisi e statistiche</h2>
                        <p>
                            Black Bulls Volley utilizza <span className="font-bold">Google Search Console</span> per
                            raccogliere dati
                            anonimi sulle visite del sito, a fine statistico e di miglioramento dell'esperienza utente.
                            Questi dati non consentono l'identificazione personale degli utenti.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-lg font-semibold mb-2"> 6. Trasferimento Dati Extra-UE
                        </h2>
                        <p>
                            L'interazione con social media (Facebook, Instagram) e l'hosting su Cloudflare possono
                            comportare il trasferimento di alcuni metadati verso server situati negli Stati Uniti. Tali
                            trasferimenti avvengono in conformità con i framework di protezione dati vigenti. </p>
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold mb-2"> 7. Periodo di Conservazione

                        </h2>
                        <p>
                            I dati raccolti tramite contatti diretti saranno conservati solo per il tempo necessario
                            dovuto alla richiesta dell'utente o per obblighi di legge legati alle iscrizioni sportive.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold mb-2"> 8. Diritti dell'Interessato


                        </h2>
                        <p>In conformità al GDPR, l'utente ha il diritto di:</p>
                        <ul className="list-disc ml-10 ">
                            <li>
                                Accedere ai propri dati personali.
                            </li>
                            <li>
                                Chiedere la rettifica o la cancellazione dei dati.
                            </li>
                            <li>
                                Opporsi al trattamento o chiederne la limitazione.
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold mb-2"> 9. Modifiche alla presente Policy


                        </h2>
                        <p>
                            Black Bulls Volley si riserva il diritto di modificare questo documento. Eventuali modifiche
                            saranno pubblicate su questa pagina.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold mb-2">10. Cookie Policy</h2>
                        <p>
                            Questo sito utilizza esclusivamente cookie tecnici necessari per la navigazione.
                            I link esterni (WhatsApp, Facebook, Instagram) possono installare cookie di terze parti
                            una volta cliccati; per questi si rimanda alle informative dei rispettivi gestori.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}