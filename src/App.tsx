import {
  lazy,
  Suspense,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import Navbar from "./organisms/Navbar";
import Hero from "./organisms/Hero";
import { ThemeProvider } from "./context/ThemeContext";

const About = lazy(() => import("./organisms/About"));
const Skills = lazy(() => import("./organisms/Skills"));
const Projects = lazy(() => import("./organisms/Projects"));
const Contact = lazy(() => import("./organisms/Contact"));
const Analytics = lazy(() =>
  import("@vercel/analytics/react").then(({ Analytics }) => ({
    default: Analytics,
  })),
);
const SpeedInsights = lazy(() =>
  import("@vercel/speed-insights/react").then(({ SpeedInsights }) => ({
    default: SpeedInsights,
  })),
);

function DeferredSection({ children }: { children: ReactNode }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    if (typeof IntersectionObserver === "undefined") {
      setShouldRender(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRender(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px 0px" },
    );
    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="min-h-screen">
      {shouldRender && <Suspense fallback={null}>{children}</Suspense>}
    </div>
  );
}

function App() {
  const [telemetryReady, setTelemetryReady] = useState(false);

  useEffect(() => {
    const loadTelemetry = () => setTelemetryReady(true);
    const idleCallback = window.requestIdleCallback?.(loadTelemetry);
    const timeout = window.setTimeout(loadTelemetry, 2000);

    return () => {
      if (idleCallback !== undefined) window.cancelIdleCallback(idleCallback);
      window.clearTimeout(timeout);
    };
  }, []);

  return (
    <ThemeProvider>
      {telemetryReady && (
        <Suspense fallback={null}>
          <Analytics />
          <SpeedInsights />
        </Suspense>
      )}
      <div className="min-h-screen dark:bg-[#050505] text-black dark:text-white relative overflow-hidden">
        <Navbar />
        <main>
          <Hero />
          <DeferredSection>
            <About />
          </DeferredSection>
          <DeferredSection>
            <Skills />
          </DeferredSection>
          <DeferredSection>
            <Projects />
          </DeferredSection>
          <DeferredSection>
            <Contact />
          </DeferredSection>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
