import React from "react";
import "./SignUpModals.css";

const SignUpAModal = ({ onClose, handleLoginRedirect, handleNext }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevoMiembro = {
      nombres: formData.nombres,
      apellidos: formData.apellidos,
      email: formData.email,
      bio: formData.bio,
      intereses: formData.intereses.split(";"),
      skills: formData.skills,
    };
    console.log(miembrosMaster);
    console.log(nuevoMiembro);
    miembrosMaster.miembros.push(nuevoMiembro);
    onClose();
  };

  return (
    <div className="modal modal-container d-flex" id="sign-up-modal">
      <div className="modal-dialog modal-dialog-centered form-container modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Registrarse</h5>
            <button
              onClick={onClose}
              type="button"
              className="btn-close cursor-pointer"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="modal-body d-flex flex-column">
              <section className="d-flex flex-column">
                <div className="mb-3">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="password">Constraseña</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="password">Confirmar constraseña</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                  />
                </div>
              </section>
              <section className="d-flex justify-content-center">
                <div onClick={handleLoginRedirect} className="login-redirect">
                  Ya tengo una cuenta
                </div>
              </section>
            </div>

            <div className="modal-footer d-flex justify-content-center">
              <button
                onClick={handleNext}
                type="submit"
                className="btn btn-success"
              >
                Siguiente
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpAModal;