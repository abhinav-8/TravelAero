# TravelAero's Reminder Service 

## Why Using Message Queue? :

- To avoid bottleneck i.e. to manage the consumption rate of Reminder Service.
- Sending reminder mails to user is important but must not be immediate,so even if Reminder Service faces downtime,asynchronous communication using Message Ques handles it.
