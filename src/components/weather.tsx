import Image from "next/image"
import hot from "../assets/hot.svg"
import cold from "../assets/cold.svg"

interface IWeatherProps {
    wind: number,
    humidity: number,
    temp: number
}

export default function Weather({wind, humidity, temp}:IWeatherProps){
    function DateFormated(){
        const date = new Date()

        return date.getHours() + ":" + date.getMinutes()
    }

    return (
        <div className="flex flex-col h-3/6 w-2/6 items-center">
            <div className="flex flex-col justify-around items-center h-full w-full rounded-lg bg-gradient-linear p-4">
                <div className="flex flex-row w-full justify-end">
                    <p className="text-lg font-normal">{DateFormated()}</p>
                </div>
                <Image src={temp > 20?hot:cold} alt="temp"/>
                <p className="text-md font-light">{temp > 20?"Quente":"Frio"}</p>
                <div className="flex flex-row w-full justify-between p-6">
                    <div className="flex flex-col justify-between gap-4">
                        <div className="flex flex-row gap-3">
                            <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11 10h-11v-2h11c.552 0 1-.448 1-1s-.448-1-1-1c-.403 0-.747.242-.905.587l-1.749-.956c.499-.965 1.494-1.631 2.654-1.631 3.971 0 3.969 6 0 6zm7 7c0-1.656-1.344-3-3-3h-15v2h15c.552 0 1 .448 1 1s-.448 1-1 1c-.403 0-.747-.242-.905-.587l-1.749.956c.499.965 1.494 1.631 2.654 1.631 1.656 0 3-1.344 3-3zm1.014-7.655c.082-.753.712-1.345 1.486-1.345.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5h-20.5v2h20.5c1.932 0 3.5-1.568 3.5-3.5s-1.568-3.5-3.5-3.5c-1.624 0-2.977 1.116-3.372 2.617l1.886.728z"/></svg>
                            <p className="text-sm font-light">{wind}km/h</p>
                        </div>
                        <div className="flex flex-row gap-3">
                            <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16 6c-3.652 5.397-6 8.774-6 12.056 0 3.283 2.684 5.944 6 5.944s6-2.661 6-5.944c0-3.282-2.348-6.659-6-12.056zm-.021 3.84c.351.543.771 1.49.771 2.49 0 2.931-3 3.411-3 1.627 0-1.224 1.492-3.033 2.229-4.117zm-7.975 8.16c.021-3.273 1.818-6.373 4.648-10.61-1.047-2.069-2.64-4.417-4.652-7.39-3.652 5.397-6 8.774-6 12.056 0 3.283 2.684 5.944 6 5.944h.004zm-2.254-10.042c0-1.225 1.492-3.033 2.229-4.118.351.543.771 1.49.771 2.49 0 2.931-3 3.411-3 1.628z"/></svg>
                            <p className="text-sm font-light">{humidity}%</p>
                        </div>
                    </div>
                    <h1 className="font-bold text-6xl">
                        {temp}°
                    </h1>
                </div>
            </div>
        </div>

    )
}