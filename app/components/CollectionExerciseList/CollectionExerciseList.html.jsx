var Link = require('react-router').Link,
	collectionExerciseFilters = require('../../filters/collectionExercises.jsx'),
	PageTitleComponent = require('../shared/PageTitle/PageTitle.comp.jsx');

module.exports = function () {

	var tabClass = function (status) {
		return 'tab ' + (status === this.props.activeFilter ? 'tab-on' : 'tab-off');
	}.bind(this);

	var serveyReference = 1;

	return (
		<div>
			<PageTitleComponent title="ONS Business Surveys" />
			<section className="collection-exercise-list-component">
				<div className="tab-bar-wrap">
					<div className="container">

						<div className="row">
							<ol className="breadcrumb">
								<li className="breadcrumb-item">
									<Link to={'/'}>Back to start</Link>
								</li>
								<li className="breadcrumb-item">
									<span>Collection Exercises</span>
								</li>
							</ol>
						</div>

						<h3>Collection Exercises</h3>

						<div className="tab-bar">
							<div className="tabs">
								<button onClick={this.props.onCollectionFilterClick.bind(this, 'live')} className={tabClass('live')}>Live</button>
								<button onClick={this.props.onCollectionFilterClick.bind(this, 'scheduled')} className={tabClass('scheduled')}>Scheduled</button>
								<button onClick={this.props.onCollectionFilterClick.bind(this, 'sample_loaded')} className={tabClass('sample_loaded')}>Sample loaded</button>
								<button onClick={this.props.onCollectionFilterClick.bind(this, 'published')} className={tabClass('published')}>Published</button>
								<button onClick={this.props.onCollectionFilterClick.bind(this, 'closed')} className={tabClass('closed')}>Closed</button>
								<button onClick={this.props.onCollectionFilterClick.bind(this, '')} className={tabClass('')}>All</button>
							</div>
							<button onClick={this.props.onAddCollectionExerciseClick} className="btn btn-primary add-btn">Add collection exercise</button>
						</div>

					</div>
				</div>

				<div className="container">
					<section className="survey-list">
						<div className="table-wrap">
							<table>
								<thead>
									<tr className="table-header">
										<th><strong>Survey Reference</strong></th>
										<th><strong>Survey</strong></th>
										<th><strong>Period</strong></th>
										<th><strong>Status</strong></th>
									</tr>
								</thead>
								<tbody>
									{this.props.allCollectionExercises
										.filter(function (item) {
											if (this.props.activeFilter === '') {
												return true;
											}

											return item.state === this.props.activeFilter;
										}.bind(this))
										.map(function (item) {
											return (
												<tr key={item.id} className="t-row">
													<td>[00{serveyReference++}]</td>
													<td><Link to={'/collection-exercises/details/'+item.id}>{item.survey.name}</Link></td>
													<td><span>{item["period"]}</span></td>
													<td><span>{collectionExerciseFilters.getPrettyStatus(item["state"])}</span></td>
												</tr>
											);
										})}
								</tbody>
							</table>
						</div>
					</section>
				</div>

			</section>
		</div>
	);
};