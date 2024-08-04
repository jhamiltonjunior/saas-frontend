export function notificationMessage(setMostrarMensagem, setTimeouts, newMessage) {
  setMostrarMensagem((prevMessages) => [
    ...prevMessages,
    newMessage
  ])

  const timeoutId = setTimeout(() => {
    setMostrarMensagem((prevMessages) =>
      prevMessages.filter((msg) => msg.id !== newMessage.id)
    )
  }, 5000);

  setTimeouts((prevTimeouts) => ({
    ...prevTimeouts,
    [newMessage.id]: timeoutId,
  }));

  // const removeMessageImmediately = (id) => {
  //   clearTimeout(timeouts[id]);
  //   setMostrarMensagem((prevMessages) =>
  //     prevMessages.filter((message) => message.id !== id)
  //   );
  // };
}