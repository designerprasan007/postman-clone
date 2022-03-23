
const ApiView = ({text, apicalls, id, ...props}) => {
  return (
    <div>
      {text}
        {apicalls?.map((datumn, index) => (
        <ApiView
          {...datumn}
          key={`collapse-child-${index}`}
        />
      ))}
    </div>
  )
}

export default ApiView