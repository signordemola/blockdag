import React from 'react';

const SignUp = () => {
  const [open, setOpen] = React.useState(false);

  const toggleModal = () => {
    setOpen(!open);

    console.log(open);
  };
  return (
    <section className="SignupNew_signup__tSPPf">
      <div
        id=""
        className="Container_container__bOiDv SignupNew_container__6tnbQ  "
      >
        <p>
          Join the BlockDAG community and discover the fastest crypto mining
          journey.
        </p>
        <div className="SignupNew_signupBox__BIiLn" onClick={toggleModal}>
          <div className="SignupNew_blur__07cdY"></div>
          <h2 className="">Sign Up</h2>
        </div>
      </div>

      <div
        className={`SignupNew_modal__4zcsr ${
          open ? 'SignupNew_opened__MIG9k' : ''
        }`}
      >
        <div className="SignupNew_modalContent__Qu9bu">
          <h2>Sign Up</h2>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 1024 1024"
            fillRule="evenodd"
            className="SignupNew_close__hkhF3"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
            onClick={toggleModal}
          >
            <path d="M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64Zm0 76c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372Zm128.013 198.826c.023.007.042.018.083.059l45.02 45.019c.04.04.05.06.058.083a.118.118 0 0 1 0 .07c-.007.022-.018.041-.059.082L557.254 512l127.861 127.862a.268.268 0 0 1 .05.06l.009.023a.118.118 0 0 1 0 .07c-.007.022-.018.041-.059.082l-45.019 45.02c-.04.04-.06.05-.083.058a.118.118 0 0 1-.07 0c-.022-.007-.041-.018-.082-.059L512 557.254 384.14 685.115c-.042.041-.06.052-.084.059a.118.118 0 0 1-.07 0c-.022-.007-.041-.018-.082-.059l-45.02-45.019c-.04-.04-.05-.06-.058-.083a.118.118 0 0 1 0-.07c.007-.022.018-.041.059-.082L466.745 512l-127.86-127.86a.268.268 0 0 1-.05-.061l-.009-.023a.118.118 0 0 1 0-.07c.007-.022.018-.041.059-.082l45.019-45.02c.04-.04.06-.05.083-.058a.118.118 0 0 1 .07 0c.022.007.041.018.082.059L512 466.745l127.862-127.86c.04-.041.06-.052.083-.059a.118.118 0 0 1 .07 0Z"></path>
          </svg>

          <form action="">
            <input type="text" placeholder="Enter Name" />

            <div className=" react-tel-input phoneInput">
              <div className="special-label">Phone</div>
              <input
                className="form-control SignupNew_phone_input__ZA6OL"
                placeholder="Phone"
                type="tel"
                name="Phone"
                value="+1"
                onChange={() => {}}
              />
              <div className="flag-dropdown ">
                <div
                  className="selected-flag"
                  title="United States: + 1"
                  tabIndex="0"
                  role="button"
                  aria-haspopup="listbox"
                >
                  <div className="flag us">
                    <div className="arrow"></div>
                  </div>
                </div>
              </div>
            </div>

            <input type="email" name="e-mail" placeholder="Enter E-mail" />

            <div className="SignupNew_check__8Tcxx">
              <input type="checkbox" id="check" name="check" required="" />
              <label htmlFor="check">
                <p>
                  By submitting this form you agree to our{' '}
                  <a href="https://blockdag.network/terms">
                    <strong>Terms</strong>
                  </a>{' '}
                  and{' '}
                  <a href="https://blockdag.network/privacy">
                    <strong>Privacy Policy</strong>
                  </a>
                  .
                </p>
              </label>
            </div>

            <div className="SignupNew_button__Ouduu">
              <button
                type="submit"
                className="Button_button__mCT0h  Button_light__xmSX6"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
