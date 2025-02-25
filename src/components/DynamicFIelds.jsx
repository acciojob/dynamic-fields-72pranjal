import React, {useState} from 'react'

const  DynamicFIelds = ()=> {
const [fields, setFields] = useState([{id: Date.now(), name: '', age: ''}])
  const handelSubmit = (e)=> {
    e.preventDefault();
    console.log({name: fields[0].name, age: fields[0].age})
  }
  const handleChange = (id, e)=> {
    const { name, value } = e.target;
    setFields(
      fields.map((field) =>
        field.id === id ? { ...field, [name]: value } : field
      )
    );
  }
  const addMore = ()=> {
    setFields([...fields, {id: Date.now(), name: '', age: ''}])
  }
  const removeField = (id)=> {
    setFields(fields.filter((field)=> field.id !== id))
  }
  return (
    <div>
        <form onSubmit={handelSubmit}> 
            {
                fields.map((field, index)=> {
                    return (
                        <div key={field.id}>
                            <input onChange={(e)=> handleChange(field.id, e)} type="text" name='name' id='name' placeholder='Name' />
                            <input onChange={(e)=> handleChange(field.id, e)} type="text" name='age' id='age' placeholder='Age' />
                            <button onClick={()=> removeField(field.id)}>Remove</button>
                        </div>
                    )
                })
            }
            <button onClick={addMore}>Add More..</button>
            <button type='submit'>Submit</button>

        </form>
    </div>
  )
}

export default DynamicFIelds