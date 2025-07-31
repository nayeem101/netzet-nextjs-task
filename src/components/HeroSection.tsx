/* eslint-disable @next/next/no-img-element */
"use client";

import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const HeroSection = () => {
  const features = [
    "Start growing your influence right away—no waiting required!",
    "Create viral TikToks and Reels step by step with easy-to-follow lessons",
    "Use a Personal AI Worker to boost your content",
    "Learn from expert-led courses designed for aspiring influencers",
  ];

  return (
    <section className="px-4 py-4 lg:px-12 max-w-7xl mx-auto">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 items-center ">
          {/* Left Content */}
          <div className="space-y-8 order-2 lg:order-1">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold text-foreground leading-tight">
                Want to Turn Social Media Into a Profitable Career?
              </h1>

              <h2
                className="text-4xl font-medium text-[#00E7F9]"
                style={{
                  textShadow: "0 4px 4px #FC004E",
                }}
              >
                Discover your way to success with Fametonic:
              </h2>
            </div>

            {/* Feature List */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <p className="text-foreground text-base sm:text-lg leading-relaxed">✨{feature}</p>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="space-y-4">
              <Button
                variant="default"
                size="default"
                className="w-full md:w-64 text-lg bg-[#FC004E] hover:bg-amber-600 drop-shadow-glow text-foreground transition-all duration-300 cursor-pointer"
              >
                GET STARTED
                <ChevronRight className="h-10 w-10 ml-2" />
              </Button>

              <p className="text-sm text-center w-full md:w-64 text-muted-foreground">
                1-minute quiz for personalized insights
              </p>
            </div>

            {/* Legal Text */}
            <div className="text-xs text-center md:text-start text-muted-foreground space-y-1">
              <p>
                By clicking &quot;Get Started&quot;, you agree with Terms and Conditions, Privacy Policy, Subscription
                Terms
              </p>
              <p className="mt-2">Fametonic 2025 ©All Rights Reserved.</p>
            </div>
          </div>

          {/* Right Content  */}
          <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              {/* Phone Image */}
              <div className="relative z-10">
                <img
                  src={"/phone-mockup.png"}
                  alt="Fametonic App Interface"
                  className="w-full max-w-sm lg:max-w-6xl xl:max-w-7xl h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
