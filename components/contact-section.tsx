// components/home/contact-section.tsx
import { MapPin, Phone, Mail, ArrowUpRight, Clock } from "lucide-react";
import Container from "./common/container";
import ConsultationForm from "./consultation-form";

export default function ContactSection() {
  return (
    <section
      className="relative overflow-hidden bg-background py-20 sm:py-24"
      id="contact"
    >
      <Container>
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Left Column */}
          <div className="lg:col-span-5">
            <div className="max-w-lg">
              <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.16em] text-cyprus">
                Contact Us
              </span>

              <h2 className="font-serif text-3xl font-bold leading-[1.1] tracking-tight text-cyprus sm:text-4xl md:text-[42px]">
                Let&apos;s Find the Right Loan for You.
              </h2>

              <p className="mt-4 max-w-md text-sm font-medium leading-6 text-muted sm:text-[15px] sm:leading-7">
                Have questions about a loan? Talk to our team and get clear,
                transparent guidance based on your needs.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mt-7 space-y-2.5 sm:mt-8">
              {/* Office */}
              <div className="group flex items-center gap-3.5 rounded-2xl bg-surface px-4 py-3.5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md sm:px-4.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyprus/[0.06] text-cyprus transition-all duration-300 group-hover:bg-cyprus group-hover:text-sand">
                  <MapPin className="h-[18px] w-[18px]" />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-cyprus/65">
                    Office Location
                  </p>

                  <p className="mt-0.5 text-xs font-medium leading-5 text-muted sm:text-[13px]">
                    Malerna, Near PNB, Delhi Mumbai Expressway, Sector 142,
                    Faridabad, Delhi NCR
                  </p>
                </div>
              </div>

              {/* Phone */}
              <a
                href="tel:+919990533555"
                className="group flex items-center gap-3.5 rounded-2xl bg-surface px-4 py-3.5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md sm:px-4.5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyprus/[0.06] text-cyprus transition-all duration-300 group-hover:bg-cyprus group-hover:text-sand">
                  <Phone className="h-[18px] w-[18px]" />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-cyprus/65">
                    Direct Phone Line
                  </p>

                  <p className="mt-0.5 text-[13px] font-bold text-cyprus">
                    +91 99905 33555
                  </p>
                </div>

                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-background text-cyprus transition-all duration-300 group-hover:-translate-y-0.5 group-hover:bg-cyprus group-hover:text-sand">
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:support@trustifiedloans.com"
                className="group flex items-center gap-3.5 rounded-2xl bg-surface px-4 py-3.5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md sm:px-4.5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyprus/[0.06] text-cyprus transition-all duration-300 group-hover:bg-cyprus group-hover:text-sand">
                  <Mail className="h-[18px] w-[18px]" />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-cyprus/65">
                    Email Support
                  </p>

                  <p className="mt-0.5 truncate text-[13px] font-medium text-muted">
                    support@trustifiedloans.com
                  </p>
                </div>

                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-background text-cyprus transition-all duration-300 group-hover:-translate-y-0.5 group-hover:bg-cyprus group-hover:text-sand">
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </div>
              </a>

              {/* Hours */}
              <div className="group flex items-center gap-3.5 rounded-2xl bg-surface px-4 py-3.5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md sm:px-4.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyprus/[0.06] text-cyprus">
                  <Clock className="h-[18px] w-[18px]" />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-cyprus/65">
                    Working Hours
                  </p>

                  <p className="mt-0.5 text-[13px] font-medium text-muted">
                    Mon – Sat · 9:00 AM – 7:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-7">
            <ConsultationForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
