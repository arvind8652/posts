import { Button } from "react-bootstrap";

export const maxChar = (data,maxCount)=>{
    return data?.length > maxCount? `${data.substr(0,maxCount)}...`:data
}

export const getRandomColor= ()=> {
  let letters = 'BCDEF'.split('');
  let color = '#';
  for (let i = 0; i < 6; i++ ) {
      color += letters[Math.floor(Math.random() * letters.length)];
  }
  return color;
  }

  export const genericSubmitButton =() =>{
    return(<Button variant='primary' type='submit'>
          Submit
        </Button>)
  }