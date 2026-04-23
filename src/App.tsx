// Criado - Saulo Prado Versão 1.0 Junho de 2016 Versão 2.0 Março de 2026
import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Search, Globe, X, Menu, Grid, Moon, Sun, Gamepad2, BarChart3, Info, Home, Trophy, Newspaper, Brain, Briefcase, Code, Laptop, Smartphone, UserRound } from 'lucide-react';
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
  NEWSPAPERS_BY_STATE,
  NEWSPAPERS_WORLD
} from './constants';
import IconCard from './components/IconCard';
import ResponsibilityFooter from './components/ResponsibilityFooter';

type Page = 'home' | 'news' | 'ai' | 'productivity' | 'dev' | 'games' | 'indicators' | 'football' | 'communication' | 'about';

interface PageBannerConfig {
  title: string;
  subtitle: string;
  gradient: string;
  icon: React.ReactNode;
  visual?: React.ReactNode;
}

const FamilyBannerVisual = () => (
  <div className="hidden lg:block relative w-[390px] h-[150px]">
    <div className="absolute inset-0 rounded-3xl border border-white/25 bg-gradient-to-br from-white/25 via-white/10 to-white/5 backdrop-blur-xl shadow-2xl"></div>
    <div className="absolute -top-5 -right-5 w-28 h-28 rounded-full bg-cyan-300/20 blur-2xl"></div>
    <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-teal-200/20 blur-2xl"></div>

    <div className="absolute left-5 top-6 w-14 h-14 rounded-full bg-white/20 border border-white/35 shadow-md flex items-center justify-center">
      <UserRound size={24} className="text-white" />
    </div>
    <div className="absolute right-5 top-6 w-14 h-14 rounded-full bg-white/20 border border-white/35 shadow-md flex items-center justify-center">
      <UserRound size={24} className="text-white" />
    </div>
    <div className="absolute left-[168px] -top-3 w-14 h-14 rounded-full bg-white/20 border border-white/35 shadow-md flex items-center justify-center">
      <UserRound size={24} className="text-white" />
    </div>

    <div className="absolute left-[108px] top-8 px-4 py-3 rounded-xl bg-slate-900/20 border border-white/30 shadow-xl min-w-[172px]">
      <div className="flex items-center gap-2 mb-1">
        <Laptop size={15} className="text-white" />
        <span className="text-sm font-bold text-white tracking-wide">Myícone Family</span>
      </div>
      <p className="text-[0.68rem] text-white/90 leading-tight">Internet útil para casa, trabalho e estudos.</p>
    </div>

    <div className="absolute left-[154px] bottom-3 px-2 py-1 rounded-lg bg-white/20 border border-white/30 shadow">
      <Smartphone size={14} className="text-white" />
    </div>
    <div className="absolute left-[120px] bottom-4 w-7 h-1 rounded-full bg-white/60"></div>
    <div className="absolute right-[120px] bottom-4 w-7 h-1 rounded-full bg-white/60"></div>

    <div className="absolute right-8 bottom-5 text-[0.62rem] uppercase tracking-[0.22em] text-white/80 font-semibold">
      Experiencia Myicone
    </div>
  </div>
);

