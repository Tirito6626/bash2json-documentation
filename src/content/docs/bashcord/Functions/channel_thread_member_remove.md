---
title: channel_thread_member_remove
---
# channel_thread_member_remove
Removes another member from a thread. Requires the MANAGE_THREADS permission, or the creator of the thread if it is a PRIVATE_THREAD. Also requires the thread is not archived. Returns a 204 empty response on success

Count | Name | Type | Required        
----|----|----|---- 
1 | channel_id | Snowflake | True
2 | user_id | Snowflake | True
