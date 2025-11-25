import React, { useState, useEffect } from 'react';
import {
  Plane,
  Fuel,
  Zap,
  CloudSun,
  Thermometer,
  Radio,
  Compass,
  Activity,
  Scale,
  ShieldCheck,
  AlertTriangle,
  Siren,
  ChevronRight,
  Share2,
  RefreshCw,
  RotateCcw,
  Phone,
  ExternalLink
} from 'lucide-react';

// --- Types & Content Data ---

type Zone = 'green' | 'yellow' | 'orange' | 'red';
type ViewState = 'intro' | 'safety' | 'tour' | 'results' | 'crisis';

interface GaugeData {
  id: number;
  metaphor: string;
  system: string;
  icon: React.ElementType;
  question: string;
  zones: {
    green: string;
    yellow: string;
    orange: string;
    red: string;
  };
}

const GAUGES: GaugeData[] = [
  {
    id: 1,
    metaphor: "Master Warning",
    system: "Mental State",
    icon: Siren,
    question: "How is your internal alarm system?",
    zones: {
      green: "Calm, steady, and composed.",
      yellow: "Occasional anxiety or sadness.",
      orange: "Pervasive anxiety or sadness.",
      red: "Constant anxiety, depression, or dark thoughts."
    }
  },
  {
    id: 2,
    metaphor: "Fuel Gauge",
    system: "Sleep",
    icon: Fuel,
    question: "How are your fuel reserves?",
    zones: {
      green: "Sleeping well, restorative rest.",
      yellow: "Sleep is disturbed or restless.",
      orange: "Agitated sleep, nightmares.",
      red: "Insomnia, oversleeping, or chaotic sleep."
    }
  },
  {
    id: 3,
    metaphor: "RPM Gauge",
    system: "Energy",
    icon: Zap,
    question: "What is your engine power output?",
    zones: {
      green: "Good energy levels, full power.",
      yellow: "Feeling low energy, slight drag.",
      orange: "Fatigue, struggling to maintain power.",
      red: "Exhaustion, engine failure imminent."
    }
  },
  {
    id: 4,
    metaphor: "Altimeter",
    system: "Mood & Attitude",
    icon: CloudSun,
    question: "What is your emotional altitude?",
    zones: {
      green: "Sense of humor, lightness.",
      yellow: "Irritability, pessimism, flying low.",
      orange: "Anger, cynicism, turbulence.",
      red: "Aggression, outbursts, rapid descent."
    }
  },
  {
    id: 5,
    metaphor: "Engine Temp",
    system: "Physical Health",
    icon: Thermometer,
    question: "Is your engine overheating?",
    zones: {
      green: "Feeling good physically.",
      yellow: "Tension, headaches, minor warnings.",
      orange: "Persistent physical pain/symptoms.",
      red: "Serious physical symptoms or illness."
    }
  },
  {
    id: 6,
    metaphor: "Comms Radio",
    system: "Social Connection",
    icon: Radio,
    question: "Are you connected to the tower?",
    zones: {
      green: "Socially active, clear signal.",
      yellow: "Reduced contacts, static on line.",
      orange: "Avoiding contact, radio silence.",
      red: "Isolation, complete signal loss."
    }
  },
  {
    id: 7,
    metaphor: "Compass",
    system: "Focus & Cognition",
    icon: Compass,
    question: "Are you staying on course?",
    zones: {
      green: "Sharp mind, clear ideas, on heading.",
      yellow: "Forgetfulness, intrusive thoughts.",
      orange: "Indecision, drifting off course.",
      red: "Inability to concentrate, lost heading."
    }
  },
  {
    id: 8,
    metaphor: "Airspeed",
    system: "Physical Activity",
    icon: Activity,
    question: "Are you maintaining velocity?",
    zones: {
      green: "Physically active, cruising speed.",
      yellow: "Reduced activity, slowing down.",
      orange: "Inactive, near stall speed.",
      red: "Lethargic, completely stalled."
    }
  },
  {
    id: 9,
    metaphor: "Artificial Horizon",
    system: "Work/Life Balance",
    icon: Scale,
    question: "Are you flying level?",
    zones: {
      green: "Consistent performance, level flight.",
      yellow: "Feeling overworked, slight bank.",
      orange: "Overwhelmed, dangerous bank angle.",
      red: "Unable to function, steep dive."
    }
  },
  {
    id: 10,
    metaphor: "Landing Gear",
    system: "Self-Confidence",
    icon: ShieldCheck,
    question: "Is your gear down and locked?",
    zones: {
      green: "Confident in self and others.",
      yellow: "Self-doubt creeping in.",
      orange: "Distrust of others and self.",
      red: "Excessive distrust, gear failure."
    }
  },
  {
    id: 11,
    metaphor: "System Warning",
    system: "Substance Use",
    icon: AlertTriangle,
    question: "Any warning lights on the panel?",
    zones: {
      green: "Occasional/Social use only.",
      yellow: "Regular but controlled use.",
      orange: "Difficult to control use.",
      red: "Abuse or dependency detected."
    }
  }
];

