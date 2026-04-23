// Criado - Saulo Prado Versão 1.0 Junho de 2016 Versão 2.0 Março de 2026
import React from 'react';
import { Heart, Activity, Baby, AlertTriangle, Phone } from 'lucide-react';
import { SOCIAL_RESPONSIBILITY } from '../constants';

const ResponsibilityFooter: React.FC = () => {
  const getIcon = (name: string) => {
    if (name.includes('Alcoólicos')) return <Activity className="text-blue-500" />;
    if (name.includes('Doe')) return <Heart className="text-red-500" />;
    if (name.includes('Boldrini')) return <Baby className="text-pink-500" />;
    if (name.includes('CVV')) return <Phone className="text-green-500" />;
    return <AlertTriangle className="text-yellow-500" />;
  };

  return (
    <div className="w-full bg-slate-50 dark:bg-dark-card border-t border-slate-200 dark:border-dark-border mt-12 py-10 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h3 className="text-lg font-bold text-slate-700 dark:text-slate-200 uppercase tracking-widest">Responsabilidade Social</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">Apoie estas causas importantes</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {SOCIAL_RESPONSIBILITY.map((item, idx) => (
            <a
              key={idx}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-4 rounded-lg hover:bg-white dark:hover:bg-slate-800 hover:shadow-md transition-all duration-300 group"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-slate-200 dark:bg-slate-700 rounded-full mb-3 group-hover:scale-110 transition-transform">
                 {getIcon(item.name)}
              </div>
              <span className="font-semibold text-slate-700 dark:text-slate-200 text-sm text-center">{item.name}</span>
              <span className="text-xs text-slate-500 dark:text-slate-400 text-center">{item.description}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResponsibilityFooter;
