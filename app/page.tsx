"use client";

import { Converter } from "@/components/converter";
import { Footer } from "@/components/footer";
import { LanguageSwitch } from "@/components/language-switch";
import { useLanguage } from "@/contexts/language-context";
import { Languages } from "lucide-react";

export default function Home() {
  const { t, language } = useLanguage();
  const isRtl = language === "ar";

  return (
    <main
      className="min-h-screen page-bg flex flex-col items-center px-4 py-8 sm:py-12"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div className="w-full max-w-xl">
        <header
          className={`flex items-start justify-between gap-4 mb-8 fade-in-up ${
            isRtl ? "flex-row-reverse" : ""
          }`}
        >
          <div className={isRtl ? "text-right" : "text-left"}>
            <div
              className={`inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-3 ${
                isRtl ? "flex-row-reverse" : ""
              }`}
            >
              <Languages className="h-3.5 w-3.5" />
              <span>3 → ع · 7 → ح · 9 → ق</span>
            </div>
            <h1
              className={`text-3xl sm:text-4xl font-bold tracking-tight text-foreground ${
                isRtl ? "font-[family-name:var(--font-arabic)]" : ""
              }`}
            >
              {t.title}
            </h1>
            <p
              className={`mt-2 text-muted-foreground text-sm sm:text-base max-w-md leading-relaxed ${
                isRtl ? "font-[family-name:var(--font-arabic)]" : ""
              }`}
            >
              {t.description}
            </p>
          </div>
          <LanguageSwitch />
        </header>

        <Converter />

        <Footer />
      </div>
    </main>
  );
}
