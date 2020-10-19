import React from "react";
import userImg from "../../../Images/im1.jpg";
import { BsStarFill } from "react-icons/all";
import "./UserReviews.css";

function UserReviewCard() {
	return (
		<div className="review-card-main-div">
			<div className="review-card-star-div">
				<BsStarFill className="review-card-star" />
				<BsStarFill className="review-card-star" />
				<BsStarFill className="review-card-star" />
				<BsStarFill className="review-card-star" />
				<BsStarFill className="review-card-star" />
			</div>
			<div className="review-card-text-div">
				<span>
					Hands down, best choice I’ve made training at (GN). VERY friendly team
					who make me actually want to go train. I look forward to walking
					through the doors and always feel amazing when I leave.
				</span>
				<h2>andy circus</h2>
				<div className="review-card-user-img">
					<img src={userImg}></img>
				</div>
			</div>
		</div>
	);
}

export default UserReviewCard;
