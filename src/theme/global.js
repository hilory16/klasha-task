import { createGlobalStyle } from 'styled-components';
import { override } from 'styles/override';
import { fontFamily } from './font';
import { normalize } from './normalize';
import { variables } from './variables';

const GlobalStyles = createGlobalStyle`
   ${normalize};
   ${variables};
   ${fontFamily};
   @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;600;700;800;900&display=swap');

   /**
   * We find it much easier to reason with border-box as the default box-sizing.
   */
   *,
   *::before,
   *::after {
      box-sizing: border-box;
   }
   html,body {
      margin: 0;
      min-height: 100%;
      height: 100%;
      padding: 0;
      overflow-x: hidden;
      -webkit-font-smoothing: antialiased;
      font-family: Poppins;
      background:${({ theme }) => theme.colors?.primary};
      color:${({ theme }) => theme.colors?.white};
   }
   body{
      display: flex;
      flex: 1 0 auto;
      flex-direction: column;
   }
   u,
   a {
      text-decoration:none;
      @supports (text-underline-offset: 0.4rem) {
         text-underline-offset: 0.4rem;
         padding-bottom: 0.1rem;
      }
      @supports not (text-underline-offset: 0.4rem) {
         text-underline-position: under;
      }
   }
   .link {
      color: ${({ theme }) => theme?.colors?.darkGreen};
      text-decoration: none;
      outline: none;
      font-weight: 500;
      font-size: 16px;
   }
   .form-control,
   .form-select {
      font-size:initial;
   }
   input,select{
      outline:none;
   }
   .widget_introduction {
      font-weight: 500;
      font-size: 24px;
      line-height: 120%;
    }
   ${override}
   .wrapper{
      // max-width:1120px;
      // margin-right:auto;
      // margin-left:auto;
      padding-right:30px;
      padding-left:30px;
   }
    ${({ theme }) => theme.mediaQueries.semiLarge}{
      .wrapper{
         max-width:991px;
      }
    }
`;

export { GlobalStyles };
