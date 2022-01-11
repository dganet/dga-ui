import React, {
    useState,
    ChangeEvent,
    useEffect,
    SetStateAction,
    Dispatch
} from 'react'
import { ObjectSchema, ValidationError } from 'yup'

enum FormStatus {
    IDLE = 'IDLE',
    SUBMITTED = 'SUBMITTED',
    SUBMITTING = 'SUBMITTING',
    COMPLETED = 'COMPLETED'
}

interface useFormReturnType<F> {
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void
    setFormStatus: Dispatch<SetStateAction<FormStatus>>
    setFieldsErrors: Dispatch<SetStateAction<F | undefined>>
    onFormSubmit: OnFormSubmit<F>
    setFields: Dispatch<React.SetStateAction<F>>
    fields: F
    fieldsErrors: F | undefined
    formStatus: FormStatus
}

interface useFormProps<T> {
    schema: ObjectSchema<any>
    fieldsInitialValue: T
}

interface OnFormSubmit<F> {
    (calback: (data: F, e?: React.BaseSyntheticEvent) => void): (
        e?: React.BaseSyntheticEvent
    ) => Promise<void>
}

/**
 * a function to check if the object is empty
 * @param {errors} errors an object
 * @return {boolean} true if it's empty
 */
const isEmptyObject = (errors: any): boolean =>
    errors && Object.keys(errors).length === 0 && errors.constructor === Object

/**
 * a hook to be used in forms based on yup
 * @param {<F>} GenericTypes type of fields
 * @param {useFormProps}  useApiProps props to perform an request
 * @return {handleChange, setFormStatus, setFieldsErrors, fields, FieldsErrors, formStatus}
 * handleChange is a function to manipulate state of inputs
 * setFormStatus is a function to keep the state of the form
 * setFieldsErrors is a function to set errors from an API for example
 * fields values of the inputs
 * fieldsErrors array of values
 * formStatus status of the form
 */
const useForm = <F,>(props: useFormProps<F>): useFormReturnType<F> => {
    //destroy props
    const { schema, fieldsInitialValue } = props

    //Create fields, fieldsErrors, formStatus
    //to store the input(fields) values,
    //to store input errors(FieldsErrors) values
    //to store status(fromStatus) values
    const [fields, setFields] = useState<F>(fieldsInitialValue)
    const [fieldsErrors, setFieldsErrors] = useState<F | undefined>(undefined)
    const [formStatus, setFormStatus] = useState<FormStatus>(FormStatus.IDLE)

    //a method to handle input changes
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const input = e.target
        setFields(prev => ({ ...prev, [input.name]: input.value }))
    }

    useEffect(() => {
        //an method to validate fields and store fieldsErrorss according to schema
        const validateFields = async () => {
            try {
                await schema.validate(fields, { abortEarly: false })
                setFieldsErrors(undefined)
            } catch (e) {
                const errors: any = {}
                ;(e as ValidationError).inner.forEach(err => {
                    if (err.path) errors[err.path] = err.message
                })
                setFieldsErrors(isEmptyObject(errors) ? undefined : errors)
            }
        }
        //if the form was submitted validatefields
        if (formStatus === FormStatus.SUBMITTED) validateFields()
    }, [fields, formStatus])

    const onFormSubmit: OnFormSubmit<F> = callback => async e => {
        callback(fields, e)
    }

    return {
        handleChange,
        setFormStatus,
        setFieldsErrors,
        onFormSubmit,
        setFields,
        fields,
        fieldsErrors,
        formStatus
    }
}

export { useForm, FormStatus }
