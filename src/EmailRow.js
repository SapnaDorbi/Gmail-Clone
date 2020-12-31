import { IconButton } from '@material-ui/core';
import { LabelImportantOutlined, StarBorderOutlined } from '@material-ui/icons';
import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import LabelImportantOutlinedIcon from '@material-ui/icons/LabelImportantOutlined';
import './EmailRow.css';
import { useHistory } from 'react-router-dom';

const EmailRow = ({ id, title, subject, description, time }) => {
    const history = useHistory();
    return (
        <div onClick={() => history.push('/mail')} className="emailRow">
            <div className="emailRow__options">
                <Checkbox />
                <IconButton>
                    <StarBorderOutlinedIcon />
                </IconButton>
                <IconButton>
                    <LabelImportantOutlinedIcon />
                </IconButton>
            </div>

            <h3 className="emailRow__title">
                {title}
            </h3>

            <div className="emailRow__message">
                <h4>
                    {subject}{"  "}
                    <span className="emailRow__description">-{description}</span>
                </h4>
            </div>

            <div className="emailRow__time">
                {time}
            </div>
        </div>
    );
};

export default EmailRow;