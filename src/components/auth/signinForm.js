
import { reduxForm, Field } from 'redux-form';


import { FormInput, FormButton } from '../formFields';

class SignInForm extends Component {
    render() {
        
        const { className, handleSubmit } = this.props;
        return (
            
            <form onSubmit={handleSubmit} className={`${className} sign-in-form`}>
                <Field className='sign-in-form__email'
                type='email'
                title='Email'
        
                placeholder='Password'
                name='password'
                component={FormInput}/>
                <Field className='sign-in-form__login'
                onClick={() => console.log('tryna submit')}
                type='submit'
                title='Login'
                name='login'
                component={FormButton}/>
            </form>
        )
    }}