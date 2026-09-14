import Container from "./common/container";

export default function TrustStrip() {
  return (
    <div className="py-10 bg-surface border-y border-border">
      <Container>
        <div className="flex flex-wrap items-center justify-around gap-6 text-center">
          <div>
            <p className="font-serif text-2xl md:text-3xl font-bold text-cyprus">
              78.2M+
            </p>
            <p className="text-xs text-muted uppercase tracking-wider mt-0.5">
              Loan Volume Facilitated
            </p>
          </div>
          <div className="hidden sm:block w-px h-8 bg-border" />
          <div>
            <p className="font-serif text-2xl md:text-3xl font-bold text-cyprus">
              4.9 / 5.0
            </p>
            <p className="text-xs text-muted uppercase tracking-wider mt-0.5">
              Client Satisfaction Score
            </p>
          </div>
          <div className="hidden sm:block w-px h-8 bg-border" />
          <div>
            <p className="font-serif text-2xl md:text-3xl font-bold text-cyprus">
              10+ Years
            </p>
            <p className="text-xs text-muted uppercase tracking-wider mt-0.5">
              Financial Expertise
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
