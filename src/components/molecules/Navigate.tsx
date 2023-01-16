import { useNavigate } from "react-router-dom";
import { css } from '@emotion/react';
import Button from "@/components/atoms/Button";

const Navigate = () => {

  const navigate = useNavigate();

  return (
    <div css={btnStyle}>
      <Button
        name="Register New User"
        type="button"
        handleClick={() => navigate('/')}
      />
    </div>
  )
}

const btnStyle = css({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
});

export default Navigate;
