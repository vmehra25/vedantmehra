import { Link } from "@nextui-org/link";
import React from "react";

const months = [
  {
    label: "August 2024",
    items: [
      { title: "Best Image AI I tried so far", href: "https://blackforestlabs.ai/" },
      { title: "Some Cool Prompting Techniques", href: "https://www.promptingguide.ai/" },
    ],
  },
  {
    label: "July 2024",
    items: [
      {
        title: "Behavioral Genetics I",
        href: "https://www.youtube.com/watch?v=e0WZx7lUOrY&list=PL848F2368C90DDC3D",
      },
      {
        title: "Amp It Up",
        href: "https://read.amazon.in/kp/embed?asin=B09QHBZDDZ&preview=newtab&linkCode=kpe&ref_=cm_sw_r_kb_dp_5H184PK7GQJRHM95G7K3",
      },
      {
        title: "Dynamo",
        href: "https://www.allthingsdistributed.com/files/amazon-dynamo-sosp2007.pdf?utm_source=blog.quastor.org&utm_medium=referral&utm_campaign=dynamodb-tech-dive",
      },
    ],
  },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-semibold text-[#12354e] dark:text-[#f1ece3]">Reading &amp; notes</h1>
      <div className="mt-3 h-1 w-12 rounded bg-[#bb7125] dark:bg-[#eea78c]" />
      {months.map((m) => (
        <section key={m.label} className="mt-10">
          <h2 className="mb-3 border-b border-[#c2ae93] dark:border-[#c2ae93]/30 pb-2 text-sm font-medium uppercase tracking-wide text-[#12354e]/70 dark:text-[#f1ece3]/70">
            {m.label}
          </h2>
          <ul className="space-y-2">
            {m.items.map((i) => (
              <li key={i.title}>
                <Link
                  showAnchorIcon
                  href={i.href}
                  target="_blank"
                  className="text-[#12354e] dark:text-[#f1ece3] underline decoration-[#bb7125] dark:decoration-[#eea78c] decoration-2 underline-offset-4 hover:decoration-[#eea78c] dark:hover:decoration-[#bb7125]"
                >
                  {i.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </main>
  );
}
