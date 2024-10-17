export default function GridSection({ correctWord, guess, isAlreadyGuessed }) {
  
  return (
    <div className="grid grid-cols-5 gap-2 mb-2">
      {Array(5).fill(0).map((_, i) => {
        let bgColor;
        if (!isAlreadyGuessed) {
          bgColor = "bg-black";
        }
        else if (correctWord[i] === guess[i]) {
          bgColor = "bg-green-500";
        } 
        else if (correctWord.includes(guess[i])) {
          bgColor = "bg-yellow-500";
        }
        else {
          bgColor = "bg-black";
        }

        return (
          <div
            key={i}
            className={`flex justify-center items-center ${bgColor} border border-gray-200 h-24 w-24 text-4xl uppercase`}
          >
            {guess[i]}
          </div>
        );
      })}
    </div>
  );
}
