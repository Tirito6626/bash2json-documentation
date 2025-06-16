---
title: channel_message_delete
---
# channel_message_delete 
Delete a message. If operating on a guild channel and trying to delete a message that was not sent by the current user, this endpoint requires the MANAGE_MESSAGES permission

Count | Name | Type | Required        
----|----|----|---- 
1 | channel_id | Snowflake | True 
2 | message_id | Snowflake | True
