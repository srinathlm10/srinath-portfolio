import { useScrollReveal } from '../hooks/useScrollReveal';
import { use3DTilt } from '../hooks/use3DTilt';

const Responsibility = () => {
  const revealRef = useScrollReveal();

  const roles = [
    {
      title: 'Under Officer at NCC', organization: '1 MP CTR NCC', date: 'Dec 2021 - Feb 2023',
      description: 'Held responsibilities for organizing and assisting with special events, programs, and training activities. Volunteered with organizations to make measurable differences.',
    },
    {
      title: 'Sergeant', organization: 'National Cadet Corps (NCC)', date: '2020 - 2021',
      description: 'Mentored junior cadets, assisted in organizing drill practices and camps, and ensured discipline and smooth execution of training programs.',
    },
  ];

  return (
    <section id="responsibility" className="reveal py-24 md:py-32" ref={revealRef}>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="section-heading">Positions of Responsibility</h2>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-4 sm:left-5 top-0 bottom-0 w-px"
            style={{ background: 'rgba(59,130,246,0.25)' }} />

          <div className="space-y-8 pl-10 sm:pl-16">
            {roles.map((role, index) => {
              const tiltRef = use3DTilt();
              return (
                <div key={index} className="relative">
                  {/* Dot */}
                  <div className="absolute -left-[27px] sm:-left-11 top-6 w-3 h-3 rounded-full border-2 border-blue-400"
                    style={{ background: 'var(--dot-bg, #0b1426)' }} />

                  <div ref={tiltRef}
                    className={`card-surface card-interactive p-5 sm:p-6 rounded-2xl border fade-in delay-${(index + 1) * 100}`}>
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                      <h3 className="font-bold text-sm sm:text-base">{role.title}</h3>
                      <span className="text-mono-accent text-[10px] sm:text-xs flex-shrink-0">{role.date}</span>
                    </div>
                    <p className="text-accent text-xs sm:text-sm font-medium mb-3">{role.organization}</p>
                    <p className="text-muted text-xs sm:text-sm leading-relaxed">{role.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Responsibility;
