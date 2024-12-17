import { Link, useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from 'yup';
import { setUser } from "../slices/userSlice";
import { useDispatch } from "react-redux";
import { setEnclosures } from "../slices/enclosuresSlice";
import { setAnimals } from "../slices/animalSlice";
import { setCash } from "../slices/cashSlice";

function Signup(){
    const dispatch = useDispatch()
    const history = useHistory()
    const formSchemaSign = yup.object().shape({
        username: yup.string().required('Must Enter Username').max(16).min(4), 
        password: yup.string().required('Must Enter Password').max(16).min(8),
      });

    const formikSign = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        validationSchema: formSchemaSign,
        onSubmit: (values) => {
            fetch("/users", {
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
        <div id='SignupPage'>
            <form id='loginForm' onSubmit={formikSign.handleSubmit}>
                <label htmlFor='username'>Username:</label>
                <input id="username" className='logInput' onChange={formikSign.handleChange} value={formikSign.values.username} />
                <p>{formikSign.errors.username}</p>
                <label htmlFor='password'>Password:</label>
                <input id="password" className='logInput' onChange={formikSign.handleChange} value={formikSign.values.password} />
                <p>{formikSign.errors.password}</p>
                <input id="submit" type="submit" />
            </form>
            <Link to='/'>Back To Main Menu</Link>
            <p>Have An Acount Already?</p>
            <Link to='/login'>Login Here</Link>
        </div>
    )
}

export default Signup
