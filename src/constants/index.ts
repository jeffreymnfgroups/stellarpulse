import { Android, Ios, Web, Windows } from "./icons";

export const features = [
  {
    id: "0",
    icon: "/images/feature-1.png",
    caption: "Lineup",
    title: "Progressive, Psy‑Trance, Hitech, Hard‑Techno",
    text:
      "A meticulously curated roster of underground and rising artists from across Switzerland and beyond. Expect deep space journeys, peak‑time energy, and sunrise closers.",
    button: {
      icon: "/images/magictouch.svg",
      title: "View Lineup",
    },
  },
  {
    id: "1",
    icon: "/images/feature-2.png",
    caption: "Venue & Date",
    title: "Next Gathering in Switzerland",
    text:
      "Venue: TBA · Date: TBA. Stellar visuals, tuned sound, accessible location. Sign up to our socials for the announcement and early bird drop.",
    button: {
      icon: "/images/docs.svg",
      title: "Get Updates",
    },
  },
] as const;

export const details = [
  { id: "0", icon: "/images/detail-1.png", title: "Immersive visuals" },
  { id: "1", icon: "/images/detail-2.png", title: "High‑fidelity sound" },
  { id: "2", icon: "/images/detail-3.png", title: "Underground vibes" },
  { id: "3", icon: "/images/detail-4.png", title: "Community‑driven" },
] as const;

export const faq = [
  {
    id: "0",
    question: "What is Stellarpulse?",
    answer:
      "Stellarpulse is a non‑profit collective curating progressive, psy‑trance, hitech, and hard‑techno events across Switzerland.",
  },
  {
    id: "1",
    question: "When and where is the next event?",
    answer:
      "The next venue and date will be announced on our socials. Follow us for the drop and early bird release.",
  },
  {
    id: "2",
    question: "How do I buy tickets?",
    answer:
      "Tap the Buy Tickets button at the top of the page to go directly to our ticketing partner.",
  },
  {
    id: "3",
    question: "What music can I expect?",
    answer:
      "A spectrum from deep progressive to peak‑time psy, relentless hitech, and driving hard‑techno.",
  },
  {
    id: "4",
    question: "Is there an age policy or rules?",
    answer:
      "18+ only. Respect the space and the community. Zero tolerance for harassment or discrimination.",
  },
  {
    id: "5",
    question: "How can I contact you?",
    answer:
      "DM us on Instagram or email info@stellarpulse.ch. We typically respond within 24 hours.",
  },
] as const;

export const plans = [
  {
    id: "0",
    title: "Early Bird",
    priceMonthly: 25,
    priceYearly: 20,
    caption: "Limited release – save before the drop",
    features: [
      "Standard entry",
      "Re‑entry allowed before 1AM",
      "18+ only",
      "Valid ID required",
    ],
    icon: "/images/circle.svg",
    logo: "/images/plan-1.png",
  },
  {
    id: "1",
    title: "General",
    priceMonthly: 35,
    priceYearly: 30,
    caption: "Most popular access tier",
    features: [
      "Standard entry",
      "Re‑entry allowed",
      "Cloakroom available",
      "Tap water free",
    ],
    icon: "/images/triangle.svg",
    logo: "/images/plan-2.png",
  },
  {
    id: "2",
    title: "Backstage",
    priceMonthly: 65,
    priceYearly: 55,
    caption: "Enhanced access & lounge",
    features: [
      "Express entry",
      "Backstage lounge access",
      "Dedicated bar line",
      "Merch discount",
    ],
    icon: "/images/hexagon.svg",
    logo: "/images/plan-3.png",
  },
] as const;

export const testimonials = [
  {
    id: "0",
    name: "Alicia",
    role: "Zurich",
    avatarUrl: "/images/testimonials/alicia-barker.png",
    comment:
      "Insane energy all night. The hitech set at dawn was unreal."
  },
  {
    id: "1",
    name: "Mark",
    role: "Basel",
    avatarUrl: "/images/testimonials/mark-erixon.png",
    comment:
      "Top sound and a respectful crowd. Proper underground vibes."
  },
  {
    id: "2",
    name: "Melanie",
    role: "Geneva",
    avatarUrl: "/images/testimonials/melanie-hurst.png",
    comment:
      "Loved the progressive opening. Visuals felt like deep space."
  },
  {
    id: "3",
    name: "Jim",
    role: "Bern",
    avatarUrl: "/images/testimonials/jim-bradley.png",
    comment:
      "Hard‑techno room was relentless. Will 100% come again."
  },
  {
    id: "4",
    name: "Becky",
    role: "Lausanne",
    avatarUrl: "/images/testimonials/becky-snider.png",
    comment:
      "Community‑driven and safe. Appreciated the no‑harassment policy."
  },
  {
    id: "5",
    name: "Jessica",
    role: "Lugano",
    avatarUrl: "/images/testimonials/jessica-saunders.png",
    comment:
      "Lineup was diverse but cohesive. Perfect flow through the night."
  },
] as const;

export const logos = [
  {
    id: "0",
    title: "Afterpay",
    url: "/images/logos/afterpay.svg",
    width: 156,
    height: 48,
  },
  {
    id: "1",
    title: "Amplitude",
    url: "/images/logos/amplitude.svg",
    width: 194,
    height: 48,
  },
  {
    id: "2",
    title: "Sonos",
    url: "/images/logos/sonos.svg",
    width: 115,
    height: 48,
  },
  {
    id: "3",
    title: "Maze",
    url: "/images/logos/maze.svg",
    width: 142,
    height: 48,
  },
  {
    id: "4",
    title: "Drips",
    url: "/images/logos/drips.svg",
    width: 77,
    height: 48,
  },
] as const;

export const links = [
  {
    id: "0",
    title: "Ios",
    icon: Ios,
    url: "#",
  },
  {
    id: "1",
    title: "Android",
    icon: Android,
    url: "#",
  },
  {
    id: "2",
    title: "Windows",
    icon: Windows,
    url: "#",
  },
  {
    id: "3",
    title: "Web",
    icon: Web,
    url: "#",
  },
] as const;

export const socials = [
  {
    id: "0",
    title: "x",
    icon: "/images/socials/x.svg",
    url: "#",
  },
  {
    id: "1",
    title: "Threads",
    icon: "/images/socials/threads.svg",
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    icon: "/images/socials/instagram.svg",
    url: "#",
  },
  {
    id: "3",
    title: "Discord",
    icon: "/images/socials/discord.svg",
    url: "#",
  },
] as const;

export const site_links = {
  sourceCode: "#",
  tickets: "#", // Replace with live ticket URL
  impressum: "#",
} as const;
