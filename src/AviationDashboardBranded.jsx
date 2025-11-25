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
  ExternalLink,
  Sparkles
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

// --- SweetBOS Brand Colors ---

const BRAND_COLORS = {
  primary: '#005A9C',      // SweetBOS Blue
  secondary: '#7B2D8E',    // SweetBOS Purple
  accent: '#00AEEF',       // SweetBOS Cyan
  success: '#28a745',
  warning: '#ffc107',
  danger: '#dc3545',
  info: '#17a2b8'
};

const COLORS = {
  green: {
    bg: 'bg-[#28a745]',
    text: 'text-[#28a745]',
    glow: 'shadow-[0_0_20px_rgba(40,167,69,0.5)]',
    border: 'border-[#28a745]',
    gradient: 'from-[#28a745]/20 to-[#28a745]/5',
    ring: 'ring-[#28a745]/30'
  },
  yellow: {
    bg: 'bg-[#ffc107]',
    text: 'text-[#ffc107]',
    glow: 'shadow-[0_0_20px_rgba(255,193,7,0.5)]',
    border: 'border-[#ffc107]',
    gradient: 'from-[#ffc107]/20 to-[#ffc107]/5',
    ring: 'ring-[#ffc107]/30'
  },
  orange: {
    bg: 'bg-[#ff8c00]',
    text: 'text-[#ff8c00]',
    glow: 'shadow-[0_0_20px_rgba(255,140,0,0.5)]',
    border: 'border-[#ff8c00]',
    gradient: 'from-[#ff8c00]/20 to-[#ff8c00]/5',
    ring: 'ring-[#ff8c00]/30'
  },
  red: {
    bg: 'bg-[#dc3545]',
    text: 'text-[#dc3545]',
    glow: 'shadow-[0_0_20px_rgba(220,53,69,0.6)]',
    border: 'border-[#dc3545]',
    gradient: 'from-[#dc3545]/20 to-[#dc3545]/5',
    ring: 'ring-[#dc3545]/30'
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
  const [sweetBotError, setSweetBotError] = useState(false);

  const brainLogoUrl = "/images/logo-black-bg.png";
  const sweetBotLogoUrl = "/images/sweetbot-logo.png";

  return (
    <div className="flex flex-col items-center justify-center mb-8">
      <div className="flex items-center gap-4">
        {/* Primary Brain Logo */}
        {!darkImgError ? (
          <img
            src={brainLogoUrl}
            alt="Check Your Lights"
            className="h-20 w-20 object-contain drop-shadow-2xl"
            onError={() => setDarkImgError(true)}
          />
        ) : (
          <div className="relative w-20 h-20">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#005A9C] via-[#00AEEF] to-[#7B2D8E] animate-pulse"></div>
            <Plane className="w-10 h-10 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          </div>
        )}

        {/* Brand Text - Oswald Font */}
        <div className="flex flex-col items-start">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white uppercase leading-none" style={{ fontFamily: 'Oswald, sans-serif' }}>
            Check <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AEEF] to-[#7B2D8E]">Your</span>
          </h1>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white uppercase leading-none" style={{ fontFamily: 'Oswald, sans-serif' }}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AEEF] to-[#7B2D8E]">Lights</span>
          </h1>
        </div>
      </div>

      {/* SweetBot Logo */}
      {!sweetBotError && (
        <div className="mt-4">
          <img
            src={sweetBotLogoUrl}
            alt="Powered by SweetBot"
            className="h-8 object-contain opacity-80 hover:opacity-100 transition-opacity"
            onError={() => setSweetBotError(true)}
          />
        </div>
      )}
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
      {/* Outer Shell with SweetBOS accent */}
      <div className="absolute top-full left-1/2 -translate-x-1/2 -translate-y-full w-64 h-64 rounded-full border-[14px] border-[#005A9C]/30 border-b-0 shadow-inner"></div>

      {/* Active Glow Ring */}
      <div className={`absolute top-full left-1/2 -translate-x-1/2 -translate-y-full w-64 h-64 rounded-full border-[14px] ${zone ? color.border : 'border-slate-700'} ${zone ? color.glow : ''} border-b-0 transition-all duration-700 ease-out opacity-80`}></div>

      {/* Zone Background Arcs with SweetBOS gradient */}
      <svg className="absolute top-full left-1/2 -translate-x-1/2 -translate-y-full w-64 h-64 pointer-events-none" viewBox="0 0 200 200">
        <defs>
          <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#28a745" stopOpacity="0.3" />
            <stop offset="33%" stopColor="#ffc107" stopOpacity="0.3" />
            <stop offset="66%" stopColor="#ff8c00" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#dc3545" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        <path
          d="M 30,100 A 70,70 0 0,1 170,100"
          fill="none"
          stroke="url(#gaugeGradient)"
          strokeWidth="20"
          className="opacity-50"
        />
      </svg>

      {/* Tick Marks */}
      <div className="absolute inset-0 w-full h-full">
        {[0, 1, 2, 3].map((tick) => (
          <div key={tick}>
            <div
              className={`absolute bottom-0 left-1/2 w-1.5 h-5 rounded-full ${tick === value ? 'bg-[#00AEEF] shadow-lg' : 'bg-slate-600'} origin-bottom transition-all duration-300`}
              style={{
                transform: `translateX(-50%) rotate(${-90 + (tick * 60)}deg) translateY(-110px)`,
                opacity: tick === value ? 1 : 0.5
              }}
            ></div>
            {tick < 3 && (
              <div
                className="absolute bottom-0 left-1/2 w-0.5 h-3 bg-[#005A9C]/30 origin-bottom"
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
        <div className="absolute bottom-0 left-1/2 w-1 h-28 bg-black/20 origin-bottom -translate-x-1/2 translate-x-0.5 translate-y-0.5 rounded-full blur-sm"></div>
        <div className="absolute bottom-0 left-1/2 w-1.5 h-28 bg-gradient-to-t from-[#00AEEF] via-slate-300 to-[#7B2D8E] origin-bottom -translate-x-1/2 rounded-full shadow-lg"></div>
        <div className="absolute bottom-0 left-1/2 w-7 h-7 bg-gradient-to-br from-[#00AEEF] to-[#005A9C] rounded-full -translate-x-1/2 translate-y-1/2 border-4 border-slate-900 z-10 shadow-xl"></div>
        <div className={`absolute bottom-0 left-1/2 w-7 h-7 ${zone ? color.bg : 'bg-slate-700'} rounded-full -translate-x-1/2 translate-y-1/2 blur-md opacity-60 transition-colors duration-500`}></div>
      </div>

      {/* Zone Labels */}
      <div className="absolute bottom-0 left-0 text-[9px] text-[#28a745] font-bold translate-y-2 opacity-70" style={{ fontFamily: 'Oswald, sans-serif' }}>
        HEALTHY
      </div>
      <div className="absolute bottom-0 right-0 text-[9px] text-[#dc3545] font-bold translate-y-2 opacity-70" style={{ fontFamily: 'Oswald, sans-serif' }}>
        CRITICAL
      </div>
    </div>
  );
};

// --- Main App Component ---

export default function AviationDashboardBranded() {
  const [view, setView] = useSafeStorage<ViewState>('cyl_view_branded', 'intro');
  const [currentGaugeIndex, setCurrentGaugeIndex] = useSafeStorage<number>('cyl_index_branded', 0);
  const [answers, setAnswers] = useSafeStorage<Record<number, number>>('cyl_answers_branded', {});
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [view]);

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
      <div className="min-h-screen text-white flex flex-col items-center justify-center p-6 relative overflow-hidden font-sans select-none" style={{
        background: 'linear-gradient(135deg, #005A9C 0%, #7B2D8E 100%)',
        fontFamily: 'Lato, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
      }}>
        {/* Animated Background Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00AEEF] rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#7B2D8E] rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <FadeIn>
          <div className="z-10 w-full max-w-md flex flex-col items-center text-center space-y-8 relative">
            <Logo />

            <div className="space-y-4 px-4">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight" style={{ fontFamily: 'Oswald, sans-serif' }}>
                Pilot, check your instruments.
              </h2>
              <p className="text-white/90 text-base md:text-lg leading-relaxed">
                Before you take off, we need to perform a system status check.
                Review your <strong className="text-[#00AEEF]">11 vital gauges</strong> to ensure a safe flight.
              </p>
            </div>

            <div className="w-full space-y-4 px-4">
              <button
                onClick={() => setView('safety')}
                aria-label="Start pre-flight check"
                className="group relative px-8 py-5 bg-[#00AEEF] hover:bg-[#00AEEF]/90 active:bg-[#00AEEF]/80 text-white font-bold rounded-[13px] w-full transition-all shadow-[0_8px_21px_rgba(0,174,239,0.3)] hover:shadow-[0_13px_34px_rgba(0,174,239,0.4)] flex items-center justify-center gap-3 active:scale-[0.98] transform"
                style={{ fontFamily: 'Oswald, sans-serif' }}
              >
                <span className="tracking-wider text-sm md:text-base">START PRE-FLIGHT CHECK</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="flex items-center justify-center gap-4 text-xs text-white/60 font-bold tracking-wider pt-2" style={{ fontFamily: 'Oswald, sans-serif' }}>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 bg-[#28a745] rounded-full animate-pulse"></div>
                  <span>CONFIDENTIAL</span>
                </div>
                <div className="w-1 h-1 bg-white/40 rounded-full"></div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 bg-[#00AEEF] rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <span>ANONYMOUS</span>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        <div className="absolute bottom-8 flex flex-col items-center gap-2 z-10">
          <div className="text-[10px] text-white/50 font-bold tracking-[0.3em] flex items-center gap-2" style={{ fontFamily: 'Oswald, sans-serif' }}>
            POWERED BY <span className="text-[#00AEEF]">SWEETBOT</span>
          </div>
        </div>
      </div>
    );
  }

  if (view === 'crisis') {
    return (
      <div className="min-h-screen text-white p-6 flex flex-col items-center justify-center text-center space-y-8 animate-in fade-in duration-500 relative overflow-hidden" style={{
        background: 'linear-gradient(135deg, #dc3545 0%, #7B2D8E 100%)'
      }}>
        <div className="absolute inset-0 opacity-10 animate-pulse">
          <div className="absolute top-0 left-0 w-full h-1 bg-white"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-white"></div>
        </div>

        <FadeIn>
          <div className="relative">
            <Siren className="w-24 h-24 text-white animate-[pulse_1s_ease-in-out_infinite] drop-shadow-2xl" />
            <div className="absolute inset-0 bg-white blur-3xl opacity-30 animate-pulse"></div>
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="space-y-4 max-w-lg">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase text-white" style={{ fontFamily: 'Oswald, sans-serif' }}>
              Critical Alert
            </h1>
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm border-2 border-white/50 rounded-[13px]">
              <p className="text-xl font-bold text-white" style={{ fontFamily: 'Oswald, sans-serif' }}>Master Warning Active</p>
            </div>
            <p className="text-white/90 text-base md:text-lg leading-relaxed px-4">
              You indicated you are experiencing <strong>constant anxiety, depression, or dark thoughts</strong>.
              Flight safety protocols require <strong className="text-white">immediate support</strong>.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={400}>
          <div className="w-full max-w-sm space-y-4 px-4">
            <a
              href="tel:18662773553"
              className="block w-full py-5 bg-white text-[#005A9C] font-bold rounded-[13px] hover:bg-white/95 active:bg-white/90 transition-all shadow-2xl text-base md:text-lg flex items-center justify-center gap-3 group"
              style={{ fontFamily: 'Oswald, sans-serif' }}
            >
              <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              <span>CALL CRISIS LINE</span>
              <span className="text-sm opacity-75">(1-866-APPELLE)</span>
            </a>

            <div className="p-4 bg-white/10 backdrop-blur-sm border border-white/30 rounded-[13px] text-sm text-white/90 leading-relaxed">
              <strong className="text-white">Available 24/7</strong> - Free, confidential support from trained professionals.
            </div>

            <button
              onClick={() => setView('results')}
              className="block w-full py-4 text-white/80 hover:text-white transition-colors text-sm underline underline-offset-4 font-medium"
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
      <div className="min-h-screen text-white flex flex-col items-center overflow-x-hidden touch-manipulation relative" style={{
        background: 'linear-gradient(135deg, #005A9C 0%, #7B2D8E 100%)',
        fontFamily: 'Lato, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
      }}>

        {/* Progress Bar */}
        {!isSafety && (
          <div className="w-full h-2 bg-black/20 fixed top-0 left-0 z-50 shadow-lg">
            <div
              className="h-full bg-gradient-to-r from-[#00AEEF] to-[#28a745] transition-all duration-700 ease-out shadow-[0_0_15px_rgba(0,174,239,0.6)]"
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
                  <div className="w-2 h-2 bg-[#dc3545] rounded-full animate-pulse"></div>
                  <span className="text-xs font-bold text-[#dc3545] tracking-widest uppercase" style={{ fontFamily: 'Oswald, sans-serif' }}>
                    Safety Check
                  </span>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#00AEEF] rounded-full animate-pulse"></div>
                  <span className="text-xs font-bold text-[#00AEEF] tracking-widest uppercase" style={{ fontFamily: 'Oswald, sans-serif' }}>
                    System Check
                  </span>
                </div>
              )}
              <span className="text-xs font-bold text-white/60" style={{ fontFamily: 'Oswald, sans-serif' }}>
                GAUGE {gauge.id}/11
              </span>
            </div>

            {/* Gauge Title */}
            <div className="text-center mb-6">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white drop-shadow-lg mb-2" style={{ fontFamily: 'Oswald, sans-serif' }}>
                {gauge.metaphor}
              </h2>
              <div className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <p className="text-white/80 text-xs uppercase tracking-[0.2em] font-bold" style={{ fontFamily: 'Oswald, sans-serif' }}>
                  {gauge.system}
                </p>
              </div>
            </div>

            {/* Gauge Visual */}
            <GaugeVisual zone={currentZone} icon={gauge.icon} value={currentVal} />

            {/* Question */}
            <div className="text-center mb-8 min-h-[4rem] flex items-center justify-center">
              <h3 className="text-lg md:text-xl font-medium text-white/90 leading-snug px-4">
                {gauge.question}
              </h3>
            </div>

            {/* Interaction Card with SweetBOS styling */}
            <div className={`bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-[13px] p-6 shadow-[0_8px_21px_rgba(0,0,0,0.3)] relative overflow-hidden transition-all duration-500 ${isSafety ? 'border-l-8 border-l-[#dc3545]' : 'border-l-8 border-l-[#00AEEF]'}`}>
              {/* Ambient Glow */}
              <div className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-br ${color.gradient} opacity-20 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none transition-all duration-700`}></div>

              <div className="relative z-10">
                <div className="flex justify-between text-[10px] text-white/60 uppercase tracking-wider mb-4 font-bold px-1" style={{ fontFamily: 'Oswald, sans-serif' }}>
                  <span>Healthy</span>
                  <span>Critical</span>
                </div>

                {/* Custom Range Slider */}
                <div className="relative h-14 mb-6 flex items-center">
                  <div className="absolute w-full h-4 bg-black/30 backdrop-blur-sm rounded-full overflow-hidden shadow-inner border border-white/10">
                    <div className="w-full h-full bg-gradient-to-r from-[#28a745] via-[#ffc107] via-[#ff8c00] to-[#dc3545] opacity-50"></div>
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
                  {/* Visual Thumb with SweetBOS accent */}
                  <div
                    className={`absolute h-10 w-10 bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,0.5)] border-4 border-[#00AEEF] pointer-events-none transition-all duration-300 ease-out ring-4 ${color.ring}`}
                    style={{ left: `calc(${currentVal * 33.33}% - 20px)` }}
                  >
                    <div className={`absolute inset-0 ${color.bg} rounded-full opacity-30 blur-md`}></div>
                  </div>
                </div>

                {/* Dynamic Text Box */}
                <div className={`p-5 rounded-[13px] border-2 transition-all duration-500 flex items-center justify-center min-h-[6rem] bg-white/5 backdrop-blur-sm ${color.border} border-opacity-50 ${color.glow}`}>
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
              className={`mt-6 w-full py-5 text-white font-bold rounded-[13px] shadow-lg transition-all flex items-center justify-center gap-3 group active:scale-[0.98] transform ${
                isSafety
                  ? 'bg-white/20 hover:bg-white/30 active:bg-white/25 backdrop-blur-sm'
                  : 'bg-[#00AEEF] hover:bg-[#00AEEF]/90 active:bg-[#00AEEF]/80 shadow-[0_8px_21px_rgba(0,174,239,0.3)]'
              } ${transitioning ? 'opacity-50 cursor-not-allowed' : ''}`}
              style={{ fontFamily: 'Oswald, sans-serif' }}
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
      <div className="min-h-screen text-white overflow-y-auto overflow-x-hidden" style={{
        background: 'linear-gradient(135deg, #005A9C 0%, #7B2D8E 100%)',
        fontFamily: 'Lato, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
      }}>
        <FadeIn>
          <div className="p-6 max-w-lg mx-auto pb-20">
            <header className="flex items-center justify-center mb-8 pt-4">
              <Logo />
            </header>

            {/* Main Status Card with SweetBOS styling */}
            <div className={`p-8 rounded-[13px] bg-white/10 backdrop-blur-md border-2 ${statusColor.border} shadow-[0_13px_34px_rgba(0,0,0,0.4)] ${statusColor.glow} mb-8 relative overflow-hidden border-l-8 border-l-[#00AEEF]`}>
              <div className={`absolute inset-0 bg-gradient-to-br ${statusColor.gradient} opacity-20 pointer-events-none`}></div>

              <div className="relative z-10">
                <h2 className="text-white/60 text-[10px] font-bold uppercase tracking-[0.3em] mb-3" style={{ fontFamily: 'Oswald, sans-serif' }}>
                  Current Flight Status
                </h2>
                <h1 className={`text-4xl md:text-5xl font-bold uppercase ${statusColor.text} mb-6 tracking-tight leading-none drop-shadow-lg`} style={{ fontFamily: 'Oswald, sans-serif' }}>
                  {overallStatus === 'green' && 'Systems Nominal'}
                  {overallStatus === 'yellow' && 'Caution Required'}
                  {overallStatus === 'orange' && 'Systems Warning'}
                  {overallStatus === 'red' && 'Critical Failure'}
                </h1>

                {/* Stats Grid with SweetBOS colors */}
                <div className="grid grid-cols-4 gap-3 mb-6">
                  {[
                    { count: greenCount, label: 'GRN', bg: 'bg-[#28a745]/20', border: 'border-[#28a745]/40', text: 'text-[#28a745]' },
                    { count: yellowCount, label: 'YEL', bg: 'bg-[#ffc107]/20', border: 'border-[#ffc107]/40', text: 'text-[#ffc107]' },
                    { count: orangeCount, label: 'ORG', bg: 'bg-[#ff8c00]/20', border: 'border-[#ff8c00]/40', text: 'text-[#ff8c00]' },
                    { count: redCount, label: 'RED', bg: 'bg-[#dc3545]/20', border: 'border-[#dc3545]/40', text: 'text-[#dc3545]' }
                  ].map((stat, idx) => (
                    <div key={idx} className={`text-center p-4 ${stat.bg} rounded-[8px] border-2 ${stat.border} backdrop-blur-sm`}>
                      <div className={`font-bold text-3xl ${stat.text} drop-shadow-lg`} style={{ fontFamily: 'Oswald, sans-serif' }}>{stat.count}</div>
                      <div className="text-[9px] text-white/60 font-bold tracking-wider mt-1" style={{ fontFamily: 'Oswald, sans-serif' }}>{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="p-5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-[13px]">
                  <p className="text-sm md:text-base text-white/90 leading-relaxed">
                    {statusMessages[overallStatus]}
                  </p>
                </div>
              </div>
            </div>

            {/* Instrument Panel */}
            <h3 className="text-xs font-bold text-white/60 uppercase tracking-widest mb-4 pl-1 flex items-center gap-2" style={{ fontFamily: 'Oswald, sans-serif' }}>
              <div className="w-1.5 h-1.5 bg-[#00AEEF] rounded-full animate-pulse"></div>
              Instrument Panel
            </h3>
            <div className="grid grid-cols-3 gap-3 mb-8">
              {GAUGES.map(g => {
                const val = answers[g.id] ?? 0;
                const z = getZoneFromValue(val);
                return (
                  <div key={g.id} className="aspect-square bg-white/10 backdrop-blur-sm rounded-[8px] border border-white/20 flex flex-col items-center justify-center relative overflow-hidden group hover:border-[#00AEEF]/50 transition-all">
                    <div className={`absolute inset-0 bg-gradient-to-t ${COLORS[z].gradient} opacity-30 transition-opacity group-hover:opacity-50`}></div>
                    <div className="relative z-10 flex flex-col items-center">
                      <g.icon className={`w-7 h-7 mb-2 ${COLORS[z].text} drop-shadow-md transition-transform group-hover:scale-110`} />
                      <span className="text-[8px] text-white/70 uppercase font-bold tracking-wider text-center px-1 leading-tight" style={{ fontFamily: 'Oswald, sans-serif' }}>
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
                className="w-full py-5 bg-[#00AEEF] hover:bg-[#00AEEF]/90 text-white font-bold rounded-[13px] flex items-center justify-center gap-2 transition-all shadow-[0_8px_21px_rgba(0,174,239,0.3)] active:scale-[0.98] transform"
                style={{ fontFamily: 'Oswald, sans-serif' }}
              >
                <Share2 className="w-5 h-5" />
                SHARE MY COCKPIT
              </button>

              {/* Email Newsletter Signup */}
              <div className="bg-white/10 backdrop-blur-md rounded-[13px] p-6 border border-white/20 shadow-xl border-l-8 border-l-[#7B2D8E]">
                <h4 className="text-white font-bold mb-2 text-base md:text-lg" style={{ fontFamily: 'Oswald, sans-serif' }}>Monthly Maintenance Log</h4>
                <p className="text-sm text-white/80 mb-4 leading-relaxed">
                  Join the fleet. Receive a monthly reminder to check your lights and maintain altitude.
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="pilot@example.com"
                    aria-label="Email address"
                    className="bg-white/10 backdrop-blur-sm border border-white/30 rounded-[8px] px-4 py-3 text-white flex-1 text-sm focus:border-[#00AEEF] focus:outline-none focus:ring-2 focus:ring-[#00AEEF]/50 transition-all placeholder:text-white/40"
                  />
                  <button className="bg-[#7B2D8E] hover:bg-[#7B2D8E]/90 active:bg-[#7B2D8E]/80 px-6 py-3 rounded-[8px] text-white font-bold text-sm transition-colors shadow-lg" style={{ fontFamily: 'Oswald, sans-serif' }}>
                    JOIN
                  </button>
                </div>
              </div>

              {/* Resources Card */}
              <div className="bg-white/10 backdrop-blur-md rounded-[13px] p-6 border border-white/20 shadow-xl">
                <h4 className="text-white font-bold mb-3 text-base md:text-lg" style={{ fontFamily: 'Oswald, sans-serif' }}>Support Resources</h4>
                <div className="space-y-3 text-sm">
                  <a
                    href="tel:18662773553"
                    className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group"
                  >
                    <Phone className="w-4 h-4 text-[#00AEEF] group-hover:rotate-12 transition-transform" />
                    <span>24/7 Crisis Line: <strong>1-866-APPELLE</strong></span>
                    <ExternalLink className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>
              </div>

              <button
                onClick={resetApp}
                aria-label="Reset all instruments and start over"
                className="w-full py-4 text-white/60 text-xs font-bold tracking-widest uppercase flex items-center justify-center gap-2 hover:text-white transition-colors opacity-70 hover:opacity-100"
                style={{ fontFamily: 'Oswald, sans-serif' }}
              >
                <RotateCcw className="w-3 h-3" />
                Reset Instruments
              </button>
            </div>

            <div className="mt-12 text-center pb-8">
              <p className="text-[10px] text-white/50 font-bold tracking-[0.3em] flex items-center justify-center gap-2" style={{ fontFamily: 'Oswald, sans-serif' }}>
                POWERED BY <span className="text-[#00AEEF]">SWEETBOT</span>
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    );
  }

  return null;
}
