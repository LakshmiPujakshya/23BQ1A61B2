const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJwb29qYXB1c3VsdXJpQGdtYWlsLmNvbSIsImV4cCI6MTc4MDYzODMyNCwiaWF0IjoxNzgwNjM3NDI0LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiMmY5ZDVkMjQtZjYzZi00ZDg2LTliYmUtMmExYmUwYWRkYmUwIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoicHVzdWx1cmkgbGFrc2htaSBwdWpha3NoeWEiLCJzdWIiOiI3ZWJlMjQzYS0zNTk5LTQ4NjEtYmNlZi0xMGQ3MDI3MzA5MWQifSwiZW1haWwiOiJwb29qYXB1c3VsdXJpQGdtYWlsLmNvbSIsIm5hbWUiOiJwdXN1bHVyaSBsYWtzaG1pIHB1amFrc2h5YSIsInJvbGxObyI6IjIzYnExYTYxYjIiLCJhY2Nlc3NDb2RlIjoiUVFkRVl5IiwiY2xpZW50SUQiOiI3ZWJlMjQzYS0zNTk5LTQ4NjEtYmNlZi0xMGQ3MDI3MzA5MWQiLCJjbGllbnRTZWNyZXQiOiJIZlhQZVRzWmpmdktDcHVtIn0.eO0SgQHu2bCfIx6DTFAhpmePMAQd0pgKhh_Ifndrqoc";

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
