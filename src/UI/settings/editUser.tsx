import React from 'react'

export function EditUserInformation(props: any) {
    const userService = props.userService

    const deleteUser = (e: any) => {
        e.preventDefault()

        userService.removeUserByLogin()
    }

    /**
     * funkcja do wyświetlania komponentu z możliwościa edycji danych o uzytkowniku
     * **/

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
                />
                <button
                    type={'submit'}
                >
                    Edit Email
                </button>
            </form>
            <label> Set password</label>
            <form
                className={'editor-container__nav'}
            >
                <div className={'editor-container__nav'}
                     style={{flexDirection: 'column', border: 'none', width: '200px'}}>
                    <input
                        type={'password'}
                        placeholder={'Old password'}
                        required
                    />
                    <input
                        type={'password'}
                        placeholder={'New password'}
                        required
                    />
                    <input
                        type={'password'}
                        placeholder={'Confirm new password'}
                        required
                    />
                </div>
                <button
                    type={'submit'}
                >
                    Save password
                </button>
            </form>
            <form
                className={'editor-container__nav'}
            >
                <input type={'checkbox'} required={true}></input>
                <span>You will delete user</span>
                <button
                    type={'submit'}
                    onClick={e => deleteUser(e)}
                >
                    delete user
                </button>
            </form>
        </div>
    )
}