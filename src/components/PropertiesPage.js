// import React from 'react';
// import PropTypes from 'prop-types';
// // import ArticleTitleBar from './ArticleTitleBar';
// import PropertyText from './PropertyText';
// // import VoteButton from './VoteButton';
// // import NewComment from './NewComment';
// // import CommentList from './CommentList';
// // import Profile from './Profile';
// import {connect} from 'react-redux';
// import * as actions from '../actions/actions';
// import '../../public/style.css';

// class PropertiesPage extends React.Component {
//   componentDidMount () {
//     this.props.fetchPropertiesByID(this.props.match.params.propertyId);
//     this.props.fetchPropertiesByPropertyID(this.props.match.params.propertyId);
//   console.log(this.props)
//   }

//   render () {
//     return (
//       <div className="propertiesPage columns">
//         <div className="column is-three-quarters">
//           <ArticleText 
//             body={this.props.selectedProperty.body} 
//           />
//           <div className="voteAndComment">
//           </div>

             
//         </div>
//       </div>
//     );
//   }
// }

// function mapDispatchToProps (dispatch) {
//   return {
//     fetchPropertiesByID: (id) => {
//       dispatch(actions.fetchPropertiesByID(id));
//     }
//   };
// }

// function MapStateToProps (state) {
//   return {
//     selectedProperty: state.selectedProperty,
//     loading: state.loading
//   };
// }

// PropertiesPage.propTypes = {
//     selectedProperties: PropTypes.object.isRequired,
//     loading: PropTypes.bool.isRequired,
//     fetchPropertiesByID: PropTypes.func.isRequired,
//     fetchPropertiesByPropertiesID: PropTypes.func.isRequired,
//     match: PropTypes.object.isRequired
// };

// export default connect(MapStateToProps, mapDispatchToProps) (PropertiesPage);