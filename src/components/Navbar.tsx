import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* 3px gold bar */}
      <div
        className="fixed top-0 left-0 right-0 h-[3px] bg-primary"
        style={{ zIndex: 60 }}
      />
      <header
        className={`fixed top-[3px] left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/90 backdrop-blur-xl border-b border-primary/10"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-5 md:px-8 max-w-7xl">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link
              to="/"
              className="font-display font-semibold text-xl md:text-2xl"
              style={{ letterSpacing: "0.02em" }}
              onClick={() => setOpen(false)}
            >
              <span className="text-foreground">Baseline </span>
              <span className="text-primary">Liquors</span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-10">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="nav-link"
                  activeOptions={{ exact: l.to === "/" }}
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            <Link
              to="/contact"
              className="hidden md:flex items-center gap-2 text-xs uppercase tracking-[0.12em] text-foreground/80 hover:text-primary transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Visit Us
            </Link>

            {/* Mobile toggle */}
            <button
              className="md:hidden text-foreground p-2 -mr-2"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-xl md:hidden flex flex-col items-center justify-center gap-6"
          >
            {links.map((l, i) => (
              <motion.div
                key={l.to}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 * i, duration: 0.4 }}
              >
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="font-display text-3xl font-medium"
                  activeOptions={{ exact: l.to === "/" }}
                  activeProps={{ className: "font-display text-3xl font-medium text-primary" }}
                >
                  {l.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
