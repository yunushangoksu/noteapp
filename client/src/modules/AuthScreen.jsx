import { useState } from "react";
import axios from "axios";

function AuthScreen() {
  const [userName, setUserName] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
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

  return (
    <div className="authScreen">
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Kullanıcı Adı: </label>
        <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
        <br />

        <label htmlFor="">İsim Soyisim: </label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <br />

        <label htmlFor="">Email: </label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />

        <label htmlFor="">Şifre: </label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />

        <input type="submit" value={"Kayıt Ol"} />
      </form>
    </div>
  );
}

export default AuthScreen;
