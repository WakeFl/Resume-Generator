import React from "react";

interface Language {
  name: string;
  value: number;
}

interface LanguageStatisticsProps {
  statistics: Language[];
  login: string;
}

const LanguageStatistics: React.FC<LanguageStatisticsProps> = ({
  statistics,
  login,
}) => {
  return (
    <>
      <hr className="my-8" />
      <h2 className="font-semibold text-l mb-4">Used Languages</h2>
      <div className="flex flex-wrap gap-4">
        {statistics.map((language) => (
          <div className="mt-2" key={language.name}>
            <a
              className="text-cyan-500"
              href={`https://github.com/search?q=user%3A${login}+lang%3A${language.name}&type=repositories`}
            >
              {language.name} ({language.value.toFixed(2)}%)
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default LanguageStatistics;
