import React from 'react';
import { useTranslation } from 'react-i18next';

export const LanguageSelector = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = event => {
        i18n.changeLanguage(event.target.value);
    };

    return (
        <div className="LanguageSelector-Conteiner" onChange={changeLanguage}>
            <div className="Lang-Title">
                <p>{t('home_lang_title')}</p>
            </div>
            <div className="Lang-Opts">
                <div className="Lang-Opts-En">
                    <input
                        type="radio"
                        value="en"
                        name="language"
                        defaultChecked
                    />
                    {t('home_lang_en')}
                    <span className="flag flag-icon flag-icon-us"></span>
                </div>
                <div className="Lang-Opts-Es">
                    <input type="radio" value="es" name="language" />{' '}
                    {t('home_lang_es')}
                    <span className="flag flag-icon flag-icon-es"></span>
                </div>
            </div>
        </div>
    );
};
