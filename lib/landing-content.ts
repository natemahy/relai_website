export const TRIAL_CTA_LABEL = "Try Free for 7 Days";

export const HERO_HEADLINE =
  "Run your live show. Relai labels wins, organizes buyers, and proves every purchase.";

/** Sticky section nav — anchor links scroll to each block on the page */
export const LIVE_DEMO = {
  eyebrow: "Live demo",
  title: "Watch a label print on every win",
  description:
    "When a buyer wins on stream, Relai detects it and sends the label to your printer automatically — no typing, no delay.",
} as const;

export const SECTION_NAV = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Live Demo", href: "#live-demo" },
  { label: "Dashboard & Tools", href: "#after-show" },
  { label: "Locker Room", href: "#locker-room" },
  { label: "Print Modes", href: "#print-modes" },
  { label: "FAQ", href: "#faq" },
  { label: "Pricing", href: "#pricing" },
] as const;

export const HERO_TRUST_BADGES = [
  "Chrome",
  "Mac, Windows & Linux",
  "Cloud — connect anywhere",
  "Cancel anytime",
  "Works with your printer",
] as const;

/** Prominent compatibility callout for silent label printing. */
export const PRINT_PLATFORM_COMPATIBILITY = {
  headline: "Silent label printing: Mac, Windows, or Linux desktop",
  supportedLine: "Automatic labels work on macOS 11+, Windows 10/11, and Linux desktop (Ubuntu, Fedora, etc.) with Google Chrome.",
  notSupportedLine:
    "Not supported on Chromebook (Chrome OS). Use a Mac or Windows PC as your show computer for printing — you can still sell from your phone.",
  installers: [
    { file: "RelaiPrint-mac.pkg", platform: "Mac" },
    { file: "RelaiPrint-windows.exe", platform: "Windows" },
    { file: "RelaiPrint-linux.sh", platform: "Linux desktop" },
  ],
} as const;

export const PRINT_MODE_PILLS = [
  {
    title: "Every Item",
    description: "Label per win so you can tag each item",
  },
  {
    title: "Once Per Buyer",
    description: "One label per buyer per show using the box method",
  },
  {
    title: "Every Item + Buyer",
    description: "Both labels at once — tag items and sort by buyer",
  },
] as const;

export const PLATFORM_STRIP = [
  { name: "Whatnot", status: "live" as const },
  { name: "eBay Live", status: "testing" as const },
  { name: "TikTok Live", status: "soon" as const },
  { name: "Facebook Live", status: "soon" as const },
] as const;

export const GET_STARTED_ITEMS = [
  {
    title: "Whatnot seller account",
    description: "Free to sign up on Whatnot",
  },
  {
    title: "Thermal label printer",
    description: "USB connection preferred",
  },
  {
    title: "Mac, Windows, or Linux desktop",
    description: "macOS 11+, Windows 10/11, or Linux with CUPS — not Chromebook",
  },
  {
    title: "Google Chrome",
    description: "Relai runs in Chrome — extension and web app",
  },
] as const;

export const BEFORE_AFTER = {
  before: {
    title: "Writing labels by hand, sorting after the show.",
    items: [
      "Scribbling usernames or item numbers between sales.",
      "Hunting through a pile of items to group them by buyer.",
      "Hours of sorting before you can start packing.",
    ],
  },
  after: {
    title: "Labels print themselves. Packages are already organized.",
    items: [
      "A label prints the moment a buyer wins.",
      "Same buyer wins again? Same number. Items stay together.",
      "Show ends, everything is sorted — you start packing.",
    ],
  },
} as const;

export const HOW_IT_WORKS_STEPS = [
  {
    step: 1,
    title: "Install & Connect",
    description:
      "Install the Relai Chrome extension. Open your show in Relai, connect your thermal printer, and pick your label size. We recommend removable labels so they peel off cleanly.",
  },
  {
    step: 2,
    title: "Go Live",
    description:
      "Stream from your phone or iPad as usual on a separate computer. Relai watches wins, bins buyers' wins, and prints labels automatically.",
  },
  {
    step: 3,
    title: "Pack & Ship",
    description:
      "Labels print with buyer numbers. Use the Sorter page, download your after-show PDF, and ship — buyers can check the Locker Room anytime.",
  },
] as const;

