import Image from "next/image";

const products: { name: string; description: string; url?: string; docsUrl?: string; icon: React.ReactNode }[] = [
  {
    name: "DrapeStudio",
    description:
      "AI-powered product photography for Sri Lankan e-commerce sellers. Transform basic product photos into professional catalog-ready images.",
    url: "https://drapestudiolk.com",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
      </svg>
    ),
  },
  {
    name: "GoviHub",
    description:
      "Agricultural intelligence platform connecting Sri Lankan farmers with buyers through smart matching, real-time pricing, and Sinhala/Tamil language support. Currently piloting for the spices market.",
    url: "https://spices.govihublk.com/si",
    docsUrl: "https://docs.govihublk.com",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
      </svg>
    ),
  },
  {
    name: "Walk For Peace Credential Manager",
    description:
      "Event credential and registration management system built for the Walk For Peace initiative. Digital badge generation, check-in management, and participant tracking.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
      </svg>
    ),
  },
  {
    name: "PrimePath HR",
    description:
      "Payroll management system built for Sri Lankan small and medium businesses. Handles salary calculations, statutory deductions (EPF/ETF), and employee records with full compliance to Sri Lankan labor regulations.",
    url: "https://paylk.aigniteconsulting.ai",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-bg/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <Image
              src="/logos/AiGNITE_Final_Logo_Dark.png"
              alt="AiGNITE Software"
              width={140}
              height={40}
              priority
            />
          </div>
          <div className="hidden items-center gap-8 text-sm text-text-muted sm:flex">
            <a href="#about" className="transition-colors hover:text-text-primary">
              About
            </a>
            <a href="#products" className="transition-colors hover:text-text-primary">
              Products
            </a>
            <a href="#team" className="transition-colors hover:text-text-primary">
              Team
            </a>
            <a
              href="#contact"
              className="rounded-lg bg-brand-green-deep px-4 py-2 text-text-primary transition-colors hover:bg-brand-green-dark"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
        {/* Background gradient */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/4 h-96 w-96 -translate-x-1/2 rounded-full bg-brand-green/10 blur-3xl" />
          <div className="absolute right-1/4 top-1/3 h-64 w-64 rounded-full bg-brand-gold/5 blur-3xl" />
        </div>

        <div className="section-container relative text-center">
          <div className="animate-fade-in">
            <Image
              src="/logos/AiGNITE_Final_Logo_Dark.png"
              alt="AiGNITE Software"
              width={280}
              height={80}
              className="mx-auto mb-8"
              priority
            />
            <p className="mb-4 font-mono text-sm uppercase tracking-widest text-brand-green">
              Software (Pvt) Ltd
            </p>
            <h1 className="font-heading text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
              AI-Powered Software
              <br />
              <span className="text-gradient-green">Solutions from Sri Lanka</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-text-muted">
              Combining Silicon Valley engineering standards with deep local domain
              knowledge to deliver intelligent software that solves real problems.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#products"
                className="rounded-lg bg-brand-green px-8 py-3 font-semibold text-bg transition-colors hover:bg-brand-green-dark"
              >
                Our Products
              </a>
              <a
                href="#about"
                className="rounded-lg border border-border-light px-8 py-3 font-semibold text-text-primary transition-colors hover:bg-bg-surface"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-border">
        <div className="section-container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold sm:text-4xl">
              About <span className="text-gradient-green">AiGNITE Software</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-text-muted">
              AiGNITE Software (Pvt) Ltd is the Sri Lankan arm of the AiGNITE
              ecosystem, building AI-powered products for local and regional
              markets. We combine Silicon Valley engineering standards with deep
              local domain knowledge to deliver intelligent software that solves
              real problems.
            </p>
            <div className="glass-card mx-auto mt-10 max-w-2xl p-6">
              <p className="text-sm leading-relaxed text-text-muted">
                <span className="text-brand-gold">●</span>{" "}
                AiGNITE Software (Pvt) Ltd operates as a sister company to{" "}
                <a
                  href="https://aigniteconsulting.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-green transition-colors hover:text-brand-green-dark"
                >
                  AiGNITE Consulting LLC
                </a>{" "}
                (Houston, TX), sharing architecture patterns, AI expertise, and
                engineering standards across both entities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="border-t border-border bg-bg-alt">
        <div className="section-container">
          <div className="text-center">
            <h2 className="font-heading text-3xl font-bold sm:text-4xl">
              Our <span className="text-gradient-green">Products</span>
            </h2>
            <p className="mt-4 text-text-muted">
              Intelligent solutions for Sri Lankan markets
            </p>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {products.map((product) => (
              <div key={product.name} className="glass-card-hover p-8">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-lg bg-brand-green/10 text-brand-green">
                  {product.icon}
                </div>
                <h3 className="font-heading text-xl font-semibold">
                  {product.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">
                  {product.description}
                </p>
                {(product.url || product.docsUrl) && (
                  <div className="mt-4 flex items-center gap-4">
                    {product.url && (
                      <a
                        href={product.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-brand-green transition-colors hover:text-brand-green-dark"
                      >
                        Visit →
                      </a>
                    )}
                    {product.docsUrl && (
                      <a
                        href={product.docsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-brand-gold transition-colors hover:text-brand-gold-light"
                      >
                        Learn the concept →
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="border-t border-border">
        <div className="section-container">
          <div className="text-center">
            <h2 className="font-heading text-3xl font-bold sm:text-4xl">
              Our <span className="text-gradient-green">Team</span>
            </h2>
            <div className="glass-card mx-auto mt-10 max-w-md p-10">
              <div className="mb-4 text-4xl text-text-dim">👥</div>
              <p className="text-lg text-text-muted">
                Meet our team — coming soon
              </p>
            </div>
            <div className="mx-auto mt-10 grid max-w-2xl gap-6 sm:grid-cols-2">
              <div className="glass-card p-6 text-left">
                <p className="text-xs font-medium uppercase tracking-wider text-brand-gold">
                  Director
                </p>
                <p className="mt-2 font-heading text-lg font-semibold">
                  Aruni Samaranayake
                </p>
                <p className="mt-1 text-sm text-text-muted">
                  AiGNITE Software (Pvt) Ltd
                </p>
              </div>
              <div className="glass-card p-6 text-left">
                <p className="text-xs font-medium uppercase tracking-wider text-brand-gold">
                  Principal Software Architect & Mentor
                </p>
                <p className="mt-2 font-heading text-lg font-semibold">
                  Nuwan Samaranayake
                </p>
                <p className="mt-1 text-sm text-text-muted">
                  Founder/CEO, AiGNITE Consulting LLC
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-border bg-bg-alt">
        <div className="section-container text-center">
          <h2 className="font-heading text-3xl font-bold sm:text-4xl">
            Get in <span className="text-gradient-green">Touch</span>
          </h2>
          <p className="mt-4 text-text-muted">
            Interested in our products or looking to collaborate?
          </p>
          <a
            href="mailto:contact@aignitelk.com"
            className="mt-8 inline-block rounded-lg bg-brand-green px-8 py-3 font-semibold text-bg transition-colors hover:bg-brand-green-dark"
          >
            contact@aignitelk.com
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
          <p className="text-sm text-text-dim">
            © 2025 AiGNITE Software (Pvt) Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-text-dim">
            <a
              href="https://aigniteconsulting.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-text-muted"
            >
              AiGNITE Consulting LLC
            </a>
            <a
              href="mailto:contact@aignitelk.com"
              className="transition-colors hover:text-text-muted"
            >
              contact@aignitelk.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
