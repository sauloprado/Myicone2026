// Criado - Saulo Prado Versão 1.0 Junho de 2016 Versão 2.0 Março de 2026
import React, { useState, useMemo, useEffect } from 'react';
import { Search, Globe, X, Menu, Grid, Moon, Sun, Gamepad2, BarChart3, Info, Home, Trophy, Newspaper, Brain, Briefcase, Code } from 'lucide-react';
import { 
  HOME_ITEMS, 
  GAME_ITEMS, 
  INDICATOR_ITEMS, 
  AI_LLM_ITEMS,
  AI_CHINA_ITEMS,
  PRODUCTIVITY_ITEMS,
  DEV_CORE_ITEMS,
  DEV_README_ITEMS,
  FOOTBALL_BRASIL, 
  FOOTBALL_EUROPE, 
  FOOTBALL_FIFA,
  NEWSPAPERS_SP,
  NEWSPAPERS_RJ,
  NEWSPAPERS_MG,
  NEWSPAPERS_SUL,
  NEWSPAPERS_OUTROS
} from './constants';
import IconCard from './components/IconCard';
import ResponsibilityFooter from './components/ResponsibilityFooter';

type Page = 'home' | 'ai' | 'productivity' | 'dev' | 'games' | 'indicators' | 'football' | 'communication' | 'about';

