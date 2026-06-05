const notifications = [
  {
    id: 1,
    type: "Placement",
    message: "Amazon Interview",
    timestamp: "2026-06-05T08:00:00",
    read: false
  },
  {
    id: 2,
    type: "Result",
    message: "ML Exam Result",
    timestamp: "2026-06-05T09:00:00",
    read: false
  },
  {
    id: 3,
    type: "Event",
    message: "Hackathon",
    timestamp: "2026-06-04T10:00:00",
    read: false
  }
];

const priority = {
  Placement: 3,
  Result: 2,
  Event: 1
};

const topNotifications = notifications
  .filter(n => !n.read)
  .sort((a, b) => {
    if (priority[b.type] !== priority[a.type]) {
      return priority[b.type] - priority[a.type];
    }

    return new Date(b.timestamp) - new Date(a.timestamp);
  })
  .slice(0, 10);

console.log("Top Priority Notifications");

topNotifications.forEach(n => {
  console.log(`${n.type} - ${n.message}`);
});




