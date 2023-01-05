import { useFormik } from "formik";
import { FunctionComponent } from "react";
import * as yup from "yup";
import { addUser } from "../services/usersService";
import User from "../interfaces/User";

interface Register2Props {}

const Register2: FunctionComponent<Register2Props> = () => {
  let formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: yup.object({
      email: yup.string().required().email("Invalid email"),
      password: yup
        .string()
        .required()
        .min(8, "Too short! Should be at least 8 characters"),
    }),
    onSubmit: (values: User, { resetForm }) => {
      addUser(values)
        .then((res) => {
          console.log(res.data);
          resetForm();
        })
        .catch((err) => console.log(err));
    },
  });
  return (
    <div className="container col-md-3">
      <form onSubmit={formik.handleSubmit}>
        <h1 className="display-3">REGISTER 2</h1>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            name="email"
            // html -> ts
            onChange={formik.handleChange}
            // ts -> html
            value={formik.values.email}
            onBlur={formik.handleBlur}
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        {formik.touched.email && formik.errors.email && (
          <p className="text-danger">{formik.errors.email}</p>
        )}
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            onBlur={formik.handleBlur}
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        {formik.touched.password && formik.errors.password && (
          <p className="text-danger">{formik.errors.password}</p>
        )}
        <button
          type="submit"
          className="btn btn-success my-3 w-100"
          disabled={!formik.isValid || !formik.dirty}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register2;
