import React, { useState, useEffect } from 'react';
import { ChevronRight, AlertTriangle, Phone, Mail, ExternalLink, Globe, RotateCcw } from 'lucide-react';

// --- Types ---
type Language = 'fr' | 'en';
type Zone = 'green' | 'yellow' | 'orange' | 'red';
type ViewState = 'welcome' | 'assessment' | 'results' | 'crisis';

interface ZoneData {
  id: Zone;
  color: string;
  name: { fr: string; en: string };
  action: { fr: string; en: string };
  signs: { fr: string[]; en: string[] };
  strategies: { fr: string[]; en: string[] };
}

// --- Complete Assessment Data ---
const ZONES: ZoneData[] = [
  {
    id: 'green',
    color: '#28a745',
    name: { fr: 'En Santé', en: 'Healthy' },
    action: { fr: 'JE CONTINUE!', en: 'I CONTINUE!' },
    signs: {
      fr: [
        'Être posé(e), calme',
        'Sens de l\'humour',
        'Vivacité de l\'esprit, idées claires, bonne mémoire et concentration',
        'Sommeil réparateur',
        'Rendement soutenu',
        'Confiance en soi et en les autres',
        'Se sentir bien',
        'Actif(ve) physiquement',
        'Actif(ve) socialement',
        'Consommation occasionnelle et sociale',
        'Bon niveau d\'énergie'
      ],
      en: [
        'Calm and steady',
        'Sense of humour',
        'Mentally alert',
        'Sleeping well',
        'Performing consistently',
        'Confident in self and others',
        'Feeling good',
        'Physically active',
        'Socially active',
        'Substance use is occasional',
        'Good energy levels'
      ]
    },
    strategies: {
      fr: [
        'Maintenir ses activités, avoir une routine et privilégier de saines habitudes de vie',
        'Pratiquer la pleine conscience, la relaxation et la méditation',
        'Cultiver ses liens sociaux',
        'Récupérer : ralentir, se reposer',
        'S\'outiller pour préserver sa santé psychologique'
      ],
      en: [
        'Maintain current activities',
        'Practice mindfulness',
        'Cultivate social relationships',
        'Recover: slow down and rest',
        'Build mental health toolkit'
      ]
    }
  },
  {
    id: 'yellow',
    color: '#ffc107',
    name: { fr: 'En Réaction', en: 'Reacting' },
    action: { fr: 'JE FAIS ATTENTION!', en: 'I PAY ATTENTION!' },
    signs: {
      fr: [
        'Anxiété, tristesse occasionnelle',
        'Irritabilité, sarcasme déplacé',
        'Oublis, pensées intrusives',
        'Sommeil perturbé',
        'Sentiment d\'être surchargé(e), procrastination (remettre à plus tard)',
        'Tensions et maux de tête',
        'Manque d\'énergie',
        'Activités physiques réduites',
        'Contacts sociaux réduits',
        'Doute de soi',
        'Consommation régulière, mais contrôlée'
      ],
      en: [
        'Occasional anxiety or sadness',
        'Irritability or pessimism',
        'Forgetfulness or intrusive thoughts',
        'Difficulty sleeping',
        'Feeling overworked or procrastinating',
        'Tension or headaches',
        'Low energy',
        'Reduced physical activity',
        'Reduced social contacts',
        'Self-doubt',
        'Substance use is regular but controlled'
      ]
    },
    strategies: {
      fr: [
        'Récupérer : ralentir, se reposer',
        'S\'outiller pour préserver sa santé psychologique',
        'Identifier les difficultés et les solutions possibles',
        'Agir sur ce que l\'on peut changer',
        'Consulter son PAE (s\'il y a lieu)'
      ],
      en: [
        'Recover: slow down and rest',
        'Build mental health toolkit',
        'Identify problems',
        'Act on things that can be changed',
        'Consult employee assistance program (if available)'
      ]
    }
  },
  {
    id: 'orange',
    color: '#ff8c00',
    name: { fr: 'Fragilisé(e)', en: 'At Risk' },
    action: { fr: 'J\'AGIS!', en: 'I ACT!' },
    signs: {
      fr: [
        'Anxiété, tristesse envahissante',
        'Colère, cynisme',
        'Indécision, manque de concentration',
        'Sommeil agité, cauchemars',
        'Sentiment d\'être débordé(e), piètre performance',
        'Doute des autres',
        'Douleurs physiques',
        'Fatigue',
        'Inactif(ve) physiquement',
        'Contacts sociaux évités',
        'Consommation difficile à contrôler'
      ],
      en: [
        'Persistent anxiety or sadness',
        'Angry or cynical',
        'Indecision, poor concentration',
        'Sleep disturbances, nightmares',
        'Feeling overwhelmed, poor performance',
        'Distrust in others',
        'Persistent physical symptoms',
        'Fatigue',
        'Physically inactive',
        'Avoiding social contacts',
        'Substance use is difficult to control'
      ]
    },
    strategies: {
      fr: [
        'Reconnaître qu\'il faut agir',
        'Récupérer : éliminer les tâches non essentielles',
        'Se confier à un pair ou une personne de confiance',
        'Maintenir le contact avec ses proches',
        'Consulter son PAE (s\'il y a lieu)'
      ],
      en: [
        'Acknowledge the need for action',
        'Recover: eliminate non-essential tasks',
        'Reach out to peers',
        'Maintain contact with loved ones',
        'Consult employee assistance program (if available)'
      ]
    }
  },
  {
    id: 'red',
    color: '#dc3545',
    name: { fr: 'En État Critique', en: 'Critical' },
    action: { fr: 'JE M\'ARRÊTE!', en: 'I STOP!' },
    signs: {
      fr: [
        'Anxiété constante, dépression, idées suicidaires',
        'Excès de colère, agressivité',
        'Incapacité à se concentrer',
        'Trop ou manque de sommeil',
        'Incapacité à faire ses tâches',
        'Méfiant(e)',
        'Maladies physiques',
        'Épuisement',
        'Léthargie',
        'Interruption des contacts sociaux',
        'Abus ou dépendance'
      ],
      en: [
        'Excessive anxiety, depression or suicidal thoughts',
        'Angry outbursts or aggression',
        'Unable to concentrate',
        'Significant sleep disturbances or oversleeping',
        'Unable to complete work tasks',
        'Excessive distrust',
        'Serious physical symptoms',
        'Exhaustion',
        'Lethargic',
        'No contact with loved ones',
        'Substance abuse or dependence'
      ]
    },
    strategies: {
      fr: [
        'Consulter un professionnel de la santé rapidement',
        'Se confier à un pair ou une personne de confiance',
        'Considérer un arrêt de travail',
        'Reprendre contact avec ses proches',
        'Consulter son PAE (s\'il y a lieu)'
      ],
      en: [
        'Consult a professional immediately',
        'Reach out to peers or someone you trust',
        'Consider a leave of absence from work',
        'Rekindle close relationships',
        'Consult employee assistance program (if available)'
      ]
    }
  }
];

