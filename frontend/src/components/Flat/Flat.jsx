export const Flat = ({value}) => {
    const {title, description, rooms, photos} = value
    return(
        <li>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>{rooms}</p>
            <img width = "20" alt="flat" src = {photos[0]}/>
        </li>
    )
}