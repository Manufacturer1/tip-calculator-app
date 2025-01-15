import React from 'react'

const Tip = ({percentage}) =>{

    return(
        <div className='bg-neutral-veryDarkCyan text-white text-xl font-bold text-center p-2 cursor-pointer rounded-md'>
            <span>
                {
                    (percentage === 'Custom') ?
                    percentage :
                    `${percentage}%`
                }
            </span>
        </div>
    );
};

export default Tip;