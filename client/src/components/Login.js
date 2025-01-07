import { Link, useHistory} from "react-router-dom";
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from "react-redux";
import { setUser } from "../slices/userSlice";
import { setEnclosures } from "../slices/enclosuresSlice";
import { setAnimals } from "../slices/animalSlice";
import { setCash } from "../slices/cashSlice";

function Login(){
    const dispatch = useDispatch()
    const history = useHistory()
    const formSchema = yup.object().shape({
        username: yup.string().required('Must Enter Username').max(16).min(4), 
        password: yup.string().required('Must Enter Password').max(16).min(8),
      });
    const formik = useFormik({
        initialValues: {
          username: "",
          password: "",
        },
        validationSchema: formSchema,
        onSubmit: (values) => {
          fetch("/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          })
          .then(res => {
            if(res.ok){
              return res.json()
            }
          })
          .then(data  => {if(data){
            console.log(data)
            history.push('/')
            dispatch(setUser(data))
            dispatch(setEnclosures(data.enclosures))
            dispatch(setAnimals(data.animals))
            dispatch(setCash(data.cash))
          }})
          .catch(error => console.log(error))
        },
      });

    return(
        <div id='LoginScreen'>
          <h1 id='logInHeader'>Login: </h1>
          <form id='loginForm' onSubmit={formik.handleSubmit}>
              <label htmlFor='username'>Username:</label>
              <input id="username" className='logInput' onChange={formik.handleChange} value={formik.values.username} />
              <p>{formik.errors.username}</p>
              <label htmlFor='password'>Password:</label>
              <input id="password" className='logInput' onChange={formik.handleChange} value={formik.values.password} />
              <p>{formik.errors.password}</p>
              <input id="submit" type="submit" />
          </form>
          <p>Don't have an account already?</p>
          <div id='logInBottSec'>
            <Link to='/'>Back To Main Menu</Link>
            <p>/</p>
            <Link to='/signup'>Signup Here</Link>
          </div>
        </div>
    )
}

export default Login