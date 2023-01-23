import React, {Component, useState} from 'react'
import {UserService} from '../../backend-service-connector/service'
import {UserDto} from '../../backend-service-connector/model/rest/userDto'

function LoginNavigation(props: any) {
    const userService = props.userService
    const [isSignInForm, setSignInForm] = useState(true)
    const [login, setLogin] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [loginMessage, setLoginMessage] = useState('')
    const [registerMessage, setRegisterMessage] = useState('')
    const [isHoverRegister, setIsHoverRegister] = useState(false)
    const [userUnderstandPolity, setUserUnderstandPolity] = useState(false)

    /**
     * #3
     * dzieki useState możemy przechowywać i uaktualniać jakiś stan tak jak np czy jestemy na stronie logowania czy rejestracji
     * const [isSignInForm, setSignInForm] = useState(true)
     *
     * w naszym przypadku wartość domyślna to true żeby ją zmienić wystarczy napisać
     * setSignInForm(false) lub setSignInForm(!isSignInForm) wykrzyknik oznacz wartość przeciwną)
     * **/
    const signIn = async (e: any) => {
        setLoginMessage('')
        e.preventDefault()
        /**
         * #4
         * e.preventDefault() wyłącza nam domyślne zachowanie które w naszym wypadku jest niepożądanym zachowaniem gdyż dochodzi
         * do odświeżania strony i wypisywania z inputów loginu hasła itp
         *
         * async await musimy zadeklarować na początku funkcji że jest ona asynchroniczna czyli ma poczekać
         * na ukończenie funcji/pobranie danych, dzieki await pokazujemy w którym momencie program ma poczekać
         * async await zwraca nam promisa
         * **/
        const userLogged = await userService.logIn(login, password)

        if (userLogged) {
            window.location.href = 'http://localhost:3000/home'
            /**
             * w przypadku porpawnego logwoania możemy wyrenderować kolejny komponent poprzez zmanę lokacji href
             * **/
        } else {
            const incorrectData = 'Incorrect login or password'

            setLoginMessage(incorrectData)
        }
        /**
         *
         * **/
        setPassword('')
        setLogin('')
    }

    const register = async (e: any) => {
        e.preventDefault()
        const equalsPassword: boolean = password === confirmPassword
        const allUsers: Array<UserDto> = await userService.getAllUsers()
        const userLoginExist: UserDto | undefined = allUsers.find(user => user.login === login)
        const userEmailExist: UserDto | undefined = allUsers.find(user => user.email === email)
        const userDontExist: boolean = !userLoginExist && !userEmailExist

        if (equalsPassword && userDontExist && userUnderstandPolity) {
            const userDto: UserDto = new UserDto(undefined, login, password, email, undefined, undefined)
            await userService.addNewUser(userDto)
            window.location.href = 'http://localhost:3000/home'

            /**
             * jeżeli warunek zostanie spełniony tworzy się uzytkownik, userService wyśle nowego uzytkownika do zapisania do backendu
             * **/
        }

        setMessageWhenRegisterUsedWrongData(equalsPassword, userLoginExist, userEmailExist)
    }

    const setMessageWhenRegisterUsedWrongData = (equalsPassword: boolean, userLoginExist: UserDto | undefined,
                                                 userEmailExist: UserDto | undefined) => {
        /**
         * wyświetlanie błedu jezeli zostaną spełnione warunki np niepeprawy login
         * **/
        let errorMessage: string = ''

        if (!equalsPassword) {
            errorMessage = 'Wrong password'
        }
//
        if (userLoginExist) {
            errorMessage += ' User login '
        }

        if (userEmailExist) {
            errorMessage += 'email '
        }

        if (userEmailExist || userLoginExist) {
            errorMessage += 'exist'
        }

        /**
         * czyszczenie imputów żeby ponownie wspiać hasło
         * **/
        setPassword('')
        setConfirmPassword('')
        setRegisterMessage(errorMessage)
    }

    return (
        <form
            className={'form'}
            onSubmit={(event) => isSignInForm ? signIn(event) : register(event)}
        >
            {/**
             *  skrócona wersja if
             * isSignInForm ? jezeli isSignInForm jest true signIn(event) : jezeli isSignInForm jest false register(event)
             * **/
            }
            <div className={'form__title'}>
                {
                    isSignInForm ? 'Sign In' : 'Register'}
            </div>
            {
                isSignInForm && loginMessage !== '' ?
                    /**
                     *  jezeli jesteśmy w okienku logowania i loginMessage nie jest pustym stringiem
                     *  wyświetlanie wiadomości o niepoprawych danych
                     * **/
                    <label
                        style={{color: 'red'}}>
                        {loginMessage}
                    </label>
                    : null
            }
            {
                !isSignInForm && registerMessage !== '' ?
                    /**
                     *  jezeli jesteśmy w okienku rejestracji i loginMessage nie jest pustym stringiem
                     *  wyświetlanie wiadomości o niepoprawych danych czyli jak np uzytkownik o takim loginie istnieje
                     * **/
                    <label
                        style={{color: 'red'}}>
                        {registerMessage}
                    </label>
                    : null
            }
            <div className='input-container'>
                <label>Login</label>
                <input
                    placeholder={'👤 set login'}
                    type='text' name='login'
                    required
                    value={login}
                    onChange={event => setLogin(event.target.value)}/>
            </div>
            {
                /**
                 * placeholder={'👤 set login'}
                 * jezeli input jest pusty wyświetla się👤 set login
                 * required - jest niezbędny do wypełnienia mozna postawić warunki np minLength={10}
                 *
                 * on change wychwytuje nam czy napisaliśmy cos w inpucie
                 *  event.target.value string z danego inputu,
                 * dzieki setLogin() zostaje przypisany jako nowy login
                 * tak samo z mailem i passwordem
                 *
                 * typ inputu email - dba o to aby tekst zawierał @
                 * typ inputu password - chroni nasze hasło i wyświetla ****
                 * **/

                isSignInForm ?
                    null :
                    <div className='input-container'>
                        <label>Email </label>
                        <input
                            placeholder={'✉ set email address'}
                            type='email' name='email'
                            required minLength={5}
                            value={email}
                            onChange={event => setEmail((event.target.value))}/>

                    </div>
            }
            <div className='input-container'>
                <label>Password </label>
                <input
                    placeholder={'🔑 set password'}
                    type='password' name='password'
                    required minLength={5}
                    value={password}
                    onChange={event => setPassword(event.target.value)}/>
            </div>
            {
                /**
                 *  isSignInForm ? null - w przypadu true nie wyświetlaj nic
                 * **/
                isSignInForm ?
                    null :
                    <div className='input-container'>
                        <label>Confirm Password </label>
                        <input
                            placeholder={'🔑 confirm password'}
                            type='password' name='password'
                            required minLength={5}
                            value={confirmPassword}
                            onChange={event => setConfirmPassword(event.target.value)}/>
                    </div>
            }
            {
                isSignInForm ?
                    null :
                    <div
                        className='input-container'
                        style={{flexDirection: 'row'}}
                    >
                        <input
                            type={'checkbox'}
                            onClick={() => setUserUnderstandPolity(!userUnderstandPolity)}
                            required={true}
                        ></input>
                        <p style={{fontSize: '10px'}}>I understand the polity of the app</p>

                    </div>
            }
            <div className='button-container'>
                <button
                    type={'submit'}
                >
                    {
                        isSignInForm ?
                            'Submit'
                            : 'Create account'
                    }
                </button>
            </div>
            {
                isSignInForm ?
                    <a
                        style={
                            {
                                cursor: 'pointer',
                                backgroundColor: isHoverRegister ? 'grey' : ''
                            }
                        }

                        onClick={() => setSignInForm(false)}
                        onMouseEnter={() => setIsHoverRegister(true)}
                        onMouseLeave={() => setIsHoverRegister(false)}
                    >
                        I want to register!
                    </a>
                    : null
            }
        </form>
    )

}

export class LoginOrRegister extends Component<any, any> {
    userService: UserService

    constructor(props: any) {
        super(props)

        this.userService = props.userService

        // this.state = {
        //     login: ''
        // }
        /**
         * tworzenie loginu z wartością pusty string
         * **/
    }

    // setLogin(login: String) {
    //     this.setState({
    //         login: login
    //     })
    // }
    /**
     * edycja loginu
     * **/


    /**
     * #2
     * jeżeli chciałbym stworzyć cały komponent w tej klasie zamiast funkcji LoginNavigation w constructor,
     * przykład jakby to wyglądało powyżej
     * moim zdaniem useState wygląda i utrzymuje się dużo lepiej tak jak w funkcji LoginNavigation
     * **/

    render() {
        return (
            <LoginNavigation userService={this.userService}/>
        )
    }
}