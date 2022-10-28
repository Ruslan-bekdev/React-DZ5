const Wall = ({symbol = '*',amount = 50}) => {
  let wall = '';
  for(let i = 0;i < amount;i++) wall+=symbol;
  return(
    <p className='text--center'>{wall}</p>
  )
}

export default Wall