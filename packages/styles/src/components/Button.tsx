import { css } from "@dga-ds/tokens";

export const ButtonStyled = css({
  boxSizing: "border-box",
  borderStyle: "none",
  outline: "none",
  cursor: "pointer",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "4px",

  svg: {
    fontSize: "20px",
    lineHeight: "20px",
    height: "20px",
    width: "20px",
    cursor: "pointer",
  },

  label: {
    display: "flex",
    marginLeft: "4px",
    cursor: "pointer",
  },

  variants: {
    size: {
      large: {
        height: " 48px",
        padding: "12px 24px",
        fontSize: "16px",
        lineHeight: "24px",
      },
      medium: {
        height: " 40px",
        padding: "8px 24px",
        fontSize: "16px",
        lineHeight: "24px",
      },
      small: {
        height: " 36px",
        padding: "8px 24px",
        fontSize: "14px",
        lineHeight: "20px",
      },
    },
    colors: {
      primary: {
        backgroundColor: "$primary100",
        color: "$white",
        "&:hover": {
          backgroundColor: "$primary80",
        },
      },
      secondary: {
        backgroundColor: "$primary40",
        color: "$primary100",
        "&:hover": {
          backgroundColor: "$primary30",
        },
      },
      destructive: {
        backgroundColor: "$danger100",
        color: "$white",
        "&:hover": {
          backgroundColor: "$danger80",
        },
      },
      destructiveSecondary: {
        backgroundColor: "$danger30",
        color: "$danger100",
        "&:hover": {
          backgroundColor: "$danger40",
        },
      },
      white: {
        backgroundColor: "$white",
        color: "$primary100",
        borderStyle: "solid",
        borderWidth: "1px",
        borderColor: "$general50",
        "&:hover": {
          backgroundColor: "$general30",
        },
      },
    },
    disabled: {
      true: {
        backgroundColor: "$general50 !important",
        color: "$white !important",
        cursor: "not-allowed !important",
        "&:hover": {
          backgroundColor: null,
        },
        label: {
          cursor: "not-allowed",
        },
      },
      false: {},
    },
    onlyIcon: { true: {}, false: {} },
  },

  compoundVariants: [
    {
      size: "large",
      onlyIcon: true,
      css: {
        padding: "14px 14px ",
      },
    },
    {
      size: "medium",
      onlyIcon: true,
      css: {
        padding: "10px 10px",
      },
    },
    {
      size: "small",
      onlyIcon: true,
      css: {
        padding: "8px 8px",
      },
    },
  ],
  defaultVariant: {
    size: "large",
    colors: "primary",
    disabled: false,
    onlyIcon: false,
  },
});
