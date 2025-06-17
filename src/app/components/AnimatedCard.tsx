import { useScrollAnimation } from "../hooks/useScrollAnimation";

interface AnimatedCardProps {
  children: React.ReactNode;
  index: number;
  className?: string;
}

export const AnimatedCard = ({ children, index, className = '' }: AnimatedCardProps) => {
  const cardRef = useScrollAnimation({
    animationType: 'scale-in',
    delay: index * 100,
    threshold: 0.1
  });

  return (
    <div ref={cardRef} className={className}>
      {children}
    </div>
  );
}; 