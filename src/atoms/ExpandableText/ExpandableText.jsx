import React, { useState } from 'react';
import { useNavigate } from 'react-router';

import { BACK, SHOW_LESS, SHOW_MORE, TEXT_DESCRIPTION } from '../../atoms/TextExports/TextExports';

import Card from '../../atoms/Card/Card';
import ReusableButton from '../../atoms/Buttons/ReusableButton';

const ExpandableText = () => {
    const [expanded, setExpanded] = useState(false);
    const navigate = useNavigate()

    const toggleExpand = () => {
        setExpanded(prevExpanded => !prevExpanded);
    };

    const goBack = () => {
        navigate(-1)
    }

    const renderText = () => {
        if (expanded) {
            return (
                <div>
                    {TEXT_DESCRIPTION}
                    <span onClick={toggleExpand} style={{ color: 'blue', cursor: 'pointer' }}>{SHOW_LESS}</span>
                </div>
            );
        }
        return (
            <div>
                {TEXT_DESCRIPTION.slice(0, 100)}
                <span onClick={toggleExpand} style={{ color: 'blue', cursor: 'pointer' }}>{SHOW_MORE}</span>
            </div>
        );
    };

    return (
        <div style={{ marginTop: '150px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <ReusableButton style={{ marginBottom: '50px' }} onClick={goBack}>{BACK}</ReusableButton>
            <Card>{renderText()}</Card>
        </div>
    );
};

export default ExpandableText;
