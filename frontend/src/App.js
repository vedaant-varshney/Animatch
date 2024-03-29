import logo from './images/logo.svg';
import './css/app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col, Image, ProgressBar } from 'react-bootstrap';
import { useState, useEffect } from 'react';
// Component Imports
import SmallScreenContext from './components/SmallScreenContext';
import ScoreContext from './components/ScoreContext';
import MiscContext from './components/MiscContext';
import AnswerButton from './components/AnswerButton';
import axios from 'axios';


function App() {

  const [smallScreen, setSmallScreen] = useState(false);
  // To use in components, use "const smallScreen = useContext(SmallScreenContext);"
  // This needs to be done after importing useContext and the component itself
  useEffect(() => {
    if (window.innerWidth <= 1000) {
      setSmallScreen(true)
    }
    handleRequest()

  }, [])

  const widthChanged = () => {
    if (window.innerWidth <= 1000) {
      setSmallScreen(true)
    }
    else {
      setSmallScreen(false)
    }

  }

  window.addEventListener('resize', widthChanged)


  const [imageStrings, setImageStrings] = useState([])
  const [options, setOptions] = useState([])
  const [answer, setAnswer] = useState("")

  let [score, setScore] = useState(0);
  let [scoreEarned, setScoreEarned] = useState(100)


  let [userLogMessage, setUserLogMessage] = useState("");




  const [imageIdx, setImageIdx] = useState(0)

  const [answered, setAnswered] = useState(false)
  const [timeoutVal, setTimeoutVal] = useState(12000)


  function timerEvent() {

    let time_left = 12
    let idx = 0;
    let time = 0;

    setScoreEarned(100)

    let timerInterval = setInterval(() => {

      if (answered === true) {
        clearInterval(timerInterval)
        return;

      }

      if ((time % 2000 === 0) && (idx < 6)) {
        setImageIdx(idx);
        idx++;
      }
      time = time + 100;
      setTimeoutVal(13000-time);

      let progress_bar = scoreEarned;
      progress_bar = Math.round(((time_left) / 12) * 100);
      time_left = time_left - 0.1;
      if (time_left <= 0) {
        progress_bar = 0
        clearInterval(timerInterval)
        return;
      }




      setScoreEarned(progress_bar);
      // console.log(progress_bar)






    }, 100)
  }

  function handleRequest() {
    axios({
      method: 'get',
      url: 'https://vedaantv.pythonanywhere.com/generate',
    })
      .then((res) => {

        // setTimerBar(100)
        // setScoreEarned(100)

        // console.log(res.data);
        setImageIdx(0)
        // handleTimer()
        timerEvent()
        setAnswered(false)
        setImageStrings(res.data.image_strings)
        setAnswer(res.data.answer)
        setOptions(res.data.options)


      })
      .catch((err) => {

        console.log(err)
      });

  }

  function handleRestart() {
    setScore(0)
    // setScoreEarned(100)

    setUserLogMessage("The application is now restarting. Please wait...")

    setTimeout(() => {
      setUserLogMessage("Application Restarted")
      handleRequest()
    }, timeoutVal)
    
  }




  return (
    <div className="">
      <MiscContext.Provider value={[imageIdx, setImageIdx, handleRequest, userLogMessage, setUserLogMessage, scoreEarned, setScoreEarned, answered, setAnswered, timeoutVal]}>
        <ScoreContext.Provider value={[score, setScore]}>
          <SmallScreenContext.Provider value={smallScreen}>
            <Container fluid='lg' className="c-w change-font mt-5 mb-5">
              <Row className="text-center">
                <h1>Welcome to <span className="fw-700 text-blue">AniMatch</span></h1>
                <h3>Your goal is to correctly identify as many characters as possible. Good Luck!</h3>
              </Row>

              <Row className=" mt-5">
                <Col lg="6" className="text-center d-flex flex-column align-items-center">
                  <h4 className="mb-3">Who is this character?</h4>
                  <Image rounded src={`data:image/jpg;base64,${imageStrings[imageIdx]}`} className={smallScreen ? "mb-4 dims-small" : "mb-4 dims-rel"} />



                </Col>

                <Col lg="6" className="mt-3 text-center d-flex flex-column align-items-center ">
                  <div className="align-self-center d-flex justify-content-center flex-column">
                    <AnswerButton name={options[0]} correct={answer} />
                    <AnswerButton name={options[1]} correct={answer} />
                    <AnswerButton name={options[2]} correct={answer} />
                    <AnswerButton name={options[3]} correct={answer} />
                    <Button onClick={handleRestart} className={smallScreen ? "mt-3 restart-button-small w-100" : "mt-3 restart-button w-100"}><h3 style={{ "margin": 0 }}>Restart</h3></Button>
                    <ProgressBar className="mt-5 mb-3" now={scoreEarned} />
                    {!answered &&
                      <h4>You will currently earn <span className="text-blue fw-700">{scoreEarned}</span> points!</h4>}
                    {answered &&
                      <h4>Please wait a few moments for the next option to show up!</h4>
                    }
                    <h4>Score: <span className="text-blue fw-700">{score}</span></h4>

                    {/* <Button onClick={handleTimer}>Test Timer</Button> */}


                  </div>

                  <h3 className="mt-3">{userLogMessage}</h3>

                </Col>




              </Row>

            </Container>



          </SmallScreenContext.Provider>

        </ScoreContext.Provider>

      </MiscContext.Provider>

    </div>
  );
}

export default App;
