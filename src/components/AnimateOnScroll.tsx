import { useEffect, useRef, useState, type ReactNode, memo } from "react";

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  animation?: string;
  delay?: number;
  threshold?: number;
}

const AnimateOnScroll = memo(({
  children,
  className = "",
  animation = "animate-fade-in",
  delay = 0,
  threshold = 0.12,
}: AnimateOnScrollProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={`${className} transition-opacity ${isVisible ? animation : "opacity-0 translate-y-4"}`}
      style={isVisible ? {
        animationDelay: `${delay}ms`,
        animationFillMode: "forwards",
      } : {
        animationDelay: `${delay}ms`,
        animationFillMode: "forwards",
      }}
    >
      {children}
    </div>
  );
});

AnimateOnScroll.displayName = "AnimateOnScroll";

export default AnimateOnScroll;
