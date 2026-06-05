# Stage 1

## Priority Rules

1. Placement notifications have highest priority.
2. Result notifications have medium priority.
3. Event notifications have lowest priority.
4. If two notifications have same type, the latest notification gets higher priority.

## Algorithm

1. Filter unread notifications.
2. Assign priority weights.
3. Sort by weight.
4. Sort by timestamp.
5. Return top 10 notifications.

## Efficient Maintenance

Use a Max Heap (Priority Queue).

Whenever a new notification arrives:

1. Calculate priority.
2. Insert into heap.
3. Keep only top 10 notifications.

Complexity:

Insertion: O(log n)

Retrieving Top 10: O(10)
