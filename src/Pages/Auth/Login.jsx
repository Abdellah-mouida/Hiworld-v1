import Cookies from "universal-cookie";
import Axios from "../../base/Axios";
import { useState } from "react";
import Error from "../../Material UI/Error";

let Login = () => {
  let [form, setForm] = useState({ email: "", password: "" });
  let [err, setErr] = useState("");
  let cookie = new Cookies();

  let send = async (e) => {
    e.preventDefault();
    if (!form.email) {
      setErr("Email is Required");
    } else if (!form.password) {
      setErr("Password is Required");
    } else if (form.password.length < 8) {
      setErr("Password should Have at least 8 characters or More");
    } else {
      try {
        let res = await Axios.post("/login", form);
        let userId = res.data.user._id;
        cookie.set("hiworld-user-id", userId);
        setErr("");
        window.location.pathname = "/home";
        console.log(res);
      } catch (err) {
        if (err.response.status !== 201) {
          setErr(err.response.data);
        }
      }
    }
  };

  let handelChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="auth-container f-center">
      <div className="sing f-colum">
        <h2>Log in</h2>
        <div className="form-controle">
          <label htmlFor="">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            placeholder="Email ... "
            autoComplete=""
            onChange={handelChange}
            value={form.email}
          />
        </div>
        <div className="form-controle">
          <label htmlFor="">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={handelChange}
            required
            value={form.password}
            minLength={"8"}
          />
        </div>

        <div className="f-end f-colum">
          <button className="btn-large" onClick={send}>
            Login
          </button>
        </div>
        {err && <Error err={err}></Error>}
        <div className="f-center">
          <p>
            Or go to <a href="/sing">Sing in</a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Login;
