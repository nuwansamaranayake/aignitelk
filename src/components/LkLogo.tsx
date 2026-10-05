import Image from "next/image";

// AiGNITE Software lockup (option A, AiGNITE Design System):
// yin-yang mark + "AiGNITE / SOFTWARE" wordmark + Sri Lankan flag stripe.
export default function LkLogo({ size = 40, dark = false }: { size?: number; dark?: boolean }) {
  const icon = Math.round(size * 1.3);
  return (
    <span className="inline-flex items-center" style={{ gap: size * 0.3 }}>
      <Image
        src="/logos/AiGNITE_Final_Icon_Light.svg"
        alt=""
        width={icon}
        height={icon}
        className="block"
        style={{ margin: -icon * 0.105 }}
        priority
      />
      <span className="flex flex-col" style={{ gap: size * 0.17 }}>
        <span
          className={`font-heading font-bold leading-none tracking-[-0.01em] ${dark ? "text-lk-paper" : "text-lk-ink"}`}
          style={{ fontSize: size * 0.62 }}
        >
          AiGNITE
        </span>
        <span
          className={`font-heading font-medium uppercase leading-none tracking-[0.38em] ${dark ? "text-lk-gold" : "text-lk-maroon"}`}
          style={{ fontSize: size * 0.17 }}
        >
          Software
        </span>
        <span className="block bg-stripe" style={{ height: Math.max(2, size * 0.06) }} />
      </span>
    </span>
  );
}
