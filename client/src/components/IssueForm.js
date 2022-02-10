import React, { useState } from 'react'

export default function IssueForm(props) {
    const initInputs = {
        title: "",
        content: "",
    }

    const [ inputs, setInputs ] = useState(initInputs)

    const { postIssue } = props

    function handleChange(e){
    const {name, value} = e.target
    setInputs(prevInputs => ({
        ...prevInputs,
        [name]: value
    }))
    }

    function handleSubmit(e){
        e.preventDefault()
        postIssue(inputs)
        setInputs(initInputs)
    }
    
    const { title, content } = inputs
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="title"
                    value={title}
                    placeholder="Title"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="content"
                    value={content}
                    placeholder="Content"
                    onChange={handleChange}
                />
                <button>Post Issue</button>
            </form>
        </div>
    )
}