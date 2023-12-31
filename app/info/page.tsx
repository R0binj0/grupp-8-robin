import Posts from "./components/Posts";

const Info = () => {
    return ( 
        <div className="flex flex-col align-center justify-center text-center">
            <div className='pt-6 mx-auto'>
                <div className="flex flex-col align-center justify-center">
                    <img className="fixed-size-image rounded-2xl" src="/img/infoImage.png" alt="info image" />
                </div>
            </div>
            <h2 className="text-6xl text-black mt-16 mb-[10x]">Beebide ja väikelaste esmaabi</h2>
            <p className="text-2xl text-black mt-[10px] mb-[10x]">Õppige oskusi beebi või lapse abistamiseks hädaolukorras</p>
            <div>
                <Posts></Posts>
            </div>
        </div>
     );
}
 
export default Info;