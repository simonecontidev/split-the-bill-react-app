import { MotionButton } from "@/ui/MotionButton";
import { useAnimationControls } from "framer-motion";

export function CalculateButton({ onClick }: { onClick: () => void }) {
  const controls = useAnimationControls();

  const handle = async () => {
    onClick();
    // micro pulse post-click
    await controls.start({ scale: [1, 1.05, 1], transition: { duration: 0.28, ease: "easeOut" } });
  };

  return (
    <MotionButton
      variant="primary"
      onClick={handle}
      className="w-full"
      // estende le animazioni del MotionButton
    >
      Calcola
    </MotionButton>
  );
}