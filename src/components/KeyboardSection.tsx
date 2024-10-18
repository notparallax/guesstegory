import { observer } from 'mobx-react-lite';

export default observer(function KeyboardSection({store}) {
  const keyBoardLayout = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm'];
  return <div className="">
    {keyBoardLayout.map((row, i) => {
      let bgColor = "bg-black";
      return (
        <div key={i} className="flex justify-center">
          
          {row.split('').map((key, j) => {
            if (store.exactGuesses.includes(key)) {
              bgColor = "bg-green-500";
            } 
            else if (store.inExactGuesses.includes(key)) {
              bgColor = "bg-yellow-500";
            }
            else if (store.allGuesses.includes(key)) {
              bgColor = "bg-gray-500";
            }
            else {
              bgColor = "bg-gray-300";
            }

            return (
              <div key={j} className={`flex justify-center items-center ${bgColor} h-12 w-12 m-px text-2xl textuppercase`}>
                {key}
              </div>
            );
          })}
        </div>
      );
    })}
  </div>;
});
