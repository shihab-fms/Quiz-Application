const QuanstionCard = (props) => {
  const hendleNext = () => {
    if (props.qsNo <= 10) props.setQsNo(props.qsNo + 1);
  };

  return (
    <>
      <section>
       
        <div className='quastion--container'>
          <p className='headding'>
            Question and awnser session. Each of question is 10 marks.
          </p>
          <div className='question'>{props.question.QN}</div>
          <div className='answers--section'>
            <button className='btn btn--answer'>
              {props.question.option[0]}1
            </button>
            <button className='btn btn--answer'>
              {props.question.option[1]}
            </button>
            <button className='btn btn--answer'>
              {props.question.option[2]}
            </button>
            <button className='btn btn--answer'>
              {props.question.option[3]}
            </button>
          </div>
        </div>
        <button className='btn btn--next' onClick={hendleNext}>
          Next
        </button>
      </section>
    </>
  );
};

export { QuanstionCard };
