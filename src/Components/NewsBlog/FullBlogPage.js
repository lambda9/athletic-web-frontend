/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";
import img3 from "../../Images/HomeBackdrop/im3.jpg";
import img4 from "../../Images/HomeBackdrop/im4.jpg";
import img5 from "../../Images/HomeBackdrop/im5.jpg";

const BlogHeader = styled.div`
	padding-top: 2rem;
	padding-bottom: 2rem;
`;

const Heading = styled.h4`
	text-align: left;
	padding-top: 1rem;
`;

const Paragraph = styled.p`
	font-size: 1.2rem;
	text-align: left;
	line-height: 2rem;
	color: #515151;
`;

function FullBlogPage() {
	return (
		<div>
			<div
				css={css`
					background-color: var(--mainBlack);
					height: 400px;
					@media screen and (max-width: 900px) {
						display: none;
					}
				`}
			></div>
			<div
				css={css`
					margin: auto;
					margin-top: -200px;
					padding: 2rem;
					max-width: 800px;
					background-color: white;
					border: 1px solid black;
					font-family: "Roboto";
					@media screen and (max-width: 900px) {
						margin-top: 0px;
						width: 90%;
						margin-top: 10px;
					}
					& img {
						width: 100%;
						padding: 1rem 0rem;
					}
				`}
			>
				<BlogHeader>
					<h3>7 October 2020</h3>
					<h1>Benefits and Advantages of going Vegetarian</h1>
					<h3>Written by Unknown</h3>
				</BlogHeader>
				<hr
					css={css`
						border-top: 2px solid rgba(0, 0, 0, 0.48);
					`}
				></hr>
				<Paragraph>
					Long time readers of the site know that I’m a fan of the sledgehammer,
					both for power development and conditioning. World champion fighters
					were swinging sledgehammers before any of us were born (ex.{" "}
					<a
						href="https://www.instagram.com/p/BaU_2cxH7xV/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Jack Dempsey
					</a>
					), and they continue to do so today. As a result, it’s no surprise
					that I’ve demonstrated sledgehammer swings many times. As a
					professional boxing coach, it’s an exercise that I strongly believe
					in. Yet, whenever I demo the sledge, my inbox fills with questions
					about the ideal weight of the hammer. And while I welcome all
					questions, size shouldn’t be the primary concern.{" "}
					<strong>
						<span class="" title="Edited">
							The intent behind each swing is more important.
						</span>{" "}
						<span id="more-13484"></span>
					</strong>
				</Paragraph>
				<Heading>Sledgehammer Size</Heading>
				<img src={img3} alt={"blog pic"} />
				<Paragraph>What’s the best size sledgehammer?</Paragraph>
				<Paragraph>
					Well, we have 6, 8, 10, 12, 16, and 20 pound hammers, along with
					heavier tornado balls, all for swinging. Each size and weight are
					useful. Sometimes we go lighter for higher reps and longer rounds.
					Sometimes we go heavier to build strength. Each size can be
					challenging if you swing the sledge hard enough, long enough, and/or
					fast enough.
				</Paragraph>
				<Paragraph>
					Below you’ll see a short clip of me swinging the 20 pound sledge. Each
					swing is a max effort where I’m attempting to crush the hammer through
					the target.
				</Paragraph>
				<Paragraph>
					Next, you’ll see an older video of me performing 1-minute intervals
					with an 8 pound hammer. Notice that the pace is faster, but my intent
					remains the same. Each swing is a max effort. Therefore, the lighter
					hammer isn’t easier than the heavier hammer. It’s different.
				</Paragraph>
				<Paragraph>
					And if you question that logic, consider the following. Most boxers
					hit the bag with gloves that range from 10 to 16 ounces. Do boxers
					outgrow their gloves to the point that they need 5 pounders? Of course
					not. Weight isn’t everything. The best conditioned athlete in the
					world can be humbled with a pair of 10 ounce boxing gloves, just as he
					or she can be humbled by any size sledgehammer.
				</Paragraph>
				<Paragraph>It all boils down to intent.</Paragraph>
				<Heading>Historical Precedent</Heading>
				<img src={img4} alt={"blog pic"} />
				<Paragraph>
					Whenever discussing the sledgehammer, I like to share the words above
					from the legendary power puncher Earnie Shavers. Shavers is
					undoubtedly one of the hardest punchers in the history of boxing and
					was a huge advocate of chopping wood and swinging a sledge.
				</Paragraph>
				<Paragraph>
					It’s always useful to listen and learn from those who walked the walk.
				</Paragraph>
				<Heading>Implementing the Sledgehammer</Heading>
				<img src={img5} alt={"blog pic"} />
				<Paragraph>
					For starters, I’m not suggesting that you need to purchase multiple
					sledgehammers. On the contrary, I’m highlighting the fact that any
					size can work. Thus, while I enjoy having multiple hammers, you
					certainly don’t need to rush out to purchase every hammer you can
					find. Instead, make the most of whatever you have access to.
				</Paragraph>
				<Paragraph>
					As far as workout options, the sledgehammer typically makes up a small
					part of the session, 2 or 3 times per week. For example, a fighter
					might perform a few 1-minute intervals at the conclusion of a boxing
					workout (using a lighter hammer). At other times, we might focus more
					on power where a few sets of 10 to 15 swings per side are performed
					(using a heavier hammer). The sledgehammer can also be used as part of
					a conditioning circuit (see this recent{" "}
					<a
						href="https://www.instagram.com/p/B7tv38epBuT/"
						target="_blank"
						rel="noopener noreferrer"
					>
						example
					</a>
					).
				</Paragraph>
				<Paragraph>
					Ultimately, there are many options on how and when to include the
					sledgehammer. The specifics don’t need to be complicated. Just be sure
					to swing the sledgehammer hard whenever it is used.
				</Paragraph>
				<Heading>Final Thoughts</Heading>
				<Paragraph>
					In summary, the sledgehammer is a relatively inexpensive tool that has
					rightfully stood the test of time. Sledgehammers can be found locally
					at most hardware stores or online at sites such as Amazon (see{" "}
					Swinging the sledge with maximal intent will build a unique type of
					power and endurance. Unlike many conventional exercises, the sledge
					allows you to power all the way through the movement without
					deceleration. That alone makes the sledgehammer a tremendous tool,
					particularly for those involved in combat sports.
				</Paragraph>
				<Paragraph>
					And as a bonus, I’ve never met anyone who’s regularly swung a
					sledgehammer that didn’t have stronger than average hands and
					forearms. In many ways, the sledgehammer is a full body tool, but the
					hands and forearms will certainly swell up with repeated use.
				</Paragraph>
				<Paragraph>Happy swinging!</Paragraph>
				<Paragraph>
					<strong>Related Entries:</strong>
				</Paragraph>
			</div>
		</div>
	);
}

export default FullBlogPage;
