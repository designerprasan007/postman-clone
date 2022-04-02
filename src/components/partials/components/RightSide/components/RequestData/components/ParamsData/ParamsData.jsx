import {getParams} from '../../../../../../../../services/auth/helpers'
const ParamsData = ({calledApi}) => {
    const params = calledApi[0]?.text ? getParams(calledApi[0]?.text) : ""
    console.log(params)
    return (
    <div>{calledApi[0]?.text}</div>
  )
}

export default ParamsData