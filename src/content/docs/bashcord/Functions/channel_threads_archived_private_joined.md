---
title: channel_threads_archived_private_joined
---
Returns archived threads in the channel that are of type PRIVATE_THREAD, and the user has joined. Threads are ordered by their id, in descending order. Requires the READ_MESSAGE_HISTORY permission

Count | Name | Type | Required        
----|----|----|---- 
1 | channel_id | Snowflake | True
2 | before | Snowflake | False
3 | limit | Integer | False
