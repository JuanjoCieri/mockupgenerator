import { useRef } from "react";
import { motion } from "framer-motion";

type ModalProps = {
  image: any;
  onClose: () => void;
};

export default function Modal({ image, onClose }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  function handleModalClick(
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClose();
    }
  }

  function onClick() {
    onClose()
  }

  return (
    <>
      <motion.div
        className="fixed w-[100%] h-[100vh] top-0 left-0 bg-clip-padding backdrop-filter backdrop-blur-xl z-40 flex items-center justify-center"
        onClick={handleModalClick}
        ref={modalRef}
      >
        <button onClick={onClick} className="absolute top-0 right-0 p-6 text-white">X</button>
        <img src={image} alt="image" className="w-[100%] tablet:w-[70%] laptop:w-[50%] desktop:w-[50%]" />
      </motion.div>
    </>
  );
}
