var getRatingImagePath = function(property) {
	switch (property) {
			case "1":
				return "img/1-star.png";
			case "2":
				return "img/2-stars.png";
			case "3":
				return "img/3-stars.png";
			case "4":
				return "img/4-stars.png";
			case "5":
				return "img/5-stars.png";
			default:
				break;
		}
};

var getRatingHeader = function(score) {
	switch (score) {
			case "1":
				return "Bad";
			case "2":
				return "Poor";
			case "3":
				return "Average";
			case "4":
				return "Goog";
			case "5":
				return "Best";
			default:
				break;
		}
}

var HeadInfo = React.createClass({
	render: function () {
		return (
			<div className="headInfo">
				<div className="wrap1">
					<h2 className="score">{getRatingHeader(this.props.data.score)}</h2>
					<img className="stars" src={getRatingImagePath(this.props.data.score)} />
		    </div>
			  <div className="wrap2">
		      <p>Based on <span className="reviewsNumber">{this.props.data.reviewsNumber}</span> reviews. See some of the reviews here.</p>
		      <img className="logo" src="img/trustpilot-logo-light.png" />
				</div>
			</div>
		);
	}
});





var ReviewBody = React.createClass({
	render: function () {
		return (
			<div className="review-body">
				<h3 className="name">{this.props.fullname}</h3>
				<img className="stars" src={getRatingImagePath(this.props.starRating)} /> 
				<div className="date">{jQuery.timeago(this.props.date)}</div>
				<p className="review-name">{this.props.reviewTitle}</p>
				<p className="review-text">{this.props.reviewBody}</p>
			</div>
		);
	}
});

var ReviewsWrapper = React.createClass({
	render:function () {
		var review = this.props.data.reviews.map(function(query) {
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
	loadReviewsFromServer: function() {
		$.ajax({
			url: this.props.url,
			dataType: 'json',
			cache: false,
			success: function(data) {
				this.setState(data);
			}.bind(this),
			error: function(xhr, status, err) {
		        console.error(this.props.url, status, err.toString());
		    }.bind(this)
		});
	},
	getInitialState: function() {
		return {
			score: "",
            reviewsNumber: 0,
            reviews: []
		}
	},
	componentDidMount: function() {
		this.loadReviewsFromServer();
		// "setInterval(this.loadReviewsFromServer, this.props.pollinterval);"
	},
	render:function () {
		return (
			<div className="widget">
				<HeadInfo data = {this.state}/>
				<ReviewsWrapper data = {this.state}/>
			</div>
		)
	}
})


ReactDOM.render(
  <Widget url="/API/reviewsData.json" pollInterval={2000} />,
  document.getElementById('main-wrapper')
);




