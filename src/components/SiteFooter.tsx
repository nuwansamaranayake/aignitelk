// Site shell footer, shared by every page.
export default function SiteFooter() {
  return (
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
  );
}
