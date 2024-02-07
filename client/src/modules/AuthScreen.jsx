import { useState } from "react";
import axios from "axios";

function AuthScreen() {
  const [userName, setUserName] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginUserName, setLoginUserName] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  async function handleSubmitRegister(e) {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/auth/register", { userName, name, email, password });
      setUserName("");
      setName("");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log("Form gönderme hatası:", error.response.data);
      setUserName("");
      setName("");
      setEmail("");
      setPassword("");
    }
  }

  async function handleSubmitLogin(e) {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/auth/login", { loginUserName, loginPassword });
      setLoginUserName("");
      setLoginPassword("");
    } catch (error) {
      console.log("Form gönderme hatası:", error.response.data);
      setLoginUserName("");
      setLoginPassword("");
    }
  }

  return (
    <div className="authScreen">
      <form onSubmit={handleSubmitRegister}>
        <label>Kullanıcı Adı: </label>
        <input type="text" value={userName} minLength="2" onChange={(e) => setUserName(e.target.value)} />
        <br />

        <label>İsim Soyisim: </label>
        <input type="text" value={name} minLength="2" onChange={(e) => setName(e.target.value)} />
        <br />

        <label>Email: </label>
        <input type="text" value={email} minLength="5" onChange={(e) => setEmail(e.target.value)} />
        <br />

        <label>Şifre: </label>
        <input type="password" value={password} minLength="8" onChange={(e) => setPassword(e.target.value)} />
        <br />

        <input type="submit" value={"Kayıt Ol"} />
      </form>
      <br />
      <form onSubmit={handleSubmitLogin}>
        <label>Kullanıcı Adı: </label>
        <input type="text" value={loginUserName} onChange={(e) => setLoginUserName(e.target.value)} />
        <br />
        <label>Şifre:</label>
        <input type="password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} />
        <br />
        <input type="submit" value={"Giriş Yap"} />
      </form>
    </div>
  );
}

export default AuthScreen;
