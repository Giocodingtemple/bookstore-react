import Navbar from '../components/NavBar'
import Books from '../components/Books';
import BookList from '../components/BookList';
import BookBrowser from '../components/BookBrowser';
import { Router, Route, Switch } from '@mui/icons-material';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Books} />
        <Route path="/about" component={BookList} />
        <Route path="/contact" component={BookBrowser} />
      </Switch>
    </Router>
  );
}
export default App;
