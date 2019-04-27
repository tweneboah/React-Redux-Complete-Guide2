import React from 'react';

import LanguageContext from '../context/LanguageContext'

class Button extends React.Component {
  

  
    render() { 

       
        return ( 
            <button className='ui button primary'>
            <LanguageContext.Consumer>
                  
                  {(value) => {
                      return value === 'english' ? 'submit' : 'Vooleggen'
                  }}
            </LanguageContext.Consumer>

            </button>
           
         );
    }
}
 
export default Button;



//USING DEFAULT STYLE
// import React from 'react';

// import LanguageContext from '../context/LanguageContext'

// class Button extends React.Component {
  

//     static contextType = LanguageContext;
//     render() { 
// console.log(this.context)
//         const text = this.context === 'english' ? 'submit' : 'Voorleggen'
//         return ( 
//             <button className='ui button primary'>{text}</button>
//          );
//     }
// }
 
// export default Button;
