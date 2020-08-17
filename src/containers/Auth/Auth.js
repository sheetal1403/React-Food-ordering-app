import React, { Component } from 'react';
import AuthInput from '../../components/UI/AuthInput/AuthInput';
import Button from '../../components/UI/Button/Button';
import classes from './Auth.css';

class Auth extends Component{

    state = {
        controls:{
            email:{
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Enter your email'
                },
                value:'',
                validation:{
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            password:{
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Enter your password'
                },
                value:'',
                validation:{
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            }
        }
    }


    checkValidity(value, rules){
        let isValid = true;

        if(!rules){
            return true
        }

        if(rules.required){
            isValid = value.trim() !== '' && isValid;
        }

        if(rules.minLength){
            isValid = value.length >= rules.minLength && isValid;
        }

        if(rules.maxLength){
            isValid = value.length <= rules.maxLength && isValid;
        }

        if(rules.email){
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid
        }

        return isValid;

    }

    inputHandler = (event, inputIdentifier) => {
        const updatedForm = { ...this.state.controls };
        const updatedFormElement = updatedForm[inputIdentifier];
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        
        updatedFormElement.touched = true;
        this.setState({controls: updatedForm })
    }
    


    render(){

        let formArray = [];
        for(let key in this.state.controls){
            formArray.push({
                id: key,
                config: this.state.controls[key]
            })
        }

        return(
            <div className={classes.Form}>
                <form>
                    {formArray.map(formElement => {
                        return <AuthInput 
                                elementType = {formElement.config.elementType}
                                elementConfig = {formElement.config.elementConfig}
                                value = {formElement.config.value}
                                changed = {(event) => this.inputHandler(event, formElement.config.elementConfig.type)}
                                inValid = {!formElement.config.valid}
                                touched = {formElement.config.touched}
                                key= {formElement.id}/>
                    })}
                    <Button btnType='Success'>Log in</Button>
                </form>
            </div>
        );
    }
}

export default Auth;