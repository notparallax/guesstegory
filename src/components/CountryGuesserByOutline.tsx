"use client";

import { useEffect } from "react";
import { observer, useLocalObservable } from "mobx-react-lite";

import CountryStore from "../../store/CountryStore";
import CountryImageSection from "./CountryImageSection";
import CountryGuessSection from "./CountryGuessSection";

export default observer(function CountryGuesserByOutline() {
  const store = useLocalObservable(() => CountryStore);
  useEffect(() => {
    store.init();
    window.addEventListener('keyup', store.handleKeyup);
    return () => {
      window.removeEventListener('keyup', store.handleKeyup);
    };
  }, []);
  return (
    
    <>
    <div className="flex flex-col justify-center items-center h-screen w-screen bg-slate-900 ">
     
      {         
        <CountryImageSection
        countryOutlinePath={store.correctOutline}
        />     
      }
      <CountryGuessSection 
        store={store}
      />
      <div>
      {store.won && <div className="text-4xl text-green-500">You win!</div>}
      {store.lost && <div className="text-4xl text-red-500">You lose!</div>}
      {
        (store.won || store.lost) && (
          <button onClick={store.init}>
            <span className="text-xl">Play again</span>
          </button>
        )
      }

      </div>
      
      
      word: {store.correctCountry} 
      <br/>
      guesses: {JSON.stringify(store.guesses)}

    </div>
      
    </>
  );
});
