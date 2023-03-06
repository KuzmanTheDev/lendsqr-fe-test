import { Oval } from "react-loader-spinner";

export const Loader = () => {
  return (
    <Oval
      height={50}
      width={50}
      color="#545f7d33"
      visible={true}
      ariaLabel="loading"
      secondaryColor="#39CDCC"
      strokeWidth={2}
      strokeWidthSecondary={2}
      wrapperStyle={{
        display: "flex",
        justifyContent: "center",
        marginTop: "50px",
      }}
    />
  );
};
