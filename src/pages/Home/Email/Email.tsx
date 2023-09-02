import MainButton from "../../../components/common/MainButton/MainButton";
import "./Email.scss";

function Email() {
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

          <form className="form">
            <input className="form-input-name" type="text" placeholder="NAME" />
            <input className="form-input-email" type="email" placeholder="EMAIL" />
            <label className="form-label-check-agree" htmlFor="agree">
              <input className="form-input-check-agree" type="checkbox" name="agree" />
              <span className="check-span">you agree to receive occasional updates & news leading up the show</span>
            </label>
            <MainButton className="main-btn form-button" text="Submit" />
          </form>
        </div>
      </div>
    </section>
  );
}

export default Email;
