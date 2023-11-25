export const removeMessageImmediately = (id, setMostrarMensagem) => {
  clearTimeout(timeouts[id]);
  setMostrarMensagem((prevMessages) =>
    prevMessages.filter((message) => message.id !== id)
  );
};