---
title: channel_message_bulk-delete
---
Delete multiple messages in a single request. This endpoint can only be used on guild channels and requires the MANAGE_MESSAGES permission. Returns a 204 empty response on success

Count | Name | Type | Required        
----|----|----|---- 
1 | channel_id | Snowflake | True
2 | messages_array | Array | True
