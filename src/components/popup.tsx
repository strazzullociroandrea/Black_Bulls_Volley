import React, {useEffect, useState} from 'react'

interface PopupData {
    data: {
        title: string
        link: string
        image: {
            url: string
        }
    }
}

export const Popup = ({data}: PopupData) => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        if (!data?.image?.url) return

        const isClosed = sessionStorage.getItem('popupClosed')
        if (!isClosed) {
            const timer = setTimeout(() => {
                setIsVisible(true)
            }, 1500)

            return () => clearTimeout(timer)
        }
    }, [data])

    const handleClose = () => {
        sessionStorage.setItem('popupClosed', 'true')
        setIsVisible(false)
    }

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        sessionStorage.setItem('popupClosed', 'true')
        setIsVisible(false)

        if (data.link) {
            window.location.href = data.link
        }
    }

    if (!data?.image?.url || !isVisible) return null

    return (
        <div
            className="fixed inset-0 z-9999 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-300">
            <div className="relative w-full max-w-sm mx-auto">
                <button
                    onClick={handleClose}
                    className="cursor-pointer absolute -top-3 -right-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white text-black shadow-lg hover:bg-gray-100 transition-colors"
                    aria-label="Chiudi popup"
                >
                    ×
                </button>
                <div className="overflow-hidden rounded-2xl shadow-2xl bg-white">
                    {data.link ? (
                        <a href={data.link} onClick={handleLinkClick} className="block cursor-pointer">
                            <img
                                src={data.image.url}
                                alt={data.title || 'Black Bulls Volley - Promozione'}
                                className="w-full h-auto object-cover"
                            />
                        </a>
                    ) : (
                        <img
                            src={data.image.url}
                            alt={data.title || 'Black Bulls Volley - Promozione'}
                            className="w-full h-auto object-cover"
                        />
                    )}
                </div>
            </div>
        </div>
    )
}