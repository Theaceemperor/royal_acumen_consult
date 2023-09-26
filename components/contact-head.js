


export default function ContactHead({ header,children,style }) {

    return (
        <div className="text-center flex items-center justify-center flex-col gap-1 p-2">
            <h1 className={`font-bold ${style} text-lg shadow-lg shadow-[#ebccab] border-y border-[#666666] px-2 rounded-sm`}>{header}</h1>
            <blockquote>{children}</blockquote>
        </div>
    )
}