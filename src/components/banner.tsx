"use client";

import localFont from "next/font/local";
import Image from "next/image";
import { useEffect, useState } from "react";

// Doto (SIL OFL), subset to the clock's characters: 0-9, ":", "IST".
const doto = localFont({ src: "../fonts/doto-clock.woff2", weight: "900" });

const clock = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Asia/Kolkata",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
});

export function Banner() {
  // Rendered only after mount so server and client markup match.
  const [now, setNow] = useState<string>();

  useEffect(() => {
    const tick = () => setNow(clock.format(new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative h-40 overflow-hidden border-b bg-black sm:h-52">
      <Image
        src="/banner-samurai-wide.jpg"
        alt=""
        fill
        priority
        sizes="(min-width: 896px) 896px, 100vw"
        className="object-cover object-[30%_50%]"
      />
      {now && (
        <time
          title="Local time in Pune"
          className={`${doto.className} absolute bottom-2 right-4 text-xl tracking-[0.15em] text-black [text-shadow:0_0_8px_rgb(255_255_255/0.6)]`}
        >
          {now} IST
        </time>
      )}
    </div>
  );
}
