import React from 'react'
import './blog.css'
import { BsArrowRightShort } from 'react-icons/bs';

//import
import img1 from '../../assets/image (7).jpg'
import img2 from '../../assets/image (9).jpg'
import img3 from '../../assets/image (11).jpg'
import img4 from '../../assets/image (15).jpg'

//using map method

const Posts = [
    {
        id: 1,
        postImage: img1,
        title: 'Beautiful Taverns of Alps, the frost-giant!',
        desc: 'this is the kingdom of Mountains filled with the golden misty rivers of frost and snow, winters are the chilled gatekeepers of this place. So do not forget to bring your jackets.'
    },
    {
        id: 2,
        postImage: img2,
        title: 'Desert of Atacama, the thirsty monster!',
        desc: 'this is the kingdom of Sand filled with the thorny cactus and acacia tree with no to less amount of fresh water, nights are enough to freeze you.'
    },
    {
        id: 3,
        postImage: img3,
        title: 'Pamukkale, the flathead terrace!',
        desc: 'this place is slightly off the beaten path, but this destination is well worth a visit thanks to its travertine terraces filled with warm hot springs. Not only is the scenery shockingly beautiful, but you can take a dip in the mineral-rich waters as the Romans once did. .'
    },
    {
        id: 4,
        postImage: img4,
        title: 'Banff National Park , the hell-paradise!',
        desc: 'this Canadian Rockies gem boasts plenty of serene places to enjoy nature, towering, snow-capped mountains and Lake Louise - a vibrantly colored body of clear water known for its glacier views.'
    },
]

const Blog = () => {
    return (
        <section className="blog container section">
            <div className="secContainer">
                <div className="secIntro">
                    <h2 className="secTitle">
                        Our Blogs
                    </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, aliquid.</p>
                </div>

                <div className="mainContainer grid">
                    {
                        Posts.map(({ id, postImage, title, desc }) => {
                            return (
                                <div className="singlePost grid">
                                    <div className="imgDiv">
                                        <img src={postImage} alt={title} />
                                    </div>

                                    <div className="postDetails">
                                        <h3>{title}</h3>
                                        <p>{desc}</p>
                                    </div>

                                    <a href="#" className='flex'>
                                        Read More
                                        <BsArrowRightShort className='icon' />
                                    </a>
                                </div>
                            )
                        })
                    }




                    {/* <div className="singlePost grid">
                        <div className="imgDiv">
                            <img src={img1} alt="Image Name" />
                        </div>

                        <div className="postDetails">
                            <h3>Title</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, quos.</p>
                        </div>

                        <a href="" className='flex'>
                            <BsArrowRightShort className='icon' />
                            Read More
                        </a>
                    </div> */}
                </div>
            </div>
        </section>
    )
}

export default Blog
