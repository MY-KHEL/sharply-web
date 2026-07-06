export function FeatureSection(){
    const features =[
       {
        data:'12 min',
        feature:'Average Delivery Time'
       },
       {
        data:'2',
        feature:'Campuses Live Now'
       },
       {
        data:'500+',
        feature:'Verified Student Runners'
       },
       {
        data:'10K+',
        feature:'Deliveries Completed'
       },
    ]
    return(
        <section className="w-full bg-[#48B7DD] gap-6 flex max-lg:grid grid-cols-2 justify-between px-8 lg:px-30 py-6 ">
            {features.map((feature,index)=>(
                <div key={feature.feature} className={`flex flex-col lg:items-center gap-2  text-white ${ index !== features.length -1 ? 'lg:pr-15 lg:border-r border-white':'pr-0'}`}>
                    <p className="font-bold text-[23px] leading-[140%]">{feature.data}</p>
                    <p className=" leading-[140%]">{feature.feature}</p>
                </div>
            ))}
        </section>
    )
}