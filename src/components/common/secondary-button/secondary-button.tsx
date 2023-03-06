interface Props {
  children: React.ReactNode;
  height?: string;
  onClick?: () => void;
  width?: string;
  type?: "button" | "submit" | "reset";
  spacing?: string;
}

export const SecondaryButton = ({
  width,
  children,
  height,
  spacing,
  onClick,
}: Props) => {
  return (
    <button
      style={{
        width: width || "100%",
        height: height || "40px",
        color: "#545F7D",
        backgroundColor: "white",
        cursor: "pointer",
        border: "1px solid #545F7D",
        borderRadius: "8px",
        fontFamily: "inherit",
        fontWeight: "600",
        fontSize: "14px",
        letterSpacing: spacing || "none",
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
