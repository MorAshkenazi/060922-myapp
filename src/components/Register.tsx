import { FormEvent, FunctionComponent, useState } from "react";

interface RegisterProps {}

const Register: FunctionComponent<RegisterProps> = () => {
  let [email, setEmail] = useState<string>("");
  let [password, setPassword] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <div className="container col-md-3">
      <form onSubmit={handleSubmit}>
        <h1 className="display-3">REGISTER</h1>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            // html -> ts
            onChange={(e) => setEmail(e.target.value)}
            // ts -> html
            value={email}
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <button type="submit" className="btn btn-success my-3 w-100">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