// --- Colors & Styles ---

const COLORS = {
  green: {
    bg: 'bg-emerald-500',
    text: 'text-emerald-400',
    glow: 'shadow-[0_0_20px_rgba(16,185,129,0.5)]',
    border: 'border-emerald-500',
    gradient: 'from-emerald-500/20 to-emerald-500/5',
    ring: 'ring-emerald-500/30'
  },
  yellow: {
    bg: 'bg-yellow-400',
    text: 'text-yellow-400',
    glow: 'shadow-[0_0_20px_rgba(250,204,21,0.5)]',
    border: 'border-yellow-400',
    gradient: 'from-yellow-400/20 to-yellow-400/5',
    ring: 'ring-yellow-400/30'
  },
  orange: {
    bg: 'bg-orange-500',
    text: 'text-orange-500',
    glow: 'shadow-[0_0_20px_rgba(249,115,22,0.5)]',
    border: 'border-orange-500',
    gradient: 'from-orange-500/20 to-orange-500/5',
    ring: 'ring-orange-500/30'
  },
  red: {
    bg: 'bg-red-600',
    text: 'text-red-500',
    glow: 'shadow-[0_0_20px_rgba(220,38,38,0.6)]',
    border: 'border-red-600',
    gradient: 'from-red-600/20 to-red-600/5',
    ring: 'ring-red-600/30'
  },
  neutral: {
    bg: 'bg-slate-700',
    text: 'text-slate-400',
    glow: '',
    border: 'border-slate-700',
    gradient: 'from-slate-700/20 to-slate-700/5',
    ring: 'ring-slate-700/30'
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
      console.warn(`Error reading localStorage key "${key}":`, error);
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
      console.warn(`Error setting localStorage key "${key}":`, error);
    }
  };

  return [storedValue, setValue];
}

// --- Helper Functions ---

const getZoneFromValue = (val: number): Zone => {
  if (val === 0) return 'green';
  if (val === 1) return 'yellow';
  if (val === 2) return 'orange';
  return 'red';
};

const triggerHaptic = () => {
  try {
    if (typeof navigator !== 'undefined' && navigator.vibrate) {
      navigator.vibrate(5);
    }
  } catch (e) {
    // Ignore haptic errors
  }
};

// --- Components ---

