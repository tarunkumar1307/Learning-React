const Card = (props) => {
    return (
        <div>
            <a href={props.user.url} target="_blank">
                <img className='h-52 w-52 rounded' src={props.user.download_url} alt="" />
                <h2 className=''>{props.user.author}</h2>
            </a>
        </div>
    )
}

export default Card