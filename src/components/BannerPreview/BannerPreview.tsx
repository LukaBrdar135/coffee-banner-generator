import React from 'react';
import './BannerPreview.css';
import { useStepStore } from '../../store/useStepStore';

export const BannerPreview: React.FC = () => {
    const { bannerTitle, bannerDescription, selectedCoffee, bannerWidth } = useStepStore();

    return (
        <div className="preview">
            <h4 className="preview__title">Preview:</h4>
            <div className="preview__holder">
                <div className="preview__banner" style={{ width: bannerWidth }} id="banner-preview">
                    <div className="preview__banner__title">{bannerTitle}</div>
                    <div className="preview__banner__content">
                        <div className="preiview__banner__content__description">{bannerDescription}</div>
                        <div
                            className="preview__banner__content__image"
                            style={{ background: `url(${selectedCoffee?.value.image}) no-repeat center /cover` }}
                        ></div>
                    </div>
                    <div className="preview__banner__ingeredients">
                        {selectedCoffee?.value.ingredients.map((ingredient: string) => (
                            <div key={ingredient} className="ingredient">
                                {ingredient}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