export const AFTER_SHOW_TOOLKIT = [
  {
    title: "Seller Dashboard",
    description:
      "Your command center — lots sold, locker room visits, and estimated time saved. See how Relai is working for your business month to month.",
    accent: "accent-top-blue" as const,
  },
  {
    title: "After-Show PDF",
    description:
      "Download a printable buyer and lot summary when the show ends. Match items to buyers, fix spelling, and pack without digging through notes.",
    accent: "accent-top-green" as const,
  },
  {
    title: "Sorter Live Page",
    description:
      "Share a link with packers on your team. Mark lots binned in real time during the show — no seller login required on the sorter screen.",
    accent: "accent-top-orange" as const,
  },
] as const;

export const LOCKER_ROOM_HIGHLIGHTS = [
  "Buyers enter their username and instantly see photos of their wins.",
  "Builds trust right after the show — no waiting days for proof of purchase.",
  "Monster hits and lot details buyers actually want to see.",
  "300 Buyer Locker Room photos included in your free trial.",
] as const;

export const PRINTER_OPTIONS = [
  "USB (recommended)",
  "Network",
  "Bluetooth",
  "Removable labels recommended",
] as const;

export const LABEL_SIZES = [
  { size: '2 × 2"', description: "Compact square tags for small items." },
  { size: '2 × 3"', description: "Popular all-around size for most items." },
  { size: '3 × 3"', description: "More room for item and buyer details." },
  { size: '4 × 6"', description: "Shipping-label size — sort and ship on one label." },
] as const;

export const PRINT_MODES_DETAILED = [
  {
    title: "Every Item",
    description:
      'Prints a label for every auction win. Each label shows the username, item name, and a badge like "Auction Win" or "Buy It Now." Best when you want to tag each item individually.',
    preview: { type: "item" as const, buyer: "TestUser123", number: 42, item: "Mens Black Leather Jacket Size L" },
  },
  {
    title: "Once Per Buyer",
    description:
      "Prints one label per buyer on their first win of the show. Shows a large buyer number and username. The box method: stick the label on a box or bag, then toss in each item as that buyer keeps winning.",
    preview: { type: "buyer" as const, buyer: "TestUser123", number: 42 },
  },
  {
    title: "Every Item + Buyer",
    description:
      "Both at once. Prints an item label for each win and a buyer label on the first win. Tag individual items and sort by buyer at the same time.",
    preview: { type: "both" as const, buyer: "TestUser123", number: 42, item: "Mens Black Leather Jacket Size L" },
  },
] as const;

export type SellerFeatureAccent = "blue" | "green" | "orange";

export type SellerFeatureIcon =
  | "printer"
  | "hash"
  | "users"
  | "sparkles"
  | "vision"
  | "locker"
  | "pdf"
  | "sorter"
  | "cloud"
  | "dashboard";

export const BUILT_FOR_SELLERS = [
  {
    title: "Instant Label Printing",
    description: "Labels print automatically when sales are detected. No manual input needed.",
    accent: "blue",
    icon: "printer",
  },
  {
    title: "Sequential Numbering",
    description: "Each buyer gets a numbered label. Simple system to keep packages organized.",
    accent: "green",
    icon: "hash",
  },
  {
    title: "Repeat Buyer Detection",
    description: "Automatically recognizes repeat buyers within a show. No duplicate bin labels.",
    accent: "orange",
    icon: "users",
  },
  {
    title: "Hands-Free Printing",
    description: "Labels print while you focus on selling. No typing, no writing — just sell.",
    accent: "blue",
    icon: "sparkles",
  },
  {
    title: "AI Vision & Lot Photos",
    description: "Capture lot photos on save. Computer vision helps flag issues before they ship.",
    accent: "green",
    icon: "vision",
  },
  {
    title: "Buyer Locker Room",
    description: "Buyers see their wins in a dedicated gallery — builds trust and repeat business.",
    accent: "orange",
    icon: "locker",
  },
  {
    title: "After-Show PDF",
    description: "Printable show summary grouped by buyer. Pack faster with less guesswork.",
    accent: "blue",
    icon: "pdf",
  },
  {
    title: "Live Sorter Page",
    description: "Packing crew marks lots binned in real time with a shareable link.",
    accent: "green",
    icon: "sorter",
  },
  {
    title: "Cloud App",
    description: "Connect from anywhere. Web app in Chrome on Mac, Windows, or Linux desktop for printing.",
    accent: "orange",
    icon: "cloud",
  },
  {
    title: "Seller Dashboard",
    description: "Track lots sold, locker visits, and estimated time saved across your shows.",
    accent: "blue",
    icon: "dashboard",
  },
] as const satisfies ReadonlyArray<{
  title: string;
  description: string;
  accent: SellerFeatureAccent;
  icon: SellerFeatureIcon;
}>;

