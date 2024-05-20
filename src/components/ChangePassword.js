import { Link } from "react-router-dom";

function ChangePassword() {
  return (
    <div className="form-container">
      <form action="">
        <h2>Create new password</h2>
        <p className="text-muted">
          Your new password must be different from previous used passwords.
        </p>
        <div className="box">
          <p className="text-muted">Current Password</p>
          <input type="password" id="currentpass" />
        </div>
        <div className="box">
          <p className="text-muted">New Password</p>
          <input type="password" id="newpass" />
        </div>
        <div className="box">
          <p className="text-muted">Confirm Password</p>
          <input type="password" id="confirmpass" />
        </div>
        <div className="button">
          <input type="submit" value="Save" className="btn" />
          <Link to="/" className="text-muted">
            Cancel
          </Link>
        </div>
        <Link>
          <p>Forget password?</p>
        </Link>
      </form>
    </div>
  );
}

export default ChangePassword;
