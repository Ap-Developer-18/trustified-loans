// components/home/contact-section.tsx
import { MapPin, Phone, Mail, ArrowUpRight, Clock } from "lucide-react";
import dynamic from "next/dynamic";
import Container from "./common/container";
import SectionHeading from "./common/section-heading";

const ConsultationForm = dynamic(() => import("./consultation-form"), {
  loading: () => (
    <div className="h-130 w-full animate-pulse rounded-3xl bg-surface border border-border/80" />
  ),
});

const CONTACT_DETAILS = [
  {
    id: "office",
    icon: MapPin,
    label: "Office Location",
    value: "Malerna, Near PNB, Delhi Mumbai Expressway, Sector 142, Faridabad",
    valueClass: "mt-0.5 font-medium leading-5 text-sand/90",
    wrapperClass: "flex items-center gap-4 py-4 first:pt-0",
    iconWrapperClass:
      "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-sand",
    href: null,
  },
  {
    id: "phone",
    icon: Phone,
    label: "Direct Phone Line",
    value: "+91 99905 33555",
    valueClass: "mt-0.5 text-base font-bold text-sand",
    wrapperClass: "group flex items-center gap-4 py-4",
    iconWrapperClass:
      "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-sand transition-colors duration-300 group-hover:bg-sand group-hover:text-cyprus",
    href: "tel:+919990533555",
    showArrow: true,
  },
  {
    id: "email",
    icon: Mail,
    label: "Email Support",
    value: "support@trustifiedloans.com",
    valueClass: "mt-0.5 truncate text-base font-bold text-sand",
    wrapperClass: "group flex items-center gap-4 py-4",
    iconWrapperClass:
      "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-sand transition-colors duration-300 group-hover:bg-sand group-hover:text-cyprus",
    href: "mailto:support@trustifiedloans.com",
    showArrow: true,
  },
  {
    id: "hours",
    icon: Clock,
    label: "Working Hours",
    value: "Mon – Sat · 9:00 AM – 7:00 PM",
    valueClass: "mt-0.5 text-base font-bold text-sand",
    wrapperClass: "flex items-center gap-4 py-4 last:pb-0",
    iconWrapperClass:
      "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-sand",
    href: null,
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      aria-label="Contact Us"
      className="relative scroll-mt-6 overflow-hidden bg-background pt-20 sm:pt-24 [-webkit-tap-highlight-color:transparent]"
    >
      <Container>
        <SectionHeading
          title="Let's Find the Right Loan for You."
          subtitle="Have questions about a loan? Talk to our team and get clear, transparent guidance based on your needs."
          align="center"
          theme="light"
        />

        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12 lg:gap-8">
          {/* Left Column — Form */}
          <div className="lg:col-span-7">
            <ConsultationForm />
          </div>

          {/* Right Column — Dark Info Card */}
          <div className="lg:col-span-5">
            <div
              className="relative flex h-full min-h-130 flex-col overflow-hidden rounded-3xl
              bg-cyprus p-6 sm:p-10"
            >
              {/* Animated smoky background - Hidden from screen readers */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-60"
              >
                <div className="absolute -top-1/4 left-1/4 h-[140%] w-[140%] animate-[spin_25s_linear_infinite] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.10)_0%,transparent_60%)] blur-2xl" />
                <div className="absolute -bottom-1/3 -right-1/4 h-[120%] w-[120%] animate-[spin_35s_linear_infinite_reverse] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(220,190,140,0.12)_0%,transparent_60%)] blur-2xl" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.06),transparent_50%)]" />
              </div>

              {/* Noise/gradient overlay for depth */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black/30"
              />

              <div className="relative flex h-full flex-col">
                {/* Heading */}
                <div>
                  <h3 className="font-serif text-2xl font-bold leading-tight text-sand sm:text-[28px]">
                    India&apos;s Most Trusted Financial Partner
                  </h3>
                  <p className="mt-2 text-base font-medium text-sand/60">
                    Guiding 10,000+ customers to the right loan.
                  </p>
                </div>

                {/* Contact Info List */}
                <ul
                  role="list"
                  className="mt-10 space-y-0 divide-y divide-white/10 m-0 p-0 list-none"
                >
                  {CONTACT_DETAILS.map((item) => {
                    const Icon = item.icon;
                    const Wrapper = item.href ? "a" : "div";
                    const wrapperProps = item.href
                      ? { href: item.href, className: item.wrapperClass }
                      : { className: item.wrapperClass };

                    return (
                      <li key={item.id}>
                        {/* @ts-ignore */}
                        <Wrapper {...wrapperProps}>
                          <div className={item.iconWrapperClass}>
                            <Icon className="h-4.5 w-4.5" aria-hidden="true" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="text-sm font-semibold uppercase tracking-widest text-sand/50">
                              {item.label}
                            </p>
                            <p className={item.valueClass}>{item.value}</p>
                          </div>
                          {item.showArrow && (
                            <ArrowUpRight
                              aria-hidden="true"
                              className="h-4 w-4 shrink-0 text-sand/40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:text-sand"
                            />
                          )}
                        </Wrapper>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
