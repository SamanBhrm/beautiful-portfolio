import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
    const [isScrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0  w-full z-40 transition-all duration-300",
                isScrolled
                    ? "py-3 bg-background/80 backdrop-blur-md shadow-xs"
                    : "py-5"
            )}
        >
            <div className="w-full flex items-center justify-between px-4 md:px-8 lg:px-12">

                {/* Logo */}
                <a
                    href="#hero"
                    className="text-xl font-bold text-primary flex items-center shrink-0"
                    onClick={() => setIsMenuOpen(false)}
                >
                    <span className="relative z-10">
                        <span className="text-glow text-foreground">
                            PedroTech
                        </span>{" "}
                        Portfolio
                    </span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden ml-30 md:flex items-center gap-6 lg:gap-8">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

                {/* Theme Toggle + Mobile Menu */}
                <div className="flex items-center gap-4 shrink-0">

                    {/* Theme Toggle */}
               <div
    className={cn(
        "relative z-50 transition-opacity duration-300 md:hidden",
        isMenuOpen
            ? "opacity-0 pointer-events-none"
            : "opacity-100"
    )}
>
    {/* کامپوننت تغییر تم خودت */}
</div>
                    {/* Mobile Menu Button */}
                    <button
                        type="button"
                        className="md:hidden relative z-50 text-foreground"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label={
                            isMenuOpen
                                ? "Close navigation menu"
                                : "Open navigation menu"
                        }
                        aria-expanded={isMenuOpen}
                    >
                        {isMenuOpen ? (
                            <span className="text-2xl">✕</span>
                        ) : (
                            <span className="text-2xl">☰</span>
                        )}
                    </button>

                </div>

                {/* Mobile Menu */}
                <div
                    className={cn(
                        "fixed inset-0 bg-background/95 backdrop-blur-md z-40",
                        "flex flex-col items-center justify-center gap-8",
                        "transition-all duration-300 md:hidden",
                        isMenuOpen
                            ? "opacity-100 pointer-events-auto"
                            : "opacity-0 pointer-events-none"
                    )}
                >
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="text-foreground/80 hover:text-primary transition-colors duration-300 text-lg"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

            </div>
        </nav>
    );
};