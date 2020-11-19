import React,{useState} from 'react';
import {ButtonGroup,ToggleButton} from 'react-bootstrap';
import styled from 'styled-components';

const radios = [
    { name: 'date', value: 'date' },
    { name: 'title', value: 'title' },
];

const SortContainer = styled.div`
    display: flex;
    max-width:60%;
    margin: 0 auto;
`;

const SortHeader = styled.h3`
    padding:0px 10px;
`

const Sort = (props) => {

    const [radioValue, setRadioValue] = useState('date');

    const sortError = (e) => {
        setRadioValue(e);
        props.filterError(e);
    }

    return(
        <SortContainer>
            <SortHeader>Sort By</SortHeader>
            <ButtonGroup toggle>
                {radios.map((radio, idx) => (
                <ToggleButton
                    key={idx}
                    type="radio"
                    variant="secondary"
                    name="radio"
                    value={radio.value}
                    checked={radioValue === radio.value}
                    onChange={(e) => sortError(e.currentTarget.value)}
                >
                    {radio.name}
                </ToggleButton>
                ))}
            </ButtonGroup>
        </SortContainer>
    )

}

export default Sort;