const CONTENT = {
  welcome: {
    title: {
      fr: 'COMMENT FAIRE LA LECTURE DE SON TABLEAU DE BORD ?',
      en: 'HOW DO YOU READ YOUR CONTROL PANEL?'
    },
    intro: {
      fr: 'La lecture de son tableau de bord est primordiale pour sa santé psychologique. Prendre le temps de s\'arrêter et de vérifier comment l\'on se sent constitue un bon point de départ pour prendre soin de sa santé.',
      en: 'Reading your control panel is vital to your mental health. Maintaining a balanced mental state isn\'t always easy, but the following tool can help you remember to check your vital signs regularly.'
    },
    instructions: {
      fr: [
        'Pensez aux 2 dernières semaines',
        'Cochez chaque indicateur qui vous correspond',
        'Vous pouvez cocher dans plusieurs zones - c\'est normal',
        'L\'outil identifiera votre zone principale automatiquement'
      ],
      en: [
        'Think about the past 2 weeks',
        'Check each indicator that applies to you',
        'You can check items in multiple zones - that\'s normal',
        'The tool will identify your primary zone automatically'
      ]
    },
    cta: {
      fr: 'COMMENCER LA VÉRIFICATION',
      en: 'START CHECK'
    }
  },
  assessment: {
    heading: {
      fr: 'OÙ EST-CE QUE JE ME SITUE MAJORITAIREMENT ?',
      en: 'WHERE AM I PRIMARILY?'
    },
    subtitle: {
      fr: 'TÊTE - ESPRIT - CORPS - TRAVAIL',
      en: 'HEAD - MIND - BODY - WORK'
    },
    signs: {
      fr: 'SIGNES',
      en: 'SIGNS'
    },
    submit: {
      fr: 'VOIR MES RÉSULTATS',
      en: 'SEE MY RESULTS'
    }
  },
  crisis: {
    title: {
      fr: 'ALERTE CRITIQUE',
      en: 'CRITICAL ALERT'
    },
    message: {
      fr: 'Vous avez indiqué ressentir de l\'anxiété constante, de la dépression ou des idées suicidaires. Votre sécurité est notre priorité.',
      en: 'You indicated experiencing constant anxiety, depression or suicidal thoughts. Your safety is our priority.'
    },
    hotline: {
      fr: 'LIGNE DE CRISE 24/7',
      en: '24/7 CRISIS LINE'
    },
    continue: {
      fr: 'Continuer vers les résultats (non recommandé)',
      en: 'Continue to results (not recommended)'
    }
  }
};

