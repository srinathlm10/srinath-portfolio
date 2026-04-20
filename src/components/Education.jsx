import { useScrollReveal } from '../hooks/useScrollReveal';
import { use3DTilt } from '../hooks/use3DTilt';

const EduCard = ({ item, index }) => {
  const tiltRef = use3DTilt();
  return (
    <div
      ref={tiltRef}
      className={`card-surface card-interactive flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 p-6 rounded-2xl border
                  transition-all duration-300 fade-in delay-${(index + 1) * 100}`}
    >
      {/* Logo */}
      <div className="icon-tile flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-xl overflow-hidden flex items-center justify-center">
        {item.logo
          ? <img src={item.logo} alt={item.institution} className="w-full h-full object-cover" />
          : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" className="w-6 h-6 sm:w-8 sm:h-8">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" />
            </svg>
          )}
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 mb-2">
          <h3 className="font-bold text-base sm:text-lg leading-tight">{item.degree}</h3>
          <div className="text-accent font-mono text-xs sm:text-sm font-semibold sm:text-right">{item.year}</div>
        </div>
        <p className="text-muted text-xs sm:text-sm mb-2 truncate sm:whitespace-normal">{item.institution}</p>
        {item.score && <span className="tag-pill text-[10px] sm:text-xs">{item.score}</span>}
      </div>
    </div>
  );
};

const Education = () => {
  const revealRef = useScrollReveal();
  const education = [
    { institution: 'Maulana Azad National Institute of Technology, Bhopal', degree: 'Bachelor of Planning', year: '2024', score: 'CGPA: 8.13', logo: '/images/Manit Logo color_0.jpg' },
    { institution: 'Jawahar Navodaya Vidyalaya, Sirpur Kaghaznagar', degree: 'PCM (Higher Secondary), CBSE', year: '2020', score: 'Percentage: 93.6%', logo: '/images/fa09d2a4026dcd394d09826bc07d4b3e.jpg' },
    { institution: 'Jawahar Navodaya Vidyalaya, Sirpur Kaghaznagar', degree: 'High School, CBSE', year: '2018', score: 'Percentage: 88%', logo: '/images/fa09d2a4026dcd394d09826bc07d4b3e.jpg' },
  ];

  return (
    <section id="education" className="reveal py-24 md:py-32" ref={revealRef}>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="section-heading">Education</h2>
        <div className="flex flex-col gap-5">
          {education.map((item, index) => <EduCard key={index} item={item} index={index} />)}
        </div>
      </div>
    </section>
  );
};

export default Education;
