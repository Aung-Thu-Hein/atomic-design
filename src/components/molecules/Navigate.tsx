import { useNavigate } from "react-router-dom";
import Btn from "@/components/molecules/Btn";

const Navigate = () => {
  
  const navigate = useNavigate();

  return(
    <Btn name="Register New User" type="button" handleClick={() => navigate('/')}/>
  )
}

export default Navigate;
