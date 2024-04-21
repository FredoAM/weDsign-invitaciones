const API_URL = 'http://localhost:3001/api';

export async function getInvitaciones() {
  const response = await fetch(`${API_URL}/invitaciones`);
  return await response.json();
}

export async function getInvitacion(id) {
  const response = await fetch(`${API_URL}/invitaciones/${id}`);
  return await response.json();
}

export async function crearInvitacion(invitacion) {
  const response = await fetch(`${API_URL}/invitaciones`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(invitacion),
  });
  return await response.json();
}

export async function editarInvitacion(id, invitacionActualizada) {
  const response = await fetch(`${API_URL}/invitaciones/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(invitacionActualizada),
  });
  return await response.json();
}

export async function eliminarInvitacion(id) {
  const response = await fetch(`${API_URL}/invitaciones/${id}`, {
    method: 'DELETE',
  });
  return await response.json();
}



