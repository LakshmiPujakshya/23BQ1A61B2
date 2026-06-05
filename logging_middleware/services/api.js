const TOKEN = "YOUR_LATEST_ACCESS_TOKEN";

export async function getNotifications() {
  const response = await fetch(
    "http://4.224.186.213/evaluation-service/notifications",
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    }
  );

  const data = await response.json();
  return data.notifications;
}
