import React from 'react'

export function EditUserInformation(props: any) {
    const userService = props.userService


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
        </div>
    )
}