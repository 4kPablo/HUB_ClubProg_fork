import SignUp from "../buttons/SignUp/SignUp";
import { useModal } from "../ModalsHandler";
import "./HeroBanner.css";

function HeroBanner() {
  const { toggleSignUpA } = useModal();

  return (
    <>
      <div className="hero-banner">
        <div className="call-to-action">
          <h1 className="m-3">¡Sumate al Club de Programador@s del CUVL!</h1>
          <div className="btn-container">
            <SignUp onClick={toggleSignUpA} />
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroBanner;
