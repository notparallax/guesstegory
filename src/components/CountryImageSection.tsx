import Image from "next/image";

export default function CountryImageSection({countryOutlinePath}) {
        return (
                <div className="flex justify-center items-center h-96 w-96 px-3 py-3 bg-white border-4 border-slate-500 rounded-[50px]">
                        {/* {`${countryOutlinePath}`} */}
                        <Image 
                        src={`${countryOutlinePath}`}
                        alt="country outline"
                        height={800}
                        width={200} />
                </div>
        );
        }
