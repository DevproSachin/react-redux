import {Add_to_cart} from '../constants'
export const addtocart = (data) =>{
  return{
       type:Add_to_cart,
       data:data
  }
}