// --- Page Banner Component (Desktop/Tablet Only) ---
const PageBanner = ({ page }: { page: Page }) => {
  if (page === 'about') return null;

  const configs = {
    home: {
      title: 'Mundo dos Ícones',
      subtitle: 'Seu portal de atalhos para a internet brasileira',
      gradient: 'from-brand-dark to-brand-light',
      icon: <Globe size={48} className="text-white/80" />
    },
    ai: {
      title: 'Inteligência Artificial',
      subtitle: 'LLMs globais, IAs chinesas e novidades de 2026',
      gradient: 'from-sky-800 to-cyan-500',
      icon: <Brain size={48} className="text-white/80" />
    },
    productivity: {
      title: 'Produtividade',
      subtitle: 'Ferramentas para organizar trabalho, criação e rotina',
      gradient: 'from-teal-800 to-emerald-500',
      icon: <Briefcase size={48} className="text-white/80" />
    },
    dev: {
      title: 'Hub Dev',
      subtitle: 'Python, SQL, JavaScript, React e utilitários para README',
      gradient: 'from-slate-800 to-cyan-600',
      icon: <Code size={48} className="text-white/80" />
    },
    games: {
      title: 'Arena Gamer',
      subtitle: 'Os melhores jogos e plataformas de streaming',
      gradient: 'from-indigo-800 to-sky-600',
      icon: <Gamepad2 size={48} className="text-white/80" />
    },
    indicators: {
      title: 'Indicadores Globais',
      subtitle: 'Finanças, estatísticas e ferramentas em tempo real',
      gradient: 'from-blue-800 to-sky-500',
      icon: <BarChart3 size={48} className="text-white/80" />
    },
    football: {
      title: 'Planeta Futebol',
      subtitle: 'Brasileirão, Champions League e Seleções',
      gradient: 'from-emerald-800 to-teal-500',
      icon: <Trophy size={48} className="text-white/80" />
    },
    communication: {
      title: 'Comunicação e Imprensa',
      subtitle: 'Principais jornais e portais de notícias por estado',
      gradient: 'from-slate-700 to-slate-500',
      icon: <Newspaper size={48} className="text-white/80" />
    },
    about: { title: '', subtitle: '', gradient: '', icon: null } // Handled by early return
  };

  const config = configs[page] || configs.home;

  return (
    <div className={`hidden md:flex w-full rounded-2xl p-8 mb-8 bg-gradient-to-r ${config.gradient} shadow-lg items-center justify-between text-white animate-fade-in-up`}>
      <div className="flex flex-col">
        <h1 className="text-3xl font-black tracking-tight mb-2">{config.title}</h1>
        <p className="text-white/90 font-medium">{config.subtitle}</p>
      </div>
      <div className="bg-white/10 p-4 rounded-full backdrop-blur-sm">
        {config.icon}
      </div>
    </div>
  );
};

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Initialize theme
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
  }, []);

  // Apply theme to html
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const categories = useMemo(() => {
    // Get unique categories just from home items for the main page distribution
    const cats = Array.from(new Set(HOME_ITEMS.map(i => i.category)));
    return cats;
  }, []);

  // Filter items based on search
  const filteredHomeItems = useMemo(() => {
    return HOME_ITEMS.filter(item => 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      item.url.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const filteredGameItems = useMemo(() => {
    return GAME_ITEMS.filter(item => 
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const filteredIndicatorItems = useMemo(() => {
    return INDICATOR_ITEMS.filter(item => 
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const allAiItems = useMemo(() => [...AI_LLM_ITEMS, ...AI_CHINA_ITEMS], []);
  const filteredAiItems = useMemo(() => {
    return allAiItems.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, allAiItems]);

  const filteredProductivityItems = useMemo(() => {
    return PRODUCTIVITY_ITEMS.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const allDevItems = useMemo(() => [...DEV_CORE_ITEMS, ...DEV_README_ITEMS], []);
  const filteredDevItems = useMemo(() => {
    return allDevItems.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, allDevItems]);
  const devPythonDataItems = useMemo(
    () => DEV_CORE_ITEMS.filter(item => ['dev_1', 'dev_2', 'dev_3', 'dev_4', 'dev_5', 'dev_6'].includes(item.id)),
    []
  );
  const devWebItems = useMemo(
    () => DEV_CORE_ITEMS.filter(item => ['dev_7', 'dev_8', 'dev_9', 'dev_10', 'dev_11', 'dev_12', 'dev_13'].includes(item.id)),
    []
  );
  const devDatabaseItems = useMemo(
    () => DEV_CORE_ITEMS.filter(item => ['dev_14', 'dev_15', 'dev_16', 'dev_17'].includes(item.id)),
    []
  );
  const devBackendItems = useMemo(
    () => DEV_CORE_ITEMS.filter(item => ['dev_18', 'dev_19', 'dev_20'].includes(item.id)),
    []
  );

  // Combined football items for search
  const allFootballItems = useMemo(() => [...FOOTBALL_BRASIL, ...FOOTBALL_EUROPE, ...FOOTBALL_FIFA], []);
  const filteredFootballItems = useMemo(() => {
    return allFootballItems.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, allFootballItems]);

  // Combined newspaper items for search
  const allNewspaperItems = useMemo(() => [...NEWSPAPERS_SP, ...NEWSPAPERS_RJ, ...NEWSPAPERS_MG, ...NEWSPAPERS_SUL, ...NEWSPAPERS_OUTROS], []);
  const filteredNewspaperItems = useMemo(() => {
    return allNewspaperItems.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, allNewspaperItems]);


  const NavLink = ({ page, label, icon: Icon }: { page: Page, label: string, icon: any }) => (
    <button 
      onClick={() => {
        setCurrentPage(page);
        setIsMenuOpen(false);
        setSearchQuery('');
        setSelectedCategory(null);
        window.scrollTo(0,0);
      }}
      className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors text-sm font-medium ${
        currentPage === page 
          ? 'text-brand bg-brand/10' 
          : 'text-slate-500 dark:text-slate-400 hover:text-brand dark:hover:text-brand-light'
      }`}
    >
      <Icon size={18} />
      {label}
    </button>
  );

  // Helper to render grid of cards with animation delay
  const RenderGrid = ({ items }: { items: any[] }) => (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6">
      {items.map((item, index) => (
        <div key={item.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 50}ms` }}>
          <IconCard item={item} />
        </div>
      ))}
    </div>
  );

  const homeHighlights: { id: string; page: Page; title: string; description: string; badge: string }[] = [
    { id: 'h_1', page: 'ai', title: 'IAs em alta', description: '20 IAs famosas + bloco de IAs chinesas', badge: 'Atualizado 2026' },
    { id: 'h_2', page: 'dev', title: 'Hub Dev completo', description: 'Python, SQL, JS, React e ferramentas de README', badge: 'Novo' },
    { id: 'h_3', page: 'football', title: 'Futebol 2026', description: 'Listas ajustadas para grupos e temporadas atuais', badge: 'Revisado' },
    { id: 'h_4', page: 'productivity', title: 'Produtividade', description: 'Ferramentas para rotina, time e colaboração', badge: 'Curadoria' },
  ];
  const homeUpdates: { id: string; date: string; title: string; detail: string }[] = [
    { id: 'u_1', date: '06/03/2026', title: 'Página de IA expandida', detail: 'Adicionadas 20 IAs famosas e seção dedicada de IAs chinesas.' },
    { id: 'u_2', date: '06/03/2026', title: 'Página Dev reforçada', detail: 'Incluídas 20 referências de linguagens, libs e docs (ex.: pandas, React, SQL).' },
    { id: 'u_3', date: '06/03/2026', title: 'Hub Dev reorganizado', detail: 'Separação visual por Python Data, Web, Banco de Dados e Backend.' },
    { id: 'u_4', date: '06/03/2026', title: 'Futebol atualizado', detail: 'Listas revisadas para grupos e times alinhados ao cenário 2026.' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-brand-light selection:text-brand-dark transition-colors duration-300">
      
      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-slate-200/60 dark:border-dark-border backdrop-blur-md bg-white/80 dark:bg-dark-bg/80 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            
            {/* Logo */}
            <div className="flex items-center gap-2 group cursor-pointer" onClick={() => {setCurrentPage('home'); setSearchQuery(''); setSelectedCategory(null);}}>
              <div className="relative">
                <Globe className="h-8 w-8 text-brand-dark dark:text-brand group-hover:rotate-180 transition-transform duration-700" />
                <div className="absolute top-0 right-0 h-3 w-3 bg-brand-light rounded-full border-2 border-white dark:border-dark-bg animate-pulse"></div>
              </div>
              <div className="flex flex-col">
                <span className="font-black text-xl tracking-tight leading-none text-brand dark:text-brand-light">Myícone</span>
                <span className="text-[0.6rem] font-bold text-slate-400 dark:text-slate-500 tracking-widest uppercase">Brasil</span>
              </div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-2">
              <NavLink page="home" label="Início" icon={Home} />
              <NavLink page="ai" label="IA" icon={Brain} />
              <NavLink page="productivity" label="Produtividade" icon={Briefcase} />
              <NavLink page="dev" label="Dev" icon={Code} />
              <NavLink page="games" label="Jogos" icon={Gamepad2} />
              <NavLink page="indicators" label="Indicadores" icon={BarChart3} />
              <NavLink page="football" label="Futebol" icon={Trophy} />
              <NavLink page="communication" label="Comunicação" icon={Newspaper} />
              <NavLink page="about" label="Sobre" icon={Info} />
              
              <div className="w-px h-6 bg-slate-200 dark:bg-dark-border mx-2"></div>

              <button 
                onClick={toggleTheme}
                className="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                title="Alternar tema"
              >
                {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
              </button>
            </div>
            
            {/* Mobile Menu Button */}
            <div className="flex items-center gap-4 md:hidden">
              <button 
                onClick={toggleTheme}
                className="p-2 text-slate-500 dark:text-slate-400"
              >
                {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
              </button>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-slate-500 dark:text-slate-400 hover:text-brand">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-200 dark:border-dark-border bg-white dark:bg-dark-bg p-4 flex flex-col gap-2 shadow-lg">
             <NavLink page="home" label="Página Inicial" icon={Home} />
             <NavLink page="ai" label="IA" icon={Brain} />
             <NavLink page="productivity" label="Produtividade" icon={Briefcase} />
             <NavLink page="dev" label="Dev" icon={Code} />
             <NavLink page="games" label="Jogos" icon={Gamepad2} />
             <NavLink page="indicators" label="Indicadores" icon={BarChart3} />
             <NavLink page="football" label="Futebol" icon={Trophy} />
             <NavLink page="communication" label="Comunicação" icon={Newspaper} />
             <NavLink page="about" label="Sobre o Projeto" icon={Info} />
          </div>
        )}
      </nav>

      <main className="flex-grow flex flex-col items-center pt-8 pb-8 px-4 sm:px-6 w-full max-w-7xl mx-auto">
        
        {/* Banner Component (Desktop/Tablet) */}
        <PageBanner page={currentPage} />

        {/* Global Search Bar (Visible on all pages except About) */}
        {currentPage !== 'about' && (
          <>
             {/* Mobile Title (Since banner is hidden on mobile) */}
             <div className="md:hidden text-center mb-6 animate-fade-in-up">
              <h1 className="text-3xl font-black text-slate-800 dark:text-slate-100 mb-2 tracking-tight">
                {currentPage === 'home' && <>Bem vindo ao <span className="text-brand">Myícone</span></>}
                {currentPage === 'ai' && <>Painel de <span className="text-brand">IA</span></>}
                {currentPage === 'productivity' && <>Modo <span className="text-brand">Produtividade</span></>}
                {currentPage === 'dev' && <>Atalhos para <span className="text-brand">Devs</span></>}
                {currentPage === 'games' && <>Arena de <span className="text-brand">Jogos</span></>}
                {currentPage === 'indicators' && <>Painel de <span className="text-brand">Indicadores</span></>}
                {currentPage === 'football' && <>Mundo do <span className="text-brand">Futebol</span></>}
                {currentPage === 'communication' && <>Jornais e <span className="text-brand">Comunicação</span></>}
              </h1>
            </div>

            <div className="w-full max-w-2xl relative mb-8 group z-10 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                <Search className="h-6 w-6 text-slate-400 group-focus-within:text-brand transition-colors" />
              </div>
              <input
                type="text"
                className="block w-full pl-14 pr-12 py-4 bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border rounded-full leading-5 placeholder-slate-400 dark:placeholder-slate-500 text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-4 focus:ring-brand-light/30 focus:border-brand-light sm:text-lg shadow-xl shadow-slate-200/50 dark:shadow-none transition-all duration-300"
                placeholder="O que você procura hoje?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 pr-5 flex items-center text-slate-400 hover:text-red-500 transition-colors"
                >
                  <X size={20} />
                </button>
              )}
            </div>
          </>
        )}

        {/* --- HOME PAGE VIEW --- */}
        {currentPage === 'home' && (
          <div className="w-full">
            {/* Highlights / Novidades */}
            <div className="mb-10 animate-fade-in-up" style={{ animationDelay: '0.12s' }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px flex-1 bg-slate-200 dark:bg-dark-border"></div>
                <h2 className="text-xl font-black text-slate-700 dark:text-slate-200 uppercase tracking-widest">Novidades 2026</h2>
                <div className="h-px flex-1 bg-slate-200 dark:bg-dark-border"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                {homeHighlights.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setCurrentPage(item.page);
                      setSearchQuery('');
                      setSelectedCategory(null);
                      window.scrollTo(0, 0);
                    }}
                    className="text-left p-4 rounded-xl border border-slate-200 dark:border-dark-border bg-white dark:bg-dark-card hover:border-brand-light dark:hover:border-brand-light hover:shadow-md transition-all"
                  >
                    <span className="inline-block text-[0.65rem] font-bold uppercase tracking-wider text-brand-dark dark:text-brand-light bg-brand/10 px-2 py-1 rounded-full mb-3">
                      {item.badge}
                    </span>
                    <h3 className="font-bold text-slate-800 dark:text-slate-100 mb-1">{item.title}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{item.description}</p>
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-10 animate-fade-in-up" style={{ animationDelay: '0.16s' }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px flex-1 bg-slate-200 dark:bg-dark-border"></div>
                <h2 className="text-xl font-black text-slate-700 dark:text-slate-200 uppercase tracking-widest">Últimas atualizações</h2>
                <div className="h-px flex-1 bg-slate-200 dark:bg-dark-border"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {homeUpdates.map((item) => (
                  <div key={item.id} className="p-4 rounded-xl border border-slate-200 dark:border-dark-border bg-white dark:bg-dark-card">
                    <p className="text-xs font-bold uppercase tracking-wider text-brand mb-2">{item.date}</p>
                    <h3 className="font-bold text-slate-800 dark:text-slate-100 mb-1">{item.title}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Category Filter Chips */}
            <div className="flex flex-wrap justify-center gap-2 mb-10 max-w-5xl mx-auto px-2 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border ${
                  !selectedCategory 
                    ? 'bg-brand text-white border-brand shadow-md shadow-brand/20' 
                    : 'bg-white dark:bg-dark-card text-slate-600 dark:text-slate-400 border-slate-200 dark:border-dark-border hover:border-brand-light dark:hover:border-brand-light'
                }`}
              >
                Todas
              </button>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat === selectedCategory ? null : cat)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border ${
                    selectedCategory === cat 
                      ? 'bg-brand text-white border-brand shadow-md shadow-brand/20' 
                      : 'bg-white dark:bg-dark-card text-slate-600 dark:text-slate-400 border-slate-200 dark:border-dark-border hover:border-brand-light dark:hover:border-brand-light'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {searchQuery ? (
              // Search Results View
              <div className="w-full">
                {filteredHomeItems.length > 0 ? (
                   <RenderGrid items={filteredHomeItems.filter(item => !selectedCategory || item.category === selectedCategory)} />
                ) : (
                   <div className="flex flex-col items-center justify-center py-20 text-slate-400 dark:text-slate-500 animate-fade-in-up">
                    <Grid size={48} className="mb-4 opacity-50" />
                    <p className="text-lg">Nenhum ícone encontrado.</p>
                  </div>
                )}
              </div>
            ) : (
              // Categorized View
              <div className="space-y-12">
                {categories.map((category, catIndex) => {
                  // If a category is selected, skip others
                  if (selectedCategory && category !== selectedCategory) return null;

                  const categoryItems = filteredHomeItems.filter(i => i.category === category);
                  if (categoryItems.length === 0) return null;

                  return (
                    <div key={category} className="animate-fade-in-up" style={{ animationDelay: `${catIndex * 100}ms` }}>
                      <div className="flex items-center gap-3 mb-4">
                         <div className="h-px flex-1 bg-slate-200 dark:bg-dark-border"></div>
                         <h2 className="text-xl font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">{category}</h2>
                         <div className="h-px flex-1 bg-slate-200 dark:bg-dark-border"></div>
                      </div>
                      <RenderGrid items={categoryItems} />
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* --- AI PAGE VIEW --- */}
        {currentPage === 'ai' && (
          <div className="w-full">
            {searchQuery ? (
              filteredAiItems.length > 0 ? (
                <RenderGrid items={filteredAiItems} />
              ) : (
                <div className="text-center text-slate-400 py-10">IA não encontrada.</div>
              )
            ) : (
              <div className="space-y-12">
                <div className="animate-fade-in-up" style={{ animationDelay: '0ms' }}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-px flex-1 bg-slate-200 dark:bg-dark-border"></div>
                    <h2 className="text-xl font-bold text-fuchsia-700 dark:text-fuchsia-300 uppercase tracking-widest">IAs Mais Famosas (20)</h2>
                    <div className="h-px flex-1 bg-slate-200 dark:bg-dark-border"></div>
                  </div>
                  <RenderGrid items={AI_LLM_ITEMS} />
                </div>

                <div className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-px flex-1 bg-slate-200 dark:bg-dark-border"></div>
                    <h2 className="text-xl font-bold text-red-700 dark:text-red-300 uppercase tracking-widest">IAs Chinesas</h2>
                    <div className="h-px flex-1 bg-slate-200 dark:bg-dark-border"></div>
                  </div>
                  <RenderGrid items={AI_CHINA_ITEMS} />
                </div>
              </div>
            )}
          </div>
        )}

        {/* --- PRODUCTIVITY PAGE VIEW --- */}
        {currentPage === 'productivity' && (
          <div className="w-full">
            {filteredProductivityItems.length > 0 ? (
              <RenderGrid items={filteredProductivityItems} />
            ) : (
              <div className="text-center text-slate-400 py-10">Ferramenta não encontrada.</div>
            )}
          </div>
        )}

        {/* --- DEV PAGE VIEW --- */}
        {currentPage === 'dev' && (
          <div className="w-full">
            {searchQuery ? (
              filteredDevItems.length > 0 ? (
                <RenderGrid items={filteredDevItems} />
              ) : (
                <div className="text-center text-slate-400 py-10">Site dev não encontrado.</div>
              )
            ) : (
              <div className="space-y-12">
                <div className="animate-fade-in-up" style={{ animationDelay: '0ms' }}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-px flex-1 bg-slate-200 dark:bg-dark-border"></div>
                    <h2 className="text-xl font-bold text-cyan-700 dark:text-cyan-300 uppercase tracking-widest">Python Data</h2>
                    <div className="h-px flex-1 bg-slate-200 dark:bg-dark-border"></div>
                  </div>
                  <RenderGrid items={devPythonDataItems} />
                </div>

                <div className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-px flex-1 bg-slate-200 dark:bg-dark-border"></div>
                    <h2 className="text-xl font-bold text-blue-700 dark:text-blue-300 uppercase tracking-widest">Web Frontend</h2>
                    <div className="h-px flex-1 bg-slate-200 dark:bg-dark-border"></div>
                  </div>
                  <RenderGrid items={devWebItems} />
                </div>

                <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-px flex-1 bg-slate-200 dark:bg-dark-border"></div>
                    <h2 className="text-xl font-bold text-emerald-700 dark:text-emerald-300 uppercase tracking-widest">Banco de Dados</h2>
                    <div className="h-px flex-1 bg-slate-200 dark:bg-dark-border"></div>
                  </div>
                  <RenderGrid items={devDatabaseItems} />
                </div>

                <div className="animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-px flex-1 bg-slate-200 dark:bg-dark-border"></div>
                    <h2 className="text-xl font-bold text-violet-700 dark:text-violet-300 uppercase tracking-widest">Backend e Plataforma</h2>
                    <div className="h-px flex-1 bg-slate-200 dark:bg-dark-border"></div>
                  </div>
                  <RenderGrid items={devBackendItems} />
                </div>

                <div className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-px flex-1 bg-slate-200 dark:bg-dark-border"></div>
                    <h2 className="text-xl font-bold text-sky-700 dark:text-sky-300 uppercase tracking-widest">README e Docs</h2>
                    <div className="h-px flex-1 bg-slate-200 dark:bg-dark-border"></div>
                  </div>
                  <RenderGrid items={DEV_README_ITEMS} />
                </div>
              </div>
            )}
          </div>
        )}

        {/* --- GAMES PAGE VIEW --- */}
        {currentPage === 'games' && (
           <div className="w-full">
              {filteredGameItems.length > 0 ? (
                <RenderGrid items={filteredGameItems} />
              ) : (
                 <div className="text-center text-slate-400 py-10">Nada encontrado.</div>
              )}
           </div>
        )}

        {/* --- INDICATORS PAGE VIEW --- */}
        {currentPage === 'indicators' && (
           <div className="w-full">
              {filteredIndicatorItems.length > 0 ? (
                <RenderGrid items={filteredIndicatorItems} />
              ) : (
                 <div className="text-center text-slate-400 py-10">Nada encontrado.</div>
              )}
           </div>
        )}

        {/* --- FOOTBALL PAGE VIEW --- */}
        {currentPage === 'football' && (
          <div className="w-full">
            {searchQuery ? (
               // Search mode for football
               filteredFootballItems.length > 0 ? (
                <RenderGrid items={filteredFootballItems} />
              ) : (
                 <div className="text-center text-slate-400 py-10">Time ou seleção não encontrada.</div>
              )
            ) : (
              // Sectioned view for football
              <div className="space-y-12">
                
                {/* Brasileirão */}
                <div className="animate-fade-in-up" style={{ animationDelay: '0ms' }}>
                  <div className="flex items-center gap-3 mb-6">
                      <div className="h-px flex-1 bg-slate-200 dark:bg-dark-border"></div>
                      <h2 className="text-2xl font-black text-green-600 dark:text-green-400 uppercase tracking-widest flex items-center gap-2">
                        <span className="text-2xl">🇧🇷</span> Brasileirão Série A
                      </h2>
                      <div className="h-px flex-1 bg-slate-200 dark:bg-dark-border"></div>
                  </div>
                  <RenderGrid items={FOOTBALL_BRASIL} />
                </div>

                {/* Champions / Europe */}
                <div className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                  <div className="flex items-center gap-3 mb-6">
                      <div className="h-px flex-1 bg-slate-200 dark:bg-dark-border"></div>
                      <h2 className="text-2xl font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest flex items-center gap-2">
                        <span className="text-2xl">🇪🇺</span> Europa - Champions
                      </h2>
                      <div className="h-px flex-1 bg-slate-200 dark:bg-dark-border"></div>
                  </div>
                  <RenderGrid items={FOOTBALL_EUROPE} />
                </div>

                {/* FIFA Selections */}
                <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                  <div className="flex items-center gap-3 mb-6">
                      <div className="h-px flex-1 bg-slate-200 dark:bg-dark-border"></div>
                      <h2 className="text-2xl font-black text-yellow-500 dark:text-yellow-400 uppercase tracking-widest flex items-center gap-2">
                        <span className="text-2xl">🌍</span> Seleções - Top FIFA
                      </h2>
                      <div className="h-px flex-1 bg-slate-200 dark:bg-dark-border"></div>
                  </div>
                  <RenderGrid items={FOOTBALL_FIFA} />
                </div>

              </div>
            )}
          </div>
        )}

        {/* --- COMMUNICATION PAGE VIEW --- */}
        {currentPage === 'communication' && (
          <div className="w-full">
            {searchQuery ? (
               // Search mode for newspapers
               filteredNewspaperItems.length > 0 ? (
                <RenderGrid items={filteredNewspaperItems} />
              ) : (
                 <div className="text-center text-slate-400 py-10">Jornal ou portal não encontrado.</div>
              )
            ) : (
              // Sectioned view for newspapers
              <div className="space-y-12">
                
                {/* São Paulo */}
                <div className="animate-fade-in-up" style={{ animationDelay: '0ms' }}>
                  <div className="flex items-center gap-3 mb-6">
                      <div className="h-px flex-1 bg-slate-200 dark:bg-dark-border"></div>
                      <h2 className="text-xl font-bold text-slate-700 dark:text-slate-300 uppercase tracking-widest">São Paulo</h2>
                      <div className="h-px flex-1 bg-slate-200 dark:bg-dark-border"></div>
                  </div>
                  <RenderGrid items={NEWSPAPERS_SP} />
                </div>

                {/* Rio de Janeiro */}
                <div className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                  <div className="flex items-center gap-3 mb-6">
                      <div className="h-px flex-1 bg-slate-200 dark:bg-dark-border"></div>
                      <h2 className="text-xl font-bold text-slate-700 dark:text-slate-300 uppercase tracking-widest">Rio de Janeiro</h2>
                      <div className="h-px flex-1 bg-slate-200 dark:bg-dark-border"></div>
                  </div>
                  <RenderGrid items={NEWSPAPERS_RJ} />
                </div>

                {/* Minas Gerais */}
                <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                  <div className="flex items-center gap-3 mb-6">
                      <div className="h-px flex-1 bg-slate-200 dark:bg-dark-border"></div>
                      <h2 className="text-xl font-bold text-slate-700 dark:text-slate-300 uppercase tracking-widest">Minas Gerais</h2>
                      <div className="h-px flex-1 bg-slate-200 dark:bg-dark-border"></div>
                  </div>
                  <RenderGrid items={NEWSPAPERS_MG} />
                </div>

                {/* Sul */}
                <div className="animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                  <div className="flex items-center gap-3 mb-6">
                      <div className="h-px flex-1 bg-slate-200 dark:bg-dark-border"></div>
                      <h2 className="text-xl font-bold text-slate-700 dark:text-slate-300 uppercase tracking-widest">Região Sul</h2>
                      <div className="h-px flex-1 bg-slate-200 dark:bg-dark-border"></div>
                  </div>
                  <RenderGrid items={NEWSPAPERS_SUL} />
                </div>

                {/* Outros Estados */}
                <div className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                  <div className="flex items-center gap-3 mb-6">
                      <div className="h-px flex-1 bg-slate-200 dark:bg-dark-border"></div>
                      <h2 className="text-xl font-bold text-slate-700 dark:text-slate-300 uppercase tracking-widest">Outros Estados</h2>
                      <div className="h-px flex-1 bg-slate-200 dark:bg-dark-border"></div>
                  </div>
                  <RenderGrid items={NEWSPAPERS_OUTROS} />
                </div>

              </div>
            )}
          </div>
        )}

        {/* --- ABOUT PAGE VIEW --- */}
        {currentPage === 'about' && (
          <div className="max-w-3xl w-full bg-white dark:bg-dark-card rounded-2xl p-8 md:p-12 shadow-sm border border-slate-200 dark:border-dark-border mt-4 animate-fade-in-up">
            <h2 className="text-3xl font-black text-slate-800 dark:text-slate-100 mb-6">Sobre o Myícone</h2>
            
            <div className="prose dark:prose-invert prose-slate text-slate-600 dark:text-slate-300">
              <p className="mb-4 text-lg">
                O <strong>Myícone</strong> nasceu com o propósito simples e direto de organizar o caos da internet. 
                Em um mundo com milhões de websites, encontrar o que você precisa de forma rápida, segura e visual é essencial.
              </p>

              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mt-8 mb-3">Nossa Missão</h3>
              <p className="mb-4">
                Nosso objetivo é <strong>ajudar as pessoas</strong> a se conectarem com as ferramentas, serviços e entretenimento que moldam o mundo moderno.
                Atuamos como um facilitador, um portal de entrada para a web brasileira e mundial.
              </p>

              <div className="bg-brand/10 border-l-4 border-brand p-4 my-8 rounded-r-lg">
                <p className="text-sm italic font-medium text-slate-700 dark:text-slate-200">
                  "Não temos o objetivo de denegrir, alterar ou prejudicar a imagem de nenhuma marca aqui listada. 
                  Pelo contrário, o Myícone serve como uma vitrine que direciona tráfego qualificado para estes serviços, 
                  respeitando integralmente suas identidades visuais e propriedades intelectuais."
                </p>
              </div>

              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mt-6 mb-3">Para Marcas</h3>
              <p>
                Todos os ícones e logotipos exibidos pertencem aos seus respectivos detentores de direitos autorais. 
                Utilizamos as imagens apenas para fins de identificação ("fair use") para facilitar a navegação do usuário final.
                Se você representa uma marca e deseja atualizar suas informações ou solicitar remoção, entre em contato.
              </p>
            </div>
          </div>
        )}

      </main>

      <ResponsibilityFooter />
      
      <footer className="bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-8 text-center text-slate-400 text-xs transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} Myícone Brasil. Todos os direitos reservados.</p>
          <p className="mt-2 opacity-60">O melhor portal de atalhos da web brasileira.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
