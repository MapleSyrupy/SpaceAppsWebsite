import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface MeteorProps {
  size?: number;
  opacity?: number;
}

const Meteor = ({ size = 2, opacity = 0.5 }: MeteorProps) => {
  // 30% chance of being a long meteor that crosses the screen
  const isLongMeteor = Math.random() < 0.3;
  const pathLength = isLongMeteor 
    ? Math.random() * 1800 + 1400 // Long meteors: 1400-3200px
    : Math.random() * 1000 + 600;  // Short meteors: 600-1600px
  const duration = isLongMeteor
    ? Math.random() * 5 + 5 // Long meteors: 5-10s
    : Math.random() * 3 + 3; // Short meteors: 3-6s
  const delay = Math.random() * 5; // Random delay between 0-5s
  const angle = 30 + (Math.random() * 10); // Random angle between 30 and 40 degrees (slanted downward)
  const trailLength = isLongMeteor ? 2 : 1.6; // Multiplier for trail length

  return (
    <motion.div
      style={{
        position: 'absolute',
        width: `${pathLength * (isLongMeteor ? 2 : 1.6)}px`,
        height: `${size}px`,
        background: `linear-gradient(270deg, 
          rgba(255,255,255,${opacity}), 
          rgba(255,255,255,${opacity * (isLongMeteor ? 0.6 : 0.5)}), 
          rgba(255,255,255,${opacity * (isLongMeteor ? 0.3 : 0.2)}),
          transparent ${isLongMeteor ? '90%' : '80%'})`,
        transformOrigin: '100% 0',
        zIndex: 0,
        boxShadow: `0 0 ${size * (isLongMeteor ? 4 : 3)}px rgba(255,255,255,${opacity * 0.6}),
                    0 0 ${size * (isLongMeteor ? 8 : 6)}px rgba(255,255,255,${opacity * 0.3})`,
      }}
      initial={{
        opacity: 0,
        top: `${Math.random() * (isLongMeteor ? 20 : 40)}%`,
        left: `${Math.random() * (isLongMeteor ? 70 : 90)}%`,
        rotate: angle,
        scale: 0,
      }}
      animate={{
        opacity: [0, 1, isLongMeteor ? 0.8 : 0],
        translateX: [0, -pathLength * (isLongMeteor ? 3.2 : 2.6)],
        translateY: [0, pathLength * (isLongMeteor ? 0.9 : 0.7)],
        scale: [0, 1, isLongMeteor ? 0.9 : 0],
      }}
      transition={{
        duration: duration,
        delay: delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
};

const MeteorShower = () => {
  const [meteors, setMeteors] = useState<number[]>([]);

  useEffect(() => {
    // Create an array of meteor indices
    setMeteors(Array.from({ length: 30 }, (_, i) => i));
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(to bottom, #000000, #0a0a2a)',
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: -1
      }}
    >
      {meteors.map((index) => (
        <Meteor
          key={index}
          size={Math.random() * 3 + 1} // Random size between 1-4px
          opacity={Math.random() * 0.7 + 0.3} // Random opacity between 0.3-1
        />
      ))}
    </div>
  );
};

export default MeteorShower;