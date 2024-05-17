const API_URL = 'https://wedsign-back-production.up.railway.app';

export async function getInvitations() {
  const response = await fetch(`${API_URL}/invitations`);
  return await response.json();
}

export async function getInvitation(id) {
  const response = await fetch(`${API_URL}/invitations/${id}`);
  return await response.json();
}

export async function createInvitation(invitation) {
  const response = await fetch(`${API_URL}/invitations`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(invitation),
  });
  return await response.json();
}

export async function editInvitation(id, updatedInvitation) {
  const response = await fetch(`${API_URL}/invitations/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedInvitation),
  });
  return await response.json();
}

export async function deleteInvitation(id) {
  const response = await fetch(`${API_URL}/invitations/${id}`, {
    method: 'DELETE',
  });
  return await response.json();
}
