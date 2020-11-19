import { createStore } from "redux";
import { connect, Provider } from "react-redux";
import Feed from './Feed';
import SearchBar from "./SearchBar";

const FETCH_FEED = "FETCH_FEED";
const BEGIN_SEARCH = "BEGIN_SEARCH";
const UPDATE_LOCATION= "UPDATE_LOCATION";

const initState = {
  feed: [{title: "ali"}],
  location: "",
  start: false
};

const reducer = (state = initState, action) => {
  if (action.type === FETCH_FEED) {
    //console.log(action.feed);

    return {
      ...state,
      feed: action.feed
    };
  }
  if (action.type === UPDATE_LOCATION) {
    //console.log(action.feed);

    return {
      ...state,
      location: action.location
    };
  }
  return state;
};

const mapStateToProps = state => {
  return state;
};

const updateFeed = feed => ({
  type: FETCH_FEED,
  feed: [...feed]
});
const updateLocation = location =>({
    type: UPDATE_LOCATION,
    location: location
});

const mapDispatchToPropsSearchBar = dispatch => {
  return {
    relocation(loc) {
      dispatch(updateLocation(loc));
    },
    refeed: feed => dispatch(updateFeed(feed))
  };
};
const mapDispatchToPropsFeed = dispatch => {
  return {
    refeed: feed => dispatch(updateFeed(feed))
  };
};
const FeedContainer = connect(mapStateToProps, mapDispatchToPropsFeed)(Feed);
const SearchBarContainer = connect(mapStateToProps, mapDispatchToPropsSearchBar)(SearchBar);


const store = createStore(reducer);

export {  store, FeedContainer, SearchBarContainer };
