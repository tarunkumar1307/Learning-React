const Pagination = (props) => {
  return (
        <div className='flex justify-center gap-4 p-10'>
        <button
          style={{ opacity: props.index == 1 ? 0.5 : 1 }}
          className='bg-amber-400 px-6 py-2 rounded active:scale-95 text-xl font-semibold text-black'
          onClick={() => {
            if (props.index > 1) {
              props.setIndex(props.index - 1)
              props.setUserData([])
            }
          }}>
          Prev
        </button>
        <h3 className='p-1 text-2xl top-1/2 left-1/2'> {props.index} </h3>
        <button
          className='bg-amber-400 px-6 py-2 rounded active:scale-95 text-xl font-semibold text-black'
          onClick={() => {
            props.setIndex(props.index + 1)
            props.setUserData([])
          }}>
          Next
        </button>
    </div>
  )
}

export default Pagination