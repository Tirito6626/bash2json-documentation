---
title: channel_delete 
---
# channel_delete 
Delete a channel, or close a private message. Requires the MANAGE_CHANNELS permission for the guild, or MANAGE_THREADS if the channel is a thread. Deleting a category does not delete its child channels; they will have their parent_id removed and a Channel Update Gateway event will fire for each of them. Returns a channel object on success. 

 Count | Name | Type | Required        
 ----|----|----|----
 1 | channel_id | Snowflake | True