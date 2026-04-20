const ThemeSwitcher = ({ mode, setMode }) => {
  const toggleMode = () => setMode(mode === 'light' ? 'dark' : 'light');
  const isDark = mode === 'dark';

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={toggleMode}
        title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        className="group flex items-center justify-center w-12 h-12 rounded-full
                   shadow-xl border border-white/10 transition-all duration-300
                   hover:scale-110 hover:shadow-blue-500/30 hover:shadow-2xl
                   focus:outline-none focus:ring-2 focus:ring-blue-400/60"
        style={{ background: isDark ? 'rgba(22,37,62,0.9)' : 'rgba(255,255,255,0.9)', backdropFilter: 'blur(12px)' }}
      >
        {isDark ? (
          /* Sun icon */
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#f59e0b"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            className="w-5 h-5 transition-transform duration-500 group-hover:rotate-45">
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </svg>
        ) : (
          /* Moon icon */
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#3b82f6"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            className="w-5 h-5 transition-transform duration-500 group-hover:-rotate-12">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default ThemeSwitcher;
