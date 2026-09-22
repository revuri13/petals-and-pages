import { useState } from "react";
import { FiX, FiUser, FiMail } from "react-icons/fi";

function AccountDrawer({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const [signedIn, setSignedIn] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.name.trim() || !formData.email.trim()) {
      return;
    }

    setSignedIn(true);
  };

  const handleSignOut = () => {
    setSignedIn(false);

    setFormData({
      name: "",
      email: "",
    });
  };

  return (
    <>
      {isOpen && (
        <button
          type="button"
          className="account-overlay"
          onClick={onClose}
          aria-label="Close account"
        />
      )}

      <aside
        className={`account-drawer ${
          isOpen ? "account-drawer-open" : ""
        }`}
        aria-label="Account"
      >
        <div className="account-header">
          <div>
            <p>YOUR ACCOUNT</p>
            <h2>{signedIn ? "My Profile" : "Welcome"}</h2>
          </div>

          <button
            type="button"
            className="account-close"
            onClick={onClose}
            aria-label="Close account"
          >
            <FiX />
          </button>
        </div>

        <div className="account-content">
          {signedIn ? (
            <div className="profile-view">
              <div className="profile-avatar">
                <FiUser />
              </div>

              <p className="profile-label">
                SIGNED IN AS
              </p>

              <h3>{formData.name}</h3>

              <div className="profile-email">
                <FiMail />
                <span>{formData.email}</span>
              </div>

              <p className="profile-message">
                Welcome back to Petals &amp; Pages.
                Your cozy corner is ready.
              </p>

              <button
                type="button"
                className="sign-out-button"
                onClick={handleSignOut}
              >
                Sign Out
              </button>
            </div>
          ) : (
            <div className="account-form">
              <div className="account-intro">
                <FiUser />

                <h3>Welcome back.</h3>

                <p>
                  Sign in to keep your Petals &amp; Pages
                  experience close at hand.
                </p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="account-field">
                  <label htmlFor="account-name">
                    Name
                  </label>

                  <input
                    id="account-name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>

                <div className="account-field">
                  <label htmlFor="account-email">
                    Email
                  </label>

                  <input
                    id="account-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="sign-in-button"
                >
                  Continue
                  <span aria-hidden="true">→</span>
                </button>
              </form>

              <p className="account-demo-note">
                Demo account experience — no account
                information is sent or stored.
              </p>
            </div>
          )}
        </div>
      </aside>
    </>
  );
}

export default AccountDrawer;