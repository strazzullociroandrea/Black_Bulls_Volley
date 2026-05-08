import {useEffect, useState} from 'react'

const STORAGE_KEY = 'black-bulls-cookie-consent'

type ConsentStatus = 'accepted' | 'rejected' | null

export function CookieConsent() {
    const [status, setStatus] = useState<ConsentStatus>(null)
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
        const saved = window.localStorage.getItem(STORAGE_KEY)
        if (saved === 'accepted' || saved === 'rejected') {
            setStatus(saved)
        }
    }, [])

    const handleChoice = (value: 'accepted' | 'rejected') => {
        window.localStorage.setItem(STORAGE_KEY, value)
        setStatus(value)
    }

    const handleReset = () => {
        window.localStorage.removeItem(STORAGE_KEY)
        setStatus(null)
    }

    if (!isMounted) {
        return null
    }

    if (status) {
        return (
            <div className="fixed bottom-4 right-4 z-50">
                <button
                    type="button"
                    onClick={handleReset}
                    className="rounded-full bg-zinc-950 px-4 py-2 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-zinc-800"
                >
                    Modifica preferenze cookie
                </button>
            </div>
        )
    }

    return (
        <div className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4 sm:px-6 lg:px-8">
            <div className="mx-auto flex max-w-5xl flex-col gap-4 rounded-3xl border border-zinc-800 bg-zinc-950 p-5 text-sm text-zinc-200 shadow-2xl sm:flex-row sm:items-center sm:justify-between">
                <div className="space-y-2">
                    <p className="font-semibold text-white">Utilizziamo cookie tecnici</p>
                    <p className="max-w-3xl leading-relaxed text-zinc-300">
                        Questo sito usa cookie tecnici necessari al funzionamento. Puoi scegliere se acconsentire o non acconsentire
                        all&apos;uso di eventuali cookie non essenziali.
                    </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                    <button
                        type="button"
                        onClick={() => handleChoice('rejected')}
                        className="rounded-full border border-zinc-700 px-5 py-2 font-semibold text-white transition-colors hover:border-zinc-500 hover:bg-zinc-900"
                    >
                        Non acconsento
                    </button>
                    <button
                        type="button"
                        onClick={() => handleChoice('accepted')}
                        className="rounded-full bg-red-600 px-5 py-2 font-semibold text-white transition-colors hover:bg-red-500"
                    >
                        Acconsento
                    </button>
                </div>
            </div>
        </div>
    )
}