// --- Page Banner Component (Desktop/Tablet Only) ---
const PageBanner = ({ page }: { page: Page }) => {
  if (page === 'about') return null;

  const configs: Record<Page, PageBannerConfig> = {
    home: {
      title: 'Mundo dos Ícones',
      subtitle: 'Seu portal de atalhos para a internet brasileira',
      gradient: 'from-brand-dark to-brand-light',
      icon: <Globe size={48} className="text-white/80" />,
      visual: <FamilyBannerVisual />
    },
    news: {
      title: 'Novidades',
      subtitle: 'Tudo o que foi atualizado no Myícone em 2026',
      gradient: 'from-slate-800 to-brand',
      icon: <Info size={48} className="text-white/80" />
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
      gradient: 'from-brand-dark to-teal-500',
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
    about: { title: '', subtitle: '', gradient: '', icon: null }
  };

  const config = configs[page] || configs.home;

  return (
    <div className={`hidden md:flex w-full rounded-2xl p-8 mb-8 bg-gradient-to-r ${config.gradient} shadow-lg items-center justify-between text-white animate-fade-in-up`}>
      <div className="flex flex-col">
        <h1 className="text-3xl font-black tracking-tight mb-2">{config.title}</h1>
        <p className="text-white/90 font-medium">{config.subtitle}</p>
      </div>
      {config.visual ? (
        config.visual
      ) : (
        <div className="bg-white/10 p-4 rounded-full backdrop-blur-sm">
          {config.icon}
        </div>
      )}
    </div>
  );
};

function App() {
  // ── Tema: persiste no localStorage ──────────────────────────────────────────
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    try {
      return (localStorage.getItem('myicone-theme') as 'light' | 'dark') || 'light';
    } catch {
      return 'light';
    }
  });

  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Ref para focar o input de busca com atalho de teclado
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Aplicar tema ao <html>
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => {
      const next = prev === 'light' ? 'dark' : 'light';
      try { localStorage.setItem('myicone-theme', next); } catch { /* ignore */ }
      return next;
    });
  };

  // ── Atalhos de teclado ────────────────────────────────────────────────────
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      // '/' foca na barra de busca
      if (e.key === '/' && document.activeElement?.tagName !== 'INPUT') {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
      // 'Esc' limpa a busca
      if (e.key === 'Escape' && searchQuery) {
        setSearchQuery('');
        searchInputRef.current?.blur();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [searchQuery]);

  // ── Categorias da Home ───────────────────────────────────────────────────
  const categories = useMemo(() => Array.from(new Set(HOME_ITEMS.map(i => i.category))), []);

  // ── Jornais por estado (flat list para busca) ───────────────────────────
  const allStateNewspapers = useMemo(() => Object.values(NEWSPAPERS_BY_STATE).flat(), []);

  // ── Pool global de itens para busca cross-page ──────────────────────────
  const globalItemPool = useMemo(() => {
    const seen = new Set<string>();
    const add = (items: typeof HOME_ITEMS, section: string, page: Page) =>
      items.filter(i => {
        if (seen.has(i.url)) return false;
        seen.add(i.url);
        return true;
      }).map(i => ({ ...i, _section: section, _page: page }));

    return [
      ...add(HOME_ITEMS, 'Início', 'home'),
      ...add(AI_LLM_ITEMS, 'IAs Globais', 'ai'),
      ...add(AI_CHINA_ITEMS, 'IAs Chinesas', 'ai'),
      ...add(PRODUCTIVITY_ITEMS, 'Produtividade', 'productivity'),
      ...add(DEV_CORE_ITEMS, 'Hub Dev', 'dev'),
      ...add(DEV_README_ITEMS, 'README & Docs', 'dev'),
      ...add(GAME_ITEMS, 'Jogos', 'games'),
      ...add(INDICATOR_ITEMS, 'Indicadores', 'indicators'),
      ...add(FOOTBALL_BRASIL, 'Futebol BR', 'football'),
      ...add(FOOTBALL_EUROPE, 'Futebol Europa', 'football'),
      ...add(FOOTBALL_FIFA, 'Seleções FIFA', 'football'),
      ...add(allStateNewspapers, 'Jornais BR', 'communication'),
      ...add(NEWSPAPERS_WORLD, 'Jornais Mundo', 'communication'),
    ];
  }, [allStateNewspapers]);

  // ── Busca global (cross-page) ────────────────────────────────────────────
  const globalSearchResults = useMemo(() => {
    if (!searchQuery) return [];
    const q = searchQuery.toLowerCase();
    return globalItemPool.filter(i =>
      i.name.toLowerCase().includes(q) || i.url.toLowerCase().includes(q)
    );
  }, [searchQuery, globalItemPool]);

  // ── Itens filtrados por página (usados quando busca está vazia) ─────────
  const filteredHomeItems = useMemo(() =>
    HOME_ITEMS.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.url.toLowerCase().includes(searchQuery.toLowerCase())
    ), [searchQuery]);

  const allAiItems = useMemo(() => [...AI_LLM_ITEMS, ...AI_CHINA_ITEMS], []);
  const filteredAiItems = useMemo(() =>
    allAiItems.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase())),
    [searchQuery, allAiItems]);

  const filteredProductivityItems = useMemo(() =>
    PRODUCTIVITY_ITEMS.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase())),
    [searchQuery]);

  const allDevItems = useMemo(() => [...DEV_CORE_ITEMS, ...DEV_README_ITEMS], []);
  const filteredDevItems = useMemo(() =>
    allDevItems.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase())),
    [searchQuery, allDevItems]);

  // ── Dev subcategorias via campo devSubcategory (sem IDs hardcoded) ───────
  const devPythonDataItems = useMemo(
    () => DEV_CORE_ITEMS.filter(item => item.devSubcategory === 'python-data'), []);
  const devWebItems = useMemo(
    () => DEV_CORE_ITEMS.filter(item => item.devSubcategory === 'web-frontend'), []);
  const devDatabaseItems = useMemo(
    () => DEV_CORE_ITEMS.filter(item => item.devSubcategory === 'database'), []);
  const devBackendItems = useMemo(
    () => DEV_CORE_ITEMS.filter(item => item.devSubcategory === 'backend'), []);

  const filteredGameItems = useMemo(() =>
    GAME_ITEMS.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase())),
    [searchQuery]);

  const filteredIndicatorItems = useMemo(() =>
    INDICATOR_ITEMS.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase())),
    [searchQuery]);

  const allFootballItems = useMemo(() => [...FOOTBALL_BRASIL, ...FOOTBALL_EUROPE, ...FOOTBALL_FIFA], []);
  const filteredFootballItems = useMemo(() =>
    allFootballItems.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase())),
    [searchQuery, allFootballItems]);

  const allNewspaperItems = useMemo(() => [...allStateNewspapers, ...NEWSPAPERS_WORLD], [allStateNewspapers]);
  const filteredNewspaperItems = useMemo(() =>
    allNewspaperItems.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase())),
    [searchQuery, allNewspaperItems]);

  // ── Dados da página de Novidades ─────────────────────────────────────────
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

  // ── Helpers de navegação ─────────────────────────────────────────────────
  const navigate = (page: Page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    setSearchQuery('');
    setSelectedCategory(null);
    window.scrollTo(0, 0);
  };

  const NavLink = ({ page, label, icon: Icon }: { page: Page; label: string; icon: React.ElementType }) => (
    <button
      onClick={() => navigate(page)}
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

  // ── Helpers de renderização ──────────────────────────────────────────────
  const RenderGrid = ({ items }: { items: any[] }) => (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6">
      {items.map((item, index) => (
        <div key={item.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 50}ms` }}>
          <IconCard item={item} />
        </div>
      ))}
    </div>
  );

  const RenderStateBlocks = ({ entries }: { entries: [string, any[]][] }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      {entries.map(([state, items], index) => (
        <div
          key={state}
          className="animate-fade-in-up p-4 rounded-xl border border-slate-200 dark:border-dark-border bg-white dark:bg-dark-card"
          style={{ animationDelay: `${index * 20}ms` }}
        >
          <h3 className="text-sm font-bold text-slate-700 dark:text-slate-200 mb-3">{state}</h3>
          <div className="flex flex-wrap gap-2">
            {items.map((item) => (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1.5 rounded-full border border-slate-200 dark:border-dark-border text-slate-600 dark:text-slate-300 hover:border-brand-light dark:hover:border-brand-light hover:text-brand transition-colors"
                title={`Ir para ${item.name}`}
              >
                <img
                  src={`https://www.google.com/s2/favicons?domain=${item.url}&sz=64`}
                  alt=""
                  className="w-4 h-4 rounded-sm"
                  loading="lazy"
                />
                {item.name}
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  // ── Seção de cabeçalho padrão ─────────────────────────────────────────────
  const SectionHeader = ({ label, color = 'text-slate-700 dark:text-slate-300' }: { label: string; color?: string }) => (
    <div className="flex items-center gap-3 mb-6">
      <div className="h-px flex-1 bg-slate-200 dark:bg-dark-border"></div>
      <h2 className={`text-xl font-bold uppercase tracking-widest ${color}`}>{label}</h2>
      <div className="h-px flex-1 bg-slate-200 dark:bg-dark-border"></div>
    </div>
  );

  // ── Busca global agrupada por seção ──────────────────────────────────────
  const isGlobalSearchActive = searchQuery.length > 0 && currentPage !== 'about' && currentPage !== 'news';
  const globalResultsBySection = useMemo(() => {
    if (!isGlobalSearchActive) return {};
    return globalSearchResults.reduce<Record<string, typeof globalSearchResults>>((acc, item) => {
      const sec = (item as any)._section as string;
      if (!acc[sec]) acc[sec] = [];
      acc[sec].push(item);
      return acc;
    }, {});
  }, [globalSearchResults, isGlobalSearchActive]);

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-brand-light selection:text-brand-dark transition-colors duration-300">

      {/* ── Navbar ─────────────────────────────────────────────────────────── */}
      <nav className="sticky top-0 z-50 border-b border-slate-200/60 dark:border-dark-border backdrop-blur-md bg-white/80 dark:bg-dark-bg/80 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">

            {/* Logo */}
            <div
              className="flex items-center gap-2.5 group cursor-pointer"
              onClick={() => navigate('home')}
            >
              <div className="relative group-hover:scale-110 transition-transform duration-300">
                <Globe className="h-8 w-8 text-brand-dark dark:text-brand-light" />
                <div className="absolute top-0 right-0 h-3 w-3 bg-brand-light rounded-full border-2 border-white dark:border-dark-bg animate-pulse"></div>
              </div>
              <div className="flex flex-col">
                <span className="font-black text-xl tracking-tight leading-none text-brand-dark dark:text-brand-light">Myícone</span>
                <span className="text-[0.6rem] font-bold text-brand-light tracking-widest uppercase">Brasil</span>
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
                title={theme === 'light' ? 'Ativar modo escuro' : 'Ativar modo claro'}
              >
                {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
              </button>
            </div>

            {/* Mobile: tema + menu */}
            <div className="flex items-center gap-4 md:hidden">
              <button
                onClick={toggleTheme}
                className="p-2 text-slate-500 dark:text-slate-400"
                title={theme === 'light' ? 'Ativar modo escuro' : 'Ativar modo claro'}
              >
                {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-slate-500 dark:text-slate-400 hover:text-brand"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
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

      {/* ── Conteúdo Principal ─────────────────────────────────────────────── */}
      {/* pb-20 md:pb-0 reserva espaço para o bottom nav no mobile */}
      <main className="flex-grow flex flex-col items-center pt-8 pb-8 md:pb-8 pb-24 px-4 sm:px-6 w-full max-w-7xl mx-auto">

        {/* Banner (Desktop/Tablet) */}
        <PageBanner page={currentPage} />

        {/* Barra de busca global */}
        {currentPage !== 'about' && currentPage !== 'news' && (
          <>
            {/* Título mobile */}
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

            <div className="w-full max-w-2xl relative mb-8 group z-10 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                <Search className="h-6 w-6 text-slate-400 group-focus-within:text-brand transition-colors" />
              </div>
              <input
                ref={searchInputRef}
                type="text"
                className="block w-full pl-14 pr-12 py-4 bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border rounded-full leading-5 placeholder-slate-400 dark:placeholder-slate-500 text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-4 focus:ring-brand-light/30 focus:border-brand-light sm:text-lg shadow-xl shadow-slate-200/50 dark:shadow-none transition-all duration-300"
                placeholder='Busca global — pressione "/" para focar'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 pr-5 flex items-center text-slate-400 hover:text-red-500 transition-colors"
                  title="Limpar busca (Esc)"
                >
                  <X size={20} />
                </button>
              )}
            </div>

            {/* Link "Confira as novidades" apenas na Home */}
            {currentPage === 'home' && !searchQuery && (
              <div className="w-full max-w-2xl -mt-4 mb-8 text-center animate-fade-in-up" style={{ animationDelay: '0.12s' }}>
                <button
                  onClick={() => navigate('news')}
                  className="text-sm sm:text-base text-slate-500 dark:text-slate-400 hover:text-brand dark:hover:text-brand-light transition-colors border-b border-slate-300/80 dark:border-slate-600 pb-1"
                >
                  Confira as novidades
                </button>
              </div>
            )}
          </>
        )}

        {/* ── BUSCA GLOBAL ATIVA ─────────────────────────────────────────── */}
        {isGlobalSearchActive && (
          <div className="w-full">
            {globalSearchResults.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 text-slate-400 dark:text-slate-500 animate-fade-in-up">
                <Grid size={48} className="mb-4 opacity-50" />
                <p className="text-lg">Nenhum resultado encontrado para <strong>"{searchQuery}"</strong></p>
              </div>
            ) : (
              <div className="space-y-10">
                <p className="text-sm text-slate-400 dark:text-slate-500 text-center">
                  {globalSearchResults.length} resultado{globalSearchResults.length !== 1 ? 's' : ''} em todas as seções
                </p>
                {Object.entries(globalResultsBySection).map(([section, items]) => (
                  <div key={section} className="animate-fade-in-up">
                    <SectionHeader label={section} />
                    <RenderGrid items={items} />
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ── HOME ──────────────────────────────────────────────────────────── */}
        {!isGlobalSearchActive && currentPage === 'home' && (
          <div className="w-full">
            {/* Filtros de categoria */}
            <div className="flex flex-wrap justify-center gap-2 mb-10 max-w-5xl mx-auto px-2 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
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

            {/* Vista categorizada */}
            <div className="space-y-12">
              {categories.map((category, catIndex) => {
                if (selectedCategory && category !== selectedCategory) return null;
                const categoryItems = filteredHomeItems.filter(i => i.category === category);
                if (categoryItems.length === 0) return null;
                return (
                  <div key={category} className="animate-fade-in-up" style={{ animationDelay: `${catIndex * 100}ms` }}>
                    <SectionHeader label={category} />
                    <RenderGrid items={categoryItems} />
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ── NOVIDADES ─────────────────────────────────────────────────────── */}
        {currentPage === 'news' && (
          <div className="w-full space-y-12">
            {/* Banner mobile da página de novidades */}
            <div className="md:hidden text-center mb-2 animate-fade-in-up">
              <h1 className="text-3xl font-black text-slate-800 dark:text-slate-100 tracking-tight">
                Confira as <span className="text-brand">Novidades</span>
              </h1>
            </div>

            <div className="animate-fade-in-up" style={{ animationDelay: '0ms' }}>
              <SectionHeader label="Novidades 2026" />
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                {homeHighlights.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => navigate(item.page)}
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

            <div className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <SectionHeader label="Últimas atualizações" />
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
          </div>
        )}

        {/* ── IA ────────────────────────────────────────────────────────────── */}
        {!isGlobalSearchActive && currentPage === 'ai' && (
          <div className="w-full space-y-12">
            <div className="animate-fade-in-up" style={{ animationDelay: '0ms' }}>
              <SectionHeader label="IAs Mais Famosas (20)" color="text-fuchsia-700 dark:text-fuchsia-300" />
              <RenderGrid items={AI_LLM_ITEMS} />
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <SectionHeader label="IAs Chinesas" color="text-red-700 dark:text-red-300" />
              <RenderGrid items={AI_CHINA_ITEMS} />
            </div>
          </div>
        )}

        {/* ── PRODUTIVIDADE ─────────────────────────────────────────────────── */}
        {!isGlobalSearchActive && currentPage === 'productivity' && (
          <div className="w-full">
            {filteredProductivityItems.length > 0 ? (
              <RenderGrid items={filteredProductivityItems} />
            ) : (
              <div className="text-center text-slate-400 py-10">Ferramenta não encontrada.</div>
            )}
          </div>
        )}

        {/* ── DEV ───────────────────────────────────────────────────────────── */}
        {!isGlobalSearchActive && currentPage === 'dev' && (
          <div className="w-full space-y-12">
            <div className="animate-fade-in-up" style={{ animationDelay: '0ms' }}>
              <SectionHeader label="Python Data" color="text-cyan-700 dark:text-cyan-300" />
              <RenderGrid items={devPythonDataItems} />
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <SectionHeader label="Web Frontend" color="text-brand dark:text-brand-light" />
              <RenderGrid items={devWebItems} />
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <SectionHeader label="Banco de Dados" color="text-teal-700 dark:text-teal-300" />
              <RenderGrid items={devDatabaseItems} />
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <SectionHeader label="Backend e Plataforma" color="text-violet-700 dark:text-violet-300" />
              <RenderGrid items={devBackendItems} />
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <SectionHeader label="README e Docs" color="text-sky-700 dark:text-sky-300" />
              <RenderGrid items={DEV_README_ITEMS} />
            </div>
          </div>
        )}

        {/* ── JOGOS ─────────────────────────────────────────────────────────── */}
        {!isGlobalSearchActive && currentPage === 'games' && (
          <div className="w-full">
            {filteredGameItems.length > 0 ? (
              <RenderGrid items={filteredGameItems} />
            ) : (
              <div className="text-center text-slate-400 py-10">Nada encontrado.</div>
            )}
          </div>
        )}

        {/* ── INDICADORES ───────────────────────────────────────────────────── */}
        {!isGlobalSearchActive && currentPage === 'indicators' && (
          <div className="w-full">
            {filteredIndicatorItems.length > 0 ? (
              <RenderGrid items={filteredIndicatorItems} />
            ) : (
              <div className="text-center text-slate-400 py-10">Nada encontrado.</div>
            )}
          </div>
        )}

        {/* ── FUTEBOL ───────────────────────────────────────────────────────── */}
        {!isGlobalSearchActive && currentPage === 'football' && (
          <div className="w-full space-y-12">
            <div className="animate-fade-in-up" style={{ animationDelay: '0ms' }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px flex-1 bg-slate-200 dark:bg-dark-border"></div>
                <h2 className="text-2xl font-black text-green-600 dark:text-green-400 uppercase tracking-widest flex items-center gap-2">
                  <span>🇧🇷</span> Brasileirão Série A
                </h2>
                <div className="h-px flex-1 bg-slate-200 dark:bg-dark-border"></div>
              </div>
              <RenderGrid items={FOOTBALL_BRASIL} />
            </div>

            <div className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px flex-1 bg-slate-200 dark:bg-dark-border"></div>
                <h2 className="text-2xl font-black text-teal-600 dark:text-teal-300 uppercase tracking-widest flex items-center gap-2">
                  <span>🇪🇺</span> Europa - Champions
                </h2>
                <div className="h-px flex-1 bg-slate-200 dark:bg-dark-border"></div>
              </div>
              <RenderGrid items={FOOTBALL_EUROPE} />
            </div>

            <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px flex-1 bg-slate-200 dark:bg-dark-border"></div>
                <h2 className="text-2xl font-black text-emerald-500 dark:text-emerald-300 uppercase tracking-widest flex items-center gap-2">
                  <span>🌍</span> Seleções - Top FIFA
                </h2>
                <div className="h-px flex-1 bg-slate-200 dark:bg-dark-border"></div>
              </div>
              <RenderGrid items={FOOTBALL_FIFA} />
            </div>
          </div>
        )}

        {/* ── COMUNICAÇÃO ───────────────────────────────────────────────────── */}
        {!isGlobalSearchActive && currentPage === 'communication' && (
          <div className="w-full space-y-12">
            <div className="animate-fade-in-up" style={{ animationDelay: '0ms' }}>
              <SectionHeader label="Brasil" />
              <RenderStateBlocks entries={Object.entries(NEWSPAPERS_BY_STATE)} />
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '120ms' }}>
              <SectionHeader label="Mundo" />
              <RenderGrid items={NEWSPAPERS_WORLD} />
            </div>
          </div>
        )}

        {/* ── SOBRE ─────────────────────────────────────────────────────────── */}
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

      {/* ── Bottom Navigation (mobile only) ──────────────────────────────── */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 dark:bg-dark-bg/95 backdrop-blur-md border-t border-slate-200 dark:border-dark-border safe-area-inset-bottom">
        <div className="flex items-center justify-around px-1 py-2">
          {([
            { page: 'home' as Page, icon: Home, label: 'Início' },
            { page: 'ai' as Page, icon: Brain, label: 'IA' },
            { page: 'dev' as Page, icon: Code, label: 'Dev' },
            { page: 'football' as Page, icon: Trophy, label: 'Futebol' },
            { page: 'about' as Page, icon: Info, label: 'Sobre' },
          ] as { page: Page; icon: React.ElementType; label: string }[]).map(({ page, icon: Icon, label }) => (
            <button
              key={page}
              onClick={() => navigate(page)}
              className={`flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl transition-all ${
                currentPage === page
                  ? 'text-brand'
                  : 'text-slate-400 dark:text-slate-500'
              }`}
            >
              <Icon size={22} />
              <span className="text-[0.6rem] font-semibold leading-none">{label}</span>
            </button>
          ))}
        </div>
      </nav>

    </div>
  );
}

export default App;
