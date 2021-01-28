import React, {useState} from 'react';

const Form = props => {

const [member, setMember] = useState({
    name: " ",
    email: " ",
    role: " ",
});

const handleChanges = event => {
    setMember ({ ...member, [event.target.name]: event.target.value});
    console.log(member);
}

const submitForm = event => {
    event.preventDefault();
    props.addNewMember(member);
    setMember({name: '', email: '', role: ''})
}

return (
    <form onSubmit={submitForm}>
        <label htmlFor='name'>Name:</label>
        <input
            id="name"
            type="text"
            name='name'
            onChange={handleChanges}
            value={member.name}
        />
        <label htmlFor='email'>Email:</label>
            <input
                id='email'
                type='email'
                name='email'
                onChange={handleChanges}
                value={member.email}
            />
            <label htmlFor='role'>Role:</label>
            <input
                id='role'
                type='text'
                name='role'
                onChange={handleChanges}
                value={member.role}
            />
        <button type="submit"> Add Team Member</button>
       </form>
    )

}
 export default Form
