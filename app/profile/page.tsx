'use client'
const profile = () => {
    return (
        <div className="flex items-center h-full justify-center">
            <div className="flex flex-col">
                <h1 className="text-3xl md:text-6xl text-white text-cente">Who is watching?</h1>
                <div className="flex items-center justify-center gap-8 mt-10">
                    <div onClick={()=>{}}>
<div className="group flex-row w-33 mx-auto">
    <div className="w-44 h-44 rounded-md flex items-center justify-center border-2 border-transparent group-hover:cursor-pointer group-hover:border-white overflow-hidden">
        <img src="/images/default-blue.png" alt="" />
    </div>
</div>
                    </div>
                </div>
            </div>
        
        </div>
    )
}

export default profile;