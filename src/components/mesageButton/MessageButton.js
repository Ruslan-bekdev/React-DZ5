const MessageButton = ({message}) => {
  const showMessage = () => alert(message);
  return(
    <button onClick={showMessage}>Click me to show message!</button>
  )
}

export default MessageButton;