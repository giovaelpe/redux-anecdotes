import {  useSelector } from "react-redux"


const Notification = () => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  const text = useSelector(state => state.notification);
 if(text){
  return (
    <div style={style}>
      {text}
    </div>
  )
 } 
return <></>
}

export default Notification