import React,{useState, useEffect,useRef} from 'react';
import axios from 'axios';
import style from 'styled-components';

import Message from '../Components/Message/Message';
import Sort from '../Components/Sort/Sort';
import Form from '../Components/Form/Form';

const Padding = style.div`
    padding:20px 0px;
`;

const Main = () => {

    const [errors,setErrors] = useState([]);
    const componentIsMounted = useRef(true);

    const handleAddError = (newError) => {
        setErrors(errors => [...errors, newError]);
    }

    const handleFilterErrors = (value) => {
        const sortedErrors = [...errors].sort((a,b) =>  a[value].localeCompare(b[value]));
        setErrors(sortedErrors);
    }
    
    //some cleanup
    useEffect(() => {
        return () => {
            componentIsMounted.current = false;
        };
    }, []);

    useEffect(() => {
        const fetchErrors = async () => {
            await axios.get('http://localhost:3002/messages')
            .then(res => {
                if (componentIsMounted.current) {
                    setErrors(res.data);
                }
            })
            .catch(error => {
                console.log("error: " + error);
            });
        }
        fetchErrors()
    },[]);

    return(
        <Padding>
            <Sort filterError={handleFilterErrors}/>
            <ul style={{padding:'0px'}}>
            {errors.map((data,index) =>
                <Message key={index} data={data} /> 
                )
            }
            </ul>
            <Form addError={handleAddError} />
        </Padding>
    )
}

export default Main;