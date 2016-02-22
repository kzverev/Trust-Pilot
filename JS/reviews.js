

var HeadInfo = React.createClass({
	render: function () {
		return (
			<div className="headInfo">
				<div className="wrap1">
					<h2 className="score">{this.props.score}</h2>
					<img className="stars" src="img/3-stars.png" />
		    </div>
			  <div className="wrap2">
		      <p>Based on {this.props.reviewsNumber} reviews. See some of the reviews here.</p>
		      <img className="logo" src="img/trustpilot-logo-light.png" />
				</div>
			</div>
		);
	}
});





var ReviewBody = React.createClass({
	render: function () {
		var rateImage;
		switch (this.props.starRating) {
			case "1":
				rateImage = "img/1-star.png";
				break;
			case "2":
				rateImage = "img/2-stars.png";
				break;
			case "3":
				rateImage = "img/3-stars.png";
				break;
			case "4":
				rateImage = "img/4-stars.png";
				break;
			case "5":
				rateImage = "img/5-stars.png";
				break;
			default:
				break;
		}
		return (
			<div className="review-body">
				<h3 className="name">{this.props.fullname}</h3>
				<img className="stars" src={rateImage} /> 
				<div className="date">{jQuery.timeago(this.props.date)}</div>
				<p className="review-name">{this.props.reviewTitle}</p>
				<p className="review-text">{this.props.reviewBody}</p>
			</div>
		);
	}
});

var ReviewsWrapper = React.createClass({
	render:function () {
		var review = this.props.reviews.map(function(query) {
			return (
				<ReviewBody fullname={query.fullName} starRating={query.starRating} reviewTitle={query.reviewTitle} reviewBody={query.reviewBody} date={query.date} key={query.firstName} />
			);
		});
		return (
			<div className="reviews-wrapper">
				{review}
			</div>
		);
	}
});

var Widget = React.createClass({
	render:function () {
		return (
			<div className="widget">
				<HeadInfo />
				<ReviewsWrapper reviews = {reviews}/>
			</div>
		)
	}
})





var reviews =[  
  {  
    firstName:"Simon",
    lastName:"Lock",
    fullName:"Simon Lock",
    location:"Kolding",
    reviewTitle:"Super quality.. I will show here again!",
    reviewBody:"Super nice quality, fast devilery, good prices. I will shop here again!",
    starRating:"5",
    date:"2016-02-22T12:13:28Z"
  },
  {  
    firstName:"Gav",
    lastName:"",
    fullName:"Gav",
    location:"",
    reviewTitle:"Princely Sum",
    reviewBody:"A decent local curry house in Faversham, Kent known for its Elvis nights.",
    starRating:"4",
    date:"2016-01-21T15:11:28Z"
  },
  {  
    firstName:"Justin",
    lastName:"Wright",
    fullName:"Justin Wright",
    location:"London, GB",
    reviewTitle:"Good Services",
    reviewBody:"A decent place to introduce your taste buds to fiery Indian fare",
    starRating:"3",
    date:"2016-01-13T09:11:28Z"
  },
  {  
    firstName:"Erika",
    lastName:"Wolfe",
    fullName:"Erika Wolfe",
    location:"Gothenburg, SE",
    reviewTitle:"Nightmare experience - no product, no communication, no refund; improved by rapid resolution",
    reviewBody:" a refund because Infurn could neither deliver my chairs nor give me a solid date about when I might receive them when I inquired about a delivery date. They finally offered me a refund - which I accepted on 14 December 2012.",
    starRating:"2",
    date:"2016-01-14T19:11:28Z"
  },
  {  
    firstName:"Hugo",
    lastName:"Beja",
    fullName:"Hugo Beja",
    location:"Praia Da Barra, PT",
    reviewTitle:"FRAUD",
    reviewBody:"Communication ZERO, they simply ignous to prove our order to be pairs!!! LOL and just stopped communicating... their website is constantly down... probably to make lose interest and rest your forces to recover what you paid for!!",
    starRating:"1",
    date:"2016-02-14T11:01:28Z"
  },

];




ReactDOM.render(
  <Widget reviews = {reviews}/>,
  document.getElementById('main-wrapper')
);