// --- Safe Storage Hook ---
function useSafeStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      if (typeof window === 'undefined') return initialValue;
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value: T) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.warn('Storage error:', error);
    }
  };

  return [storedValue, setValue];
}

// --- Components ---

const Logo = ({ lang }: { lang: Language }) => {
  const [error, setError] = useState(false);
  // Using exact filename from uploaded files
  const logoUrl = "/images/Logo (fond noir).png";

  return (
    <div className="flex flex-col items-center justify-center mb-8">
      {!error ? (
        <img
          src={logoUrl}
          alt="Mayday M'Aider"
          className="h-24 w-auto object-contain drop-shadow-2xl"
          onError={() => setError(true)}
        />
      ) : (
        <div className="text-center">
          <div className="text-4xl font-bold text-white mb-2">
            {lang === 'fr' ? 'Le Tableau de Bord' : 'Check Your Lights'}
          </div>
          <div className="text-sm text-white/60">MAYDAY M'AIDER</div>
        </div>
      )}
    </div>
  );
};

const LanguageToggle = ({ lang, setLang }: { lang: Language; setLang: (l: Language) => void }) => (
  <div className="fixed top-4 right-4 z-50 flex gap-2 bg-white/10 backdrop-blur-sm rounded-full p-1 border border-white/20">
    <button
      onClick={() => setLang('fr')}
      className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
        lang === 'fr'
          ? 'bg-white text-blue-900'
          : 'text-white/70 hover:text-white'
      }`}
    >
      FR
    </button>
    <button
      onClick={() => setLang('en')}
      className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
        lang === 'en'
          ? 'bg-white text-blue-900'
          : 'text-white/70 hover:text-white'
      }`}
    >
      EN
    </button>
  </div>
);

// --- Main Component ---

