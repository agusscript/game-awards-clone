import "./Email.scss";
import MainButton from "../../../components/common/MainButton/MainButton";
import { useState } from "react";
import { useForm } from "react-hook-form";

function Email() {
  const [visibleForm, setVisibleForm] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(userInfo: any) {
    console.log(userInfo);
    setVisibleForm(false);
  }

  const errorMessages = {
    reqCheck: "you must agree the terms.",
    reqEmail: "enter a valid email address.",
  };

  const emailRegexp = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

  return (
    <section className="email">
      <div className="wrapper">
        <div className="container">
          <div className="content">
            <h1 className="content-title">
              tga <span className="content-title-span">insider</span>
            </h1>
            <h2 className="content-subtitle">sign up to receive updates and news</h2>
          </div>

          <form
            className={`form ${!visibleForm && "inactive"}`}
            onSubmit={handleSubmit(onSubmit)}
          >
            <input className="form-input-name" type="text" placeholder="NAME" />
            <input
              className="form-input-email"
              type="text"
              placeholder="EMAIL"
              {...register("email", {
                required: errorMessages.reqEmail,
                pattern: { value: emailRegexp, message: errorMessages.reqEmail },
              })}
              name="email"
            />
            <label className="form-label-check-agree" htmlFor="agree">
              <input
                className="form-input-check-agree"
                type="checkbox"
                {...register("check", {
                  required: errorMessages.reqCheck,
                })}
                name="check"
              />
              <span className="check-span">
                you agree to receive occasional updates & news leading up the show
              </span>
            </label>

            <MainButton
              className="main-btn form-button"
              text={errors.email || errors.cehck ? "Try again" : "Submit"}
            />

            <p className={`form-text-check-error ${errors.check && "active"}`}>
              {errorMessages.reqCheck}
            </p>
            <p className={`form-text-email-error ${errors.email && "active"}`}>
              {errorMessages.reqEmail}
            </p>
          </form>

          <div className={`success-container ${!visibleForm && "active"}`}>
            <h2 className="success-container-title">Thanks for signing up!</h2>
            <h3 className="success-container-subtitle">
              You will receive a confirmation email shortly.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Email;
