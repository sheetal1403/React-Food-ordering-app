import React, { Component } from 'react';
import { connect } from 'react-redux'
import AuthInput from '../../components/UI/AuthInput/AuthInput';
import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';
import classes from './Auth.css';
import * as actions from '../../store/actions/auth';

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
        },
        formIsValid: false,
        signUp: true
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

        if(rules.isEmail){
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
        let formIsValid = true ;
        for(let formElement in updatedForm){
            formIsValid = updatedForm[formElement].valid && formIsValid;
        }
        this.setState({controls: updatedForm, formIsValid})
    }

    submitHandler = (event) => {
        event.preventDefault();
        this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value, this.state.signUp);

    }

    switchAuthMode = () => {
        this.setState(prevState => {
            return{signUp: !prevState.signUp}
        })
    }
    


    render(){

        let formArray = [];
        for(let key in this.state.controls){
            formArray.push({
                id: key,
                config: this.state.controls[key]
            })
        }

        let errorMessage = null;
        if(this.props.error){
            errorMessage = <p>{this.props.error}</p>
        }

        let authForm = <Spinner/>
        if(!this.props.loading){
            authForm = (
                <div className={classes.Form}>
                    {errorMessage}
                    <form onSubmit={this.submitHandler}>
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
                        <Button 
                            btnType='Success'
                            disabled={!this.state.formIsValid}>
                            {this.state.signUp ? 'Sign Up' : 'Log In'}</Button>
        
                    </form>
                    <button onClick={this.switchAuthMode}>{this.state.signUp ? 'Already a user? Log in' : 'New ? Sign up'}</button>
                </div>
            );
        }

        

        return authForm
    }
}

const mapStateToProps = state => {
    return{
        loading: state.auth.loading,
        error: state.auth.error
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onAuth : (email, password, signUp) => dispatch(actions.auth(email, password, signUp)) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);