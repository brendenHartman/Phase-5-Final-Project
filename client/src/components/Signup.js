import { Link, useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from 'yup';
import { setUser } from "../slices/userSlice";
import { useDispatch } from "react-redux";
import { setEnclosures } from "../slices/enclosuresSlice";
import { setAnimals } from "../slices/animalSlice";
import { setCash } from "../slices/cashSlice";
import { setCompletes } from "../slices/completesSlice";
import { useState } from "react";

function Signup(){
    const dispatch = useDispatch()
    const history = useHistory()
    const formSchemaSign = yup.object().shape({
        username: yup.string().required('Must Enter Username').max(16).min(4), 
        password: yup.string().required('Must Enter Password').max(16).min(8),
      });
    const [errorMessage, setErrorMessage] = useState("");

    const formikSign = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        validationSchema: formSchemaSign,
        onSubmit: async (values) => {
          try {
            const response = await fetch("/users", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(values),
            });
    
            if (!response.ok) {
              const errorData = await response.json();
              throw new Error(errorData.error || 'Unknown error');
            }
    
            const data = await response.json();
            console.log(data);
            history.push('/');
            dispatch(setUser(data));
            dispatch(setEnclosures(data.enclosures));
            dispatch(setAnimals(data.animals));
            dispatch(setCash(data.cash));
            dispatch(setCompletes([]));
          } catch (error) {
            setErrorMessage(error.message);
          }
        },
      });

    return(
        <div id='SignUpPage'>
          <h1 id='SignUpHeader'>SignUp:</h1>
          {errorMessage && <div id='errorMsg'>{errorMessage}</div>}
            <form id='SignUpForm' onSubmit={formikSign.handleSubmit}>
                <label htmlFor='username'>Username:</label>
                <input id="username" className='logInput' onChange={formikSign.handleChange} value={formikSign.values.username} />
                <p id='passErr'>{formikSign.errors.username}</p>
                <label htmlFor='password'>Password:</label>
                <input id="password" className='logInput' onChange={formikSign.handleChange} value={formikSign.values.password} />
                <p id='userErr'>{formikSign.errors.password}</p>
                <input id="submit" type="submit" />
            </form>
            <p>Have An Acount Already?</p>
            <div id='SignUpBottSec'>
              <Link id='BackToMain'to='/'>Main Menu</Link>
              <p> / </p>
              <Link id='SwitchToLogin' to='/login'>Login Here</Link>
            </div>
        </div>
    )
}

export default Signup
