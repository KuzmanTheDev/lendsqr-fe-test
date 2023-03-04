interface Props {
  children: React.ReactNode;
  height?: string;
  onClick?: () => void;
  width?: string;
  type?: "button" | "submit" | "reset";
  spacing?: string;
}

export const PrimaryButton = ({
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
        color: "#fff",
        backgroundColor: "#39CDCC",
        cursor: "pointer",
        border: "none",
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
