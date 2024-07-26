export const fechaPost = (date) => {
  const event = new Date(date);

  const localDate = new Date(event.getTime() - event.getTimezoneOffset() * 60000);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };

  // Formatea la fecha en español
  const formattedDate = new Intl.DateTimeFormat('es-ES', options).format(localDate).slice(0, -8);

  return formattedDate;
};