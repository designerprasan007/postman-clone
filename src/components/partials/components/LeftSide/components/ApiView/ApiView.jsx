
const ApiView = ({text, apicalls, id, ...props}) => {
  console.log(id)
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