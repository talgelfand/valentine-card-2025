import { useState } from "react";
import confetti from "canvas-confetti";

function App() {
  const [open, setOpen] = useState(false);

  const heart = confetti.shapeFromPath({
    path: "M167 72c19,-38 37,-56 75,-56 42,0 76,33 76,75 0,76 -76,151 -151,227 -76,-76 -151,-151 -151,-227 0,-42 33,-75 75,-75 38,0 57,18 76,56z",
    matrix: [
      0.03333333333333333, 0, 0, 0.03333333333333333, -5.566666666666666,
      -5.533333333333333,
    ],
  });

  const triggerConfetti = () => {
    const count = 700;

    const defaults = {
      spread: 360,
      shapes: [heart],
      origin: { y: 1 },
      colors: ["#ff69b4", "#ff1493", "#ff6347"],
      gravity: 0.5,
      ticks: 200,
      startVelocity: 30,
      drift: 0,
    };

    function fire(particleRatio: number, opts: any) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });
    fire(0.2, {
      spread: 60,
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  };

  if (open) {
    return (
      <>
        <div className="container">
          <h1>I love you so much!</h1>
          <img
            src="https://media.tenor.com/KPjQZUzDRkgAAAAM/the-office-dwight-schrute.gif"
            alt=""
            height={300}
          />
        </div>
        {triggerConfetti()}
      </>
    );
  }

  return (
    <div className="container">
      <h1>Edwin, will you be my valentine? 🥹</h1>
      <img
        src="https://media.tenor.com/FrxpeqQilkQAAAAM/secret-admirer-valentine.gif"
        alt=""
      />
      <button onClick={() => setOpen(true)}>Of course!</button>
    </div>
  );
}

export default App;
