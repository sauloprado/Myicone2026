// Criado - Saulo Prado Versão 1.0 Junho de 2016 Versão 2.0 Março de 2026
import React, { useState } from 'react';
import { ExternalLink, Globe } from 'lucide-react';
import { LinkItem } from '../types';

interface IconCardProps {
  item: LinkItem;
}

const IconCard: React.FC<IconCardProps> = ({ item }) => {
  const [imgError, setImgError] = useState(false);

  // Using Google's favicon service as a reliable way to get icons without backend
  const faviconUrl = `https://www.google.com/s2/favicons?domain=${item.url}&sz=128`;

  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col items-center justify-center p-4 bg-white dark:bg-dark-card rounded-xl border border-slate-200 dark:border-dark-border shadow-sm hover:shadow-lg hover:border-brand-light dark:hover:border-brand-light transition-all duration-300 transform hover:-translate-y-1"
      title={`Ir para ${item.name}`}
    >
      <div className="relative w-16 h-16 mb-3 flex items-center justify-center bg-slate-50 dark:bg-slate-800 rounded-2xl p-2 group-hover:bg-white dark:group-hover:bg-slate-700 transition-colors">
        {!imgError ? (
          <img
            src={faviconUrl}
            alt={`${item.name} logo`}
            className="w-full h-full object-contain filter group-hover:brightness-110 transition-all"
            onError={() => setImgError(true)}
            loading="lazy"
          />
        ) : (
          <Globe className="w-8 h-8 text-slate-400" />
        )}
        
        {/* Hover indicator icon */}
        <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-brand text-white rounded-full p-1 shadow-sm">
          <ExternalLink size={10} />
        </div>
      </div>

      <span className="text-xs font-semibold text-slate-600 dark:text-slate-300 group-hover:text-brand-dark dark:group-hover:text-brand-light text-center line-clamp-1 w-full px-1">
        {item.name}
      </span>
      
      {item.isHistorical && (
         <span className="absolute top-2 left-2 text-[0.5rem] bg-slate-100 dark:bg-slate-700 text-slate-400 px-1 rounded border border-slate-200 dark:border-slate-600">
           Histórico
         </span>
      )}
    </a>
  );
};

export default IconCard;
