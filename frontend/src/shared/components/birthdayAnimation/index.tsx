import { useContext } from "react";
import { ContextGlobal } from "../../contexts/contextGlobal";

import { useLottieCustom } from "../../hooks/useLottieCustom";
import birthdayAnimation from "../../assets/animations/birthdayAnimation.json";

import { Container } from "./styles";

export const BirthdayAnimation = () => {
  const { setActiveAnimation } = useContext(ContextGlobal);

  const styles = {
    width: "100%",
  };

  const play = {
   autoplay: true,
   loop: false,
  };

  const { View } = useLottieCustom(birthdayAnimation, styles, play);

  setTimeout(() => {
    setActiveAnimation(false);
  }, 5000);

  return (
    <Container>
      { View }
    </Container>
  );
};