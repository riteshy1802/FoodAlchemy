import PropTypes from "prop-types"

const Nova = ({novaScore}) => {

    const novaScoreColors = {
        1: { 
            bg: "bg-green-500 text-black", 
            title: "Minimally Processed (Healthy)" 
        },
        2: { 
            bg: "bg-teal-400 text-black", 
            title: "Slightly Processed" 
        },
        3: { 
            bg: "bg-yellow-300 text-black", 
            title: "Moderately Processed" 
        },
        4: { 
            bg: "bg-orange-400 text-black", 
            title: "Heavily Processed" 
        },
        5: { 
            bg: "bg-red-600 text-white", 
            title: "Ultra-Processed (Unhealthy)" 
        },
    };
    

    return (
        <div 
            className={`w-[5] h-[10] px-1.5 rounded-[3px] flex items-center flex-wrap gap-[0.3rem]  ${novaScoreColors[novaScore].bg}`}
            title={novaScoreColors[novaScore].title}
        >
            <p className={`text-[0.7rem] ${novaScoreColors[novaScore].text} font-[Inter] font-[400]`}>Nova - </p>
            <p className={`${novaScoreColors[novaScore].text} text-[0.8rem] font-[Inter] font-[700]`}>{novaScore}</p>
        </div>
    )
}

Nova.propTypes={
    novaScore : PropTypes.number,
}

export default Nova