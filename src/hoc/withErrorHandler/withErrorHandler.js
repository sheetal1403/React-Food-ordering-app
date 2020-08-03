import React, { Component } from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Auxillary/Auxillary';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component{

            state = {
                error: null
            }

            componentDidMount(){
                console.log('error handler');

                axios.interceptors.request.use(request => {
                    this.setState({error: null});
                    return request;
                }, error => {
                    // console.log(error.message);
                    this.setState({error: error.message})
                })

                axios.interceptors.response.use(response => response, error => {
                    // console.log(error.message);
                    this.setState({error: error.message})
                })
            }

            closeModal = () => {
                this.setState({error: null});
            }

            render(){
                return (
                    <Aux>
                        <Modal showModal={this.state.error} closeModal={this.closeModal}>
                            {this.state.error}
                        </Modal>   
                        <WrappedComponent { ...this.props }/>
                    </Aux>
                );
            }
            
            
        }
    
}

export default withErrorHandler;