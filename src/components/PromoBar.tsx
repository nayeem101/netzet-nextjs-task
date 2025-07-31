import { Sparkles } from "lucide-react";

const PromoBar = () => {
  return (
    <div className="bg-gradient-primary py-2 px-4 text-center">
      <div className="flex items-center justify-center gap-2 text-sm font-medium text-foreground">
        <Sparkles className="h-4 w-4" />
        <span className="hidden sm:inline">FRESH BEGINNINGS SALE:</span>
        <span className="sm:hidden">FRESH BEGINNINGS SALE:</span>
        <span>Extra 25% OFF, Limited Spots - start your journey today!</span>
      </div>
    </div>
  );
};

export default PromoBar;