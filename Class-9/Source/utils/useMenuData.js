import {useState,useEffect} from 'react';
import {RESTAURANT_MENU_API} from '../Config'

const useMenuData = (resId) =>{
       const [menuData,setMenuData] = useState(null);
    useEffect(() => {
        getReturantDeatail();
    },[]);
    
    
    
    async function getReturantDeatail() {
            const data = await fetch(RESTAURANT_MENU_API+resId)
            const json = await data.json();
            setMenuData(json);
           console.log(RESTAURANT_MENU_API+resId);
    }
    

    return menuData;

}


export default useMenuData;