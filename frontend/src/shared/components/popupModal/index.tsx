import { useEffect } from "react";

import { Container, ButtonClose } from "./styles";

import { Animated } from "react-animated-css";

import { vibrateCellPhone } from "../../utils/vibrateCellPhone";

import { X } from "phosphor-react";

interface PopupModalProps {
  children: React.ReactNode;
  setActiveModalForm: (value: boolean) => void;
};

export const PopupModal = ({ children, setActiveModalForm }: PopupModalProps) => {
  useEffect(() => {
    vibrateCellPhone();
  }, []);

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
        { children}
      </Animated>
    </Container>
  );
};