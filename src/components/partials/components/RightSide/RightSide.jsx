import TopHeader from "./components/Header/components/TopHeader"

const RightSide = ({currentApi, handleRemoveTab}) => {
  return (
    <TopHeader currentApi={currentApi} handleRemoveTab={handleRemoveTab} />
  )
}

export default RightSide