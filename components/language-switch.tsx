"use client";

import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language-context";

export function LanguageSwitch() {
  const { language, setLanguage } = useLanguage();

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => setLanguage(language === "en" ? "ar" : "en")}
      className="shrink-0 rounded-full border-border/80 bg-background/80 backdrop-blur-sm hover:bg-primary/5 hover:border-primary/30 gap-2 px-4 h-9"
    >
      <Globe className="h-3.5 w-3.5 text-primary" />
      <span className={language === "en" ? "font-[family-name:var(--font-arabic)]" : ""}>
        {language === "en" ? "العربية" : "English"}
      </span>
    </Button>
  );
}
