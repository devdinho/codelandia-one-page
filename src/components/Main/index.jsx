import "./style.css";

const Main = ({ children }) => {
  return (
    <main>
      <div className="cards-container">
        { children }
      </div>
    </main>
  )
};

export default Main;