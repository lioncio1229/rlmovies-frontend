import { connect } from "react-redux";
import MovieManagement from "../components/MovieManagement";
import { RootState } from "../../../store";
import { selectMovies, selectIsEditorOpen, selectMovieInfo } from "../selectors";

const mapStateToProps = (state: RootState) => ({
     movies: selectMovies(state),
     isEditorOpen: selectIsEditorOpen(state),
     movieInfo: selectMovieInfo(state),
});

export default connect(mapStateToProps)(MovieManagement);

