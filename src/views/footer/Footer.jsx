import React from 'react';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
    const { t } = useTranslation();
    return (
        <div className="Footer-Conteiner" data-testid="footer-cont">
            <h4>{t('footer_h4')}</h4>
        </div>
    );
};