export default function MaydayDashboard() {
  const [view, setView] = useSafeStorage<ViewState>('mayday_view', 'welcome');
  const [lang, setLang] = useSafeStorage<Language>('mayday_lang', 'fr');
  const [checked, setChecked] = useSafeStorage<Record<string, boolean>>('mayday_checked', {});
  const [email, setEmail] = useSafeStorage<string>('mayday_email', '');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [view]);

  const handleCheck = (zoneId: Zone, index: number) => {
    const key = `${zoneId}-${index}`;
    setChecked({ ...checked, [key]: !checked[key] });
  };

  const calculateResults = () => {
    const counts = { green: 0, yellow: 0, orange: 0, red: 0 };

    Object.keys(checked).forEach(key => {
      if (checked[key]) {
        const zone = key.split('-')[0] as Zone;
        counts[zone]++;
      }
    });

    // Sort zones by count
    const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
    return sorted[0][0] as Zone;
  };

  const handleSubmit = () => {
    // Check for crisis indicator (red zone, first item - suicidal thoughts)
    if (checked['red-0']) {
      setView('crisis');
    } else {
      setView('results');
    }
  };

  const resetApp = () => {
    try {
      window.localStorage.clear();
    } catch (e) {
      console.warn("Could not clear storage");
    }
    setChecked({});
    setEmail('');
    setView('welcome');
  };

  const totalChecked = Object.values(checked).filter(Boolean).length;
  const dominantZone = calculateResults();
  const dominantZoneData = ZONES.find(z => z.id === dominantZone);

  // --- VIEWS ---

  if (view === 'welcome') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white p-6 flex flex-col items-center justify-center relative overflow-hidden">
        <LanguageToggle lang={lang} setLang={setLang} />

        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-2xl w-full relative z-10 animate-[fadeIn_0.6s_ease-out]">
          <Logo lang={lang} />

          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              {CONTENT.welcome.title[lang]}
            </h1>
            <p className="text-lg text-white/90 leading-relaxed">
              {CONTENT.welcome.intro[lang]}
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 mb-8">
            <h2 className="font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-2xl">✓</span>
              {lang === 'fr' ? 'Comment utiliser cet outil :' : 'How to use this tool:'}
            </h2>
            <ol className="space-y-3">
              {CONTENT.welcome.instructions[lang].map((instruction, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">
                    {i + 1}
                  </span>
                  <span className="text-white/90">{instruction}</span>
                </li>
              ))}
            </ol>
          </div>

          <button
            onClick={() => setView('assessment')}
            className="w-full py-5 bg-white text-blue-900 font-bold rounded-2xl hover:bg-white/95 transition-all shadow-2xl text-lg flex items-center justify-center gap-3 group"
          >
            <span>{CONTENT.welcome.cta[lang]}</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    );
  }

  if (view === 'crisis') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-red-950 text-white p-6 flex flex-col items-center justify-center relative">
        <LanguageToggle lang={lang} setLang={setLang} />

        <div className="absolute inset-0 opacity-10 animate-pulse">
          <div className="absolute top-0 left-0 w-full h-1 bg-white"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-white"></div>
        </div>

        <div className="max-w-lg w-full relative z-10 text-center space-y-8">
          <div className="relative">
            <AlertTriangle className="w-24 h-24 text-white mx-auto animate-pulse drop-shadow-2xl" />
            <div className="absolute inset-0 bg-white blur-3xl opacity-30 animate-pulse"></div>
          </div>

          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {CONTENT.crisis.title[lang]}
            </h1>
            <div className="inline-block px-6 py-3 bg-white/20 backdrop-blur-sm border-2 border-white/50 rounded-xl mb-4">
              <p className="text-xl font-bold">{CONTENT.crisis.hotline[lang]}</p>
            </div>
            <p className="text-lg leading-relaxed text-white/90">
              {CONTENT.crisis.message[lang]}
            </p>
          </div>

          <div className="space-y-4">
            <a
              href="tel:18662773553"
              className="block w-full py-5 bg-white text-red-900 font-bold rounded-2xl hover:bg-white/95 transition-all shadow-2xl text-lg flex items-center justify-center gap-3 group"
            >
              <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              <span>{lang === 'fr' ? 'APPELER' : 'CALL'} 1-866-APPELLE</span>
            </a>

            <div className="p-4 bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl text-sm">
              <strong>{lang === 'fr' ? 'Disponible 24/7' : 'Available 24/7'}</strong>
              {' - '}
              {lang === 'fr' ? 'Soutien gratuit et confidentiel' : 'Free, confidential support'}
            </div>

            <button
              onClick={() => setView('results')}
              className="block w-full py-4 text-white/80 hover:text-white transition-colors text-sm underline"
            >
              {CONTENT.crisis.continue[lang]}
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (view === 'assessment') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white p-6 pb-32">
        <LanguageToggle lang={lang} setLang={setLang} />

        <div className="max-w-3xl mx-auto pt-6">
          <Logo lang={lang} />

          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">
              {CONTENT.assessment.heading[lang]}
            </h1>
            <p className="text-sm text-white/70 uppercase tracking-widest">
              {CONTENT.assessment.subtitle[lang]}
            </p>
          </div>

          <div className="space-y-6">
            {ZONES.map((zone, zoneIndex) => (
              <div
                key={zone.id}
                className="bg-white/5 backdrop-blur-sm border-2 rounded-2xl overflow-hidden"
                style={{ borderColor: `${zone.color}40` }}
              >
                {/* Zone Header */}
                <div
                  className="p-4 border-b-2"
                  style={{
                    backgroundColor: `${zone.color}20`,
                    borderColor: `${zone.color}40`
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: zone.color }}
                      ></div>
                      <div>
                        <h2 className="font-bold text-lg" style={{ color: zone.color }}>
                          {zone.name[lang]}
                        </h2>
                        <p className="text-sm font-bold opacity-90">
                          {zone.action[lang]}
                        </p>
                      </div>
                    </div>
                    <div className="text-sm font-bold opacity-70">
                      {Object.keys(checked).filter(k => k.startsWith(zone.id) && checked[k]).length}/11
                    </div>
                  </div>
                </div>

                {/* Signs Checklist */}
                <div className="p-5">
                  <h3 className="text-xs font-bold uppercase tracking-wider mb-4 opacity-70">
                    {CONTENT.assessment.signs[lang]}
                  </h3>
                  <div className="space-y-3">
                    {zone.signs[lang].map((sign, index) => (
                      <label
                        key={index}
                        className="flex items-start gap-3 cursor-pointer group"
                      >
                        <input
                          type="checkbox"
                          checked={checked[`${zone.id}-${index}`] || false}
                          onChange={() => handleCheck(zone.id, index)}
                          className="mt-1 w-5 h-5 rounded border-2 border-white/30 bg-white/10 checked:bg-white checked:border-white cursor-pointer flex-shrink-0"
                          style={{
                            accentColor: zone.color
                          }}
                        />
                        <span className="text-white/90 group-hover:text-white transition-colors leading-snug">
                          {sign}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sticky Submit Button */}
          <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-blue-950 via-blue-950 to-transparent z-40">
            <div className="max-w-3xl mx-auto">
              <button
                onClick={handleSubmit}
                disabled={totalChecked === 0}
                className="w-full py-5 bg-white text-blue-900 font-bold rounded-2xl hover:bg-white/95 transition-all shadow-2xl text-lg flex items-center justify-center gap-3 group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>{CONTENT.assessment.submit[lang]}</span>
                {totalChecked > 0 && (
                  <span className="bg-blue-900 text-white px-3 py-1 rounded-full text-sm">
                    {totalChecked}
                  </span>
                )}
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (view === 'results' && dominantZoneData) {
    const zoneColor = dominantZoneData.color;

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white p-6 overflow-y-auto">
        <LanguageToggle lang={lang} setLang={setLang} />

        <div className="max-w-3xl mx-auto pt-6 pb-20">
          <Logo lang={lang} />

          {/* Results Card */}
          <div
            className="rounded-3xl p-8 mb-8 border-4 shadow-2xl relative overflow-hidden"
            style={{
              backgroundColor: `${zoneColor}10`,
              borderColor: zoneColor
            }}
          >
            <div className="absolute top-0 left-0 w-full h-2" style={{ backgroundColor: zoneColor }}></div>

            <div className="text-center mb-8">
              <div
                className="inline-block w-16 h-16 rounded-full mb-4"
                style={{ backgroundColor: zoneColor }}
              ></div>
              <h1 className="text-4xl font-bold mb-2" style={{ color: zoneColor }}>
                {dominantZoneData.name[lang]}
              </h1>
              <p className="text-2xl font-bold opacity-90">
                {dominantZoneData.action[lang]}
              </p>
            </div>

            {/* Zone Breakdown */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {ZONES.map(zone => {
                const count = Object.keys(checked).filter(k => k.startsWith(zone.id) && checked[k]).length;
                return (
                  <div
                    key={zone.id}
                    className="text-center p-4 rounded-xl border-2"
                    style={{
                      backgroundColor: `${zone.color}15`,
                      borderColor: `${zone.color}40`
                    }}
                  >
                    <div className="text-3xl font-bold mb-1" style={{ color: zone.color }}>
                      {count}
                    </div>
                    <div className="text-xs opacity-70">{zone.name[lang]}</div>
                  </div>
                );
              })}
            </div>

            {/* Strategies */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h2 className="font-bold text-xl mb-4">
                {lang === 'fr' ? 'Stratégies Recommandées' : 'Recommended Strategies'}
              </h2>
              <ul className="space-y-3">
                {dominantZoneData.strategies[lang].map((strategy, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-xl flex-shrink-0">→</span>
                    <span className="text-white/90">{strategy}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Email Capture */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 mb-6">
            <h3 className="font-bold text-xl mb-2">
              {lang === 'fr' ? 'Vérification Mensuelle' : 'Monthly Check'}
            </h3>
            <p className="text-sm text-white/80 mb-4">
              {lang === 'fr'
                ? 'Recevez un rappel mensuel pour vérifier vos lumières.'
                : 'Receive a monthly reminder to check your lights.'}
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder={lang === 'fr' ? 'votre@email.com' : 'your@email.com'}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder:text-white/40 focus:border-white/50 focus:outline-none"
              />
              <button className="px-6 py-3 bg-white text-blue-900 font-bold rounded-xl hover:bg-white/95 transition-all">
                {lang === 'fr' ? 'S\'INSCRIRE' : 'JOIN'}
              </button>
            </div>
          </div>

          {/* Reset */}
          <button
            onClick={resetApp}
            className="w-full py-4 text-white/60 hover:text-white text-sm font-bold flex items-center justify-center gap-2 transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            {lang === 'fr' ? 'Recommencer l\'évaluation' : 'Restart Assessment'}
          </button>

          {/* Footer */}
          <div className="text-center mt-8 text-xs text-white/40">
            <p>MAYDAY M'AIDER © 2025</p>
            <p className="mt-1">
              {lang === 'fr'
                ? 'Source : Programme d\'aide aux médecins du Québec | Adaptation Jean-François Lacasse'
                : 'Source: Programme d\'aide aux médecins du Québec | Adapted by Jean-François Lacasse'}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
