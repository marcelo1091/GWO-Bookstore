import React, { useState, useEffect } from "react"

function PaymentForm(props) {

    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        city: '',
        zipCode: ''
    })

    const [orderConfirmButtonClass, setOrderConfirmButtonClass] = useState('disabled')

    const isValid = () => {
        console.log(Object.values(props.userData).filter(x => x).length)
        if (Object.values(errors).filter(x => x).length || Object.values(props.userData).filter(x => x).length < 4)
            setOrderConfirmButtonClass('disabled')
        else
            setOrderConfirmButtonClass('')
    }

    useEffect(() => {
        if (props.userData.first_name.length < 5 && props.userData.first_name)
            setErrors(errors => ({ ...errors, firstName: 'Za krótkie imię, powinno zawierać przynajmniej 5 znaków.' }))
        else
            setErrors({ ...errors, firstName: '' })

        isValid()
    }, [props.userData.first_name])

    useEffect(() => {
        if (props.userData.last_name.length < 5 && props.userData.last_name)
            setErrors({ ...errors, lastName: 'Za krótkie nazwisko, powinno zawierać przynajmniej 5 znaków.' })
        else
            setErrors({ ...errors, lastName: '' })

        isValid()
    }, [props.userData.last_name])

    useEffect(() => {
        if (props.userData.city.length < 5 && props.userData.city)
            setErrors({ ...errors, city: 'Za krótka nazwa miasta, powinna zawierać przynajmniej 5 znaków.' })
        else
            setErrors({ ...errors, city: '' })

        isValid()
    }, [props.userData.city])

    useEffect(() => {
        if (!props.userData.zip_code.match(/^\d\d-\d\d\d$/) && props.userData.zip_code)
            setErrors({ ...errors, zipCode: 'Kod pocztowy powinien mieć format 00-000' })
        else
            setErrors({ ...errors, zipCode: '' })

        isValid()
    }, [props.userData.zip_code])


    useEffect(() => {
        isValid()
    }, [errors.firstName, errors.lastName, errors.city, errors.zipCode])

    return (
        <form onSubmit={props.handleSubmit}>
            <div className="input">
                <label>Imię</label>
                <input onInput={e => props.setUserData({ ...props.userData, first_name: e.target.value })} type="text" name="first_name" />
                <label className="error">{errors.firstName}</label>
            </div>
            <div className="input">
                <label>Nazwisko</label>
                <input onInput={e => props.setUserData({ ...props.userData, last_name: e.target.value })} type="text" name="last_name" />
                <label className="error">{errors.lastName}</label>
            </div>
            <div className="input">
                <label>Miejscowość</label>
                <input onInput={e => props.setUserData({ ...props.userData, city: e.target.value })} type="text" name="city" />
                <label className="error">{errors.city}</label>
            </div>
            <div className="input">
                <label>Kod Pocztowy</label>
                <input onInput={e => props.setUserData({ ...props.userData, zip_code: e.target.value })} type="text" name="zip_code" placeholder="00-000" />
                <label className="error">{errors.zipCode}</label>
            </div>
            <div className="input submit">
                <input className={orderConfirmButtonClass} type="submit" name="Sign Up" value="ZAMAWIAM I PŁACĘ" />
            </div>
            <div className="input">
                <label className="error">{props.error}</label>
            </div>
        </form>
    )
}

export default PaymentForm