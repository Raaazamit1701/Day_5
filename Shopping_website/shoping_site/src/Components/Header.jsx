import { useState } from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";


const Header = () => {
  const [showAccountOptions, setShowAccountOptions] = useState(false);
  const [showCurrencyOptions, setShowCurrencyOptions] = useState(false);
  const [showLanguageOptions, setShowLanguageOptions] = useState(false);
  const[Stayatanavabout ,setStayAtNavabout]=useState(false);
  const[Stayatanavcontact ,setStayAtNavContact]=useState(false);
  const[Stayatanavhelp ,setStayAtNavHelp]=useState(false);
  const[Stayatanavfaq ,setStayAtNavFaq]=useState(false);


  return (
    <header className="h-12 w-scree bg-gray-300 text-black flex justify-around align-middle">
      <div className="container mx-auto flex justify-around items-center">
        <nav>
          <ul className="flex space-x-4">
            <li className='font-bold'><a href="#" className={`rounded-md hover:text-green-900 h-12 w-20 ${Stayatanavabout ?  'bg-green-500' : 'bg-gray-300' }`} onClick={()=>
                {
                    setStayAtNavabout(!Stayatanavabout);
                if(Stayatanavcontact){
                    setStayAtNavContact(false);
                }
                if(Stayatanavhelp){
                    setStayAtNavHelp(false)
                }
                if(Stayatanavfaq){
                    setStayAtNavFaq(false)
                }

                }
               }>About</a></li>
             <li className=' font-bold'><a href="#" className={`rounded-md hover:text-green-900 h-12 w-20 ${Stayatanavcontact? 'bg-green-500' : 'bg-gray-300' }`} onClick={()=>
             {
                setStayAtNavContact(!Stayatanavcontact);
                if(Stayatanavabout){
                    setStayAtNavabout(false);
                }
                if(Stayatanavhelp){
                    setStayAtNavHelp(false)
                }
                if(Stayatanavfaq){
                    setStayAtNavFaq(false)
                }

             }
                }>Contact</a></li>
             
            <li className=' font-bold '><a href="#" className={ ` rounded-md hover:text-green-900 h-12 w-20 ${Stayatanavhelp? 'bg-green-500' : 'bg-gray-300' }`} onClick={()=>
            {
                setStayAtNavHelp(!Stayatanavhelp)
                if(Stayatanavabout){
                    setStayAtNavabout(false);
                }
                if(Stayatanavcontact){
                    setStayAtNavContact(false);
                }
               
                if(Stayatanavfaq){
                    setStayAtNavFaq(false)
                }

            }
            }
               >Help</a></li>

            
            <li className=' font-bold'><a href="#" className={`rounded-md hover:text-green-900 h-12 w-20 ${Stayatanavfaq? 'bg-green-500' : 'bg-gray-300' }`} onClick={()=>
                {
                    setStayAtNavFaq(!Stayatanavfaq)
                    if(Stayatanavabout){
                        setStayAtNavabout(false);
                    }
                    if(Stayatanavcontact){
                        setStayAtNavContact(false);
                    }
                    if(Stayatanavhelp){
                        setStayAtNavHelp(false)
                    }
                }
                }>FAQs</a></li> 
          </ul>
        </nav>
        
     
        <div className="flex space-x-4">
         
          <div className="relative flex justify-around align-middle ">
            <button className= " rounded  bg-white h-8 w-28 flex justify-center align-middle font-bold border-x-slate-300 hover:text-green-900 " onClick={() =>  
                {
                    setShowAccountOptions(!showAccountOptions);
                    if(showCurrencyOptions){
                        setShowCurrencyOptions(false);
                    }
                    if(showLanguageOptions){
                        setShowLanguageOptions(false);
                    }
                }
            }>My Account <span><MdKeyboardArrowDown /></span>
                            </button>
            <ul className={`absolute right-0 mt-10  w-36 shadow-md rounded-md bg-white ${showAccountOptions ? '' : 'hidden'}`}>
              <li className='  font-bold border hover:bg-yellow-400 '><a href="#">Log In</a></li>
              <li className=' font-bold border hover:bg-yellow-400'><a href="#">Log Out</a></li>
            </ul>
          </div>
          
      
          <div className="relative">
            <button className="bg-white rounded  flex h-8 w-18 font-bold border-black hover:text-green-900" onClick={() =>
                {
                    setShowCurrencyOptions(!showCurrencyOptions)
                
                    if(showAccountOptions){
                        setShowAccountOptions(false);
                    }
                    if(showLanguageOptions){
                        setShowLanguageOptions(false);
                    }
                }
            }>USD <MdKeyboardArrowDown /> <img src="" alt="" /> </button>
            <ul className={`absolute right-0 mt-2 w-36 bg-white shadow-md rounded-md ${showCurrencyOptions ? '' : 'hidden'}`}>
              <li className=' font-bold border hover:bg-yellow-400 '><a href="#">EUR</a></li>
              <li className=' font-bold border hover:bg-yellow-400 '><a href="#">GBP</a></li>
              <li className='font-bold border hover:bg-yellow-400 '  ><a href="#">CAD</a></li>
            </ul>
          </div>
          
          {/* Language */}
          <div className="relative">
            <button className="bg-white flex h-8 w-18 rounded  font-bold  hover:text-green-900" onClick={() =>
                {
                    setShowLanguageOptions(!showLanguageOptions);
                    if(showCurrencyOptions){
                        setShowCurrencyOptions(false);
                    }
                    if(showAccountOptions){
                        setShowAccountOptions(false);
                    }
                    
                } }>EN <MdKeyboardArrowDown /></button>
            <ul className={`absolute right-0 mt-2 w-36 bg-white shadow-md rounded-md ${showLanguageOptions ? '' : 'hidden'}`}>
              <li className=' font-bold border hover:bg-yellow-400 '>FR</li>
              <li className=' font-bold border hover:bg-yellow-400 '>AR</li>
              <li className=' font-bold border hover:bg-yellow-400 '>RU</li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

