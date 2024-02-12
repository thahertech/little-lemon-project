import React from 'react'
import "../styles/TestimonialsStyles.css" //???
import User1 from "../assets/User1.jpg"
import User2 from "../assets/User2.jpg"
import User3 from "../assets/User3.jpg"
import User4 from "../assets/User4.jpg"
import { MdDeliveryDining } from "react-icons/md"
import { NavLink } from 'react-router-dom'

const TestimonialsCard = () => {
    const TestimonialRatings = [
        {
            image: User1,
            title: "Simon Glock",
            rating: "8.9",
            review: "Booking a table at Little Lemon was a breeze! The user-friendly form made it simple to pick the perfect date and time. The available slots updated seamlessly, ensuring we got our preferred time. Great experience!",
            order: "Order delivery"
        },
        {
            image: User2,
            title: "Peter Ranch",
            rating: "9.4",
            review: "Effortless reservation process! The page was intuitive, and the real-time updates on available times were a game-changer. Loved the smooth navigation and user-friendly design. Can't wait to dine at Little Lemon again!",
            order: "Order delivery"
        },
        {
            image: User3,
            title: "Kelly Who",
            rating: "8.6",
            review: "Little Lemon's reservation system is top-notch! The form was clear, and I appreciated the personalized touch with occasion options. Real-time updates on available slots made planning our celebration stress-free. Highly recommended!",
            order: "Order delivery"
        },{
        image: User4,
        title: "Nien Yun",
        rating: "9.4",
        review: "Booking a table at Little Lemon was a delight. The web page made the process straightforward, and the dynamic time selection based on the chosen date was a thoughtful touch. Kudos to the team for a seamless reservation experience!",
        order: "Order delivery"
    }
    ]

    const TestimonialRatingsItems = TestimonialRatings.map(Rating => {
            const image = Rating.image;
            const title = Rating.title;
            const rating = Rating.rating;
            const review = Rating.review;
            const order = Rating.order;

            return (
                <div>
                    <div className="Testimonial-card-container">
                        <div className="image-container">
                                <img src={image} alt="Testimonial User" />
                            </div>
                        <div className="Testimonial-card-text">
                            <div className="Testimonial-card-title">
                                <h3>{title}</h3>
                                <h3 className="rating-tag">{rating}</h3>
                            </div>
                            <h4>{review}</h4>
                            <NavLink to="#">
                                <h4>
                                    {order}
                                    { <MdDeliveryDining size={30} style={{ color: "#333333", marginLeft: "10px",}} /> }
                                </h4>
                            </NavLink>
                        </div>
                    </div>
                </div>
            )
    })


  return (
    <div>
      <div className="Testimonial-card">
        {TestimonialRatingsItems}
      </div>
    </div>
  )
}

export default TestimonialsCard
