<div className="relative group overflow-hidden border-2 border-white/50 rounded-xl">
    {/* overlay  */}

    <div key={index} className="group-hover:bg-black/50 w-full h-full absolute z-40 transition-all duration-300"></div>
    {/* image  */}
    <img src={Image} alt="" className='group-hover:scale-125 tansition-all duration-500' />
    {/* pretitle  */}
    <div className='absolute bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 '>
        <span className='text-gradient'>{Pretitle}</span>
    </div>
    {/* title  */}
    <div className='absolute -bottom-full left-12 text-white group-hover:bottom-14 transition-all duration-700 z-50 '>
        <span className='text-3xl'>{Title}</span>
    </div>
</div>