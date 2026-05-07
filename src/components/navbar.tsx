import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"

export const Navbar = () => {
    return (
        <nav
            id="main-nav"
            className="w-full fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-6 bg-black border-b border-white/5"
        >
            <div className="container px-10 mx-auto flex justify-between items-center">

                <a href="/" className="group flex items-center gap-2">
                    <img src="./logo-negativo.png" alt="logo" className="h-auto w-14" />
                </a>

                <NavigationMenu>
                    <NavigationMenuList className="flex items-center gap-1">

                        <NavigationMenuItem>
                            <a
                                href="/"
                                className="relative px-4 py-2 text-sm font-light tracking-widest text-white/90 hover:text-white transition-colors after:absolute after:bottom-0 after:left-4 after:right-4 after:h-0.5 after:origin-left after:scale-x-0 after:bg-red-500 after:transition-transform after:duration-300 hover:after:scale-x-100"
                            >
                                <span className="relative z-10">Home</span>
                            </a>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <a
                                href="/organigramma"
                                className="relative px-4 py-2 text-sm font-light tracking-widest text-white/90 hover:text-white transition-colors after:absolute after:bottom-0 after:left-4 after:right-4 after:h-0.5 after:origin-left after:scale-x-0 after:bg-red-500 after:transition-transform after:duration-300 hover:after:scale-x-100"
                            >
                                <span className="relative z-10">Organigramma</span>
                            </a>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <a
                                href="/contatti"
                                className="relative px-4 py-2 text-sm font-light tracking-widest text-white/90 hover:text-white transition-colors after:absolute after:bottom-0 after:left-4 after:right-4 after:h-0.5 after:origin-left after:scale-x-0 after:bg-red-500 after:transition-transform after:duration-300 hover:after:scale-x-100"
                            >
                                <span className="relative z-10">Contatti</span>
                            </a>
                        </NavigationMenuItem>
                    </NavigationMenuList>

                </NavigationMenu>
            </div>
        </nav>
    )
}