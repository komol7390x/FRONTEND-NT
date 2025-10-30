import { news } from "../static/data"

export const Header = () => {
    return (
        <div className="container">
            <ul className="flex flex-wrap justify-between">
                {news.map((item) => (
                    <li className="w-70 border-2 p-2 my-5 rounded-2xl">
                        <img src={item.image} alt={item.title} />
                        <div className="mt-3">
                            <h1>Title: {item.title}</h1>
                            <p>Category: {item.category}</p>
                            <p>Author: {item.author}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}