export const FAQ_ITEMS = [
  {
    question: "How does Relai know when someone wins?",
    answer:
      "You sign into your selling platform inside Relai's Chrome extension, and it watches your stream. On Whatnot it picks up auction wins, giveaways, Buy It Now purchases, and accepted offers automatically. On eBay Live it picks up auction wins. Nothing extra to set up.",
  },
  {
    question: "Do I need my phone and my computer?",
    answer:
      "Yes. Sell from your phone or iPad like you normally do. Relai runs on your computer alongside your show, printing labels as buyers win.",
  },
  {
    question: "What do I need to use Relai?",
    answer:
      "A seller account on a supported platform (Whatnot or eBay Live in testing), a thermal label printer, a Mac, Windows, or Linux desktop computer (not Chromebook), and Google Chrome. We recommend removable labels so they peel off cleanly without leaving residue.",
  },
  {
    question: "Which browser do I need?",
    answer:
      "Google Chrome. Relai uses a Chrome extension plus the Relai web app — both require Chrome for the best experience.",
  },
  {
    question: "How fast is setup?",
    answer:
      "Under 5 minutes. Install the Chrome extension, connect your printer, and choose your label size. You're ready to sell.",
  },
  {
    question: "Does it work on Mac and Windows?",
    answer:
      "Yes. Mac requires macOS 11 or later. Windows 10 and 11 are both supported. Linux desktop (Ubuntu, Fedora, etc.) is also supported for printing. You must use Google Chrome as your web browser.",
  },
  {
    question: "Does Relai work on Chromebook?",
    answer:
      "Relai Auction and Locker Room can run in Chrome on many devices, but silent automatic label printing does not work on Chromebook (Chrome OS). Chrome OS does not allow our print helper. Use a Mac, Windows PC, or Linux desktop as your show computer for printing — you can still stream from your phone or tablet.",
  },
  {
    question: "What printers work?",
    answer:
      "If your computer can print to it, Relai can use it. We recommend a USB thermal printer for the best experience, but network and Bluetooth printers work too.",
  },
  {
    question: "What label sizes can I use?",
    answer:
      '2×2", 2×3", 3×3", and 4×6". We recommend removable labels so they peel off cleanly.',
  },
] as const;

export const SUPPORTED_PLATFORMS = [
  {
    name: "Whatnot",
    status: "live" as const,
    description: "Full integration with automatic auction detection and label printing",
  },
  {
    name: "eBay Live",
    status: "testing" as const,
    description: "Auction win detection and label printing — currently in testing",
  },
  {
    name: "TikTok Live",
    status: "soon" as const,
    description: "Coming soon",
  },
  {
    name: "Facebook Live",
    status: "soon" as const,
    description: "Coming soon",
  },
] as const;

export const PRICING_SECTION = {
  headline: "Ready to make your workflow easier?",
  subheadline: "Faster. Smarter. Easier — Relai",
  intro:
    "Start with a 7-day Silver trial, or pick Bronze, Silver, or Gold. All plans include Relai Auction, Locker Room, and label printing.",
  footnote: "Cancel anytime. No per-label fees.",
} as const;

export const PRICING_TRIAL = {
  title: "7-day free trial",
  description:
    "Full Silver features · 300 photos · then $30/mo Bronze unless you upgrade or cancel",
  cta: "Sign up & start trial",
} as const;

export const PRICING_TIERS = [
  {
    id: "bronze" as const,
    title: "Relai Bronze",
    price: 30,
    description: "Run live shows without photos",
    accent: "muted" as const,
    features: [
      "Relai Auction + Relai Locker Room",
      "Whatnot extension & Sorter",
      "Save lots without photos",
      "Basic show analytics",
      "1 live show · 3 archived visible",
    ],
    cta: "Sign up for Bronze",
  },
  {
    id: "silver" as const,
    title: "Relai Silver",
    price: 59,
    description: "Photos + dashboard for growing sellers",
    accent: "highlight" as const,
    features: [
      "Everything in Bronze",
      "Seller dashboard",
      "Full show analytics",
      "2,500 photos / month",
      "1 live show · 20 archived visible",
    ],
    cta: "Sign up for Silver",
  },
  {
    id: "gold" as const,
    title: "Relai Gold",
    price: 99,
    description: "Volume, branding, and history",
    accent: "muted" as const,
    features: [
      "Everything in Silver",
      "6,000 photos / month",
      "Branded per-show Locker Room + logo on photos",
      "Dashboard date filters",
      "1 live show · 50 archived visible",
    ],
    cta: "Sign up for Gold",
  },
] as const;
