import { useScrollReveal } from '../hooks/useScrollReveal';
import { use3DTilt } from '../hooks/use3DTilt';

const AchievementCard = ({ item, index }) => {
  const tiltRef = use3DTilt();
  const delayClass = ['delay-100', 'delay-200', 'delay-300'][index % 3];
  return (
    <div ref={tiltRef}
      className={`card-surface card-interactive flex items-start gap-5 p-6 rounded-2xl border fade-in ${delayClass}`}>
      <div className="icon-tile flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center">
        <span className="text-accent [&_svg]:w-6 [&_svg]:h-6 [&_svg]:stroke-blue-400">{item.icon}</span>
      </div>
      <div>
        <h3 className="font-bold text-base mb-1">{item.title}</h3>
        <p className="text-muted text-sm leading-relaxed mb-2">{item.description}</p>
        <span className="text-gradient font-mono text-xs">{item.date}</span>
      </div>
    </div>
  );
};

const Achievements = () => {
  const revealRef = useScrollReveal();
  const achievements = [
    {
      title: 'Best All-Rounder', date: 'January 2024',
      description: "Honoured with the 'Baroda Achievers Award' by Bank of Baroda for excelling in all-round categories in the institution.",
      icon: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7" /><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" /></svg>),
    },
    {
      title: '1st Place - 3D Archidex', date: 'March 2023',
      description: 'Winner of the AutoCAD Designing and 3D Modelling Competition organized by IIT Mandi.',
      icon: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" /><path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" /><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" /><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" /></svg>),
    },
    {
      title: 'Football Player', date: '2018 & 2023',
      description: 'Represented MANIT Bhopal at the Inter-NIT Football Tournament (2023). Represented Warangal Cluster (Telangana State) at the Regional Level Football Tournament (2018).',
      icon: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 12l3.5-2M12 12l-3.5-2M12 12v4M8.5 10l-2.5 4M15.5 10l2.5 4" /></svg>),
    },
  ];

  return (
    <section id="achievements" className="reveal py-24 md:py-32" ref={revealRef}>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="section-heading">Achievements & Awards</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, i) => <AchievementCard key={i} item={item} index={i} />)}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
