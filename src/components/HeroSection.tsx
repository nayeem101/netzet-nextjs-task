"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

const HeroSection = () => {
  const features = [
    "Start growing your influence right away—no waiting required!",
    "Create viral TikToks and Reels step by step with easy-to-follow lessons",
    "Use a Personal AI Worker to boost your content",
    "Learn from expert-led courses designed for aspiring influencers",
  ];

  return (
    <section className="px-4 py-8 lg:px-8 lg:py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Want to Turn Social Media Into a Profitable Career?
              </h1>

              <h2
                className="text-3xl lg:text-5xl text-cyan font-medium text-[#00E7F9]"
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
                  <div className="flex-shrink-0 mt-1">
                    <Star className="h-5 w-5 text-cyan fill-cyan" />
                  </div>
                  <p className="text-foreground text-base sm:text-lg leading-relaxed">{feature}</p>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="space-y-4">
              <Button variant="cta" size="cta" className="w-full sm:w-auto">
                GET STARTED
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>

              <p className="text-sm text-muted-foreground">1-minute quiz for personalized insights</p>
            </div>

            {/* Legal Text */}
            <div className="text-xs text-muted-foreground space-y-1">
              <p>By clicking "Get Started", you agree with Terms and Conditions, Privacy Policy, Subscription Terms</p>
              <p className="mt-2">Fametonic 2025 ©All Rights Reserved.</p>
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-glow opacity-50 blur-3xl" />

              {/* Phone Image */}
              <div className="relative z-10">
                <img
                  src={"/phone-mockup.png"}
                  alt="Fametonic App Interface"
                  className="w-full max-w-sm lg:max-w-lg xl:max-w-5xl h-auto transform rotate-12 lg:rotate-6"
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
