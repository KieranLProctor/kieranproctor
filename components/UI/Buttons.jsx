const Primary = ({text, route}) => {
    return <button route={route} acton="submit" className="p-2 bg-green-400">{text}</button>
}

const Secondary = ({text, route}) => {
    return <button route={route} acton="submit" className="p-2 bg-red-400">{text}</button>
}

export {Primary, Secondary};