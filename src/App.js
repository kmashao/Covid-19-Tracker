import GlobalCases from './covidcases';

function App() {
  return (
    <div className="App">
      <main role="main">
        <div class="jumbotron">
          <div class="container">
            <h1 class="display-3">Covid-19 Information</h1>
            <p>Covid-19 stats</p>
            <p><a class="btn btn-primary btn-lg" href="#" role="button">Learn more &raquo;</a></p>
          </div>
        </div>

        <GlobalCases />
        <hr />
      </main>
    </div> 
  );
}

export default App;
