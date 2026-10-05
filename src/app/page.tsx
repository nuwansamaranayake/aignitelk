import Image from "next/image";
import LkLogo from "@/components/LkLogo";

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
    name: "ScanPass",
    description:
      "Event credentialing and gate access platform for Sri Lankan organizers. Issues QR-coded credentials for media, staff, VIP, and attendees, then verifies them at the gate on mobile devices with GPS and device tracking. Built from the production-proven Walk for Peace Sri Lanka 2026 system, with LKR pricing and Sinhala/Tamil/English support.",
    url: "https://www.scanpasslk.com",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75ZM6.75 16.5h.75v.75h-.75v-.75ZM16.5 6.75h.75v.75h-.75v-.75ZM13.5 13.5h.75v.75h-.75v-.75ZM13.5 19.5h.75v.75h-.75v-.75ZM19.5 13.5h.75v.75h-.75v-.75ZM19.5 19.5h.75v.75h-.75v-.75ZM16.5 16.5h.75v.75h-.75v-.75Z" />
      </svg>
    ),
  },
  {
    name: "PrimePath HR",
    description:
      "Payroll management system built for Sri Lankan small and medium businesses. Handles salary calculations, statutory deductions (EPF/ETF), and employee records with full compliance to Sri Lankan labor regulations.",
    url: "https://lk.primepathhr.ai/login",
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
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-bg/90 backdrop-blur-md">
        <div className="h-[3px] bg-stripe" />
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <LkLogo size={40} />
          </div>
          <div className="hidden items-center gap-8 text-sm text-text-muted sm:flex">
            <a href="#about" className="transition-colors hover:text-lk-maroon">
              About
            </a>
            <a href="#products" className="transition-colors hover:text-lk-maroon">
              Products
            </a>
            <a href="#team" className="transition-colors hover:text-lk-maroon">
              Team
            </a>
            <a
              href="#contact"
              className="rounded-lg bg-lk-maroon px-4 py-2 text-white transition-colors hover:bg-lk-maroon-deep"
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
          <div className="absolute left-1/2 top-1/4 h-96 w-96 -translate-x-1/2 rounded-full bg-lk-saffron/10 blur-3xl" />
          <div className="absolute right-1/4 top-1/3 h-64 w-64 rounded-full bg-lk-maroon/5 blur-3xl" />
        </div>

        <div className="section-container relative text-center">
          <div className="animate-fade-in">
            <div className="mb-8 flex justify-center">
              <LkLogo size={72} />
            </div>
            <p className="mb-4 font-heading text-sm font-semibold uppercase tracking-[0.2em] text-lk-maroon">
              Software (Pvt) Ltd
            </p>
            <h1 className="font-heading text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
              AI-Powered Software
              <br />
              <span className="text-lk-maroon">Solutions from Sri Lanka</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-text-muted">
              Combining Silicon Valley engineering standards with deep local domain
              knowledge to deliver intelligent software that solves real problems.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#products"
                className="rounded-lg bg-lk-maroon px-8 py-3 font-semibold text-white transition-colors hover:bg-lk-maroon-deep"
              >
                Our Products
              </a>
              <a
                href="#about"
                className="rounded-lg border border-lk-maroon px-8 py-3 font-semibold text-lk-maroon transition-colors hover:bg-lk-maroon/5"
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
              About <span className="text-lk-maroon">AiGNITE Software</span>
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
                <span className="text-lk-saffron">●</span>{" "}
                AiGNITE Software (Pvt) Ltd operates as a sister company to{" "}
                <a
                  href="https://aigniteconsulting.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lk-maroon transition-colors hover:text-lk-maroon-deep"
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
              Our <span className="text-lk-maroon">Products</span>
            </h2>
            <p className="mt-4 text-text-muted">
              Intelligent solutions for Sri Lankan markets
            </p>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {products.map((product) => (
              <div key={product.name} className="glass-card-hover p-8">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-lg bg-lk-maroon/10 text-lk-maroon">
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
                        className="inline-flex items-center gap-1 text-sm text-lk-maroon transition-colors hover:text-lk-maroon-deep"
                      >
                        Visit →
                      </a>
                    )}
                    {product.docsUrl && (
                      <a
                        href={product.docsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-lk-teal transition-colors hover:text-lk-teal-soft"
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
          <h2 className="text-center font-heading text-3xl font-bold sm:text-4xl">
            Our <span className="text-lk-maroon">Team</span>
          </h2>

          {/* Nuwan - Featured */}
          <div className="mx-auto mt-14 max-w-3xl">
            <div className="glass-card overflow-hidden sm:flex">
              <div className="flex-shrink-0 sm:w-56">
                <Image
                  src="/team/nuwan_profile.png"
                  alt="Nuwan Samaranayake"
                  width={224}
                  height={280}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-8">
                <p className="text-xs font-medium uppercase tracking-wider text-lk-maroon">
                  Principal Software Architect & Mentor
                </p>
                <h3 className="mt-2 font-heading text-2xl font-bold">
                  Nuwan Samaranayake
                </h3>
                <p className="mt-1 text-sm text-lk-teal">
                  Founder/CEO, AiGNITE Consulting LLC, Houston TX
                </p>
                <p className="mt-4 text-sm leading-relaxed text-text-muted">
                  30 years of software engineering with deep expertise in AI/ML, multi-agent architectures, and enterprise systems. Former technical lead at Infosys/HPE, IBM, and MCI — managing 40+ developer teams across global locations. Architect of AiGNITE&apos;s product suite and AI strategy across both entities.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["AI/ML", "Multi-Agent Systems", "Full Stack", "Cloud Architecture", "Python", "TypeScript"].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-border-light bg-bg-alt px-3 py-1 text-xs text-text-muted"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-4">
                  <a
                    href="mailto:nuwan@aigniteconsulting.ai"
                    className="text-sm text-text-muted transition-colors hover:text-lk-maroon"
                  >
                    nuwan@aigniteconsulting.ai
                  </a>
                  <a
                    href="https://www.linkedin.com/in/nuwan-samaranayake-8a50388/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-text-muted transition-colors hover:text-lk-maroon"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Aruni */}
          <div className="mx-auto mt-8 max-w-3xl">
            <div className="glass-card overflow-hidden sm:flex">
              <div className="flex-shrink-0 sm:w-56">
                <Image
                  src="/team/aruni.jpg"
                  alt="Aruni Samaranayake"
                  width={224}
                  height={280}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-8">
                <p className="text-xs font-medium uppercase tracking-wider text-lk-maroon">
                  Director
                </p>
                <h3 className="mt-2 font-heading text-2xl font-bold">
                  Aruni Samaranayake
                </h3>
                <p className="mt-1 text-sm text-lk-teal">
                  AiGNITE Software (Pvt) Ltd, Sri Lanka
                </p>
                <p className="mt-4 text-sm leading-relaxed text-text-muted">
                  Undergraduate in Information Technology at Keiser University, Florida. Brings a fresh perspective to technology-driven solutions with strong foundations in commerce and IT. Bilingual in English and Sinhala.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["Information Technology", "Business Operations", "Research & Analysis"].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-border-light bg-bg-alt px-3 py-1 text-xs text-text-muted"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-border bg-bg-alt">
        <div className="section-container text-center">
          <h2 className="font-heading text-3xl font-bold sm:text-4xl">
            Get in <span className="text-lk-maroon">Touch</span>
          </h2>
          <p className="mt-4 text-text-muted">
            Interested in our products or looking to collaborate?
          </p>
          <a
            href="mailto:aruni@aigniteconsulting.ai"
            className="mt-8 inline-block rounded-lg bg-lk-maroon px-8 py-3 font-semibold text-white transition-colors hover:bg-lk-maroon-deep"
          >
            aruni@aigniteconsulting.ai
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-lk-maroon-deep">
        <div className="h-1 bg-stripe" />
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
          <p className="text-sm text-lk-sand-2">
            © 2025 AiGNITE Software (Pvt) Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-lk-sand-2">
            <a
              href="https://aigniteconsulting.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-lk-gold"
            >
              AiGNITE Consulting LLC
            </a>
            <a
              href="mailto:aruni@aigniteconsulting.ai"
              className="transition-colors hover:text-lk-gold"
            >
              aruni@aigniteconsulting.ai
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
