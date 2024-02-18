import Cookies from "universal-cookie";
import Axios from "../../base/Axios";
import { useState } from "react";
import Error from "../../Material UI/Error";
let Sing = () => {
  let [err, setErr] = useState("");
  let cookie = new Cookies();

  let send = async (e) => {
    e.preventDefault();
    if (!form.name) {
      setErr("Name is Required");
    } else if (!form.email) {
      setErr("Email is Required");
    } else if (!form.password) {
      setErr("Password is Required");
    } else if (form.name.length < 2) {
      setErr("Name should Have at least 3 characters or More");
    } else if (form.password.length < 8) {
      setErr("Password should Have at least 8 characters or More");
    } else {
      try {
        let res = await Axios.post("/sing", form);
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
  let [form, setForm] = useState({ name: "", email: "", password: "" });

  let handelChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <div className="auth-container f-center">
      <div className="sing f-colum">
        <h2>Sing up</h2>
        <div className="form-controle">
          <label htmlFor="">Username</label>
          <input
            type="text"
            name="name"
            placeholder="Username ..."
            onChange={handelChange}
            required
            value={form.name}
          />
        </div>
        <div className="form-controle">
          <label htmlFor="">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            placeholder="Email ... "
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
            Sing
          </button>
        </div>

        {err && <Error err={err}></Error>}

        <div className="f-center">
          <p>
            Or go to <a href="/login">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Sing;
