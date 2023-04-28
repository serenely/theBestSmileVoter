import './Smile.css'

const Smile = ({smile,upRating,downRating}) => {
  return(
    <>
      {smile.name}
      <div className='div__smile__div'>
        <button className='btn' onClick={ downRating}>-</button>
        <div>{smile.counter}</div>
        <button className='btn' onClick={ upRating}>+</button>
      </div>
    </>
    )
}

export default Smile;

