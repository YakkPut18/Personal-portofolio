import { motion } from "framer-motion";

interface WaveDividerProps {
  variant?: 'top' | 'bottom';
  color?: string;
  className?: string;
}

const WaveDivider = ({ variant = 'bottom', color = 'hsl(var(--background))', className = '' }: WaveDividerProps) => {
  if (variant === 'top') {
    return (
      <div className={`absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180 ${className}`}>
        <motion.svg
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative block w-full h-[80px] md:h-[120px] lg:h-[150px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z"
            fill={color}
          />
        </motion.svg>
      </div>
    );
  }

  return (
    <div className={`absolute bottom-0 left-0 w-full overflow-hidden leading-none ${className}`}>
      <motion.svg
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative block w-full h-[100px] md:h-[140px] lg:h-[180px]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 180"
        preserveAspectRatio="none"
      >
        {/* Single clean wave */}
        <path
          d="M0,180 L0,100 C180,140 360,60 540,80 C720,100 900,160 1080,140 C1260,120 1380,80 1440,100 L1440,180 Z"
          fill={color}
        />
      </motion.svg>
    </div>
  );
};

export default WaveDivider;