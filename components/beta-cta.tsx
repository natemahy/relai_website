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

      <Button href={BETA_SIGNUP_HREF} className="w-full sm:w-auto">
        Click to Join Beta Group
      </Button>
    </div>
  );
}
