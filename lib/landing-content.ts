export const TRIAL_CTA_LABEL = "Try Free for 7 Days";

export const HERO_TRUST_BADGES = [
  "Chrome",
  "Mac & Windows",
  "Cloud — connect anywhere",
  "Cancel anytime",
  "Works with your printer",
] as const;

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
    title: "Mac or Windows",
    description: "macOS 11+ or Windows 10/11",
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
  { size: '3 × 2"', description: "Tight workflow for smaller lots and tags." },
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

export const BUILT_FOR_SELLERS = [
  {
    title: "Instant Label Printing",
    description: "Labels print automatically when sales are detected. No manual input needed.",
  },
  {
    title: "Sequential Numbering",
    description: "Each buyer gets a numbered label. Simple system to keep packages organized.",
  },
  {
    title: "Repeat Buyer Detection",
    description: "Automatically recognizes repeat buyers within a show. No duplicate bin labels.",
  },
  {
    title: "Hands-Free Printing",
    description: "Labels print while you focus on selling. No typing, no writing — just sell.",
  },
  {
    title: "AI Vision & Lot Photos",
    description: "Capture lot photos on save. Computer vision helps flag issues before they ship.",
  },
  {
    title: "Buyer Locker Room",
    description: "Buyers see their wins in a dedicated gallery — builds trust and repeat business.",
  },
  {
    title: "After-Show PDF",
    description: "Printable show summary grouped by buyer. Pack faster with less guesswork.",
  },
  {
    title: "Live Sorter Page",
    description: "Packing crew marks lots binned in real time with a shareable link.",
  },
  {
    title: "Cloud App",
    description: "Connect from anywhere. No desktop install — runs in Chrome on Mac or Windows.",
  },
  {
    title: "Seller Dashboard",
    description: "Track lots sold, locker visits, and estimated time saved across your shows.",
  },
] as const;

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
      "A seller account on a supported platform (Whatnot or eBay Live in testing), a thermal label printer, a Mac or Windows computer, and Google Chrome. We recommend removable labels so they peel off cleanly without leaving residue.",
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
      "Yes. Mac requires macOS 11 or later. Windows 10 and 11 are both supported. You must use Google Chrome as your web browser.",
  },
  {
    question: "What printers work?",
    answer:
      "If your computer can print to it, Relai can use it. We recommend a USB thermal printer for the best experience, but network and Bluetooth printers work too.",
  },
  {
    question: "What label sizes can I use?",
    answer:
      '2×2", 3×2", 2×3", 3×3", and 4×6". We recommend removable labels so they peel off cleanly.',
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

export const PRICING = {
  headline: "Ready to make your workflow easier?",
  subheadline: "Faster. Smarter. Easier — Relai",
  price: "$30",
  period: "/ month",
  trialNote: "7-day free trial · then $30/month · cancel anytime",
  bullets: [
    "No per-label fees — print as many as you need",
    "Cloud software application — connect from anywhere",
    "Sequential numbering to stay organized",
    "300 Buyer Locker Room photos included",
  ],
  footnote: "Cancel anytime.",
} as const;
