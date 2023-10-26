


export default function ContactHead({ header,children,style }) {

    return (
        <div className="text-center flex items-center justify-center flex-row gap-2 p-2">
            <h1 className={`font-bold ${style} text-lg px-2 rounded-sm`}>{header}</h1>
            <blockquote>{children}</blockquote>
        </div>
    )
}