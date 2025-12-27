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
          <path
            d="M0,80 C280,140 560,20 840,80 C1120,140 1280,40 1440,80 L1440,120 L0,120 Z"
            fill={color}
            fillOpacity="0.5"
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
        className="relative block w-full h-[80px] md:h-[120px] lg:h-[150px]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        {/* Main wave - smooth curve */}
        <path
          d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,30 1440,60 L1440,0 L0,0 Z"
          fill={color}
        />
        {/* Secondary wave for depth */}
        <path
          d="M0,40 C320,100 640,20 960,60 C1200,90 1360,40 1440,50 L1440,0 L0,0 Z"
          fill={color}
          fillOpacity="0.6"
        />
      </motion.svg>
    </div>
  );
};

export default WaveDivider;