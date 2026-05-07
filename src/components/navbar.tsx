import {Menu, X} from 'lucide-react'
import React, {useState} from 'react'
import {Button} from '@/components/ui/button'

const navLinks = [
    {title: "Home", href: "/"},
    {title: "Organigramma", href: "/organigramma"},
    {title: "Contatti", href: "/contatti"},
];

export const Navbar = () => {
    const [open, setOpen] = useState(false)

    return (
        <nav
            id="main-nav"
            className="w-full fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-5 bg-black border-b border-white/10"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-10 flex justify-between items-center">

                <a href="/" className="relative z-50 flex items-center gap-2">
                    <img src="./logo.png" alt="logo"
                         className="h-10 w-auto md:h-14 transition-transform duration-300 hover:scale-105"/>
                </a>

                <div className="hidden lg:flex items-center gap-2">
                    {navLinks.map((link) => (
                        <a
                            key={link.title}
                            href={link.href}
                            className="relative px-5 py-2 text-sm font-light tracking-[0.2em] text-white/80 hover:text-white transition-all uppercase after:absolute after:bottom-0 after:left-5 after:right-5 after:h-0.5 after:origin-left after:scale-x-0 after:bg-red-600 after:transition-transform after:duration-300 hover:after:scale-x-100"
                        >
                            {link.title}
                        </a>
                    ))}
                </div>

                <Button
                    variant="ghost"
                    className="relative z-50 lg:hidden p-2 text-white hover:bg-white/10 cursor-pointer"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <X className="w-7 h-7"/> : <Menu className="w-7 h-7"/>}
                </Button>
            </div>
            <div className={`
                lg:hidden absolute top-full left-0 w-full bg-black border-b border-white/10 transition-all duration-300 ease-in-out overflow-hidden
                ${open ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"}
            `}>
                <div className="container mx-auto flex flex-col items-center gap-8 py-10 px-6">
                    {navLinks.map((link) => (
                        <a
                            key={link.title}
                            href={link.href}
                            onClick={() => setOpen(false)}
                            className="text-white/90 text-lg font-light tracking-[0.3em] uppercase hover:text-red-600 transition-colors"
                        >
                            {link.title}
                        </a>
                    ))}

                    <div className="w-8 h-px bg-red-600/50 mt-2"/>
                </div>
            </div>
        </nav>
    )
}