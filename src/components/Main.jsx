import ComicsList from "./ComicsList"

const Main = () => {
  return (
    <main>
      <div className="jumbotron-main"></div>
      <div id="container">
        <div className="row">
          <div className="col-100">
            <ComicsList />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Main
