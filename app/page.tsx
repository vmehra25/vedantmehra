import { NavBar } from "@/components/nav_bar";
import { Divider } from "@nextui-org/divider";
import { Link } from "@nextui-org/link";
import React from "react";

export default function Home() {
  return (
    <div className="bg-gray-50 p-4 h-screen">
      <section className="pt-4">
        <p className="text-center lg:text-5xl text-4xl text-orange-500 ">
          Intriguing Insights: From Text & The World
        </p>
      </section>
      <section className="mt-16 lg:px-32 md:px-16 px-8">
        <p className="text-3xl text-stone-500 mb-4">August 2024</p>
        <Link
          isBlock
          showAnchorIcon
          href="https://blackforestlabs.ai/"
          color="foreground"
          target="_blank"
          className="text-cyan-600 mr-8"
        >
          Best Image AI I tried so far
        </Link>
        <Link
          isBlock
          showAnchorIcon
          href="https://www.promptingguide.ai/"
          color="foreground"
          target="_blank"
          className="text-red-600 mr-8"
        >
          Some Cool Prompting Techniques
        </Link>
      </section>
      <section className="mt-16 lg:px-32 md:px-16 px-8">
        <p className="text-3xl text-stone-500 mb-4">July 2024</p>
        <Link
          isBlock
          showAnchorIcon
          href="https://www.youtube.com/watch?v=e0WZx7lUOrY&list=PL848F2368C90DDC3D"
          color="foreground"
          target="_blank"
          className="text-cyan-600 mr-8"
        >
          Behavioral Genetics I
        </Link>
        <Link
          isBlock
          showAnchorIcon
          href="https://read.amazon.in/kp/embed?asin=B09QHBZDDZ&preview=newtab&linkCode=kpe&ref_=cm_sw_r_kb_dp_5H184PK7GQJRHM95G7K3"
          color="foreground"
          target="_blank"
          className="text-red-600 mr-8"
        >
          Amp It Up
        </Link>

        <Link
          isBlock
          showAnchorIcon
          href="https://www.allthingsdistributed.com/files/amazon-dynamo-sosp2007.pdf?utm_source=blog.quastor.org&utm_medium=referral&utm_campaign=dynamodb-tech-dive"
          color="foreground"
          target="_blank"
          className="text-green-600"
        >
          Dynamo
        </Link>
      </section>
    </div>
  );
}
