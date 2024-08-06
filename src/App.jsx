import "../src/css-files/App.css";
import AllArticles from "./Components/AllArticles";
import ArticlesContainer from "./Components/ArticlesContainer";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

function App() {
   return (
      <>
         <Header />
         <br></br>
         <ArticlesContainer />
         <Footer />
      </>
   );
}

export default App;
