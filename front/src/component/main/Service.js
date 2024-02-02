import React from 'react'


function Service(maintext) {

    return (
        <>
            <div className={`serviceWrap col-md-6 mb-4 ${maintext.maintext.cls}`}>
                <div className='serviceImg'>
                    <img src={maintext.maintext.img} alt="사람이미지" className='w-100 rounded-4' />
                </div>

                <div className='serviceText'>
                    <h5 className='text-center mt-4'>{maintext.maintext.title}</h5>
                    <p className='text-center' style={{ height: "50px" }}>{maintext.maintext.description}</p>
                    <a href={maintext.maintext.href} className='w-100 mt-4 button d-block'>{maintext.maintext.buttontext}</a>
                </div>
            </div>
        </>
    )
}

export default Service
