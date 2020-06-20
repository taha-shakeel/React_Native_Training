import { connect } from 'react-redux';
import HomeScreen from '../screens/HomeScreen';
import * as actions from '../store/actions';

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
  
  function mapDispatchToProps(dispatch) {
    return {
      getTodoList: () => dispatch(actions.getStaticTodosList()),
      fetchApiTodo: () => dispatch(actions.fetchApiTodosList()),
      fetchAxiosTodo: () => dispatch(actions.fetchAxiosTodosList())
    };
  }
  
  const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(
    HomeScreen
  );
  
  export default HomeContainer;