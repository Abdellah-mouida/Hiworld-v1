import { useEffect, useState } from "react";
import Axios from "../../../base/Axios";
import Cookies from "universal-cookie";
import { HIWORLD_COOKIE_NAME } from "../../../base/CookieName";
import SelectLabels from "../../../Material UI/Select";

let MoreInfo = () => {
  let id = new Cookies().get(HIWORLD_COOKIE_NAME);
  let [loading, setLoading] = useState(false);
  let [form, setForm] = useState({
    gender: "",
    phoneNumber: "",
    birthDay: "",
    country: "",
    bio: "",
  });
  useEffect(() => {
    Axios.get("/user/" + id + "/more-info").then((res) => setForm(res.data));
  }, []);
  let changeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  let save = async () => {
    setLoading(true);
    try {
      let res = await Axios.post("/user/" + id + "/more-info", form);
      window.location.pathname = "/profile/myPost";
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="more-info">
      <div className="form-controle">
        <label htmlFor="">Gender</label>
        <select name="gender" onChange={changeForm} value={form.gender}>
          <option selected value="" disabled>
            Select You Gender
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <div className="form-controle">
        <label htmlFor="">Phone Number</label>
        <input
          onChange={changeForm}
          value={form.phoneNumber}
          type="number"
          name="phoneNumber"
          placeholder="Enter You Phone Number"
        />
      </div>
      <div className="form-controle">
        <label htmlFor="">Birth Day</label>
        <input
          onChange={changeForm}
          value={form.birthDay}
          type="date"
          name="birthDay"
          placeholder="When You was Born?"
        ></input>
      </div>
      <div className="form-controle">
        <label htmlFor="">Country</label>
        <input
          onChange={changeForm}
          value={form.country}
          type="text"
          name="country"
          placeholder="Where Are You Now ?"
        ></input>
      </div>
      <div className="form-controle">
        <label htmlFor="">Bio</label>
        <textarea
          onChange={changeForm}
          value={form.bio}
          name="bio"
          placeholder="Tell us Some thing about You ..."
        ></textarea>
      </div>
      <div className="f-end">
        {loading ? (
          <button style={{ width: "130px" }} className="loading-btn">
            {" "}
            <div className="spener"></div>
          </button>
        ) : (
          <button onClick={save}>Save</button>
        )}
      </div>
    </div>
  );
};
export default MoreInfo;
