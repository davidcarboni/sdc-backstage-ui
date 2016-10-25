var Link = require('react-router').Link,
	collectionExerciseFilters = require('../../filters/collectionExercises.jsx'),
	PageTitleComponent = require('../shared/PageTitle/PageTitle.comp.jsx');

module.exports = function () {

	if($.isEmptyObject(this.props.details)) {
		return <div></div>
	}

	function toggle(condition) {
		return {
			display : (condition ? '' : 'none')
		};
	}

	return (
		<div>
			<PageTitleComponent title="Business Survey Data Collection" />
			<div className="container">
				<section className="collection-exercise-details-component">
					<ol className="breadcrumb">
						<li className="breadcrumb-item">
							<Link to={'/'}>Back to start</Link>
						</li>
						<li className="breadcrumb-item">
							<Link to={'/collection-exercises'}>Collection Exercises</Link>
						</li>
						<li className="breadcrumb-item active">
							<span>{this.props.survey.name}</span>
						</li>
					</ol>

					<div className="page-header">
						<h2>{this.props.survey.name}</h2>
					</div>

					<div className="page-container">
						<div className="row">
							<div className="col-xs-12">
								<h4>Status: <strong>{collectionExerciseFilters.getPrettyStatus(this.props.details.state)}</strong></h4>
								<button style={toggle(this.props.details.state === 'scheduled')} className="btn btn-primary">[Set as Ready for sample]</button>
								<button style={toggle(this.props.details.state === 'sample_loaded')} onClick={this.props.onPublishedClicked} className="btn btn-primary">Publish</button>
								<br />
								<br />

								{/*<p style={toggle(this.props.details.state === 'scheduled')}>[Sample available in 3 days]</p>
								<br />*/}
							</div>
						</div>

						<div className="row">
							<div className="col-xs-12 col-sm-6">
								<h4>Dates</h4>
								<ul className="details-list">
									{this.props.details['key_dates'].map(function (item, i) {
										return (
											<li key={i} className="row details-list-item">
												<label className="col-xs-12 col-sm-6 title">{item.description}</label>
												<strong className="col-xs-12 col-sm-6 detail">{moment(item.date).format('Do MMM YYYY')}</strong>
											</li>
										);
									})}
								</ul>
								<ul className="details-list">
									<li className="row details-list-item">
										<label className="col-xs-12 col-sm-6 title">Reference period start</label>
										<strong className="col-xs-12 col-sm-6 detail">[3rd Jan 2017]</strong>
									</li>
									<li className="row details-list-item">
										<label className="col-xs-12 col-sm-6 title">Reference period end</label>
										<strong className="col-xs-12 col-sm-6 detail">[2nd Feb 2017]</strong>
									</li>
								</ul>
							</div>
							<div className="col-xs-12 col-sm-6">

								<div style={toggle(this.props.details.state === 'sample_loaded' || this.props.details.state === 'published' || this.props.details.state === 'live')}>
									<h4>Sample</h4>
									<p><a href="">[4123] Reporting Units</a></p>

									<h5><strong>Sub Samples</strong></h5>
									<ul className="details-list">
										<li className="details-list-item">
											Sample
										</li>
										<li className="details-list-item">
											Sample
										</li>
									</ul>
									<br />
								</div>

								<div style={toggle(this.props.details.state === 'scheduled' || this.props.details.state === 'sample_loaded')}>

									<h4>Current Samples</h4>
									<ul className="details-list" style={toggle(this.props.details.samples.length)}>
										<li className="row details-list-item">
											<strong className="col-xs-4 title">RU Reference</strong>
											<strong className="col-xs-4 title">Business Name</strong>
											<strong className="col-xs-4 title">Form Type</strong>
										</li>
										{this.props.details.samples.map(function (item) {
											return (
												<li key={item.id} className="row details-list-item">
													<strong className="col-xs-4 detail">{item['reporting_unit_ref']}:</strong>
													<strong className="col-xs-4 detail">{item['business_name']}</strong>
													<strong className="col-xs-4 detail">{item['form_type']}</strong>
												</li>
											);
										})}
									</ul>
									<ul className="details-list">
										<li className="details-list-item">
											<form id="samples-form">
												<input name="samples_csv_file" accept=".csv" type="file" />
											</form>
										</li>
									</ul>
									<ul className="details-list">
										<li className="details-list-item">
											<button onClick={this.props.onSamplesUploadClicked} className="btn btn-info">Upload and Save</button>
										</li>
									</ul>
									<br />
								</div>

								<h4 className="fade">Question Sets</h4>
								<ul className="details-list">
									<li className="row details-list-item">
										<label className="col-xs-12 col-sm-4 title">[Subject]</label>
										<strong className="col-xs-12 col-sm-8 detail">[Details]</strong>
									</li>
								</ul>
								<br />

								<h4 className="fade">Survey</h4>
								<ul className="details-list">
									<li className="row details-list-item">
										<label className="col-xs-12 col-sm-4 title">Long title</label>
										<strong className="col-xs-12 col-sm-8 detail"><a href="">{this.props.survey.name}</a></strong>
									</li>
									<li className="row details-list-item">
										<label className="col-xs-12 col-sm-4 title">Short title</label>
										<strong className="col-xs-12 col-sm-8 detail">[MWSS]</strong>
									</li>
									<li className="row details-list-item">
										<label className="col-xs-12 col-sm-4 title">Reference no.</label>
										<strong className="col-xs-12 col-sm-8 detail">{this.props.survey.reference}</strong>
									</li>
								</ul>
								<br />
							</div>
						</div>

					</div>

				</section>
			</div>
		</div>
	);

};