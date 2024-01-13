import React from "react";

interface Inputprops{
    id:string;
    onChange:any;
    value: string;
    label:string;
    type?:string;
}
const InputComponent: React.FC<Inputprops> = ({
    id, onChange, value, label, type
}) => {
    return (
        <div className="relative">

            <input id={id} type={type} onChange={onChange} className="
        block
        rounded-md
        text-md
        text-white
        px-6
        pt-6
        w-full
        bg-neutral-700
        appreance-none
        focus:outline-none
        focus:ring-0
        peer
        "
        value={value}
                placeholder=" " />
            <label htmlFor={id} className="
                absolute
                text-md
                text-zinc-400
                duration-200
                transform
                -translate-y-3
                scale-75
                top-4
                z-10
                origin-[0]
                left-6
                peer-placeholder-shown:scale-100
                peer-placeholder-shown:translate-y-0
                peer-focus:scale-75
                peer-focus: -translate-y-3
                ">Email</label>
        </div>
    )
}

export default InputComponent;