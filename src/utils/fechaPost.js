export const fechaPost = (date) => {
  const event = new Date(date);
  const options = { month: 'long', day: 'numeric', timeZone: 'UTC' };

  // Formatea la fecha en español y ajusta a la zona horaria local
  const formattedDate = event.toLocaleDateString('es-ES', options);

  return formattedDate;
};