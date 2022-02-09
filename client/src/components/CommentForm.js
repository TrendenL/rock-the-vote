import React, { useState, useContext } from 'react'
import { IssueContext } from '../context/IssueProvider'

export default function CommentForm() {

    const { setComments, addComments } = useContext(IssueContext)

    const initInputs = {
        comment: "",
    }
    const [ inputs, setInputs ] = useState(initInputs)

    const { comment } = initInputs

    function handleChange(e){
        const { name, value } = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    }

    function handleSubmit(e){
        e.preventDefault()

        // addComment
        setInputs(initInputs)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                name="content"
                value={comment}
                placeholder="comment"
                onChange={handleChange}
                />
            </form>
        </div>
    )
}

