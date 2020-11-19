
import styled from 'styled-components';

const Li = styled.li`
    padding: 20px;
    border-bottom: 1px solid hsla(0,0%,100%,.15);
    list-style: none;
`;

const Title = styled.h3`
    text-transform: capitalize;
    font-size: 20px;
    font-weight: 300;
`

const Text = styled.div`
    color: hsla(0,0%,100%,.55);
    display:block;
    font-size: 15.8px;
`;

const Message = (props) => (
    <Li> 
        <Title>{props.data.title} </Title>
        <Text>{props.data.date}</Text>
        <Text>{props.data.body}</Text>
    </Li>
)

export default Message;