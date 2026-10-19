const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
  ];

  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="container mx-auto max-w-5xl px-4 py-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <a href="#hero" className="text-2xl font-bold">
              <span className="text-primary">&lt;</span>
              Portfolio
              <span className="text-primary">/&gt;</span>
            </a>

            <p className="mt-4 max-w-xs text-sm leading-7 text-muted-foreground">
              Frontend developer passionate about creating modern and
              user-friendly web experiences.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Quick Links</h3>

            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Let's Connect</h3>

            <p className="mb-5 text-sm leading-7 text-muted-foreground">
              Have a project in mind? Feel free to get in touch.
            </p>

            <a
              href="mailto:hello@example.com"
              className="inline-block rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-105"
            >
              Contact Me ↗
            </a>

            <div className="mt-5 flex gap-4 text-sm">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                GitHub ↗
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-6 text-center sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Portfolio. All rights reserved.
          </p>

          <a
            href="#hero"
            className="text-sm text-muted-foreground hover:text-primary"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;