import React from "react";

import { ButtonStyled } from "@dga-ds/styles";
import { styled } from "@dga-ds/tokens";
import { ButtonProps } from "./ButtonComponent.types";

const StyledButton = styled("button", ButtonStyled);

export const ButtonComponent = ({
  children,
  buttonSize = "large",
  buttonType = "primary",
  onlyIcon = false,
  disabled = false,
  icon: Icon,
}: ButtonProps) => {
  return (
    <StyledButton
      onlyIcon={onlyIcon}
      disabled={disabled}
      size={buttonSize}
      colors={buttonType}
    >
      {Icon && <Icon />} <label>{children}</label>
    </StyledButton>
  );
};

ButtonComponent.displayName = "Button";