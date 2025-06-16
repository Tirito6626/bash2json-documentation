---
title: guild_emoji_delete
---
# guild_emoji_delete 
Delete the given emoji. For emojis created by the current user, requires either the CREATE_GUILD_EXPRESSIONS or MANAGE_GUILD_EXPRESSIONS permission. For other emojis, requires the MANAGE_GUILD_EXPRESSIONS permission. Returns 204 No Content on success

Count | Name | Type | Required        
----|----|----|---- 
1 | guild_id | Snowflake | True
2 | emoji_id | Snowflake | True
