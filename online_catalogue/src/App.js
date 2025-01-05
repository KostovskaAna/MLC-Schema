import React from 'react'
import './App.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import BenchmarkDataFilter from './components/BenchmarkDataFilter'
import Dataset from './components/Dataset';
import Method from './components/Method';
import Compare from './components/Compare';
import LandingPage from './components/LandingPage';
import Footer from './components/Footer';
import DatasetsPage from './components/Datasets';
import MethodsPage from './components/MethodsPage';
import PageNotFound from './components/PageNotFound';
import Metafeatures from './components/Metafeatures';
import { ThemeProvider } from '@mui/material/styles';
import { getTheme } from './components/theme';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      darkMode: true,
      selectedLinkFromLanding: ''
    };
  }

  updateSelectedLinkFromLanding = (newValue) => {
    this.setState({ selectedLinkFromLanding: newValue })
  }

  componentDidMount() {
    document.title = "MLCBench"
  }

  toggleDarkMode = () => {
    this.setState(prevState => ({ darkMode: !prevState.darkMode }));
  };


  render() {
    const { darkMode } = this.state;
    // const theme = getTheme(darkMode ? 'dark' : 'light');
    return (
      <ThemeProvider theme={getTheme(darkMode ? 'dark' : 'light')}>
        <React.Fragment >
          <Router>

            <Header darkMode={darkMode} onToggleDarkMode={this.toggleDarkMode} selectedLinkFromLanding={this.state.selectedLinkFromLanding} onLinkUpdate={this.updateSelectedLinkFromLanding} />
            <Routes >
              <Route key="/" path="/" element={<LandingPage theme={getTheme('dark')} onLinkClick={this.updateSelectedLinkFromLanding} />}></Route>
              {/* <Route key="/MLCbenchmark" path="/MLCbenchmark" element={<LandingPage />}></Route> */}
              <Route key="." path="." element={<LandingPage theme={getTheme('dark')} onLinkClick={this.updateSelectedLinkFromLanding} />}></Route>
              <Route key="/Analyse" path="/analyse" element={<Compare theme={getTheme(darkMode ? 'dark' : 'light')} />}></Route>
              <Route key="/Experiments" path="/Experiments" element={<BenchmarkDataFilter theme={getTheme(darkMode ? 'dark' : 'light')} />}></Route>
              <Route key="/Datasets" path="/Datasets" element={<DatasetsPage theme={getTheme(darkMode ? 'dark' : 'light')} />}></Route>
              <Route key="/Dataset/:dataset" path="/Dataset/:dataset" element={<Dataset theme={getTheme(darkMode ? 'dark' : 'light')} />}></Route>
              <Route key="/Methods" path="/Methods" element={<MethodsPage theme={getTheme(darkMode ? 'dark' : 'light')} />}></Route>
              <Route key="/Method/:method" path="/Method/:method" element={<Method theme={getTheme(darkMode ? 'dark' : 'light')} />}></Route>
              <Route key="Metafeatures" path="/Metafeatures" element={<Metafeatures theme={getTheme(darkMode ? 'dark' : 'light')} />}></Route>
              <Route key="NotFound" path="*" element={<PageNotFound theme={getTheme(darkMode ? 'dark' : 'light')} />}></Route>

            </Routes>
            <Footer />


          </Router>
        </React.Fragment>
      </ThemeProvider >
    );
  }
}

export default App;
