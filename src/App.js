import React, { useState } from "react";
import "./index.css";
import { QuanstionCard } from "./QuastionCard";
import { questions } from "./data";
import { ResultCard } from "./ResultCard";
// import { render } from "@testing-library/react";

// const messages = [
//   "Learn React ⚛️",
//   "Apply for jobs 💼",
//   "Invest your new income 🤑",
// ];

const App = () => {
  const [isStart, setIsStart] = useState(true);
  const [qsNo, setQsNo] = useState(1);
  return (
    <div>
      <div className='game--start'>
        {isStart && (
          <button
            className='btn btn--start'
            onClick={() => setIsStart(!isStart)}>
            start
          </button>
        )}
      </div>
      {!isStart && qsNo <= 10 && qsNo >= 0 ? (
        <QuanstionCard
          question={questions[qsNo - 1]}
          qsNo={qsNo}
          setQsNo={setQsNo}
        />
      ) : (
        !isStart && (
          <ResultCard/>
        )
      )}
    </div>
    // <div className='steps'>
    //   <div className='numbers'>
    //     <div className={`${step >= 1 ? "active" : ""}`}>{step}</div>
    //     <div className={`${step >= 2 ? "active" : ""}`}>2</div>
    //     <div className={`${step >= 3 ? "active" : ""}`}>3</div>
    //   </div>
    //   <p className='message'>{messages[step - 1]}</p>
    //   <div className='buttons'>
    //     <button style={{ backgroundColor: "#7950f2", color: "#fff" }}>
    //       Previous
    //     </button>
    //     <button style={{ backgroundColor: "#7950f2", color: "#fff" }}>
    //       Next
    //     </button>
    //   </div>
    // </div>
  );
};

export default App;
