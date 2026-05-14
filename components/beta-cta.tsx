"use client";

import { Button } from "@/components/ui/button";
import { BETA_SIGNUP_HREF } from "@/lib/site-config";

export function BetaCta() {
  return (
    <section id="beta" className="border-t border-border/60 bg-surface/50">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="glass-card mx-auto max-w-2xl space-y-6 p-8 text-center sm:p-10">
          <div className="space-y-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Beta access
            </p>
            <h2 className="text-2xl font-semibold tracking-tight">
              Join the Relai Beta Group
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Relai Beta Group gets exclusive access to Buyers Locker Room and
              Seller Sorting Software for free during the beta period and a
              lifetime discounted coupon for software once released.
            </p>
          </div>

          <form
            className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center"
            onSubmit={(e) => e.preventDefault()}
          >
            <label htmlFor="beta-email" className="sr-only">
              Email address
            </label>
            <input
              id="beta-email"
              type="email"
              name="email"
              placeholder="you@example.com"
              className="h-11 w-full rounded-xl border border-border/80 bg-card-solid px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 sm:max-w-xs"
              autoComplete="email"
            />
            <Button href={BETA_SIGNUP_HREF} className="shrink-0">
              Click to Join Beta Group
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
