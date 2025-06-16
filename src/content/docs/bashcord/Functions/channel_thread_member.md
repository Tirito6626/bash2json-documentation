---
title: channel_thread_member
---
Returns a thread member object for the specified user if they are a member of the thread, returns a 404 response otherwise.

When with_member is set to true, the thread member object will include a member field containing a guild member object

Count | Name | Type | Required        
----|----|----|---- 
1 | channel_id | Snowflake | True
2 | user_id | Snowflake | True 
3 | with_member | Boolean | True
