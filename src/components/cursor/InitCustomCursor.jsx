import CustomCursor from "./CustomCursor";

const InitCustomCursor = ({ handleMouseEnterTitle, handleMouseLeaveTitle }) => {
  return (
    <CustomCursor
      onTitleMouseEnter={handleMouseEnterTitle}
      onTitleMouseLeave={handleMouseLeaveTitle}
    />
  );
};

export default InitCustomCursor;
