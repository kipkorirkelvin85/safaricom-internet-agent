export type FibrePackage = {
  name: "BRONZE" | "SILVER" | "GOLD" | "DIAMOND";
  speed: string;
  price: string;
  theme: "bronze" | "silver" | "gold" | "diamond";
  benefits: string[];
};

export type FiveGPackage = { speed: string; price: string };

export const fibrePackages: FibrePackage[] = [
  { name: "BRONZE", speed: "40 Mbps", price: "2,999", theme: "bronze", benefits: ["Ideal for Small Households with Moderate Usage", "Smooth SD Streaming", "Reliable Browsing & Social Media", "Light Online Gaming"] },
  { name: "SILVER", speed: "60 Mbps", price: "4,100", theme: "silver", benefits: ["Ideal for Medium Families / Multiple Devices", "HD/Full HD Streaming", "Faster Downloads", "Better WiFi Stability"] },
  { name: "GOLD", speed: "150 Mbps", price: "6,299", theme: "gold", benefits: ["Ideal for Small Households with Basic Smart Home Capabilities", "Supports Multiple Smart Devices", "Clear HD/4K Streaming", "Fast Uploads for Remote Work"] },
  { name: "DIAMOND", speed: "500 Mbps", price: "12,499", theme: "diamond", benefits: ["Ideal for Power Users & Content Creators", "Zero-Lag Gaming", "Multiple 4K Streams", "Fast Content Uploads"] },
];

export const fiveGPackages: FiveGPackage[] = [
  { speed: "15 Mbps", price: "2,999" },
  { speed: "50 Mbps", price: "4,000" },
  { speed: "100 Mbps", price: "5,000" },
  { speed: "250 Mbps", price: "10,000" },
];

