import { languages } from "@i18n/ui";
import { getLangFromUrl } from "@i18n/utils";
import type { ChangeEventHandler, MouseEventHandler } from "react";

export interface Props {
  language: keyof typeof languages;
  slug: string;
}

export default function ({ language, slug }: Props) {
  const handleChange = (e: any) => {
    e.preventDefault();
    const newLang = e.target.value;
    window.location.pathname = `/${newLang}/${slug}`;
  };

  return (
    <select value={language} onChange={handleChange}>
      <option key={language} value={language}>
        {languages[language]}
      </option>
      {Object.entries(languages).map(([lang, label]) => {
        if (lang === language) return;
        return (
          <option key={lang} value={lang}>
            {label}
          </option>
        );
      })}
    </select>
  );
}
