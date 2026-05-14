"use client";

import { Button } from "@/components/ui/button";
import { BETA_SIGNUP_HREF } from "@/lib/site-config";

export function BetaCta() {
  return (
    <div id="beta" className="glass-card w-full max-w-lg space-y-5 p-6 sm:p-7">
      <div className="space-y-2">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          Beta access
        </p>
        <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
          Join the Relai Beta Group
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Relai Beta Group gets exclusive access to Buyers Locker Room and
          Seller Sorting Software for free during the beta period and a lifetime
          discounted coupon for software once released.
        </p>
      </div>

      <form
        className="flex flex-col gap-3 sm:flex-row sm:items-center"
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
  );
}
