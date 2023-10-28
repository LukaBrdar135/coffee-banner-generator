import React from 'react';
import './BannerPreview.css';
import { useStepStore } from '../../store/useStepStore';

export const BannerPreview: React.FC = () => {
    const { bannerTitle, bannerDescription, selectedCoffee, bannerWidth, showImage } = useStepStore();

    return (
        <div className="preview">
            <h4 className="preview__title">Preview:</h4>
            <div className="preview__holder">
                <div className="preview__banner" style={{ width: bannerWidth }} id="banner-preview">
                    <div className="preview__banner__title">{bannerTitle}</div>
                    <div className="preview__banner__content">
                        <div className="preview__banner__content__description" style={{ width: showImage ? '' : '100%' }}>
                            {bannerDescription}
                        </div>
                        {showImage && (
                            <div
                                className="preview__banner__content__image"
                                style={{ background: `url(${selectedCoffee?.value.image}) no-repeat center /cover` }}
                            ></div>
                        )}
                    </div>
                    <div className="preview__banner__ingeredients">
                        {selectedCoffee?.value.ingredients.map((ingredient: string) => (
                            <div key={ingredient} className="preview__banner__ingeredients__ingredient ">
                                {ingredient}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
