const partnership = [
    {
        name: "AB",
        linkToImage: './partner/AB.jpeg',
        linkToUrl: 'https://www.gruppoab.com/it/'
    }
]

export const Partnership = () => {
    return (
        <section id="partner" className="relative bg-white py-8 md:py-32 overflow-hidden">
            <div className="container relative z-10 mx-auto max-w-6xl px-6">

                <div className="flex flex-col lg:flex-row gap-16">
                    <div>
                        <span className="text-red-600 font-bold tracking-[0.2em] uppercase text-xs">
                            Partnership
                        </span>
                        <h2 className="mt-4 text-5xl md:text-6xl font-black text-slate-900 tracking-tighter">
                            I NOSTRI {" "}
                            <span className="text-red-600">PARTNER</span>
                        </h2>
                    </div>
                </div>

                <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8 items-center">
                    {partnership.map((partner) => (
                        <a
                            href={partner.linkToUrl}
                            key={partner.name}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center p-6 bg-slate-50 border border-slate-100 rounded-2xl hover:shadow-lg hover:border-red-100 transition-all duration-300 group h-36"
                        >
                            <img
                                src={partner.linkToImage}
                                alt={partner.name}
                                className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-105"
                            />
                        </a>
                    ))}
                </div>

            </div>
        </section>
    )
}