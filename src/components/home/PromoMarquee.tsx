import Image from "next/image";

const fiveGPackages = [
  ["15 Mbps", "2,999"],
  ["50 Mbps", "4,000"],
  ["100 Mbps", "5,000"],
  ["250 Mbps", "10,000"],
] as const;

function FiveGProductCard() {
  return <div className="promo-product-card">
    <div className="promo-product-image"><Image src="/images/reuter.png" alt="" fill sizes="58px" className="object-cover object-center" /></div>
    <div><span className="promo-product-kicker">5G Home</span><strong>Internet</strong></div>
  </div>;
}

function SpeedCard({ speed, price }: { speed: string; price: string }) {
  return <div className="promo-speed-card"><div className="promo-speed">{speed}</div><div className="promo-price"><span>KSh</span><strong>{price}</strong></div></div>;
}

function PackageSet() {
  return <div className="promo-marquee-set">{fiveGPackages.map(([speed, price]) => <SpeedCard key={speed} speed={speed} price={price} />)}</div>;
}

export function PromoMarquee() {
  return <section className="promo-marquee" aria-label="5G Home Internet packages">
    <div className="promo-marquee-shell mx-auto max-w-7xl px-5 lg:px-8">
      <FiveGProductCard />
      <div className="promo-package-viewport">
        <div className="promo-marquee-track">
          <PackageSet />
          <div aria-hidden="true" className="shrink-0"><PackageSet /></div>
        </div>
      </div>
    </div>
  </section>;
}
