var Redux = require('react-redux'),

	collectionExerciseMappings = require('../mappings/collectionExercises.jsx'),

	locationActions = require('../actions/Location.actions.jsx'),
	CollectionExercisesActions = require('../actions/CollectionExercises.actions.jsx'),
	HomePageComponent = require('../components/HomePage/HomePage.comp.jsx');

function mapStateToProps (state) {
	return {
		allCollectionExercises: state.collectionExercises.items.map(function (collectionExerciseItem) {

			/**
			 * Add survey to collection exercise view
			 */
			return collectionExerciseMappings.getSurvey(state.surveys.items, collectionExerciseItem);
		}),

		activeFilter: state.ui.collectionExercise.list.activeFilter
	};
}

function mapDispatchToProps (dispatch) {
	return {
		onAddCollectionExerciseClick: function () {
			locationActions.change('/collection-exercises/create');
		},

		onCollectionFilterClick: function (status, e) {
			dispatch(CollectionExercisesActions.UI_FILTER(status));
		}
	};
}

var HomeContainer = Redux.connect(
	mapStateToProps,
	mapDispatchToProps
)(HomePageComponent);

module.exports = HomeContainer;