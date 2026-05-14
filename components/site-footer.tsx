"use client";

import { useState } from "react";
import { Modal } from "@/components/ui/modal";
import {
  PRIVACY_SECTIONS,
  SUPPORT_EMAIL,
  TERMS_SECTIONS,
} from "@/lib/legal-content";

function LegalSections({
  sections,
}: {
  sections: readonly { title: string; body: string }[];
}) {
  return (
    <div className="space-y-4">
      {sections.map((section) => (
        <section key={section.title}>
          <h3 className="mb-1 font-semibold text-foreground">{section.title}</h3>
          <p>{section.body}</p>
        </section>
      ))}
    </div>
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);

  const linkClass =
    "text-muted-foreground transition-colors hover:text-foreground";

  return (
    <>
      <footer className="border-t border-border/60 bg-surface/30">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p className="text-sm text-muted-foreground">© {year} Relai</p>
          <nav aria-label="Footer" className="flex flex-wrap gap-4 text-sm">
            <button type="button" onClick={() => setPrivacyOpen(true)} className={linkClass}>
              Privacy
            </button>
            <button type="button" onClick={() => setTermsOpen(true)} className={linkClass}>
              Terms
            </button>
            <a href={`mailto:${SUPPORT_EMAIL}`} className={linkClass}>
              Contact
            </a>
          </nav>
        </div>
      </footer>

      <Modal
        open={privacyOpen}
        onClose={() => setPrivacyOpen(false)}
        title="Privacy Policy"
      >
        <LegalSections sections={PRIVACY_SECTIONS} />
        <p className="mt-4 border-t border-border/60 pt-4">
          Contact:{" "}
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="font-medium text-foreground underline-offset-2 hover:underline"
          >
            {SUPPORT_EMAIL}
          </a>
        </p>
      </Modal>

      <Modal open={termsOpen} onClose={() => setTermsOpen(false)} title="Terms of Service">
        <LegalSections sections={TERMS_SECTIONS} />
      </Modal>
    </>
  );
}
