import "./ModalAttention.scss";
import attentionIcon from "../../assets/attention-icon.svg";
import { useState } from "react";

function ModalAttention({className}: {className: string}) {
  const [visibility, setVisibility] = useState(true);

  return (
    <>
      <div className={`overlay ${!visibility && "hidden"} ${className}`}></div>
      <article className={`modal-attention ${!visibility && "hidden"} ${className}`}>
        <header className="modal-attention-header">
          <img
            className="modal-attention-header-icon"
            src={attentionIcon}
            alt="Attention icon"
          />
          <h2 className="modal-attention-header-title">Attention</h2>
        </header>

        <div className="modal-attention-content">
          <p className="modal-attention-content-p">
            The form section cannot take any data.
          </p>
          <p className="modal-attention-content-p">
            This is a clone of{" "}
            <a className="link" href="https://thegameawards.com/" target="balnk">
              The game awards
            </a>{" "}
            page made exclusively for learning and practice purposes.
          </p>
        </div>

        <button className="main-btn" onClick={() => setVisibility(!visibility)}>
          Continue
        </button>
      </article>
    </>
  );
}

export default ModalAttention;
