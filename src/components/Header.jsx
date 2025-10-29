export const Header = () => {
    return (
        <div>
            <div className="container">

                <div className="flex items-center justify-between pt-[57px] pb-[106px]">

                    <div className="flex  gap-3 items-center">
                        <span>
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="20" cy="20" r="20" fill="#FF7235" />
                                <path d="M18.176 26H14.384L18.728 19.904L14.648 13.832H18.536L20.504 17.456L22.688 13.832H26.528L22.16 19.928L26.216 26H22.4L20.36 22.352L18.176 26Z" fill="white" />
                            </svg>
                        </span>
                        <p>pense</p>
                    </div>

                    <ul className="flex gap-10 font-normal">
                        <li>
                            <a href="#" >Features</a>
                        </li>
                        <li>
                            <a href="#">About us</a>
                        </li>
                        <li>
                            <a href="#">Pricing</a>
                        </li>
                        <li>
                            <a href="#">Feedback</a>
                        </li>
                    </ul>

                    <div>
                        <a href="#" className="border-2 p-4 rounded-2xl text-mian_color">Request a demo</a>
                    </div>
                </div>

            </div>
        </div>
    )
}