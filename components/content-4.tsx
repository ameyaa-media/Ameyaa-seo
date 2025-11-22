import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function ContentSection() {
  return (
    <section className="py-16 md:py-32" id="about">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-balance text-4xl font-semibold lg:text-5xl mb-5">
          About Us
        </h2>

        <div className="grid gap-6 md:grid-cols-2 md:gap-12">
          <h2 className="text-4xl font-medium">
            We Are Your Growth-Driven SEO Partners
          </h2>
          <div className="space-y-6">
            <p>
              We blend deep SEO expertise with the latest AI technologies to
              deliver measurable, scalable, and sustainable results. From
              ranking #1 on Google to ensuring your brand appears in AI-driven
              answer engines, our strategies are built for 2025 and beyond.
            </p>
            <p>
              <span className="font-bold">Our Mission</span> To help brands grow
              faster using ethical SEO, intelligent automation, and transparent
              reporting.
            </p>
            <p>
              <span className="font-bold">What Makes Us Different</span>
              AI-powered keyword & competitor insights | 100% white-hat SEO
              strategies | Dedicated success manager | Live performance
              dashboards | Proven results across industries
            </p>
            <Button
              asChild
              variant="secondary"
              size="sm"
              className="gap-1 pr-1.5"
            >
              <Link href="#">
                <span>Learn More</span>
                <ChevronRight className="size-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
