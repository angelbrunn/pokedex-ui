import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const Modal = props => {
    const { t } = useTranslation();
    const { className, modalRef, metaData } = props;
    const [abilities, setAbilities] = useState([]);

    useEffect(() => {
        setAbilities(metaData.abilities);
    }, []);

    return (
        <div ref={modalRef} className={`${className} modal`}>
            <div className="Modal-Conteiner">
                <div className="form-group">
                    <div className="Content">
                        <label className="Title" data-testid="modal-title">
                            {t('modal_title_firts')} {metaData.name}{' '}
                            {t('modal_title_second')}
                        </label>
                        <select multiple className="form-control Avilities">
                            {abilities.map((ability, index) => (
                                <option key={index} className="OptionName">
                                    {ability.ability.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="Poke-Helper" data-testid="modal-helper">{t('modal_helper')}</div>
                </div>
            </div>
        </div>
    );
};
