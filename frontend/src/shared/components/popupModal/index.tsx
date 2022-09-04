import { Container, ButtonClose } from "./styles";

import { Animated } from "react-animated-css";

import { X } from "phosphor-react";

interface PopupModalProps {
  children: React.ReactNode | any;
  setActiveModalForm: (value: boolean) => void;
};

export const PopupModal = ({ children, setActiveModalForm }: PopupModalProps) => {
  return (
    <Container>
      <ButtonClose>
        <button 
          onClick={() => setActiveModalForm(false)}
          title="Fechar"
        >
          <X size={32} />
        </button>
      </ButtonClose>
      <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
        {children}
      </Animated>
    </Container>
  );
};