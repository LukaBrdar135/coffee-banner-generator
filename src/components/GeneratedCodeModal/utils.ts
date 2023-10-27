import { SingleValue } from 'react-select';
import { OptionsType } from '../StepOne/types';

export const getGeneratedCode = (selectedCoffee: SingleValue<OptionsType>, bannerWidth: string, bannerTitle: string, bannerDescription: string) => {
    return `<style>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap');

   .banner {
       width: ${bannerWidth};
       border: 1px solid #9a9a9f;
       font-family: Montserrat;
   }

   .title {
       background: #424243;
       color: #ffffff;
       font-size: 18px;
       font-weight: 500;
       padding: 14px 24px;
   }

   .description{
       display: flex;
       padding: 20px;
   }

   .description__text{
       width: 60%
   }

   .description__image {
       background: url(${selectedCoffee?.value.image}) no-repeat center /cover;
       width: 40%;
   }

   .ingredients {
       padding: 0px 24px 24px 24px;
       display: flex;
       flex-wrap: wrap;
       gap: 8px;
   }

   .ingredient {
       padding: 4px 18px;
       border-radius: 8px;
       background: rgba(17, 160, 219, 0.3);
       font-size: 13.7px;
       font-weight: 400;
       line-height: 19.571px;
   }
</style>

<div class="banner">
   <div class="title">
       ${bannerTitle}
   </div>
   <div class="description">
       <p class="description__text">${bannerDescription}</p>
       <div class="description__image"></div>
   </div>
   <div class="ingredients">
       ${selectedCoffee?.value.ingredients.map((ingredient: string) => `<div class="ingredient">${ingredient}</div>`).join('\n\t\t')}
   </div>
</div>`;
};
