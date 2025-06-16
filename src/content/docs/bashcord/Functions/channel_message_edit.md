---
title: channel_message_edit
---
# channel_message_edit
Edit a previously sent message. The fields content, embeds, and flags can be edited by the original message author. Other users can only edit flags and only if they have the MANAGE_MESSAGES permission in the corresponding channel. When specifying flags, ensure to include all previously set flags/bits in addition to ones that you are modifying. Only flags documented in the table below may be modified by users (unsupported flag changes are currently ignored without error).

When the content field is edited, the mentions array in the message object will be reconstructed from scratch based on the new content. The allowed_mentions field of the edit request controls how this happens. If there is no explicit allowed_mentions in the edit request, the content will be parsed with default allowances, that is, without regard to whether or not an allowed_mentions was present in the request that originally created the message. 

Count | Name | Type | Required        
----|----|----|---- 
1 | channel_id | Snowflake | True
2 | json | JSON-Object | True
3 | message_id | Snowflake | True

https://discord.com/developers/docs/resources/channel#edit-message