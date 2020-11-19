import React,{useState} from 'react';
import { Form,Button } from 'react-bootstrap';

const style = {
    width:'700px',
    padding:'0px 15px'
}


const FormComponent = (props) => {
    
     const InputChange = e => {
        const {name,value} = e.target;
        setNewError({...newError, [name]:value})
    }

    const addError = event => {
        const error = newError
        error.date = new Date().toLocaleString();
        props.addError(error);
        event.preventDefault();
    }

    const [newError,setNewError] = useState({title:"",date:"",body:""});

    return(
        <Form onSubmit={(newError) => addError(newError)} style={style}>
            <Form.Group controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" name="title" onChange={InputChange} />
            </Form.Group>
            <Form.Group controlId="body">
                <Form.Label>Message</Form.Label>
                <Form.Control name="body" as="textarea" rows={3} onChange={InputChange} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default FormComponent;