const Logo = () => {
  const [lightImgError, setLightImgError] = useState(false);
  const [darkImgError, setDarkImgError] = useState(false);
  const [isDark, setIsDark] = useState(true); // Assuming dark mode for aviation theme

  const lightLogoUrl = "/images/logo-white-bg.png";
  const darkLogoUrl = "/images/logo-black-bg.png";
  const currentLogoUrl = isDark ? darkLogoUrl : lightLogoUrl;
  const hasError = isDark ? darkImgError : lightImgError;

  return (
    <div className="flex flex-col items-center justify-center mb-8">
      <div className="flex items-center gap-4">
        {/* Primary Brain Logo */}
        {!hasError ? (
          <img
            src={currentLogoUrl}
            alt="Check Your Lights"
            className="h-16 w-16 object-contain drop-shadow-lg"
            onError={() => isDark ? setDarkImgError(true) : setLightImgError(true)}
          />
        ) : (
          <div className="relative">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-sky-400 via-purple-500 to-pink-500 animate-pulse"></div>
            <Plane className="w-8 h-8 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          </div>
        )}

        {/* Brand Text */}
        <div className="flex flex-col items-start">
          <h1 className="text-2xl md:text-3xl font-black tracking-wider text-white uppercase italic leading-none">
            Check <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">Your</span>
          </h1>
          <h1 className="text-2xl md:text-3xl font-black tracking-wider text-white uppercase italic leading-none">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">Lights</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <div
    className="animate-[fadeIn_0.5s_ease-out_forwards] opacity-0"
    style={{ animationDelay: `${delay}ms` }}
  >
    {children}
  </div>
);

const GaugeVisual = ({ zone, icon: Icon, value }: { zone: Zone | null, icon: any, value: number }) => {
  const rotation = -90 + (value * 60);
  const color = zone ? COLORS[zone] : COLORS.neutral;

  return (
    <div className="relative w-72 h-36 mx-auto my-8 overflow-hidden">
      {/* Outer Shell */}
      <div className="absolute top-full left-1/2 -translate-x-1/2 -translate-y-full w-64 h-64 rounded-full border-[14px] border-slate-800 border-b-0 shadow-inner"></div>

      {/* Active Glow Ring */}
      <div className={`absolute top-full left-1/2 -translate-x-1/2 -translate-y-full w-64 h-64 rounded-full border-[14px] ${zone ? color.border : 'border-slate-700'} ${zone ? color.glow : ''} border-b-0 transition-all duration-700 ease-out opacity-80`}></div>

      {/* Zone Background Arcs */}
      <svg className="absolute top-full left-1/2 -translate-x-1/2 -translate-y-full w-64 h-64 pointer-events-none" viewBox="0 0 200 200">
        <defs>
          <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.2" />
            <stop offset="33%" stopColor="#facc15" stopOpacity="0.2" />
            <stop offset="66%" stopColor="#f97316" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#dc2626" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        <path
          d="M 30,100 A 70,70 0 0,1 170,100"
          fill="none"
          stroke="url(#gaugeGradient)"
          strokeWidth="20"
          className="opacity-40"
        />
      </svg>

      {/* Tick Marks */}
      <div className="absolute inset-0 w-full h-full">
        {[0, 1, 2, 3].map((tick) => (
          <div key={tick}>
            {/* Major Ticks */}
            <div
              className={`absolute bottom-0 left-1/2 w-1.5 h-5 rounded-full ${tick === value ? 'bg-white shadow-lg' : 'bg-slate-600'} origin-bottom transition-all duration-300`}
              style={{
                transform: `translateX(-50%) rotate(${-90 + (tick * 60)}deg) translateY(-110px)`,
                opacity: tick === value ? 1 : 0.5
              }}
            ></div>
            {/* Minor Ticks between major ones */}
            {tick < 3 && (
              <div
                className="absolute bottom-0 left-1/2 w-0.5 h-3 bg-slate-700 origin-bottom opacity-30"
                style={{
                  transform: `translateX(-50%) rotate(${-90 + (tick * 60) + 30}deg) translateY(-110px)`
                }}
              ></div>
            )}
          </div>
        ))}
      </div>

      {/* Center Icon */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-6 flex flex-col items-center justify-end h-full pb-2">
        <div className="relative">
          <Icon className={`w-14 h-14 ${zone ? color.text : 'text-slate-600'} transition-all duration-500 drop-shadow-lg`} />
          {zone && (
            <div className={`absolute inset-0 ${zone ? color.text : ''} blur-xl opacity-40`}></div>
          )}
        </div>
      </div>

      {/* Needle Container */}
      <div
        className="absolute bottom-0 left-1/2 w-full h-full origin-bottom-center transition-transform duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
        style={{ transform: `translateX(-50%) rotate(${rotation}deg)` }}
      >
        {/* Needle Shadow */}
        <div className="absolute bottom-0 left-1/2 w-1 h-28 bg-black/20 origin-bottom -translate-x-1/2 translate-x-0.5 translate-y-0.5 rounded-full blur-sm"></div>
        {/* Needle */}
        <div className="absolute bottom-0 left-1/2 w-1.5 h-28 bg-gradient-to-t from-slate-100 via-slate-300 to-red-500 origin-bottom -translate-x-1/2 rounded-full shadow-lg"></div>
        {/* Needle Cap */}
        <div className="absolute bottom-0 left-1/2 w-7 h-7 bg-gradient-to-br from-slate-100 to-slate-300 rounded-full -translate-x-1/2 translate-y-1/2 border-4 border-slate-900 z-10 shadow-xl"></div>
        {/* Center Glow */}
        <div className={`absolute bottom-0 left-1/2 w-7 h-7 ${zone ? color.bg : 'bg-slate-700'} rounded-full -translate-x-1/2 translate-y-1/2 blur-md opacity-60 transition-colors duration-500`}></div>
      </div>

      {/* Zone Labels */}
      <div className="absolute bottom-0 left-0 text-[9px] text-emerald-400 font-mono font-bold translate-y-2 opacity-60">
        HEALTHY
      </div>
      <div className="absolute bottom-0 right-0 text-[9px] text-red-500 font-mono font-bold translate-y-2 opacity-60">
        CRITICAL
      </div>
    </div>
  );
};

// --- Main App Component ---

export default function AviationDashboard() {
  const [view, setView] = useSafeStorage<ViewState>('cyl_view', 'intro');
  const [currentGaugeIndex, setCurrentGaugeIndex] = useSafeStorage<number>('cyl_index', 0);
  const [answers, setAnswers] = useSafeStorage<Record<number, number>>('cyl_answers', {});
  const [transitioning, setTransitioning] = useState(false);

  // Scroll to top on view change
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [view]);

  // Reset Function
  const resetApp = () => {
    try {
      window.localStorage.clear();
    } catch (e) {
      console.warn("Could not clear local storage");
    }
    setAnswers({});
    setCurrentGaugeIndex(0);
    setView('intro');
  };

  // Logic Handlers
  const handleSafetyCheck = (value: number) => {
    if (transitioning) return;
    setTransitioning(true);
    triggerHaptic();

    setAnswers({...answers, 1: value});

    setTimeout(() => {
      if (value === 3) {
        setView('crisis');
      } else {
        setCurrentGaugeIndex(1);
        setView('tour');
      }
      setTransitioning(false);
    }, 500);
  };

  const handleGaugeSet = (value: number) => {
    if (transitioning) return;
    setTransitioning(true);
    triggerHaptic();

    const gaugeId = GAUGES[currentGaugeIndex].id;
    setAnswers({...answers, [gaugeId]: value});

    setTimeout(() => {
      if (currentGaugeIndex < GAUGES.length - 1) {
        setCurrentGaugeIndex(currentGaugeIndex + 1);
      } else {
        setView('results');
      }
      setTransitioning(false);
    }, 400);
  };

  const handleSliderChange = (val: string, setter: (v: number) => void) => {
    const numVal = parseInt(val);
    triggerHaptic();
    setter(numVal);
  };

  // --- Views ---

  if (view === 'intro') {
    return (
      <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-6 relative overflow-hidden font-sans select-none">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-800 via-slate-950 to-black z-0"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <FadeIn>
          <div className="z-10 w-full max-w-md flex flex-col items-center text-center space-y-8 relative">
            <Logo />

            <div className="space-y-4 px-4">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">
                Pilot, check your instruments.
              </h2>
              <p className="text-slate-300 text-base md:text-lg leading-relaxed">
                Before you take off, we need to perform a system status check.
                Review your <strong className="text-blue-400">11 vital gauges</strong> to ensure a safe flight.
              </p>
            </div>

            <div className="w-full space-y-4 px-4">
              <button
                onClick={() => setView('safety')}
                aria-label="Start pre-flight check"
                className="group relative px-8 py-5 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-bold rounded-2xl w-full transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] flex items-center justify-center gap-3 active:scale-[0.98] transform"
              >
                <span className="tracking-wider text-sm md:text-base">START PRE-FLIGHT CHECK</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="flex items-center justify-center gap-4 text-xs text-slate-500 font-mono tracking-wider pt-2">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>CONFIDENTIAL</span>
                </div>
                <div className="w-1 h-1 bg-slate-600 rounded-full"></div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <span>ANONYMOUS</span>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        <div className="absolute bottom-8 flex flex-col items-center gap-2 z-10">
          <div className="text-[10px] text-slate-600 font-mono tracking-[0.3em] flex items-center gap-2">
            CRAFTED WITH <span className="text-red-500 animate-pulse">❤</span> BY SWEETBOT
          </div>
        </div>
      </div>
    );
  }

  if (view === 'crisis') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-red-950 via-red-900 to-black text-white p-6 flex flex-col items-center justify-center text-center space-y-8 animate-in fade-in duration-500 relative overflow-hidden">
        {/* Alert Animation */}
        <div className="absolute inset-0 opacity-10 animate-pulse">
          <div className="absolute top-0 left-0 w-full h-1 bg-red-500"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-red-500"></div>
        </div>

        <FadeIn>
          <div className="relative">
            <Siren className="w-24 h-24 text-red-500 animate-[pulse_1s_ease-in-out_infinite] drop-shadow-2xl" />
            <div className="absolute inset-0 bg-red-500 blur-3xl opacity-50 animate-pulse"></div>
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="space-y-4 max-w-lg">
            <h1 className="text-4xl md:text-5xl font-black text-red-500 tracking-tighter uppercase">
              Critical Alert
            </h1>
            <div className="inline-block px-4 py-2 bg-red-500/20 border border-red-500/50 rounded-lg">
              <p className="text-xl font-bold text-red-300">Master Warning Active</p>
            </div>
            <p className="text-red-100 text-base md:text-lg leading-relaxed px-4">
              You indicated you are experiencing <strong>constant anxiety, depression, or dark thoughts</strong>.
              Flight safety protocols require <strong className="text-red-400">immediate support</strong>.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={400}>
          <div className="w-full max-w-sm space-y-4 px-4">
            <a
              href="tel:18662773553"
              className="block w-full py-5 bg-white text-red-900 font-bold rounded-2xl hover:bg-red-50 active:bg-white transition-all shadow-2xl text-base md:text-lg flex items-center justify-center gap-3 group"
            >
              <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              <span>CALL CRISIS LINE</span>
              <span className="text-sm opacity-75">(1-866-APPELLE)</span>
            </a>

            <div className="p-4 bg-red-950/50 border border-red-800/50 rounded-xl text-sm text-red-200 leading-relaxed">
              <strong className="text-red-400">Available 24/7</strong> - Free, confidential support from trained professionals.
            </div>

            <button
              onClick={() => setView('results')}
              className="block w-full py-4 text-red-300 hover:text-red-200 transition-colors text-sm underline underline-offset-4 font-medium"
            >
              Continue to Dashboard (Not Recommended)
            </button>
          </div>
        </FadeIn>
      </div>
    );
  }

  // Shared Logic for Safety & Tour views
  const isSafety = view === 'safety';
  const gaugeIndex = isSafety ? 0 : currentGaugeIndex;
  const gauge = GAUGES[gaugeIndex];

  const currentVal = answers[gauge.id] ?? 0;
  const currentZone = getZoneFromValue(currentVal);
  const color = COLORS[currentZone];

  if (view === 'safety' || view === 'tour') {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center overflow-x-hidden touch-manipulation relative">

        {/* Progress Bar */}
        {!isSafety && (
          <div className="w-full h-2 bg-slate-900 fixed top-0 left-0 z-50 shadow-lg">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-700 ease-out shadow-[0_0_15px_rgba(59,130,246,0.6)]"
              style={{ width: `${((gaugeIndex + 1) / 11) * 100}%` }}
            >
              <div className="h-full w-full bg-gradient-to-r from-transparent to-white/30 animate-pulse"></div>
            </div>
          </div>
        )}

        <div className="w-full max-w-md flex-1 flex flex-col pt-6 pb-12 px-6">
          <FadeIn key={gauge.id}>
            {/* Header Info */}
            <div className="flex items-center justify-between mb-4">
              {isSafety ? (
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-xs font-mono text-red-400 tracking-widest uppercase font-bold">
                    Safety Check
                  </span>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  <span className="text-xs font-mono text-blue-400 tracking-widest uppercase font-bold">
                    System Check
                  </span>
                </div>
              )}
              <span className="text-xs font-mono text-slate-500 font-bold">
                GAUGE {gauge.id}/11
              </span>
            </div>

            {/* Gauge Title */}
            <div className="text-center mb-6">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white drop-shadow-lg mb-2">
                {gauge.metaphor}
              </h2>
              <div className="inline-block px-4 py-1.5 bg-slate-800/50 backdrop-blur-sm rounded-full border border-slate-700/50">
                <p className="text-slate-400 text-xs uppercase tracking-[0.2em] font-bold">
                  {gauge.system}
                </p>
              </div>
            </div>

            {/* Gauge Visual */}
            <GaugeVisual zone={currentZone} icon={gauge.icon} value={currentVal} />

            {/* Question */}
            <div className="text-center mb-8 min-h-[4rem] flex items-center justify-center">
              <h3 className="text-lg md:text-xl font-medium text-slate-200 leading-snug px-4">
                {gauge.question}
              </h3>
            </div>

            {/* Interaction Card */}
            <div className={`bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-3xl p-6 shadow-2xl relative overflow-hidden transition-all duration-500 ${isSafety ? 'ring-2 ring-red-900/50' : ''}`}>
              {/* Ambient Glow */}
              <div className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-br ${color.gradient} opacity-20 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none transition-all duration-700`}></div>

              <div className="relative z-10">
                <div className="flex justify-between text-[10px] text-slate-500 uppercase tracking-wider mb-4 font-bold px-1">
                  <span>Healthy</span>
                  <span>Critical</span>
                </div>

                {/* Custom Range Slider */}
                <div className="relative h-14 mb-6 flex items-center">
                  <div className="absolute w-full h-4 bg-slate-800 rounded-full overflow-hidden shadow-inner">
                    <div className="w-full h-full bg-gradient-to-r from-emerald-500 via-yellow-400 via-orange-500 to-red-600 opacity-40"></div>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="3"
                    step="1"
                    value={currentVal}
                    onChange={(e) => handleSliderChange(e.target.value, (v) => isSafety ? setAnswers({...answers, 1: v}) : setAnswers({...answers, [gauge.id]: v}))}
                    aria-label={`${gauge.system} level selector`}
                    className="w-full absolute z-10 opacity-0 h-14 cursor-pointer touch-manipulation"
                  />
                  {/* Visual Thumb */}
                  <div
                    className={`absolute h-10 w-10 bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,0.4)] border-4 border-slate-900 pointer-events-none transition-all duration-300 ease-out ring-4 ${color.ring}`}
                    style={{ left: `calc(${currentVal * 33.33}% - 20px)` }}
                  >
                    <div className={`absolute inset-0 ${color.bg} rounded-full opacity-20 blur-md`}></div>
                  </div>
                </div>

                {/* Dynamic Text Box */}
                <div className={`p-5 rounded-2xl border-2 transition-all duration-500 flex items-center justify-center min-h-[6rem] bg-slate-950/50 backdrop-blur-sm ${color.border} border-opacity-40 ${color.glow}`}>
                  <p className={`text-center font-medium leading-relaxed ${color.text} transition-all duration-500 animate-[fadeIn_0.4s_ease-out] text-sm md:text-base`}>
                    {currentVal === 0 && gauge.zones.green}
                    {currentVal === 1 && gauge.zones.yellow}
                    {currentVal === 2 && gauge.zones.orange}
                    {currentVal === 3 && gauge.zones.red}
                  </p>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <button
              disabled={transitioning}
              onClick={() => isSafety ? handleSafetyCheck(currentVal) : handleGaugeSet(currentVal)}
              aria-label={isSafety ? 'Confirm safety check reading' : currentGaugeIndex === 10 ? 'Complete system check' : 'Continue to next system'}
              className={`mt-6 w-full py-5 text-white font-bold rounded-2xl shadow-lg transition-all flex items-center justify-center gap-3 group active:scale-[0.98] transform ${
                isSafety
                  ? 'bg-slate-800 hover:bg-slate-700 active:bg-slate-900'
                  : 'bg-blue-600 hover:bg-blue-500 active:bg-blue-700 shadow-blue-900/30'
              } ${transitioning ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <span className="tracking-widest text-sm md:text-base">
                {isSafety ? 'CONFIRM READING' : (currentGaugeIndex === 10 ? 'COMPLETE CHECK' : 'NEXT SYSTEM')}
              </span>
              {!transitioning ? (
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              ) : (
                <RefreshCw className="w-5 h-5 animate-spin" />
              )}
            </button>
          </FadeIn>
        </div>
      </div>
    );
  }

  if (view === 'results') {
    const greenCount = Object.values(answers).filter(v => v === 0).length;
    const yellowCount = Object.values(answers).filter(v => v === 1).length;
    const orangeCount = Object.values(answers).filter(v => v === 2).length;
    const redCount = Object.values(answers).filter(v => v === 3).length;

    let overallStatus: Zone = 'green';
    if (yellowCount > 2) overallStatus = 'yellow';
    if (orangeCount > 1) overallStatus = 'orange';
    if (redCount > 0) overallStatus = 'red';

    const statusColor = COLORS[overallStatus];

    const statusMessages = {
      green: "All systems nominal. You are cleared for takeoff. Maintain current protocols and enjoy the flight.",
      yellow: "Minor turbulence detected. Pay attention to your yellow and orange indicators. Consider adjustments to stabilize your systems.",
      orange: "Warning lights active. Systems are struggling. Reduce load immediately and consult your flight manual. Professional guidance recommended.",
      red: "Emergency protocols engaged. Multiple critical systems failing. Land immediately and seek professional support. This is not a drill."
    };

    return (
      <div className="min-h-screen bg-slate-950 text-white overflow-y-auto overflow-x-hidden">
        <FadeIn>
          <div className="p-6 max-w-lg mx-auto pb-20">
            <header className="flex items-center justify-center mb-8 pt-4">
              <Logo />
            </header>

            {/* Main Status Card */}
            <div className={`p-8 rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border-2 ${statusColor.border} shadow-2xl ${statusColor.glow} mb-8 relative overflow-hidden group`}>
              <div className={`absolute top-0 left-0 w-full h-2 ${statusColor.bg} shadow-[0_0_30px_currentColor]`}></div>
              <div className={`absolute inset-0 bg-gradient-to-br ${statusColor.gradient} opacity-20 pointer-events-none`}></div>

              <div className="relative z-10">
                <h2 className="text-slate-500 text-[10px] font-mono uppercase tracking-[0.3em] mb-3 font-bold">
                  Current Flight Status
                </h2>
                <h1 className={`text-4xl md:text-5xl font-black uppercase ${statusColor.text} mb-6 tracking-tight leading-none drop-shadow-lg`}>
                  {overallStatus === 'green' && 'Systems Nominal'}
                  {overallStatus === 'yellow' && 'Caution Required'}
                  {overallStatus === 'orange' && 'Systems Warning'}
                  {overallStatus === 'red' && 'Critical Failure'}
                </h1>

                {/* Stats Grid */}
                <div className="grid grid-cols-4 gap-3 mb-6">
                  {[
                    { count: greenCount, label: 'GRN', color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/30' },
                    { count: yellowCount, label: 'YEL', color: 'text-yellow-400', bg: 'bg-yellow-400/10', border: 'border-yellow-400/30' },
                    { count: orangeCount, label: 'ORG', color: 'text-orange-500', bg: 'bg-orange-500/10', border: 'border-orange-500/30' },
                    { count: redCount, label: 'RED', color: 'text-red-500', bg: 'bg-red-600/10', border: 'border-red-600/30' }
                  ].map((stat, idx) => (
                    <div key={idx} className={`text-center p-4 ${stat.bg} rounded-xl border-2 ${stat.border} backdrop-blur-sm`}>
                      <div className={`font-black text-3xl ${stat.color} drop-shadow-lg`}>{stat.count}</div>
                      <div className="text-[9px] text-slate-500 font-bold tracking-wider mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="p-5 bg-slate-950/50 backdrop-blur-sm border border-slate-800 rounded-2xl">
                  <p className="text-sm md:text-base text-slate-200 leading-relaxed">
                    {statusMessages[overallStatus]}
                  </p>
                </div>
              </div>
            </div>

            {/* Instrument Panel */}
            <h3 className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-4 font-bold pl-1 flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"></div>
              Instrument Panel
            </h3>
            <div className="grid grid-cols-3 gap-3 mb-8">
              {GAUGES.map(g => {
                const val = answers[g.id] ?? 0;
                const z = getZoneFromValue(val);
                return (
                  <div key={g.id} className="aspect-square bg-slate-900 rounded-xl border border-slate-800 flex flex-col items-center justify-center relative overflow-hidden group hover:border-slate-700 transition-all">
                    <div className={`absolute inset-0 bg-gradient-to-t ${COLORS[z].gradient} opacity-30 transition-opacity group-hover:opacity-50`}></div>
                    <div className="relative z-10 flex flex-col items-center">
                      <g.icon className={`w-7 h-7 mb-2 ${COLORS[z].text} drop-shadow-md transition-transform group-hover:scale-110`} />
                      <span className="text-[8px] text-slate-400 uppercase font-bold tracking-wider text-center px-1 leading-tight">
                        {g.metaphor}
                      </span>
                      <div className={`w-12 h-1.5 mt-3 rounded-full ${COLORS[z].bg} shadow-lg opacity-80 transition-all group-hover:w-14`}></div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Actions */}
            <div className="space-y-4">
              <button
                onClick={() => {
                  try {
                    if (navigator.share) {
                      navigator.share({
                        title: 'My Flight Status - Check Your Lights',
                        text: `I just checked my lights. Status: ${overallStatus.toUpperCase()}. Check yours!`,
                        url: window.location.href
                      });
                    } else {
                      alert("Screenshot this screen to share your cockpit!");
                    }
                  } catch (e) {
                    alert("Screenshot this screen to share your cockpit!");
                  }
                }}
                className="w-full py-5 bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white font-bold rounded-2xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-900/30 active:scale-[0.98] transform"
              >
                <Share2 className="w-5 h-5" />
                SHARE MY COCKPIT
              </button>

              {/* Email Newsletter Signup */}
              <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 shadow-xl">
                <h4 className="text-white font-bold mb-2 text-base md:text-lg">Monthly Maintenance Log</h4>
                <p className="text-sm text-slate-400 mb-4 leading-relaxed">
                  Join the fleet. Receive a monthly reminder to check your lights and maintain altitude.
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="pilot@example.com"
                    aria-label="Email address"
                    className="bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white flex-1 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all placeholder:text-slate-600"
                  />
                  <button className="bg-blue-600 hover:bg-blue-500 active:bg-blue-700 px-6 py-3 rounded-xl text-white font-bold text-sm transition-colors shadow-lg shadow-blue-900/20">
                    JOIN
                  </button>
                </div>
              </div>

              {/* Resources Card */}
              <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 shadow-xl">
                <h4 className="text-white font-bold mb-3 text-base md:text-lg">Support Resources</h4>
                <div className="space-y-3 text-sm">
                  <a
                    href="tel:18662773553"
                    className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group"
                  >
                    <Phone className="w-4 h-4 text-blue-400 group-hover:rotate-12 transition-transform" />
                    <span>24/7 Crisis Line: <strong>1-866-APPELLE</strong></span>
                    <ExternalLink className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>
              </div>

              <button
                onClick={resetApp}
                aria-label="Reset all instruments and start over"
                className="w-full py-4 text-slate-500 text-xs font-bold tracking-widest uppercase flex items-center justify-center gap-2 hover:text-white transition-colors opacity-70 hover:opacity-100"
              >
                <RotateCcw className="w-3 h-3" />
                Reset Instruments
              </button>
            </div>

            <div className="mt-12 text-center pb-8">
              <p className="text-[10px] text-slate-700 font-mono tracking-[0.3em] flex items-center justify-center gap-2">
                CRAFTED WITH <span className="text-red-500">❤</span> BY SWEETBOT
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    );
  }

  return null;
}

// Add necessary CSS animations to your global styles
const styles = `
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Custom scrollbar for webkit browsers */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: rgb(15 23 42);
}

::-webkit-scrollbar-thumb {
  background: rgb(51 65 85);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgb(71 85 105);
}
`;
