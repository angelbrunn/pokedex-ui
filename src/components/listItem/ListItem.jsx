import React, { useState } from 'react';
import { Modal } from '../../components/modal/Modal';
import { useTranslation } from 'react-i18next';

export const ListItem = props => {
    const { t } = useTranslation();
    const [dropdown, setDropdown] = useState('');

    const showDropdown = () => {
        setDropdown('show');
        document.body.addEventListener('click', closeDropdown);
    };

    const closeDropdown = event => {
        setDropdown('');
        document.body.removeEventListener('click', closeDropdown);
    };

    return (
        <>
            <div
                className="ListItem-Container"
                data-testid="list-item-show"
                data-toggle="tooltip"
                title={t('listItem_title')}
                onClick={showDropdown}
            >
                <div className="poke-thumbnail">
                    <img
                        className="ImgPoke"
                        data-testid="list-item-img"
                        src={`https://pokeres.bastionbot.org/images/pokemon/${props.poke.id}.png`}
                    />
                </div>
                <div className="poke-data" data-testid="list-item-data">
                    <p>{props.poke.name}</p>
                </div>
            </div>
            <Modal className={dropdown} metaData={props.poke} />
        </>
    );
};
