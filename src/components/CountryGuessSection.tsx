export default function CountryGuessSection({store}) {
        return (
                <div className="flex justify-center items-center px-3 py-3 bg-white border-4 border-slate-500 rounded-[50px] text-4xl text-black">
                        <div id="countryInput"className="text-4xl text-black bg-transparent border-none">
                                {/* <input type="text" className="text-4xl text-black bg-transparent border-none" />     */}
                                hello
                        </div>
                        

                         {document.getElementById("countryInput").value}
                        <button className="text-4xl text-black bg-transparent border-none default-cursor"
                        onClick={store.guess()}>Guess</button>


                </div>
        )
}