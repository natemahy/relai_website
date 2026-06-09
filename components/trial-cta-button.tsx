import { Button } from "@/components/ui/button";
import { TRIAL_CTA_LABEL } from "@/lib/landing-content";
import { TRIAL_SIGNUP_HREF } from "@/lib/site-config";

type TrialCtaButtonProps = {
  className?: string;
  variant?: "primary" | "secondary";
};

export function TrialCtaButton({
  className = "",
  variant = "primary",
}: TrialCtaButtonProps) {
  return (
    <Button href={TRIAL_SIGNUP_HREF} variant={variant} className={className}>
      {TRIAL_CTA_LABEL}
    </Button>
  );
}
