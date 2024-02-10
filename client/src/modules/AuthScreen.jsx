import { useState } from "react";
import axios from "axios";

function AuthScreen() {
  const [whichForm, setWhichForm] = useState(false);

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
      <div className="fillerSpace">
        <div className="logoWrapper">
          <img src="logo.png" alt="" />
          <h1>Noteapp</h1>
        </div>
        <p className="footerText">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas eos sit dicta necessitatibus repellat officiis ipsum, sunt magnam, tempora minima
          voluptatem neque quos eaque, asperiores ex ut quo explicabo ab.
        </p>
      </div>

      <div className="formSpace">
        <div className="welcomeText">
          <h1>Welcome</h1>
          <p>Varoluştaki en güzel not tutma uygulaması</p>
        </div>

        {whichForm ? (
          <form onSubmit={handleSubmitRegister} className="registerForm">
            <input type="text" value={userName} minLength="2" placeholder="Kullanıcı Adı" onChange={(e) => setUserName(e.target.value)} />
            <input type="text" value={name} minLength="2" placeholder="İsim Soyisim" onChange={(e) => setName(e.target.value)} />
            <input type="text" value={email} minLength="5" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" value={password} minLength="8" placeholder="Şifre" onChange={(e) => setPassword(e.target.value)} />
            <input type="submit" value={"Kayıt Ol"} />
            <p className="formSwitchText">
              Zaten üye misin?{" "}
              <a href="#" onClick={() => setWhichForm(false)}>
                Giriş yap
              </a>
            </p>
          </form>
        ) : (
          <form onSubmit={handleSubmitLogin} className="loginForm">
            <input type="text" value={loginUserName} placeholder="E-Posta" onChange={(e) => setLoginUserName(e.target.value)} />
            <input type="password" value={loginPassword} placeholder="Şifre" onChange={(e) => setLoginPassword(e.target.value)} />
            <input type="submit" value={"Giriş Yap"} />
            <p className="formSwitchText">
              Üye değil misin?{" "}
              <a href="#" onClick={() => setWhichForm(true)}>
                Kayıt ol
              </a>
            </p>
          </form>
        )}
      </div>
    </div>
  );
}

export default AuthScreen;
