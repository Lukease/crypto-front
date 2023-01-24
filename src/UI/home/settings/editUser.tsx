import React, {useState} from 'react'

export function EditUserInformation(props: any) {
    const userService = props.userService
    const [userLogin, setUserLogin] = useState('')
    const [userEmail, setUserEmail] = useState('')

    const setLogin = () => {

    }

    return (
        <div className={'editor-container'}>
            <h1 className={'editor-container__title'}>Edit Profile</h1>
            <label> Set login</label>
            <form className={'editor-container__nav'}>
                <input
                    type={'text'}
                    placeholder={'New login'}
                    name='login'
                    required
                    onChange={(event) => setUserLogin(event.target.value)}
                />
                <button
                    type={'submit'}
                >
                    Edit login
                </button>
            </form>
            <label> Set email</label>
            <form className={'editor-container__nav'}>
                <input
                    type={'email'}
                    placeholder={'New email address'}
                    required
                    onChange={(event) => setUserEmail(event.target.value)}
                />
                <button
                    type={'submit'}

                >
                    Edit Email
                </button>
            </form>
        </div>
    )
}