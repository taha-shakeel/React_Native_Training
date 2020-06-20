import { connect } from 'react-redux';
import FindMoreScreen from '../screens/FindMoreScreen';

function mapStateToProps(state) {
    const {
      isLoading,
      isError,
      todos,
    } = state.todosList;
    return {
      isLoading,
      isError,
      todos,
    };
  }
  
  const FindMoreContainer = connect(mapStateToProps)(
    FindMoreScreen
  );
  
  export default FindMoreContainer;