import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HeroContainer,
  Slide,
  Content,
  ControlButton,
  Controls,
} from "./Home.styled";
import img1 from "../../assets/hero-1.webp";
import img2 from "../../assets/hero-2.webp";
import img3 from "../../assets/hero-3.webp";
import img4 from "../../assets/hero-4.webp";

const slides = [
  {
    id: 1,
    title: "Раді вітати Вас",
    description:
      "Тут Ви зможете ознайомитися з пропозиціями щодо аренди квартир в Києві",
    background: img1,
  },
  {
    id: 2,
    title: "Про нас",
    description: "Ми зробили все, щоб пошук квартири зайняв якнайменше часу",
    background: img2,
  },
  {
    id: 3,
    title: "Підтримка 24/7",
    description: "Ми забезпечуємо постийну тех підтримку наших користувачів",
    background: img3,
  },
  {
    id: 4,
    title: "Актуальні пропозиції",
    description: "У нас завжди найактуальніші пропозиції на ринку",
    background: img4,
  },
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <HeroContainer>
      <AnimatePresence mode="wait">
        {slides.map((slide, index) =>
          index === currentSlide ? (
            <Slide
              key={slide.id}
              background={slide.background}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8 }}
            >
              <Content>
                <motion.h1
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  style={{ fontSize: "3rem", color: " #f8f2ec" }}
                >
                  {slide.title}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.2, delay: 0.4 }}
                  style={{ fontSize: "1.5rem", color: " #f8f2ec" }}
                >
                  {slide.description}
                </motion.p>
              </Content>
            </Slide>
          ) : null
        )}
      </AnimatePresence>
      <Controls>
        <ControlButton onClick={prevSlide}>Previous</ControlButton>
        <ControlButton onClick={nextSlide}>Next</ControlButton>
      </Controls>
    </HeroContainer>
  );
};

export default Home;
