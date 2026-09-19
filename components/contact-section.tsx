// components/home/contact-section.tsx
import { MapPin, Phone, Mail, ArrowUpRight, Clock } from "lucide-react";
import Container from "./common/container";
import ConsultationForm from "./consultation-form";
import SectionHeading from "./common/section-heading";

export default function ContactSection() {
  return (
    <section
      className="relative scroll-mt-6 overflow-hidden bg-background pt-20 sm:pt-24"
      id="contact"
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
              className="relative flex h-full min-h-[520px] flex-col overflow-hidden rounded-3xl
              bg-cyprus p-6 sm:p-10"
            >
              {/* Animated smoky background */}
              <div className="pointer-events-none absolute inset-0 opacity-60">
                <div className="absolute -top-1/4 left-1/4 h-[140%] w-[140%] animate-[spin_25s_linear_infinite] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.10)_0%,_transparent_60%)] blur-2xl" />
                <div className="absolute -bottom-1/3 -right-1/4 h-[120%] w-[120%] animate-[spin_35s_linear_infinite_reverse] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(220,190,140,0.12)_0%,_transparent_60%)] blur-2xl" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(255,255,255,0.06),_transparent_50%)]" />
              </div>

              {/* Noise/gradient overlay for depth */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30" />

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
                <div className="mt-10 space-y-0 divide-y divide-white/10">
                  {/* Office */}
                  <div className="flex items-center gap-4 py-4 first:pt-0">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-sand">
                      <MapPin className="h-[18px] w-[18px]" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold uppercase tracking-[0.1em] text-sand/50">
                        Office Location
                      </p>
                      <p className="mt-0.5 font-medium leading-5 text-sand/90">
                        Malerna, Near PNB, Delhi Mumbai Expressway, Sector 142,
                        Faridabad
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <a
                    href="tel:+919990533555"
                    className="group flex items-center gap-4 py-4"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-sand transition-colors duration-300 group-hover:bg-sand group-hover:text-cyprus">
                      <Phone className="h-[18px] w-[18px]" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold uppercase tracking-[0.1em] text-sand/50">
                        Direct Phone Line
                      </p>
                      <p className="mt-0.5 text-base font-bold text-sand">
                        +91 99905 33555
                      </p>
                    </div>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-sand/40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:text-sand" />
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:support@trustifiedloans.com"
                    className="group flex items-center gap-4 py-4"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-sand transition-colors duration-300 group-hover:bg-sand group-hover:text-cyprus">
                      <Mail className="h-[18px] w-[18px]" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold uppercase tracking-[0.1em] text-sand/50">
                        Email Support
                      </p>
                      <p className="mt-0.5 truncate text-base font-bold text-sand">
                        support@trustifiedloans.com
                      </p>
                    </div>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-sand/40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:text-sand" />
                  </a>

                  {/* Hours */}
                  <div className="flex items-center gap-4 py-4 last:pb-0">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-sand">
                      <Clock className="h-[18px] w-[18px]" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold uppercase tracking-[0.1em] text-sand/50">
                        Working Hours
                      </p>
                      <p className="mt-0.5 text-base font-bold text-sand">
                        Mon – Sat · 9:00 AM – 7:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
