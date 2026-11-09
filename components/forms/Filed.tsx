'use client'

type FiledPropsType = {
    label: string;
    name: string;
    style: string;
    type?: string;
    error?: string;
}

function Filed({ error, label, name, style, type = "text", ...inputProps }: FiledPropsType) {

    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input {...inputProps} className={style} type={type} name={name} />
            {error && <p className='text-red-500'>{error}</p>}
        </div>
    )
}

export default Filed